import React, {useState} from 'react';
import {
  Image,
  PixelRatio,
  ScrollView,
  TouchableOpacity,
  Vibration,
  View,
} from 'react-native';
import AppText from '../../atoms/AppText/AppText';
import AppHeader from '../../molecules/AppHeader/AppHeader';
import {AuthenticatedNavProps} from '../../navigations/AuthenticatedNavigation/AuthenticatedNavigationTypes';
import {styles} from './EditScreenStyles';

import {
  achromatomaly,
  achromatopsia,
  brightness,
  ColorMatrix,
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
import FilterSection from './FilterSection';

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
const IMAGE_HEIGHT = 350;
const EditScreen: React.FC<AuthenticatedNavProps<'EditScreen'>> = ({
  navigation,
  route,
}) => {
  const {image} = route?.params;
  const [selectedFilter, setSelectedFilter] = useState<Matrix>(
    concatColorMatrices(),
  );
  return (
    <>
      <AppHeader
        mainTitle="Edit"
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
        <ColorMatrix matrix={selectedFilter}>
          <Image source={{uri: image}} style={styles.mainImage} />
        </ColorMatrix>
        <FilterSection image={image} setSelectedFilter={setSelectedFilter} />
      </View>
    </>
  );
};

export default EditScreen;
