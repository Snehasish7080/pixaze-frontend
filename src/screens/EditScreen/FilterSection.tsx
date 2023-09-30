import {Canvas, Image, useImage} from '@shopify/react-native-skia';
import React, {useCallback, useRef} from 'react';
import {
  FlatList,
  TouchableOpacity,
  useWindowDimensions,
  View,
} from 'react-native';
import FastImage from 'react-native-fast-image';
import Animated, {SlideInDown, SlideOutDown} from 'react-native-reanimated';
import AppText from '../../atoms/AppText/AppText';
import {styles} from './EditScreenStyles';
import {FilterProps} from './Filter';

const IMAGE_HEIGHT = 484;

const IMAGE_RESIZED_HEIGHT = 100;

type filter = {
  title: string;
  filterComponent: React.FC<FilterProps>;
};

type FilterSectionProps = {
  setSelectedFilter: React.Dispatch<React.SetStateAction<number>>;
  selectedFilter: number;
  image: string;
  FILTERS: {
    title: string;
    filterComponent: React.FC<FilterProps>;
  }[];
  scale: number;
  translateX: number;
  translateY: number;
  imageWidth: number;
  imageHeight: number;
};
const FilterSection: React.FC<FilterSectionProps> = ({
  setSelectedFilter,
  image,
  FILTERS,
  scale,
  translateX,
  translateY,
  imageHeight,
  imageWidth,
}) => {
  const skiaImage = useImage(image);

  const {width} = useWindowDimensions();
  const ref = useRef<FlatList>(null);

  const OVERLAY_WIDTH = (imageWidth * IMAGE_RESIZED_HEIGHT) / imageHeight;

  const widthMultiple = width / 100;
  const heightMultiple = IMAGE_HEIGHT / 100;
  const renderFilterComponent = useCallback(
    ({item, index}: {item: filter; index: number}) => {
      const FilterComponent = item.filterComponent;

      if (!skiaImage) {
        return null;
      }
      return (
        <TouchableOpacity
          style={styles.image}
          activeOpacity={0.7}
          onPress={() => {
            setSelectedFilter(index);
            if (index * 105 > width / 2) {
              if (ref && ref.current) {
                ref.current.scrollToOffset({
                  offset: index * 105 - (width / 2 - 105 / 2),
                  animated: true,
                });
              }
            }
          }}>
          <Canvas
            style={{
              flex: 1,
              width: 100,
              height: IMAGE_RESIZED_HEIGHT,
            }}>
            <Image
              image={skiaImage}
              fit={
                imageWidth > imageHeight
                  ? FastImage.resizeMode.cover
                  : FastImage.resizeMode.contain
              }
              x={0}
              y={0}
              width={100}
              height={IMAGE_RESIZED_HEIGHT}
              transform={[{scale}, {translateX}, {translateY}]}
            />
            <FilterComponent
              IMAGE_HEIGHT={IMAGE_RESIZED_HEIGHT}
              OVERLAY_WIDTH={OVERLAY_WIDTH}
              width={100}
            />
          </Canvas>
          <AppText lineHeight={10} style={styles.title}>
            {item.title}
          </AppText>
        </TouchableOpacity>
      );
    },
    [skiaImage],
  );

  return (
    <Animated.View
      style={styles.filterContainer}
      entering={SlideInDown.duration(500)}
      exiting={SlideOutDown.duration(1000)}>
      <FlatList
        horizontal
        contentContainerStyle={{
          paddingVertical: 20,
          paddingHorizontal: 16,
        }}
        data={FILTERS}
        keyExtractor={item => item.title}
        renderItem={renderFilterComponent}
        ref={ref}
      />
    </Animated.View>
  );
};

export default FilterSection;
