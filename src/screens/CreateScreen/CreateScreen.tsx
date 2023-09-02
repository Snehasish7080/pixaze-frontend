import React, {useEffect, useState} from 'react';
import {
  FlatList,
  Image,
  PermissionsAndroid,
  Platform,
  StyleSheet,
  View,
} from 'react-native';
import {Camera, useCameraDevices} from 'react-native-vision-camera';
import AppText from '../../atoms/AppText/AppText';
import {
  CameraRoll,
  PhotoIdentifier,
} from '@react-native-camera-roll/camera-roll';
import {styles} from './CreateScreenStyles';

const CreateScreen = () => {
  const [permissionGranted, setPermissionGranted] = useState<boolean>(false);
  const [medias, setMedias] = useState<PhotoIdentifier[]>([]);
  // const devices = useCameraDevices();
  // const device = devices.back;

  // if (device == null) return <AppText lineHeight={14}>Loading ....</AppText>;

  const getCheckPermissionPromise = () => {
    if (Platform.Version >= 33) {
      return Promise.all([
        PermissionsAndroid.check(
          PermissionsAndroid.PERMISSIONS.READ_MEDIA_IMAGES,
        ),
        PermissionsAndroid.check(
          PermissionsAndroid.PERMISSIONS.READ_MEDIA_VIDEO,
        ),
      ]).then(
        ([hasReadMediaImagesPermission, hasReadMediaVideoPermission]) =>
          hasReadMediaImagesPermission && hasReadMediaVideoPermission,
      );
    } else {
      return PermissionsAndroid.check(
        PermissionsAndroid.PERMISSIONS.READ_EXTERNAL_STORAGE,
      );
    }
  };

  const getRequestPermissionPromise = () => {
    if (Platform.Version >= 33) {
      return PermissionsAndroid.requestMultiple([
        PermissionsAndroid.PERMISSIONS.READ_MEDIA_IMAGES,
        PermissionsAndroid.PERMISSIONS.READ_MEDIA_VIDEO,
      ]).then(
        statuses =>
          statuses[PermissionsAndroid.PERMISSIONS.READ_MEDIA_IMAGES] ===
            PermissionsAndroid.RESULTS.GRANTED &&
          statuses[PermissionsAndroid.PERMISSIONS.READ_MEDIA_VIDEO] ===
            PermissionsAndroid.RESULTS.GRANTED,
      );
    } else {
      return PermissionsAndroid.request(
        PermissionsAndroid.PERMISSIONS.READ_EXTERNAL_STORAGE,
      ).then(status => status === PermissionsAndroid.RESULTS.GRANTED);
    }
  };

  useEffect(() => {
    const checkPermission = async () => {
      const hasPermission = await getCheckPermissionPromise();
      setPermissionGranted(hasPermission);
      if (!hasPermission) {
        await getRequestPermissionPromise();
      }
    };
    checkPermission();
  }, []);

  useEffect(() => {
    if (permissionGranted) {
      getAllPhotos();
    }
  }, [permissionGranted]);

  const getAllPhotos = async () => {
    const photos = await CameraRoll.getPhotos({
      first: 10,
      groupTypes: 'All',
      assetType: 'All',
    });

    setMedias([...medias, ...photos.edges]);
  };

  return (
    //
    // <Camera style={StyleSheet.absoluteFill} device={device} isActive={true} />
    <View style={styles.container}>
      <FlatList
        data={medias}
        keyExtractor={item => item.node.timestamp.toString()}
        numColumns={3}
        renderItem={({item, index}) => {
          return (
            <View style={styles.image}>
              <Image
                source={{uri: item.node.image.uri}}
                style={{
                  width: '100%',
                  aspectRatio: 1,
                }}
              />
            </View>
          );
        }}
      />
    </View>
  );
};

export default CreateScreen;
