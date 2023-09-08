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
import React, {useMemo, useState} from 'react';
import {TouchableOpacity} from 'react-native';
import {
  commentIcon,
  heartFilledIcon,
  heartIcon,
} from '../../assets/icons/icons';
import {Colors} from '../../utils/theme';

type CommentButtonProps = {
  color?: string;
  width?: number;
  height?: number;
};
const CommentButton: React.FC<CommentButtonProps> = ({
  color = Colors.white,
  width = 25,
  height = 25,
}) => {
  const src = rect(0, 0, 16, 16);
  const dst = rect(0, 0, width, height);

  const emptyPaint = useMemo(() => Skia.Paint(), []);
  emptyPaint.setColorFilter(
    Skia.ColorFilter.MakeBlend(Skia.Color(color), BlendMode.SrcIn),
  );
  return (
    <TouchableOpacity activeOpacity={0.7}>
      <Canvas style={{width: width, height: height}}>
        <Group
          transform={fitbox('contain', src, dst)}
          layer={emptyPaint}
          style={'stroke'}
          strokeWidth={1.1}>
          <Path path="M14 10C14 10.3536 13.8595 10.6928 13.6095 10.9428C13.3594 11.1929 13.0203 11.3333 12.6667 11.3333H4.66667L2 14V3.33333C2 2.97971 2.14048 2.64057 2.39052 2.39052C2.64057 2.14048 2.97971 2 3.33333 2H12.6667C13.0203 2 13.3594 2.14048 13.6095 2.39052C13.8595 2.64057 14 2.97971 14 3.33333V10Z" />
        </Group>
      </Canvas>
    </TouchableOpacity>
  );
};

export default CommentButton;
