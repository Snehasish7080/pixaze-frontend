import {StyleSheet} from 'react-native';
import {horizontalScale} from '../../utils/scale';
import {Colors, FontFamily} from '../../utils/theme';

export const styles = StyleSheet.create({
  container: {
    width: horizontalScale(250),
    borderRadius: 4,
    paddingHorizontal: 15,
    paddingVertical: 30,
    alignItems: 'center',
    position: 'relative',
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
