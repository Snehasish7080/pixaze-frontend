import React, {useCallback, useEffect, useMemo, useRef, useState} from 'react';
import {
  FlatList,
  Image,
  PixelRatio,
  ScrollView,
  TouchableOpacity,
  useWindowDimensions,
  View,
} from 'react-native';
import AppText from '../../atoms/AppText/AppText';
import AppHeader from '../../molecules/AppHeader/AppHeader';
import {AuthenticatedNavProps} from '../../navigations/AuthenticatedNavigation/AuthenticatedNavigationTypes';
import {styles} from './EditScreenStyles';

import {
  AdenCompat,
  BrannanCompat,
  brightness,
  BrooklynCompat,
  ClarendonCompat,
  concatColorMatrices,
  contrast,
  EarlybirdCompat,
  GinghamCompat,
  HudsonCompat,
  InkwellCompat,
  KelvinCompat,
  LarkCompat,
  LinearGradient,
  LofiCompat,
  MavenCompat,
  MayfairCompat,
  MoonCompat,
  NashvilleCompat,
  Normal,
  PerpetuaCompat,
  ReyesCompat,
  RiseCompat,
  saturate,
  sepia,
  SlumberCompat,
  StinsonCompat,
  temperature,
  tint,
  ToasterCompat,
  ValenciaCompat,
  WaldenCompat,
  WillowCompat,
  Xpro2Compat,
  _1977Compat,
} from 'react-native-image-filter-kit';
import Animated from 'react-native-reanimated';
import {captureRef} from 'react-native-view-shot';
import FastImage from 'react-native-fast-image';

import BrightnessIcon from '../../atoms/BrightnessIcon/BrightnessIcon';
import ContrastIcon from '../../atoms/ContrastIcon/ContrastIcon';
import SaturateIcon from '../../atoms/SaturateIcon/SaturateIcon';
import TemperatureIcon from '../../atoms/TemperatureIcon/TemperatureIcon';
import TintIcon from '../../atoms/TintIcon/TintIcon';
import FilterSection from './FilterSection';
import EditFilterSection from './EditFilterSection';
import {
  Canvas,
  useImage,
  Image as SkiaImage,
  ColorMatrix,
  BlendColor,
  Lerp,
  vec,
  Blend,
  RadialGradient,
  ImageShader,
  Rect,
} from '@shopify/react-native-skia';

const FILTERS = [
  {
    title: 'Normal',
    filterComponent: Normal,
  },
  {
    title: 'Maven',
    filterComponent: MavenCompat,
  },
  {
    title: 'Mayfair',
    filterComponent: MayfairCompat,
  },
  {
    title: 'Moon',
    filterComponent: MoonCompat,
  },
  {
    title: 'Nashville',
    filterComponent: NashvilleCompat,
  },
  {
    title: 'Perpetua',
    filterComponent: PerpetuaCompat,
  },
  {
    title: 'Reyes',
    filterComponent: ReyesCompat,
  },
  {
    title: 'Rise',
    filterComponent: RiseCompat,
  },
  {
    title: 'Slumber',
    filterComponent: SlumberCompat,
  },
  {
    title: 'Stinson',
    filterComponent: StinsonCompat,
  },
  {
    title: 'Brooklyn',
    filterComponent: BrooklynCompat,
  },
  {
    title: 'Earlybird',
    filterComponent: EarlybirdCompat,
  },
  {
    title: 'Clarendon',
    filterComponent: ClarendonCompat,
  },
  {
    title: 'Gingham',
    filterComponent: GinghamCompat,
  },
  {
    title: 'Hudson',
    filterComponent: HudsonCompat,
  },
  {
    title: 'Inkwell',
    filterComponent: InkwellCompat,
  },
  {
    title: 'Kelvin',
    filterComponent: KelvinCompat,
  },
  {
    title: 'Lark',
    filterComponent: LarkCompat,
  },
  {
    title: 'Lofi',
    filterComponent: LofiCompat,
  },
  {
    title: 'Toaster',
    filterComponent: ToasterCompat,
  },
  {
    title: 'Valencia',
    filterComponent: ValenciaCompat,
  },
  {
    title: 'Walden',
    filterComponent: WaldenCompat,
  },
  {
    title: 'Willow',
    filterComponent: WillowCompat,
  },
  {
    title: 'Xpro2',
    filterComponent: Xpro2Compat,
  },
  {
    title: 'Aden',
    filterComponent: AdenCompat,
  },
  {
    title: '_1977',
    filterComponent: _1977Compat,
  },
  {
    title: 'Brannan',
    filterComponent: BrannanCompat,
  },
];

const IMAGE_HEIGHT = 350;

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
    [selectedFilter, brightnessValue],
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
  return (
    <>
      <AppHeader
        mainTitle="ADJUST"
        onBack={() => {
          navigation.goBack();
        }}
        rightSection={
          <TouchableOpacity>
            <AppText
              lineHeight={14}
              style={[
                styles.next,
                {
                  fontSize: 14 / PixelRatio.getFontScale(),
                },
              ]}>
              Next
            </AppText>
          </TouchableOpacity>
        }
      />
      <View style={styles.container}>
        <View style={styles.imageContainer} ref={viewRef}>
          <Canvas style={{flex: 1}}>
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
              transform={[{scale}, {translateX}, {translateY}]}></SkiaImage>
            {/* <Rect width={width} height={IMAGE_HEIGHT} x={0} y={0}>
              <ImageShader
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
            </Rect> */}
            <ColorMatrix
              matrix={concatColorMatrices([brightness(brightnessValue)])}
            />
            <BlendColor color={'rgba(243, 106, 188, 0.3)'} mode="screen" />
          </Canvas>

          {/* <ColorMatrix
            image={
              <SelectedFilterComponent
                image={
                  <Image
                    source={{uri: image}}
                    resizeMode={
                      imageWidth > imageHeight
                        ? FastImage.resizeMode.cover
                        : FastImage.resizeMode.contain
                    }
                    style={[
                      styles.mainImage,
                      {
                        transform: [{scale}, {translateX}, {translateY}],
                      },
                    ]}
                  />
                }
              />
            }
            matrix={concatColorMatrices([
              saturate(1),
              brightness(brightnessValue),
              contrast(1),
              sepia(0),
              temperature(0),
              tint(0),
            ])}
          /> */}
        </View>
        <FilterSection
          image={image}
          FILTERS={FILTERS}
          setSelectedFilter={setSelectedFilter}
          scale={scale}
          translateX={translateX}
          translateY={translateY}
        />
        <EditFilterSection
          brightnessValue={brightnessValue}
          setBrightnessValue={setBrightnessValue}
        />
      </View>
    </>
  );
};

export default EditScreen;
