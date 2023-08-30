import {StyleSheet} from 'react-native';
import {horizontalScale, verticalScale} from '../../utils/scale';
import {Colors, FontFamily} from '../../utils/theme';

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    // alignItems: 'flex-end',
    alignItems: 'center',
    // justifyContent: 'center',
    // paddingTop:
  },
  blurView: {
    top: 0,
    left: 0,
    right: 0,
    bottom: 0,
    position: 'absolute',
  },
  separator: {
    width: 20,
  },
  tagContainer: {
    width: '100%',
    marginBottom: 30,
  },
  tag: {
    textAlign: 'center',
    color: Colors.white,
    fontFamily: FontFamily.MarckScriptRegular,
    textDecorationStyle: 'solid',
    textDecorationLine: 'underline',
  },
  actionBtnContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    marginTop: 25,
    width: 140,
    justifyContent: 'space-between',
  },
  actionBtn: {
    alignItems: 'center',
  },
  actionText: {
    fontSize: 12,
    fontFamily: FontFamily.LatoBold,
    color: Colors.white,
  },
  profilePic: {
    borderRadius: 12,
    resizeMode: 'cover',
  },
  profileContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    width: '100%',
    paddingHorizontal: 16,
    paddingVertical: 26,
    marginBottom: verticalScale(50),
  },
  name: {
    fontFamily: FontFamily.LatoBold,
    color: Colors.white,
    marginLeft: 16,
    fontSize: 14,
  },
});
