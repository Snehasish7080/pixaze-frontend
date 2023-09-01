import {PixelRatio, StyleSheet} from 'react-native';
import {horizontalScale, verticalScale} from '../../utils/scale';
import {Colors, FontFamily} from '../../utils/theme';

export const styles = StyleSheet.create({
  mainContainer: {
    position: 'absolute',
    height: 60,
    bottom: 10,
    width: '100%',
    alignItems: 'center',
  },
  container: {
    width: '80%',
    alignItems: 'center',
    flexDirection: 'row',
    marginBottom: 2,
    paddingHorizontal: 16,
    borderRadius: 20,
    justifyContent: 'space-between',
    height: 60,
  },
  tab: {
    alignItems: 'center',
  },
});
