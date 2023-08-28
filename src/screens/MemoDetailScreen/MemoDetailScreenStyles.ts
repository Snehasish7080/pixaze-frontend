import {StyleSheet} from 'react-native';
import {horizontalScale} from '../../utils/scale';
import {Colors, FontFamily} from '../../utils/theme';

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'flex-end',
    // justifyContent: 'space-between',
    backgroundColor: 'rgba(0,0,0,0.8)',
    // flexDirection: 'row',
  },
  blurView: {
    top: 0,
    left: 0,
    right: 0,
    bottom: 0,
    position: 'absolute',
  },
  tag: {
    alignItems: 'center',
    justifyContent: 'center',
    height: 50,
    position: 'absolute',
    left: 0,
    paddingHorizontal: 10,
    top: 100,
  },
  tagText: {
    fontFamily: FontFamily.MarckScriptRegular,
    fontSize: 18,
  },
  textContainer: {
    transform: [
      {
        rotate: '90deg',
      },
    ],
  },
});
