import {StyleSheet} from 'react-native';
import {Colors, FontFamily} from '../../utils/theme';

export const styles = StyleSheet.create({
  container: {
    backgroundColor: Colors.white,
    width: 100,
    height: 130,
    borderRadius: 2,
    paddingHorizontal: 6,
    paddingVertical: 6,
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
