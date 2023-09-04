import {
  CameraRoll,
  PhotoIdentifier,
} from '@react-native-camera-roll/camera-roll';
import React, {useCallback, useEffect, useRef, useState} from 'react';
import {
  FlatList,
  Image,
  Pressable,
  TouchableOpacity,
  useWindowDimensions,
  View,
} from 'react-native';
import {
  Gesture,
  GestureDetector,
  GestureHandlerRootView,
} from 'react-native-gesture-handler';
import Animated, {
  useAnimatedStyle,
  useSharedValue,
  withTiming,
} from 'react-native-reanimated';
import {captureRef} from 'react-native-view-shot';
import AppButton from '../../atoms/AppButton/AppButton';
import {imageFile} from '../../interfaces/imageFile';
import {
  getCheckPermissionPromise,
  getRequestPermissionPromise,
} from '../../utils/permissions';
import {Colors} from '../../utils/theme';
import {styles} from './CreateScreenStyles';

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
  const {width} = useWindowDimensions();
  const [isTouchStart, setIsTouchStart] = useState(false);

  const [imageWidth, setImageWidth] = useState<number>();
  const [imageHeight, setImageHeight] = useState<number>();

  const scale = useSharedValue(1);
  const saved = useSharedValue(1);

  const pinchGesture = Gesture.Pinch()
    .onUpdate(e => {
      scale.value = Math.min(Math.max(saved.value * e.scale, 0.7), 4);
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
    if (selectedImage) {
      Image.getSize(selectedImage, (width, height) => {
        setImageWidth(width);
        setImageHeight(height);
      });
    }
  }, [selectedImage]);

  const animatedStyle = useAnimatedStyle(() => ({
    transform: [
      {scale: scale.value},
      {translateX: xTranslate.value},
      {translateY: yTranslate.value},
    ],
  }));

  const viewRef = useRef<View>(null);
  const [capturedImage, setCapturedImage] = useState<string>();

  const takeSnapshot = useCallback(async () => {
    if (!viewRef.current) {
      return null;
    }
    captureRef(viewRef, {
      format: 'png',
      quality: 1,
    }).then(
      uri => {
        setCapturedImage(uri);
      },
      error => console.error('Oops, snapshot failed', error),
    );
  }, [capturedImage]);

  return (
    <>
      <AppButton
        width={100}
        height={20}
        onPress={takeSnapshot}
        style={{zIndex: 10}}>
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
            overflow: 'hidden',
          }}
          onTouchStart={() => {
            setIsTouchStart(true);
          }}
          onTouchEnd={() => {
            setIsTouchStart(false);
          }}>
          {Boolean(capturedImage) && (
            <View
              style={{
                width: '100%',
                height: '100%',
                backgroundColor: 'transparent',
                overflow: 'hidden',
              }}>
              <Image
                source={{uri: capturedImage}}
                style={[
                  {
                    width: '100%',
                    aspectRatio: 1,
                    resizeMode: 'contain',
                  },
                ]}
              />
            </View>
          )}
          {!Boolean(capturedImage) && (
            <View
              style={[
                {
                  width: '100%',
                  height: '100%',
                  overflow: 'hidden',
                },
              ]}
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
          )}

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
