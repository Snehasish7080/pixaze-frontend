import {
  BlendMode,
  Canvas,
  Group,
  ImageSVG,
  Skia,
} from '@shopify/react-native-skia';
import React, {useMemo, useState} from 'react';
import {TouchableOpacity} from 'react-native';
import {heartFilledIcon, heartIcon} from '../../assets/icons/icons';
import {Colors} from '../../utils/theme';

const HeartIconButton = () => {
  const [isLiked, setIsLiked] = useState(false);
  const paint = useMemo(() => Skia.Paint(), []);
  paint.setColorFilter(
    Skia.ColorFilter.MakeBlend(Skia.Color(Colors.heart), BlendMode.SrcIn),
  );
  const emptyPaint = useMemo(() => Skia.Paint(), []);
  emptyPaint.setColorFilter(
    Skia.ColorFilter.MakeBlend(Skia.Color(Colors.white), BlendMode.SrcIn),
  );
  return (
    <TouchableOpacity activeOpacity={0.7} onPress={() => setIsLiked(!isLiked)}>
      <Canvas style={{width: 33, height: 33}}>
        <Group>
          {isLiked && (
            <Group layer={paint}>
              <ImageSVG svg={heartFilledIcon(25, 25)} x={2} y={3} />
            </Group>
          )}
          <Group layer={emptyPaint}>
            <ImageSVG svg={heartIcon(25, 25)} x={2} y={3} />
          </Group>
        </Group>
      </Canvas>
    </TouchableOpacity>
  );
};

export default HeartIconButton;
