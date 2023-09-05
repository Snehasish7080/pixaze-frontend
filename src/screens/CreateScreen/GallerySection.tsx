import {
  CameraRoll,
  PhotoIdentifier,
} from '@react-native-camera-roll/camera-roll';
import React, {useEffect, useState} from 'react';
import {FlatList, Image, TouchableOpacity, View} from 'react-native';
import {imageFile} from '../../interfaces/imageFile';
import {
  getCheckPermissionPromise,
  getRequestPermissionPromise,
} from '../../utils/permissions';
import {styles} from './CreateScreenStyles';

type GallerySectionProps = {
  selectedMedia?: imageFile;
  onSelect: (image: imageFile) => void;
};
const GallerySection: React.FC<GallerySectionProps> = ({
  selectedMedia,
  onSelect,
}) => {
  const [permissionGranted, setPermissionGranted] = useState<boolean>(false);
  const [medias, setMedias] = useState<PhotoIdentifier[]>([]);
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
      assetType: 'Photos',
    });

    setMedias([...medias, ...photos.edges]);
  };

  useEffect(() => {
    if (medias.length > 0 && !selectedMedia) {
      onSelect(medias[0].node.image);
    }
  }, [medias]);

  return (
    <View style={styles.gallery}>
      <FlatList
        data={medias}
        keyExtractor={item => item.node.timestamp.toString()}
        numColumns={3}
        renderItem={({item, index}) => {
          return (
            <TouchableOpacity
              style={styles.image}
              onPress={() => {
                onSelect(item.node.image);
              }}>
              <Image
                source={{uri: item.node.image.uri}}
                style={{
                  width: '100%',
                  aspectRatio: 1,
                }}
              />
            </TouchableOpacity>
          );
        }}
      />
    </View>
  );
};

export default GallerySection;
