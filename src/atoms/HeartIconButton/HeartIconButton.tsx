import {
  BlendMode,
  Canvas,
  Group,
  ImageSVG,
  Skia,
  vec,
} from '@shopify/react-native-skia';
import React, {useEffect, useMemo, useState} from 'react';
import {TouchableOpacity, Vibration} from 'react-native';
import {
  useSharedValue,
  withRepeat,
  withSpring,
  withTiming,
} from 'react-native-reanimated';
import {heartFilledIcon, heartIcon} from '../../assets/icons/icons';
import {Colors} from '../../utils/theme';

const HeartIconButton = () => {
  const [isLiked, setIsLiked] = useState(false);

  const width = useSharedValue(0);
  const height = useSharedValue(0);

  const paint = useMemo(() => Skia.Paint(), []);
  paint.setColorFilter(
    Skia.ColorFilter.MakeBlend(Skia.Color(Colors.heart), BlendMode.SrcIn),
  );
  const emptyPaint = useMemo(() => Skia.Paint(), []);
  emptyPaint.setColorFilter(
    Skia.ColorFilter.MakeBlend(Skia.Color(Colors.white), BlendMode.SrcIn),
  );

  useEffect(() => {
    if (isLiked) {
      width.value = withSpring(25, {
        mass: 1,
        damping: 10,
        stiffness: 100,
        overshootClamping: false,
        restDisplacementThreshold: 0.01,
        restSpeedThreshold: 2,
      });
      height.value = withSpring(25, {
        mass: 1,
        damping: 10,
        stiffness: 100,
        overshootClamping: false,
        restDisplacementThreshold: 0.01,
        restSpeedThreshold: 2,
      });
    } else {
      width.value = 0;
      height.value = 0;
    }
  }, [width, height, isLiked]);
  return (
    <TouchableOpacity
      activeOpacity={0.7}
      onPress={() => {
        setIsLiked(!isLiked);
        Vibration.vibrate(1);
      }}
      style={{
        width: 33,
        height: 33,
      }}>
      <Canvas
        style={{
          width: 50,
          height: 50,
          position: 'absolute',
          alignSelf: 'center',
          top: -9,
        }}>
        <Group>
          {isLiked && (
            <Group layer={paint}>
              <ImageSVG
                svg={heartFilledIcon()}
                x={13.5}
                y={10.5}
                width={width}
                height={height}
              />
            </Group>
          )}
          <Group layer={emptyPaint}>
            <ImageSVG
              svg={heartIcon()}
              x={13.5}
              y={10.5}
              width={25}
              height={25}
            />
          </Group>
        </Group>
      </Canvas>
    </TouchableOpacity>
  );
};

export default HeartIconButton;
