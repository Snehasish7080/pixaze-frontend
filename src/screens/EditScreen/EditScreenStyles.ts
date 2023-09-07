import {Dimensions, StyleSheet} from 'react-native';
import {horizontalScale, verticalScale} from '../../utils/scale';
import {Colors, FontFamily} from '../../utils/theme';

const IMAGE_HEIGHT = 350;
export const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: Colors.white,
  },
  mainImage: {
    width: '100%',
    height: IMAGE_HEIGHT,
  },
  next: {
    color: Colors.secondaryLight,
    fontFamily: FontFamily.LatoBlack,
  },
  image: {
    width: 100,
    height: 100,
    // resizeMode: 'cover',
    // aspectRatio: 1,
    borderRadius: 12,
    marginRight: 10,
    overflow: 'hidden',
  },
  filterContainer: {
    marginTop: 50,
  },
});
