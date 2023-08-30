import {PixelRatio, StyleSheet} from 'react-native';
import {horizontalScale, verticalScale} from '../../utils/scale';
import {Colors, FontFamily} from '../../utils/theme';

export const styles = StyleSheet.create({
  container: {
    width: horizontalScale(320),
    borderRadius: 15,
    alignItems: 'center',
    position: 'relative',
    height: verticalScale(350),
    backgroundColor: Colors.white,
    overflow: 'hidden',
  },

  pressable: {
    width: '100%',
    height: '100%',
    borderRadius: 2,
    alignItems: 'center',
  },

  tag: {
    fontFamily: FontFamily.MarckScriptRegular,
    marginTop: 6,
  },
});
