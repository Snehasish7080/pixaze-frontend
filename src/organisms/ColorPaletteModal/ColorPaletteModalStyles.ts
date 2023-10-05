import {StyleSheet} from 'react-native';
import {Colors, FontFamily} from '../../utils/theme';

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: Colors.modalBackground,
    justifyContent: 'flex-end',
    paddingHorizontal: 0,
    paddingVertical: 16,
  },
  modalBody: {
    backgroundColor: Colors.white,
    height: 230,
    borderRadius: 15,
    // overflow: 'hidden',
    paddingTop: 20,
    paddingBottom: 10,
  },
  colorContainer: {
    flexWrap: 'wrap',
  },
});
