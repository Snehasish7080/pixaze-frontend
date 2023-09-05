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
    flex: 1,
  },
  imageCropper: {
    width: '100%',
    backgroundColor: Colors.white,
    height: 350,
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
    height: 50,
    width: '100%',
    flexDirection: 'row',
    alignItems: 'center',
    paddingHorizontal: 16,
    backgroundColor: Colors.white,
    marginTop: 2,
    justifyContent: 'center',
  },
  cameraContainer: {
    alignItems: 'center',
    height: 35,
    justifyContent: 'center',
    borderRadius: 10,
    width: 35,
    backgroundColor: Colors.cameraBtnBackground,
    borderColor: Colors.gray,
  },
});
