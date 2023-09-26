import React, {useCallback, useEffect, useMemo, useRef, useState} from 'react';
import {
  Dimensions,
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
  Canvas,
  ColorMatrix,
  Image as SkiaImage,
  Path,
  Skia,
  SkPath,
  TouchInfo,
  useImage,
  useTouchHandler,
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

  const [paths, setPaths] = useState<SkPath[]>([]);

  const onDrawingStart = useCallback((touchInfo: TouchInfo) => {
    setPaths(old => {
      const {x, y} = touchInfo;
      const newPath = Skia.Path.Make();
      newPath.moveTo(x, y);
      return [...old, newPath];
    });
  }, []);

  const onDrawingActive = useCallback((touchInfo: TouchInfo) => {
    setPaths(currentPaths => {
      const {x, y} = touchInfo;
      const currentPath = currentPaths[currentPaths.length - 1];
      const lastPoint = currentPath.getLastPt();
      const xMid = (lastPoint.x + x) / 2;
      const yMid = (lastPoint.y + y) / 2;

      currentPath.quadTo(lastPoint.x, lastPoint.y, xMid, yMid);
      return [...currentPaths.slice(0, currentPaths.length - 1), currentPath];
    });
  }, []);

  const touchHandler = useTouchHandler(
    {
      onActive: onDrawingActive,
      onStart: onDrawingStart,
    },
    [onDrawingActive, onDrawingStart],
  );

  return (
    <>
      <View style={styles.container}>
        <View style={styles.imageContainer} ref={viewRef}>
          <View style={styles.drawIcon}>
            <DrawIcon />
          </View>
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
            {paths.map((path, index) => (
              <Path
                key={index}
                path={path}
                color={'white'}
                style={'stroke'}
                strokeWidth={5}
              />
            ))}
          </Canvas>
        </View>
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
        {/* <EditFilterSection
          brightnessValue={brightnessValue}
          setBrightnessValue={setBrightnessValue}
        /> */}
      </View>
    </>
  );
};

export default EditScreen;
