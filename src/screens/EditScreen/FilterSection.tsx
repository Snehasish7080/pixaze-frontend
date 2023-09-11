import React from 'react';
import {FlatList, Image, TouchableOpacity, View} from 'react-native';
import {styles} from './EditScreenStyles';
import {AdenCompat} from 'react-native-image-filter-kit';

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
};
const FilterSection: React.FC<FilterSectionProps> = ({
  setSelectedFilter,
  image,
  FILTERS,
}) => {
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
