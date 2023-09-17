import {Dimensions, StyleSheet} from 'react-native';
import {horizontalScale, verticalScale} from '../../utils/scale';
import {Colors, FontFamily} from '../../utils/theme';

const IMAGE_HEIGHT = 350;
export const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: Colors.white,
  },
  imageContainer: {
    width: '100%',
    height: IMAGE_HEIGHT,
    overflow: 'hidden',
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
    marginRight: 5,
    alignItems: 'center',
  },
  filterContainer: {
    marginTop: 50,
  },
  title: {
    fontSize: 12,
    marginTop: 6,
  },
  sliderPoint: {
    width: 1,
    height: 20,
    backgroundColor: Colors.dark,
    borderRadius: 2,
    position: 'absolute',
    top: 10,
  },
  sliderBox: {
    width: 10,
    height: 10,
    // backgroundColor: Colors.dark,
    borderLeftWidth: 1,
  },
  sliderContainer: {
    marginTop: 50,
    position: 'relative',
  },
});
