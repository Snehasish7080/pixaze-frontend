import {StyleSheet} from 'react-native';
import {Colors, FontFamily} from '../../utils/theme';

export const styles = StyleSheet.create({
  container: {
    position: 'relative',
    width: 120,
    height: 150,
  },
  frameContainer: {
    position: 'absolute',
    transform: [],
  },
  frameContainer1: {
    position: 'absolute',
    transform: [
      {
        rotate: '8deg',
      },
      {
        translateX: 8,
      },
      {
        translateY: -8,
      },
    ],
  },
  countContainer: {
    minWidth: 12,
    height: 12,
    alignItems: 'center',
    justifyContent: 'center',
    borderTopLeftRadius: 2,
    backgroundColor: 'rgba(0, 0, 0, 0.3)',
    position: 'absolute',
    top: -1,
    paddingHorizontal: 3,
  },
  count: {
    fontSize: 11,
    color: Colors.white,
  },
});
