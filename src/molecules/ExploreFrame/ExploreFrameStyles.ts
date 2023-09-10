import {Dimensions, PixelRatio, StyleSheet} from 'react-native';
import {horizontalScale, verticalScale} from '../../utils/scale';
import {Colors, FontFamily} from '../../utils/theme';

export const styles = StyleSheet.create({
  container: {
    width: (Dimensions.get('window').width * 0.9) / 3,
    height: (Dimensions.get('window').width * 0.9) / 3 + 20,
    borderRadius: 8,
    overflow: 'hidden',
  },
  image: {
    width: '100%',
    height: '100%',
  },
  tagContainer: {
    position: 'absolute',

    height: 30,
    alignSelf: 'center',
    bottom: 10,
    borderRadius: 5,
    backgroundColor: Colors.tagBackGroundColor,
    alignItems: 'center',
    justifyContent: 'center',
    width: 'auto',
    paddingHorizontal: 10,
  },
  tag: {
    color: Colors.white,
    fontFamily: FontFamily.SatisfyRegular,
  },
});
