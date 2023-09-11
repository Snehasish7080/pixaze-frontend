import React from 'react';
import {
  FlatList,
  Image,
  ScrollView,
  TouchableOpacity,
  Vibration,
  View,
} from 'react-native';
import {styles} from './EditScreenStyles';

import {
  achromatomaly,
  achromatopsia,
  brightness,
  concatColorMatrices,
  contrast,
  cool,
  deuteranomaly,
  grayscale,
  hueRotate,
  Matrix,
  protanomaly,
  protanopia,
  sepia,
  tritanomaly,
  tritanopia,
  warm,
} from 'react-native-color-matrix-image-filters';
import FilterComponent from './FilterComponent';
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
  Normal,
} from 'react-native-image-filter-kit';

type filter = {
  title: string;
  filterComponent: typeof AdenCompat;
};

type FilterSectionProps = {
  setSelectedFilter: React.Dispatch<React.SetStateAction<number>>;
  image: string;
  FILTERS: {
    title: string;
    filterComponent: typeof Normal;
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
        style={{width: '100%', height: '100%'}}
        source={{uri: image}}
        resizeMode={'cover'}
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
      {/* <ScrollView
        horizontal
        contentContainerStyle={{
          paddingVertical: 20,
          paddingHorizontal: 16,
        }}>
        {colorMatrix.map((item, index) => {
          return (
            <FilterComponent
              image={image}
              key={index}
              matrix={item}
              onPress={() => {
                setSelectedFilter(item);
                Vibration.vibrate(1);
              }}
            />
          );
        })}
      </ScrollView> */}
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
