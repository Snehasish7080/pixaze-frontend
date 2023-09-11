import React from 'react';
import {
  FlatList,
  Image,
  TouchableOpacity,
  useWindowDimensions,
  View,
} from 'react-native';
import {styles} from './EditScreenStyles';
import {AdenCompat} from 'react-native-image-filter-kit';

const IMAGE_HEIGHT = 350;

type filter = {
  title: string;
  filterComponent: typeof AdenCompat;
};

type FilterSectionProps = {
  setSelectedFilter: React.Dispatch<React.SetStateAction<number>>;
  image: string;
  FILTERS: {
    title: string;
    filterComponent: typeof AdenCompat;
  }[];
  scale: number;
  translateX: number;
  translateY: number;
};
const FilterSection: React.FC<FilterSectionProps> = ({
  setSelectedFilter,
  image,
  FILTERS,
  scale,
  translateX,
  translateY,
}) => {
  const {width} = useWindowDimensions();

  const widthMultiple = width / 100;
  const heightMultiple = IMAGE_HEIGHT / 100;
  const renderFilterComponent = ({
    item,
    index,
  }: {
    item: filter;
    index: number;
  }) => {
    const FilterComponent = item.filterComponent;
    const filterImage = (
      <Image
        style={{
          width: '100%',
          height: '100%',
          transform: [
            {scale},
            {translateX: translateX / widthMultiple},
            {translateY: translateY / heightMultiple},
          ],
        }}
        source={{uri: image}}
      />
    );
    if (!image) {
      return null;
    }
    return (
      <TouchableOpacity
        style={styles.image}
        activeOpacity={0.7}
        onPress={() => setSelectedFilter(index)}>
        <FilterComponent image={filterImage} />
      </TouchableOpacity>
    );
  };

  return (
    <View style={styles.filterContainer}>
      <FlatList
        horizontal
        contentContainerStyle={{
          paddingVertical: 20,
          paddingHorizontal: 16,
        }}
        data={FILTERS}
        keyExtractor={item => item.title}
        renderItem={renderFilterComponent}
      />
    </View>
  );
};

export default FilterSection;
