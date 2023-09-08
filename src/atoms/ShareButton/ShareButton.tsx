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
  shareIcon,
} from '../../assets/icons/icons';
import {Colors} from '../../utils/theme';

type ShareButtonProps = {
  color?: string;
  width?: number;
  height?: number;
};
const ShareButton: React.FC<ShareButtonProps> = ({
  color = Colors.white,
  width = 25,
  height = 25,
}) => {
  const src = rect(0, 0, 16, 17);
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
          strokeWidth={1.2}>
          <Path path="M8 0.916748V10.5001" />
          <Path path="M8 0.916748L11.75 5.08341" />
          <Path path="M4.24984 5.08333L7.99984 0.916659" />
          <Path path="M1.33325 8.8335V13.0002C1.33325 14.3809 2.45254 15.5002 3.83325 15.5002H12.1666C13.5473 15.5002 14.6666 14.3809 14.6666 13.0002V8.8335" />
        </Group>
      </Canvas>
    </TouchableOpacity>
  );
};

export default ShareButton;
