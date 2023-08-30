import {PixelRatio, StyleSheet} from 'react-native';
import {horizontalScale, verticalScale} from '../../utils/scale';
import {Colors, FontFamily} from '../../utils/theme';

export const styles = StyleSheet.create({
  container: {
    width: '100%',
    alignItems: 'center',
    position: 'relative',
    height: 60,
    backgroundColor: Colors.white,
    flexDirection: 'row',
    marginBottom: 2,
    paddingHorizontal: 16,
  },
  title: {
    fontFamily: FontFamily.LatoBold,
  },
});
