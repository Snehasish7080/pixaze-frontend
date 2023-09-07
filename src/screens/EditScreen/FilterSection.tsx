import React from 'react';
import {ScrollView, Vibration, View} from 'react-native';
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

const colorMatrix = [
  concatColorMatrices(),
  concatColorMatrices(sepia(0.3), contrast(1.2)),
  concatColorMatrices(grayscale(2)),
  concatColorMatrices(hueRotate(0.4)),
  concatColorMatrices(warm(), brightness(1.1)),
  concatColorMatrices(cool(), contrast(1.2), brightness(1.15)),
  concatColorMatrices(protanomaly(), brightness(1)),
  concatColorMatrices(deuteranomaly(), contrast(1.2), cool(), brightness(1)),
  concatColorMatrices(tritanomaly(), contrast(1.3), warm(), brightness(1)),
  concatColorMatrices(protanopia(), contrast(1), grayscale(), brightness(1.4)),
  concatColorMatrices(tritanopia(), contrast(1), sepia(0.3), brightness(1)),
  concatColorMatrices(achromatopsia(), contrast(1), brightness(1)),
  concatColorMatrices(achromatomaly(), contrast(1), brightness(1)),
];

type FilterSectionProps = {
  setSelectedFilter: React.Dispatch<React.SetStateAction<Matrix>>;
  image: string;
};
const FilterSection: React.FC<FilterSectionProps> = ({
  setSelectedFilter,
  image,
}) => {
  return (
    <View style={styles.filterContainer}>
      <ScrollView
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
      </ScrollView>
    </View>
  );
};

export default FilterSection;
