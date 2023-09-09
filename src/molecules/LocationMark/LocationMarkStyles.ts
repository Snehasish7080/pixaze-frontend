import {Dimensions, StyleSheet} from 'react-native';
import {horizontalScale, verticalScale} from '../../utils/scale';
import {Colors, FontFamily} from '../../utils/theme';

export const styles = StyleSheet.create({
  image: {
    width: 120,
    height: 120,
    borderRadius: 25,
    marginTop: 6,
  },
  location: {
    fontFamily: FontFamily.LatoBold,
    marginLeft: 6,
  },
  locationContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    marginTop: 6,
  },
  imageContainer: {
    alignItems: 'center',
  },
  container: {
    alignItems: 'center',
  },
});
