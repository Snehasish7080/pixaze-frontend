import React, {useCallback, useEffect, useMemo, useRef, useState} from 'react';
import {
  Dimensions,
  FlatList,
  Image,
  PixelRatio,
  TouchableOpacity,
  useWindowDimensions,
  View,
} from 'react-native';
import AppText from '../../atoms/AppText/AppText';
import AppHeader from '../../molecules/AppHeader/AppHeader';
import {AuthenticatedNavProps} from '../../navigations/AuthenticatedNavigation/AuthenticatedNavigationTypes';
import {styles} from './EditScreenStyles';

import FastImage from 'react-native-fast-image';
import {captureRef} from 'react-native-view-shot';

import {
  BlendMode,
  Canvas,
  ColorMatrix,
  CornerPathEffect,
  DashPathEffect,
  DiscretePathEffect,
  enumKey,
  Fill,
  Group,
  Image as SkiaImage,
  Mask,
  PaintStyle,
  Path,
  Rect,
  Skia,
  SkPath,
  StrokeCap,
  StrokeJoin,
  TouchInfo,
  useImage,
  useTouchHandler,
  useValue,
} from '@shopify/react-native-skia';
import EditFilterSection from './EditFilterSection';
import {
  Aden,
  Amaro,
  Brannan,
  Brooklyn,
  Clarendon,
  Earlybird,
  Gingham,
  Hudson,
  Inkwell,
  Kelvin,
  Lark,
  Lofi,
  Maven,
  Mayfair,
  Moon,
  Nashville,
  Normal,
  Perpetua,
  Reyes,
  Rise,
  Slumber,
  Stinson,
  Toaster,
  Valencia,
  Walden,
  Willow,
  Xpro2,
  _1977,
} from './Filter';
import FilterSection from './FilterSection';
import {brightness, concatColorMatrices} from 'react-native-image-filter-kit';
import {verticalScale} from '../../utils/scale';
import DrawIcon from '../../atoms/DrawIcon/DrawIcon';
import Animated, {
  SlideInDown,
  SlideOutDown,
  useAnimatedStyle,
  useSharedValue,
  withTiming,
} from 'react-native-reanimated';
import {colorPalets} from '../../utils/ColorPalets';

const FILTERS = [
  ...[
    {
      title: 'Normal',
      filterComponent: Normal,
    },
  ],
  ...[
    {
      title: 'Amaro',
      filterComponent: Amaro,
    },
    {
      title: 'Maven',
      filterComponent: Maven,
    },
    {
      title: 'Mayfair',
      filterComponent: Mayfair,
    },
    {
      title: 'Moon',
      filterComponent: Moon,
    },
    {
      title: 'Nashville',
      filterComponent: Nashville,
    },
    {
      title: 'Perpetua',
      filterComponent: Perpetua,
    },
    {
      title: 'Reyes',
      filterComponent: Reyes,
    },
    {
      title: 'Rise',
      filterComponent: Rise,
    },
    {
      title: 'Slumber',
      filterComponent: Slumber,
    },
    {
      title: 'Stinson',
      filterComponent: Stinson,
    },
    {
      title: 'Brooklyn',
      filterComponent: Brooklyn,
    },
    {
      title: 'Earlybird',
      filterComponent: Earlybird,
    },
    {
      title: 'Clarendon',
      filterComponent: Clarendon,
    },
    {
      title: 'Gingham',
      filterComponent: Gingham,
    },
    {
      title: 'Hudson',
      filterComponent: Hudson,
    },
    {
      title: 'Inkwell',
      filterComponent: Inkwell,
    },
    {
      title: 'Kelvin',
      filterComponent: Kelvin,
    },
    {
      title: 'Lark',
      filterComponent: Lark,
    },
    {
      title: 'Lofi',
      filterComponent: Lofi,
    },
    {
      title: 'Toaster',
      filterComponent: Toaster,
    },
    {
      title: 'Valencia',
      filterComponent: Valencia,
    },
    {
      title: 'Walden',
      filterComponent: Walden,
    },
    {
      title: 'Willow',
      filterComponent: Willow,
    },
    {
      title: 'Xpro2',
      filterComponent: Xpro2,
    },
    {
      title: 'Aden',
      filterComponent: Aden,
    },
    {
      title: '_1977',
      filterComponent: _1977,
    },
    {
      title: 'Brannan',
      filterComponent: Brannan,
    },
  ].sort(function (a, b) {
    if (a.title < b.title) {
      return -1;
    }
    if (a.title > b.title) {
      return 1;
    }
    return 0;
  }),
];

const IMAGE_HEIGHT = verticalScale(604.5);

type path = {
  path: SkPath;
  color: string;
};
const EditScreen: React.FC<AuthenticatedNavProps<'EditScreen'>> = ({
  navigation,
  route,
}) => {
  const {width} = useWindowDimensions();
  const {image, scale, translateX, translateY} = route?.params;
  const [selectedFilter, setSelectedFilter] = useState<number>(0);
  const [imageWidth, setImageWidth] = useState<number>(0);
  const [imageHeight, setImageHeight] = useState<number>(0);
  const [brightnessValue, setBrightnessValue] = useState(1);

  const SelectedFilterComponent = useMemo(
    () => FILTERS[selectedFilter].filterComponent,
    [selectedFilter],
  );

  const viewRef = useRef<View>(null);

  const takeSnapshot = useCallback(async () => {
    if (viewRef) {
      captureRef(viewRef, {
        format: 'png',
        quality: 1,
      }).then(
        uri => {
          console.log(uri);
        },
        error => console.error('Oops, snapshot failed', error),
      );
    }
  }, []);

  useEffect(() => {
    if (image) {
      Image.getSize(image, (width, height) => {
        setImageWidth(width);
        setImageHeight(height);
      });
    }
  }, [image]);

  const skiaImage = useImage(image);

  const OVERLAY_WIDTH = (imageWidth * IMAGE_HEIGHT) / imageHeight;

  const currentPath = useValue<SkPath>(Skia.Path.Make());
  const currentEraserPath = useValue<SkPath>(Skia.Path.Make());

  const [paths, setPaths] = useState<path[]>([]);
  const [eraserPaths, setEraserPaths] = useState<SkPath[]>([]);
  const [isEraser, setIsEraser] = useState<boolean>(false);
  const [drawingMode, setDrawingMode] = useState<boolean>(false);
  const [selectedColor, setSelectedColor] = useState<string>('#FFFFFF');

  const touchHandler = useTouchHandler(
    {
      onStart: ({x, y}) => {
        if (isEraser) {
          currentEraserPath.current = Skia.Path.Make();
          currentEraserPath.current.moveTo(x, y);
        } else {
          currentPath.current = Skia.Path.Make();
          currentPath.current.moveTo(x, y);
        }
      },
      onActive: ({x, y}) => {
        if (isEraser) {
          currentEraserPath.current?.lineTo(x, y);
        } else {
          currentPath.current?.lineTo(x, y);
        }
      },
      onEnd: () => {
        if (isEraser) {
          if (!currentEraserPath.current) {
            return;
          }
          setEraserPaths(values => values.concat(currentEraserPath.current!));
          currentEraserPath.current = Skia.Path.Make();
        } else {
          if (!currentPath.current) {
            return;
          }
          setPaths(values =>
            values.concat({
              path: currentPath.current!,
              color: selectedColor,
            }),
          );
          currentPath.current = Skia.Path.Make();
        }
      },
    },
    [isEraser, selectedColor],
  );

  const bottom = useSharedValue(0);
  const selectedAnimation = useAnimatedStyle(() => {
    return {
      bottom: withTiming(bottom.value),
    };
  }, [bottom]);

  console.log(isEraser);
  return (
    <>
      <View style={styles.container}>
        <View style={styles.imageContainer} ref={viewRef}>
          <TouchableOpacity
            style={styles.drawIcon}
            onPress={() => {
              setDrawingMode(!drawingMode);
            }}>
            <DrawIcon />
          </TouchableOpacity>
          <Canvas
            style={{flex: 1, width, height: IMAGE_HEIGHT}}
            onTouch={touchHandler}>
            <SkiaImage
              image={skiaImage}
              fit={
                imageWidth > imageHeight
                  ? FastImage.resizeMode.cover
                  : FastImage.resizeMode.contain
              }
              x={0}
              y={0}
              width={width}
              height={IMAGE_HEIGHT}
              transform={[{scale}, {translateX}, {translateY}]}
            />
            <SelectedFilterComponent
              IMAGE_HEIGHT={IMAGE_HEIGHT}
              OVERLAY_WIDTH={OVERLAY_WIDTH}
              width={width}
            />
            <ColorMatrix
              matrix={concatColorMatrices([brightness(brightnessValue)])}
            />

            <Mask
              mode="luminance"
              mask={
                <Group>
                  {/* don't change color--> only for mask*/}
                  {paths.map((item, index) => (
                    <Path
                      key={index}
                      path={item.path}
                      color={'white'}
                      style={'stroke'}
                      strokeWidth={5}
                      strokeCap={'round'}
                      strokeJoin={'round'}></Path>
                  ))}
                  <Path
                    path={currentPath}
                    color={'white'}
                    style={'stroke'}
                    strokeWidth={5}
                    strokeCap={'round'}
                    strokeJoin={'round'}></Path>

                  {eraserPaths.map((path, index) => (
                    <Path
                      key={index}
                      path={path}
                      color={'black'}
                      style={'stroke'}
                      strokeWidth={20}
                      strokeCap={'round'}
                      strokeJoin={'round'}></Path>
                  ))}
                  <Path
                    path={currentEraserPath}
                    color={'black'}
                    style={'stroke'}
                    strokeWidth={20}
                    strokeCap={'round'}
                    strokeJoin={'round'}></Path>
                </Group>
              }>
              <Group>
                <Fill color={'white'} />
                {paths.map((item, index) => (
                  <Path
                    key={index}
                    path={item.path}
                    color={item.color}
                    style={'stroke'}
                    strokeWidth={5}
                    strokeCap={'round'}
                    strokeJoin={'round'}></Path>
                ))}
                <Path
                  path={currentPath}
                  color={selectedColor}
                  style={'stroke'}
                  strokeWidth={5}
                  strokeCap={'round'}
                  strokeJoin={'round'}></Path>
              </Group>
            </Mask>
          </Canvas>
        </View>
        {!drawingMode && (
          <FilterSection
            image={image}
            FILTERS={FILTERS}
            setSelectedFilter={setSelectedFilter}
            selectedFilter={selectedFilter}
            scale={scale}
            translateX={translateX}
            translateY={translateY}
            imageHeight={imageHeight}
            imageWidth={imageWidth}
          />
        )}
        {drawingMode && (
          <Animated.View
            entering={SlideInDown.duration(700)}
            exiting={SlideOutDown.duration(700)}
            style={styles.colorPaletteContainer}>
            <FlatList
              contentContainerStyle={{
                paddingVertical: 10,
                paddingHorizontal: 16,
              }}
              horizontal
              showsHorizontalScrollIndicator={false}
              data={colorPalets}
              keyExtractor={item => item}
              bounces={false}
              renderItem={({item, index}) => {
                return (
                  <TouchableOpacity
                    onPress={() => setSelectedColor(item)}
                    style={[
                      styles.colorPalette,
                      {
                        backgroundColor: item,
                        borderWidth: selectedColor === item ? 2.5 : 1.5,
                      },
                    ]}
                  />
                );
              }}
              scrollEventThrottle={16}
              decelerationRate="fast"
              snapToOffsets={Array(colorPalets.length)
                .fill(undefined)
                .map((x, index) => index * (20 + 15))}
              getItemLayout={(data, index) => ({
                length: 20 + 15,
                offset: (20 + 15) * index,
                index,
              })}
              ItemSeparatorComponent={() => <View style={{width: 15}} />}
            />
            <TouchableOpacity
              // activeOpacity={1}
              onPress={() => {
                setIsEraser(!isEraser);
                if (isEraser) {
                  bottom.value = 0;
                } else {
                  bottom.value = 10;
                }
              }}>
              <Animated.View></Animated.View>
              <Image
                source={require('../../assets/images/eraser.png')}
                style={[styles.eraser]}
              />
            </TouchableOpacity>
          </Animated.View>
        )}
        {/* <EditFilterSection
          brightnessValue={brightnessValue}
          setBrightnessValue={setBrightnessValue}
        /> */}
      </View>
    </>
  );
};

export default EditScreen;
