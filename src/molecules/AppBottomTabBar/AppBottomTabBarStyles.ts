import {StyleSheet} from 'react-native';
import {Colors} from '../../utils/theme';

export const styles = StyleSheet.create({
  mainContainer: {
    height: 60,
    width: '100%',
    alignItems: 'center',
    zIndex: 10,
    backgroundColor: Colors.white,
    marginTop: 2,
  },
  container: {
    width: '100%',
    alignItems: 'center',
    flexDirection: 'row',
    paddingHorizontal: 30,
    justifyContent: 'space-between',
    height: 60,
    backgroundColor: Colors.white,
    marginTop: 1,
  },
  tab: {
    alignItems: 'center',
    height: '100%',
    width: 60,
    justifyContent: 'center',
  },
});
