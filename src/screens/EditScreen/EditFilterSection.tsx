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
import Animated from 'react-native-reanimated';
import {captureRef} from 'react-native-view-shot';
import FastImage from 'react-native-fast-image';

import BrightnessIcon from '../../atoms/BrightnessIcon/BrightnessIcon';
import ContrastIcon from '../../atoms/ContrastIcon/ContrastIcon';
import SaturateIcon from '../../atoms/SaturateIcon/SaturateIcon';
import TemperatureIcon from '../../atoms/TemperatureIcon/TemperatureIcon';
import TintIcon from '../../atoms/TintIcon/TintIcon';
import FilterSection from './FilterSection';

const FILTER_WIDTH = 40;
const MAX_FILTER_WIDTH = 160;
const INDICATOR_WIDTH = 80;

const EditFilters = [
  {
    id: 'Brightness',
    component: () => <BrightnessIcon />,
    values: Array.from({length: 100}, (_, i) => i / 5),
    defaultValue: 51,
  },
  {
    id: 'Saturation',
    component: () => <SaturateIcon />,
    values: Array.from({length: 100}, (_, i) => i / 5),
    defaultValue: 51,
  },
  {
    id: 'Contrast',
    component: () => <ContrastIcon />,
    values: Array(100).fill(0.1),
    defaultValue: 50,
  },
  {
    id: 'Warmth',
    component: () => <TemperatureIcon />,
    values: Array(100).fill(0.1),
    defaultValue: 50,
  },
  {
    id: 'Tint',
    component: () => <TintIcon />,
    values: Array(100).fill(0.1),
    defaultValue: 50,
  },
];

type EditFilterSectionProps = {
  setBrightnessValue: React.Dispatch<React.SetStateAction<number>>;
  brightnessValue: number;
};
const EditFilterSection: React.FC<EditFilterSectionProps> = ({
  brightnessValue,
  setBrightnessValue,
}) => {
  const {width} = useWindowDimensions();
  const [filterIndex, setFilterIndex] = useState(0);
  const [filterTitle, setFilterTitle] = useState('Brightness');

  const handleScroll = (offset: number) => {
    switch (filterTitle) {
      case 'Brightness':
        if (offset / 10 > 0) {
          if (Math.round(offset / 10) >= 100) {
            setBrightnessValue(2);
          } else {
            const index = Math.round(offset / 10);
            const value =
              Math.round(EditFilters[filterIndex].values[index]) / 10;

            setBrightnessValue(value);
          }
        } else {
          setBrightnessValue(0);
        }
        break;

      default:
        break;
    }
  };

  const handleFilterChange = (index: number) => {
    if (ref && ref.current) {
      ref.current.scrollTo({
        animated: true,
        x: index * 40,
      });
      setFilterTitle(EditFilters[index].id);
    }
  };

  const ref = useRef<ScrollView>(null);

  return (
    <>
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
          decelerationRate="fast"
          onScroll={e => {
            if (e.nativeEvent.contentOffset.x > MAX_FILTER_WIDTH) {
              setFilterIndex(MAX_FILTER_WIDTH / FILTER_WIDTH);
              setFilterTitle(EditFilters[MAX_FILTER_WIDTH / FILTER_WIDTH].id);
            } else if (e.nativeEvent.contentOffset.x > 0) {
              if (
                Math.round(e.nativeEvent.contentOffset.x) % FILTER_WIDTH ===
                0
              ) {
                setFilterIndex(
                  Math.round(e.nativeEvent.contentOffset.x) / FILTER_WIDTH,
                );
                setFilterTitle(
                  EditFilters[
                    Math.round(e.nativeEvent.contentOffset.x) / FILTER_WIDTH
                  ].id,
                );
              }
            } else {
              setFilterIndex(0);
              setFilterTitle(EditFilters[0].id);
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
          extraData={filterIndex}
          data={EditFilters[filterIndex].values}
          keyExtractor={(item, index) => index.toString()}
          initialScrollIndex={EditFilters[filterIndex].defaultValue}
          getItemLayout={(data, index) => ({
            length: 10,
            offset: 10 * index,
            index,
          })}
          renderItem={({item, index}) => {
            return <View style={[styles.sliderBox]} />;
          }}
          scrollEventThrottle={16}
          decelerationRate="fast"
          snapToOffsets={Array(EditFilters[filterIndex].values.length)
            .fill(undefined)
            .map((x, index) => index * 10)}
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
    </>
  );
};

export default EditFilterSection;
