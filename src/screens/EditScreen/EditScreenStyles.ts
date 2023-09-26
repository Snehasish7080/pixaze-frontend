import {Dimensions, StyleSheet} from 'react-native';
import {horizontalScale, verticalScale} from '../../utils/scale';
import {Colors, FontFamily} from '../../utils/theme';

const IMAGE_HEIGHT = verticalScale(604.5);
export const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: Colors.white,
  },
  imageContainer: {
    width: '100%',
    height: IMAGE_HEIGHT,
    overflow: 'hidden',
    position: 'relative',
  },
  drawIcon: {
    position: 'absolute',
    zIndex: 2,
    width: 40,
    height: 40,
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: 20,
    backgroundColor: Colors.drawIconColor,
    right: 16,
    top: 16,
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
    marginTop: 15,
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
    borderLeftWidth: 1,
  },
  sliderContainer: {
    position: 'relative',
  },
  iconContainer: {
    borderWidth: 0.7,
    width: 30,
    height: 30,
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: 15,
    marginRight: 10,
  },
  editFilterContainer: {
    marginTop: 20,
    position: 'relative',
  },
  indicator: {
    backgroundColor: Colors.dark,
    width: 80,
    position: 'absolute',
    borderRadius: 6,
    paddingVertical: 6,
    paddingHorizontal: 6,
    alignItems: 'center',
    justifyContent: 'center',
    top: -20,
  },
  indicatorText: {
    color: Colors.white,
  },
});
