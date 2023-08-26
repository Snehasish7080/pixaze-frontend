import {StyleSheet} from 'react-native';
import {horizontalScale} from '../../utils/scale';
import {Colors, FontFamily} from '../../utils/theme';

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: Colors.white,
    paddingHorizontal: 16,
    paddingVertical: 30,
  },
  profilePic: {
    width: 78,
    height: 78,
    borderRadius: 16,
    resizeMode: 'contain',
  },
  settingContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    marginTop: 10,
  },
  shareBtn: {
    width: 85,
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: 5,
    height: 30,
    borderWidth: 1,
    borderColor: Colors.dark,
  },
  editBtn: {
    width: 70,
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: 5,
    height: 30,
    borderWidth: 1,
    borderColor: Colors.dark,
    marginRight: 5,
  },
  settingBtn: {
    width: 30,
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: 5,
    height: 30,
    borderWidth: 1,
    borderColor: Colors.dark,
    marginLeft: 5,
  },
  share: {
    fontFamily: FontFamily.LatoBold,
  },
  nameContainer: {
    marginVertical: 16,
  },
  userName: {
    fontFamily: FontFamily.LatoBold,
    fontSize: 14,
  },
  name: {
    fontSize: 14,
    marginTop: 5,
  },
  followersContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
  },
  followers: {
    alignItems: 'center',
  },
  count: {
    fontFamily: FontFamily.LatoBold,
    fontSize: 14,
    marginRight: 5,
  },
  followTitle: {
    fontSize: 14,
  },
  profileContainer: {
    flexDirection: 'row',
  },
  relationContainer: {
    marginLeft: 16,
  },
  about: {
    width: horizontalScale(300),
    fontSize: 12,
    marginTop: 10,
  },
});
