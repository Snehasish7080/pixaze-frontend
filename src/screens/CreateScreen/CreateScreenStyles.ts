import {Dimensions, StyleSheet} from 'react-native';
import {horizontalScale, verticalScale} from '../../utils/scale';
import {Colors, FontFamily} from '../../utils/theme';

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'flex-end',
    justifyContent: 'space-between',
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
    backgroundColor: Colors.white,
    height: Dimensions.get('screen').width,
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
    right: 0,
    bottom: 0,
    flexDirection: 'row',
    flexWrap: 'wrap',
    backgroundColor: Colors.gridBackground,
  },
  cropperArea: {
    position: 'absolute',
    top: 0,
    left: 0,
    right: 0,
    bottom: 0,
    zIndex: 10,
  },
  headerContainer: {
    width: '100%',
  },
  next: {
    color: Colors.secondaryLight,
    fontFamily: FontFamily.LatoBlack,
  },
  selectionContainer: {
    height: 60,
    width: '100%',
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    paddingHorizontal: 16,
  },
  cameraContainer: {
    flex: 1,
    borderWidth: 1,
    alignItems: 'center',
    height: 40,
    justifyContent: 'center',
    borderRadius: 10,
  },
});
