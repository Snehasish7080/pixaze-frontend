import {
  BlendMode,
  Canvas,
  fitbox,
  Group,
  ImageSVG,
  Path,
  rect,
  Skia,
} from '@shopify/react-native-skia';
import React, {useEffect, useMemo, useState} from 'react';
import {TouchableOpacity, Vibration} from 'react-native';
import {heartFilledIcon, heartIcon} from '../../assets/icons/icons';
import {Colors} from '../../utils/theme';

type HeartIconButtonProps = {
  liked?: boolean;
  handleLiked?: () => void;
  color?: string;
  width?: number;
  height?: number;
};
const HeartIconButton: React.FC<HeartIconButtonProps> = ({
  liked,
  handleLiked,
  color = Colors.white,
  width = 25,
  height = 25,
}) => {
  const [isLiked, setIsLiked] = useState(false);

  const src = rect(0, 0, 22, 20);
  const dst = rect(0, 0, width, height);

  const paint = useMemo(() => Skia.Paint(), []);
  paint.setColorFilter(
    Skia.ColorFilter.MakeBlend(Skia.Color(Colors.heart), BlendMode.SrcIn),
  );
  const emptyPaint = useMemo(() => Skia.Paint(), []);
  emptyPaint.setColorFilter(
    Skia.ColorFilter.MakeBlend(Skia.Color(color), BlendMode.SrcIn),
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
      }}>
      <Canvas
        style={{
          width: width,
          height: height,
        }}>
        <Group
          transform={fitbox('contain', src, dst)}
          layer={liked ? paint : emptyPaint}
          style={liked ? 'fill' : 'stroke'}
          strokeWidth={1.5}>
          <Path path="M6 1.08325C3.239 1.08325 1 3.29925 1 6.03325C1 8.24025 1.875 13.4783 10.488 18.7733C10.6423 18.8671 10.8194 18.9168 11 18.9168C11.1806 18.9168 11.3577 18.8671 11.512 18.7733C20.125 13.4783 21 8.24025 21 6.03325C21 3.29925 18.761 1.08325 16 1.08325C13.239 1.08325 11 4.08325 11 4.08325C11 4.08325 8.761 1.08325 6 1.08325Z" />
        </Group>
      </Canvas>
    </TouchableOpacity>
  );
};

export default HeartIconButton;
