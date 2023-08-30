import {
  BlendMode,
  Canvas,
  Group,
  ImageSVG,
  Skia,
} from '@shopify/react-native-skia';
import React, {useEffect, useMemo, useState} from 'react';
import {TouchableOpacity, Vibration} from 'react-native';
import {heartFilledIcon, heartIcon} from '../../assets/icons/icons';
import {Colors} from '../../utils/theme';

type HeartIconButtonProps = {
  liked?: boolean;
  handleLiked?: () => void;
};
const HeartIconButton: React.FC<HeartIconButtonProps> = ({
  liked,
  handleLiked,
}) => {
  const [isLiked, setIsLiked] = useState(false);

  const paint = useMemo(() => Skia.Paint(), []);
  paint.setColorFilter(
    Skia.ColorFilter.MakeBlend(Skia.Color(Colors.heart), BlendMode.SrcIn),
  );
  const emptyPaint = useMemo(() => Skia.Paint(), []);
  emptyPaint.setColorFilter(
    Skia.ColorFilter.MakeBlend(Skia.Color(Colors.white), BlendMode.SrcIn),
  );

  useEffect(() => {
    if (liked !== undefined) {
      setIsLiked(liked);
    }
  }, [liked]);

  return (
    <TouchableOpacity
      activeOpacity={0.7}
      onPress={() => {
        if (handleLiked) {
          handleLiked();
        } else {
          setIsLiked(!isLiked);
          Vibration.vibrate(1);
        }
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
                width={25}
                height={25}
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
