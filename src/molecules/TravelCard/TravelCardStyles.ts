import {StyleSheet} from 'react-native';
import {Colors, FontFamily} from '../../utils/theme';

export const styles = StyleSheet.create({
  container: {
    width: 320,
    height: 480,
    borderRadius: 30,
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
});
