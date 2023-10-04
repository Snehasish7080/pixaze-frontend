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
    height: 300,
    borderRadius: 15,
    overflow: 'hidden',
  },
  colorContainer: {
    flexDirection: 'row',
    flexWrap: 'wrap',
  },
});
