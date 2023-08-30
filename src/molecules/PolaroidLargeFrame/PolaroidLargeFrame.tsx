import React from 'react';
import {Alert, PixelRatio} from 'react-native';
import {Gesture, GestureDetector} from 'react-native-gesture-handler';
import Animated, {
  useAnimatedStyle,
  useSharedValue,
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
};

const PolaroidLargeFrame: React.FC<PolaroidLargeFrameProps> = ({
  id,
  photo,
  tag,
}) => {
  const scale = useSharedValue(1);

  const longPressGesture = Gesture.LongPress()
    .onBegin(e => {
      scale.value = withTiming(0.9, {
        duration: 400,
      });
    })
    .onFinalize(() => {
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
                350 / PixelRatio.get(),
              ),
              resizeMode: 'contain',
            },
          ]}
          sharedTransitionTag={photo.url}
        />
      </Animated.View>
    </GestureDetector>
  );
};

export default PolaroidLargeFrame;
