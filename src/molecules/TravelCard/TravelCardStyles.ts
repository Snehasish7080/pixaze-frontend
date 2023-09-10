import {StyleSheet} from 'react-native';
import {Colors, FontFamily} from '../../utils/theme';

export const styles = StyleSheet.create({
  imageContainer: {
    width: 350,
    height: 350,
    borderRadius: 20,
    overflow: 'hidden',
  },
  image: {
    width: 350,
    height: '100%',
  },
  essenceImage: {
    width: 80,
    height: 80,
    resizeMode: 'contain',
    aspectRatio: 1,
  },
  location: {
    fontFamily: FontFamily.OswaldBold,
    color: Colors.locationColor,
  },
  date: {
    fontFamily: FontFamily.LatoBold,
    color: Colors.locationColor,
  },
  tag: {
    fontFamily: FontFamily.SatisfyRegular,
    color: Colors.locationColor,
  },
  locationContainer: {
    paddingHorizontal: 16,
    paddingVertical: 10,
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  profileSection: {
    paddingBottom: 6,
    paddingHorizontal: 16,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
  },
  profilePic: {
    width: 30,
    height: 30,
    borderRadius: 15,
    zIndex: 2,
  },
  name: {
    fontFamily: FontFamily.LatoBold,
  },
  locationMark: {
    flexDirection: 'row',
  },
  dateContainer: {
    marginLeft: 6,
  },
  actionBtnContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    width: 100,
    justifyContent: 'space-between',
  },
  actionBtn: {
    alignItems: 'center',
  },
  actionText: {
    fontSize: 10,
    fontFamily: FontFamily.LatoBold,
    color: Colors.dark,
  },
  imageSection: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  multiProfile: {
    flexDirection: 'row',
    position: 'relative',
    marginRight: 6,
  },
  multiAvatar: {
    borderWidth: 1,
    width: 30,
    height: 30,
    borderRadius: 15,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: Colors.dark,
    right: 5,
  },
  count: {
    color: Colors.white,
  },
});
