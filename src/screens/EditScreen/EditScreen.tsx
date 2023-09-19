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
  BrooklynCompat,
  ClarendonCompat,
  EarlybirdCompat,
  GinghamCompat,
  HudsonCompat,
  InkwellCompat,
  KelvinCompat,
  LarkCompat,
  LofiCompat,
  MavenCompat,
  MayfairCompat,
  MoonCompat,
  NashvilleCompat,
  Normal,
  PerpetuaCompat,
  ReyesCompat,
  RiseCompat,
  SlumberCompat,
  StinsonCompat,
  ToasterCompat,
  ValenciaCompat,
  WaldenCompat,
  WillowCompat,
  Xpro2Compat,
  _1977Compat,
} from 'react-native-image-filter-kit';
import Animated from 'react-native-reanimated';
import {captureRef} from 'react-native-view-shot';
import BrightnessIcon from '../../atoms/BrightnessIcon/BrightnessIcon';
import ContrastIcon from '../../atoms/ContrastIcon/ContrastIcon';
import SaturateIcon from '../../atoms/SaturateIcon/SaturateIcon';
import TemperatureIcon from '../../atoms/TemperatureIcon/TemperatureIcon';
import TintIcon from '../../atoms/TintIcon/TintIcon';
import FilterSection from './FilterSection';

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

const EditFilters = [
  {
    id: 'Brightness',
    component: () => <BrightnessIcon />,
  },
  {
    id: 'Saturation',
    component: () => <SaturateIcon />,
  },
  {
    id: 'Contrast',
    component: () => <ContrastIcon />,
  },
  {
    id: 'Warmth',
    component: () => <TemperatureIcon />,
  },
  {
    id: 'Tint',
    component: () => <TintIcon />,
  },
];

const IMAGE_HEIGHT = 350;
const FILTER_WIDTH = 40;
const MAX_FILTER_WIDTH = 160;
const INDICATOR_WIDTH = 80;

const EditScreen: React.FC<AuthenticatedNavProps<'EditScreen'>> = ({
  navigation,
  route,
}) => {
  const {width} = useWindowDimensions();
  const {image, scale, translateX, translateY} = route?.params;
  const [selectedFilter, setSelectedFilter] = useState<number>(0);
  const [imageWidth, setImageWidth] = useState<number>(0);
  const [imageHeight, setImageHeight] = useState<number>(0);
  const [filterIndex, setFilterIndex] = useState(0);

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

  const handleScroll = (offset: number) => {
    const value = offset.toFixed(1);
  };

  const ref = useRef<ScrollView>(null);

  const handleFilterChange = (index: number) => {
    if (ref && ref.current) {
      ref.current.scrollTo({
        animated: true,
        x: index * 40,
      });
    }
  };

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
          <SelectedFilterComponent
            image={
              <Image
                source={{uri: image}}
                style={[
                  styles.mainImage,
                  {
                    transform: [{scale}, {translateX}, {translateY}],
                    resizeMode: imageWidth > imageHeight ? 'cover' : 'contain',
                  },
                ]}
              />
            }
          />
        </View>
        <FilterSection
          image={image}
          FILTERS={FILTERS}
          setSelectedFilter={setSelectedFilter}
          scale={scale}
          translateX={translateX}
          translateY={translateY}
        />
        <View style={styles.editFilterContainer}>
          <Animated.View
            style={[
              styles.indicator,
              {
                left: width / 2 - INDICATOR_WIDTH / 2,
              },
            ]}>
            <AppText
              lineHeight={12}
              style={[
                styles.indicatorText,
                {
                  fontSize: 12 / PixelRatio.getFontScale(),
                },
              ]}>
              {EditFilters[filterIndex].id}
            </AppText>
          </Animated.View>
          <ScrollView
            horizontal
            contentContainerStyle={{
              paddingLeft: width / 2 - 13,
              paddingRight: width / 2 - 26,
              paddingTop: 20,
            }}
            snapToOffsets={[0, 40, 80, 120, 160]}
            scrollEventThrottle={16}
            decelerationRate="normal"
            onScroll={e => {
              if (e.nativeEvent.contentOffset.x > MAX_FILTER_WIDTH) {
                setFilterIndex(MAX_FILTER_WIDTH / FILTER_WIDTH);
              } else if (e.nativeEvent.contentOffset.x > 0) {
                if (
                  Math.round(e.nativeEvent.contentOffset.x) % FILTER_WIDTH ===
                  0
                ) {
                  setFilterIndex(
                    Math.round(e.nativeEvent.contentOffset.x) / FILTER_WIDTH,
                  );
                }
              } else {
                setFilterIndex(0);
              }
            }}
            ref={ref}>
            {EditFilters.map((item, index) => {
              return (
                <TouchableOpacity
                  style={styles.iconContainer}
                  key={index}
                  onPress={() => {
                    handleFilterChange(index);
                  }}>
                  {item.component()}
                </TouchableOpacity>
              );
            })}
          </ScrollView>
        </View>
        <View style={styles.sliderContainer}>
          <FlatList
            horizontal
            contentContainerStyle={{
              paddingVertical: 20,
              paddingLeft: width / 2,
              paddingRight: width / 2 - 10,
            }}
            onScroll={e => {
              handleScroll(e.nativeEvent.contentOffset.x);
            }}
            data={Array(50).fill(undefined)}
            keyExtractor={(item, index) => index.toString()}
            initialScrollIndex={25}
            getItemLayout={(data, index) => ({
              length: 10,
              offset: 10 * index,
              index,
            })}
            renderItem={({item, index}) => {
              return <View style={[styles.sliderBox]} />;
            }}
          />
          <View
            style={[
              styles.sliderPoint,
              {
                marginLeft: width / 2,
              },
            ]}
          />
        </View>
      </View>
    </>
  );
};

export default EditScreen;
