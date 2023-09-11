import React, {
  useCallback,
  useDebugValue,
  useEffect,
  useRef,
  useState,
} from 'react';
import {Image, useWindowDimensions, View} from 'react-native';
import {
  Gesture,
  GestureDetector,
  GestureHandlerRootView,
} from 'react-native-gesture-handler';
import Animated, {
  runOnJS,
  SharedValue,
  useAnimatedStyle,
  useDerivedValue,
  useSharedValue,
  withTiming,
} from 'react-native-reanimated';
import {captureRef} from 'react-native-view-shot';
import {Colors} from '../../utils/theme';
import {styles} from './CreateScreenStyles';

const IMAGE_HEIGHT = 350;
type CropperProps = {
  selectedImage: string;
  scale: SharedValue<number>;
  xTranslate: SharedValue<number>;
  yTranslate: SharedValue<number>;
};
const Cropper = React.forwardRef<any, CropperProps>(
  ({selectedImage, scale, xTranslate, yTranslate}, ref) => {
    const {width} = useWindowDimensions();
    const [isTouchStart, setIsTouchStart] = useState(false);

    const [imageWidth, setImageWidth] = useState<number>(0);
    const [imageHeight, setImageHeight] = useState<number>(0);

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

    const savedXTranslate = useSharedValue(0);
    const savedYTranslate = useSharedValue(0);

    const panGesture = Gesture.Pan()
      .onTouchesDown(() => {
        runOnJS(setIsTouchStart)(true);
      })
      .onTouchesUp(() => {
        runOnJS(setIsTouchStart)(false);
      })
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
              -((IMAGE_HEIGHT / 2) * scale.value - IMAGE_HEIGHT / 2) /
                scale.value,
            );
          } else {
            yTranslate.value = Math.min(
              savedYTranslate.value + e.translationY,
              ((IMAGE_HEIGHT / 2) * scale.value - IMAGE_HEIGHT / 2) /
                scale.value,
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
        runOnJS(setIsTouchStart)(false);
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

    return (
      <>
        <GestureHandlerRootView
          style={{
            flex: 1,
          }}>
          <Animated.View
            style={{
              width: '100%',
              height: '100%',
              position: 'relative',
              overflow: 'hidden',
              alignItems: 'center',
              justifyContent: 'center',
            }}>
            <View
              style={[
                {
                  width: '100%',
                  height: '100%',
                  backgroundColor: 'transparent',
                },
              ]}>
              {Boolean(selectedImage) && (
                <Animated.Image
                  source={{uri: selectedImage}}
                  style={[
                    {
                      width: '100%',
                      height: IMAGE_HEIGHT,
                      resizeMode:
                        imageWidth > imageHeight ? 'cover' : 'contain',
                    },
                    animatedStyle,
                  ]}
                />
              )}
            </View>

            {isTouchStart && (
              <Animated.View style={[styles.cropperGrid]}>
                {Array(12)
                  .fill(undefined)
                  .map((item, index) => {
                    return (
                      <View
                        key={index}
                        style={{
                          width: width / 4,
                          height: IMAGE_HEIGHT / 3,
                          borderWidth: 0.5,
                          borderColor: Colors.gridLine,
                        }}
                      />
                    );
                  })}
              </Animated.View>
            )}
            <GestureDetector gesture={composed}>
              <Animated.View style={[styles.cropperArea]} />
            </GestureDetector>
          </Animated.View>
        </GestureHandlerRootView>
      </>
    );
  },
);

export default Cropper;
