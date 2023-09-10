import {Dimensions, StyleSheet} from 'react-native';
import {horizontalScale, verticalScale} from '../../utils/scale';
import {Colors, FontFamily} from '../../utils/theme';

export const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    height: 140,
    position: 'relative',
  },
  image: {
    width: 80,
    height: '100%',
  },
  location: {
    fontFamily: FontFamily.OswaldSemiBold,
    color: Colors.locationColor,
  },
  tag: {
    fontFamily: FontFamily.LatoBold,
    color: Colors.locationColor,
    marginTop: 6,
  },
  locationContainer: {
    paddingHorizontal: 16,
    paddingVertical: 16,
    height: '100%',
    flex: 1,
    justifyContent: 'space-between',
  },

  date: {
    color: Colors.locationColor,
  },
  imageContainer: {
    flexDirection: 'row',
    height: '100%',
    borderTopLeftRadius: 4,
    borderBottomLeftRadius: 4,
    overflow: 'hidden',
    width: 80 * 3,
  },
  addMemo: {
    width: 80,
    height: '100%',
    borderWidth: 1,
    borderStyle: 'dashed',
    borderColor: Colors.placeholder,
    alignItems: 'center',
    justifyContent: 'center',
  },
  absoluteAddMemo: {
    width: 80,
    height: '100%',
    borderWidth: 1,
    borderStyle: 'dashed',
    borderColor: Colors.placeholder,
    backgroundColor: Colors.addMemoColor,
    position: 'absolute',
    right: 0,
    alignItems: 'center',
    justifyContent: 'center',
  },
  actionContainer: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  likes: {
    fontFamily: FontFamily.LatoBold,
    marginLeft: 6,
  },
});
