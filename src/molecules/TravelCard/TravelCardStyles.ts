import {StyleSheet} from 'react-native';
import {Colors, FontFamily} from '../../utils/theme';

export const styles = StyleSheet.create({
  imageContainer: {
    width: 350,
    height: 350,
    borderRadius: 20,
    overflow: 'hidden',
  },
  image: {
    width: '100%',
    height: '100%',
  },
  essenceImage: {
    width: 80,
    height: 80,
    resizeMode: 'contain',
    aspectRatio: 1,
  },
  location: {
    fontFamily: FontFamily.OswaldBold,
    color: Colors.placeholder,
  },
  date: {
    fontFamily: FontFamily.LatoBold,
    color: Colors.placeholder,
  },
  locationContainer: {
    paddingHorizontal: 16,
    paddingVertical: 10,
  },
});
