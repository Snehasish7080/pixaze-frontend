import {StyleSheet} from 'react-native';
import {Colors, FontFamily} from '../../utils/theme';

export const styles = StyleSheet.create({
  container: {
    position: 'relative',
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  desc: {
    fontSize: 12,
    marginTop: 5,
  },
  info: {
    flex: 1,
    marginLeft: 30,
  },
  date: {
    fontFamily: FontFamily.LatoBold,
    fontSize: 14,
  },
  locationContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    marginTop: 5,
  },
  location: {
    marginLeft: 5,
    fontSize: 12,
    fontFamily: FontFamily.LatoBold,
  },
  memoImageContainer: {
    marginTop: 5,
    flex: 1,
  },
});
