import React, {useCallback, useRef, useState} from 'react';
import {PixelRatio, TouchableOpacity, View} from 'react-native';
import {captureRef} from 'react-native-view-shot';
import AppText from '../../atoms/AppText/AppText';
import CameraIcon from '../../atoms/CameraIcon/CameraIcon';
import MultipleSelectIcon from '../../atoms/MultipleSelectIcon/MultipleSelectIcon';
import {imageFile} from '../../interfaces/imageFile';
import AppHeader from '../../molecules/AppHeader/AppHeader';
import {AuthenticatedNavProps} from '../../navigations/AuthenticatedNavigation/AuthenticatedNavigationTypes';
import {styles} from './CreateScreenStyles';
import Cropper from './Cropper';
import GallerySection from './GallerySection';

const CreateScreen: React.FC<AuthenticatedNavProps<'CreateScreen'>> = ({
  navigation,
}) => {
  const [selectedMedia, setSelectedMedia] = useState<imageFile>();
  const [capturedImage, setCapturedImage] = useState<string>();

  const viewRef = useRef<View>(null);

  const takeSnapshot = useCallback(async () => {
    if (viewRef) {
      captureRef(viewRef, {
        format: 'png',
        quality: 1,
      }).then(
        uri => {
          setCapturedImage(uri);
        },
        error => console.error('Oops, snapshot failed', error),
      );
    }
  }, [capturedImage]);

  return (
    <View style={styles.container}>
      <View style={styles.headerContainer}>
        <AppHeader
          mainTitle="New Memo"
          rightSection={
            <TouchableOpacity onPress={takeSnapshot}>
              <AppText
                lineHeight={14}
                style={[
                  styles.next,
                  {
                    fontSize: 14 / PixelRatio.getFontScale(),
                  },
                ]}>
                Next
              </AppText>
            </TouchableOpacity>
          }
          onBack={() => {
            navigation.goBack();
          }}
        />
        <View style={styles.imageCropper}>
          <Cropper
            selectedImage={selectedMedia?.uri || ''}
            ref={viewRef}
            capturedImage={capturedImage || ''}
          />
        </View>
      </View>
      <View style={styles.selectionContainer}>
        <TouchableOpacity style={[styles.cameraContainer, {marginRight: 10}]}>
          <CameraIcon />
        </TouchableOpacity>
        <TouchableOpacity style={[styles.cameraContainer]}>
          <MultipleSelectIcon />
        </TouchableOpacity>
      </View>
      <GallerySection
        selectedMedia={selectedMedia}
        onSelect={image => {
          setSelectedMedia(image);
        }}
      />
    </View>
  );
};

export default CreateScreen;
