import {
  BlendMode,
  Canvas,
  Group,
  ImageSVG,
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

const ShareButton = () => {
  const emptyPaint = useMemo(() => Skia.Paint(), []);
  emptyPaint.setColorFilter(
    Skia.ColorFilter.MakeBlend(Skia.Color(Colors.white), BlendMode.SrcIn),
  );
  return (
    <TouchableOpacity activeOpacity={0.7}>
      <Canvas style={{width: 33, height: 33}}>
        <Group layer={emptyPaint}>
          <ImageSVG svg={shareIcon(25, 25)} x={2} y={3} />
        </Group>
      </Canvas>
    </TouchableOpacity>
  );
};

export default ShareButton;
