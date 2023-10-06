import {StyleSheet} from 'react-native';
import {Colors, FontFamily} from '../../utils/theme';

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: Colors.modalBackground,
    justifyContent: 'flex-end',
    paddingHorizontal: 16,
    paddingVertical: 16,
  },
  modalBody: {
    backgroundColor: Colors.white,
    height: 270,
    borderRadius: 15,
    paddingVertical: 20,
    overflow: 'hidden',
  },
  colorContainer: {
    flexWrap: 'wrap',
  },
});
