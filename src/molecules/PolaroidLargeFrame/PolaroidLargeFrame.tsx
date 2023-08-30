import React, {useEffect} from 'react';
import {Alert, PixelRatio, TouchableOpacity} from 'react-native';
import {Gesture, GestureDetector} from 'react-native-gesture-handler';
import Animated, {
  runOnJS,
  useAnimatedStyle,
  useDerivedValue,
  useSharedValue,
  withDelay,
  withTiming,
} from 'react-native-reanimated';
import {styles} from './PolaroidLargeFrameStyles';

type PolaroidLargeFrameProps = {
  id: string;
  photo: {
    id: string;
    url: string;
  };
  tag: string;
  onPress?: () => void;
  liked?: boolean;
};

const PolaroidLargeFrame: React.FC<PolaroidLargeFrameProps> = ({
  id,
  photo,
  tag,
  onPress,
  liked,
}) => {
  const scale = useSharedValue(1);

  const longPressGesture = Gesture.LongPress()
    .onBegin(e => {
      scale.value = withTiming(0.9, {
        duration: 400,
      });
    })
    .onFinalize(e => {
      scale.value = withTiming(1, {
        duration: 400,
      });
    });

  const animatedStyles = useAnimatedStyle(() => {
    return {
      transform: [{scale: scale.value}],
    };
  });

  return (
    <GestureDetector gesture={longPressGesture}>
      <TouchableOpacity
        onLongPress={onPress}
        activeOpacity={1}
        delayLongPress={200}>
        <Animated.View
          style={[styles.container, animatedStyles]}
          sharedTransitionTag={photo.id}>
          <Animated.Image
            source={{
              uri: photo.url,
            }}
            style={[
              {
                width: '100%',
                height: PixelRatio.getPixelSizeForLayoutSize(
                  340 / PixelRatio.get(),
                ),
                resizeMode: 'contain',
              },
            ]}
            sharedTransitionTag={photo.url}
          />
        </Animated.View>
      </TouchableOpacity>
    </GestureDetector>
  );
};

export default PolaroidLargeFrame;
