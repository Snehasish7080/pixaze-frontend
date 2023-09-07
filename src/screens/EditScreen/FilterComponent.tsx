import {View, Text} from 'react-native';
import React from 'react';
import {ColorMatrix, Matrix} from 'react-native-color-matrix-image-filters';
import {
  Image,
  PixelRatio,
  ScrollView,
  TouchableOpacity,
  Vibration,
} from 'react-native';
import AppText from '../../atoms/AppText/AppText';
import AppHeader from '../../molecules/AppHeader/AppHeader';
import {AuthenticatedNavProps} from '../../navigations/AuthenticatedNavigation/AuthenticatedNavigationTypes';
import {styles} from './EditScreenStyles';

type FilterComponentProps = {
  image: string;
  matrix: Matrix;
  onPress: () => void;
};
const FilterComponent = ({image, matrix, onPress}: FilterComponentProps) => {
  return (
    <TouchableOpacity
      style={styles.image}
      activeOpacity={0.8}
      onPress={onPress}>
      <ColorMatrix matrix={matrix}>
        <Image source={{uri: image}} style={{width: '100%', height: '100%'}} />
      </ColorMatrix>
    </TouchableOpacity>
  );
};

export default FilterComponent;
