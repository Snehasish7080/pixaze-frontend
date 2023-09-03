import {Dimensions, StyleSheet} from 'react-native';
import {horizontalScale, verticalScale} from '../../utils/scale';
import {Colors, FontFamily} from '../../utils/theme';

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'flex-end',
    justifyContent: 'flex-end',
    backgroundColor: Colors.dark,
  },
  image: {
    width: Dimensions.get('screen').width / 3,
    height: Dimensions.get('screen').width / 3,
  },
  gallery: {
    maxHeight: '45%',
  },
  imageCropper: {
    width: '100%',
    backgroundColor: Colors.dark,
    height: Dimensions.get('screen').width,
    marginBottom: 20,
  },
  selectedImage: {
    width: '100%',
    aspectRatio: 1,
    resizeMode: 'contain',
  },

  cropperGrid: {
    position: 'absolute',
    top: 0,
    left: 0,
    flexDirection: 'row',
    flexWrap: 'wrap',
    backgroundColor: Colors.gridBackground,
  },
});
