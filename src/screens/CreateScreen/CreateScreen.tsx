import React, {useCallback, useEffect, useRef, useState} from 'react';
import {
  FlatList,
  Image,
  PermissionsAndroid,
  Platform,
  Pressable,
  StyleSheet,
  TouchableOpacity,
  useWindowDimensions,
  View,
} from 'react-native';
import {Camera, useCameraDevices} from 'react-native-vision-camera';
import AppText from '../../atoms/AppText/AppText';
import {
  CameraRoll,
  PhotoIdentifier,
} from '@react-native-camera-roll/camera-roll';
import {styles} from './CreateScreenStyles';
import {
  getCheckPermissionPromise,
  getRequestPermissionPromise,
} from '../../utils/permissions';
import {imageFile} from '../../interfaces/imageFile';
import {
  Canvas,
  DataSourceParam,
  Group,
  Image as SkiaImage,
  processTransform2d,
  Skia,
  SkImage,
  useImage,
  processTransform,
  useValue,
  useSharedValueEffect,
  makeImageFromView,
} from '@shopify/react-native-skia';
import Animated, {
  useAnimatedStyle,
  useDerivedValue,
  useSharedValue,
  withTiming,
} from 'react-native-reanimated';
import {Colors} from '../../utils/theme';
import {
  Gesture,
  GestureDetector,
  GestureHandlerRootView,
} from 'react-native-gesture-handler';
import {
  identity4,
  Matrix4,
  mix,
  multiply4,
  toMatrix3,
} from 'react-native-redash';
import {concat, vec3} from './MatrixHelper';
import AppButton from '../../atoms/AppButton/AppButton';

const CreateScreen = () => {
  const [permissionGranted, setPermissionGranted] = useState<boolean>(false);
  const [medias, setMedias] = useState<PhotoIdentifier[]>([]);
  const [selectedMedia, setSelectedMedia] = useState<imageFile>();
  // const devices = useCameraDevices();
  // const device = devices.back;

  // if (device == null) return <AppText lineHeight={14}>Loading ....</AppText>;
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
      setSelectedMedia(medias[0].node.image);
    }
  }, [medias]);

  return (
    <View style={styles.container}>
      {/* <Camera style={StyleSheet.absoluteFill} device={device} isActive={true} /> */}
      <View style={styles.imageCropper}>
        {/* {Boolean(selectedMedia?.uri) && ( */}
        <Cropper selectedImage={selectedMedia?.uri || ''} />
        {/* )} */}
      </View>
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
                  setSelectedMedia(item.node.image);
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
    </View>
  );
};

type CropperProps = {
  selectedImage: string;
};
const Cropper = ({selectedImage}: CropperProps) => {
  const image = useImage(encodeURI(selectedImage));
  const {width} = useWindowDimensions();
  const [isTouchStart, setIsTouchStart] = useState(false);

  const [imageWidth, setImageWidth] = useState<number>();
  const [imageHeight, setImageHeight] = useState<number>();

  const scale = useSharedValue(1);
  const saved = useSharedValue(1);

  const pinchGesture = Gesture.Pinch()
    .onUpdate(e => {
      scale.value = Math.min(Math.max(saved.value * e.scale, 0.7), 3);
    })
    .onEnd(() => {
      if (scale.value < 1) {
        scale.value = withTiming(1);
        saved.value = 1;
      } else {
        saved.value = scale.value;
      }
    });

  const xTranslate = useSharedValue(0);
  const yTranslate = useSharedValue(0);

  const savedXTranslate = useSharedValue(0);
  const savedYTranslate = useSharedValue(0);

  const panGesture = Gesture.Pan()
    .onUpdate(e => {
      if (scale.value >= 1) {
        if (e.translationX < 0) {
          xTranslate.value = Math.max(
            savedXTranslate.value + e.translationX,
            -((width / 2) * scale.value - width / 2) / scale.value,
          );
        } else {
          xTranslate.value = Math.min(
            savedXTranslate.value + e.translationX,
            ((width / 2) * scale.value - width / 2) / scale.value,
          );
        }
        if (e.translationY < 0) {
          yTranslate.value = Math.max(
            savedYTranslate.value + e.translationY,
            -((width / 2) * scale.value - width / 2) / scale.value,
          );
        } else {
          yTranslate.value = Math.min(
            savedYTranslate.value + e.translationY,
            ((width / 2) * scale.value - width / 2) / scale.value,
          );
        }
      }
    })
    .onEnd(e => {
      if (scale.value >= 1) {
        savedXTranslate.value = xTranslate.value;
        savedYTranslate.value = yTranslate.value;
      } else {
        xTranslate.value = withTiming(0);
        yTranslate.value = withTiming(0);
        savedXTranslate.value = 0;
        savedYTranslate.value = 0;
      }
    });

  const composed = Gesture.Simultaneous(panGesture, pinchGesture);

  useEffect(() => {
    if (image) {
      Image.getSize(selectedImage, (width, height) => {
        setImageWidth(width);
        setImageHeight(height);
      });
    }
  }, [image]);

  const animatedStyle = useAnimatedStyle(() => ({
    transform: [
      {scale: scale.value},
      {translateX: xTranslate.value},
      {translateY: yTranslate.value},
    ],
  }));

  const viewRef = useRef<View>(null);
  const [skiImage, setSkiaImage] = useState<SkImage | null>(null);

  const takeSnapshot = useCallback(async () => {
    if (!viewRef.current) {
      return null;
    }
    // Take the snapshot of the view
    const snapshot = await makeImageFromView(viewRef);
    setSkiaImage(snapshot);
  }, [skiImage]);

  return (
    <>
      <AppButton width={100} height={20} onPress={takeSnapshot}>
        Click
      </AppButton>
      <GestureHandlerRootView
        style={{
          flex: 1,
        }}>
        <Pressable
          style={{
            width: '100%',
            height: '100%',
            position: 'relative',
          }}
          onTouchStart={() => {
            setIsTouchStart(true);
          }}
          onTouchEnd={() => {
            setIsTouchStart(false);
          }}>
          {Boolean(skiImage) && (
            <Canvas
              style={{
                width: '100%',
                height: '100%',
              }}>
              {skiImage && (
                <Group>
                  <SkiaImage
                    image={skiImage}
                    fit="contain"
                    x={0}
                    y={0}
                    width={width}
                    height={width}
                  />
                </Group>
              )}
            </Canvas>
          )}

          <View
            style={{
              width: width,
              height: width,
            }}
            ref={viewRef}>
            <Animated.Image
              source={{uri: selectedImage}}
              style={[
                {
                  width: '100%',
                  aspectRatio: 1,
                  resizeMode: 'contain',
                },
                animatedStyle,
              ]}
            />
          </View>

          <GestureDetector gesture={composed}>
            <Animated.View style={[styles.cropperGrid]}>
              {Array(12)
                .fill(undefined)
                .map((item, index) => {
                  return (
                    <View
                      key={index}
                      style={{
                        width: width / 4,
                        height: width / 3,
                        borderWidth: 0.5,
                        borderColor: Colors.gridLine,
                      }}
                    />
                  );
                })}
            </Animated.View>
          </GestureDetector>
        </Pressable>
      </GestureHandlerRootView>
    </>
  );
};

export default CreateScreen;
