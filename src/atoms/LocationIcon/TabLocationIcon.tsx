import {
  BlendMode,
  Canvas,
  fitbox,
  Group,
  LinearGradient,
  Path,
  rect,
  Skia,
  vec,
} from '@shopify/react-native-skia';
import React, {useMemo} from 'react';
import {Colors} from '../../utils/theme';

type TabLocationIconProps = {
  isFocused?: boolean;
  width?: number;
  height?: number;
};
const TabLocationIcon: React.FC<TabLocationIconProps> = ({
  isFocused,
  width = 16,
  height = 18,
}) => {
  const src = rect(0, 0, 14, 17);
  const dst = rect(0, 0, width, height);

  const paint = useMemo(() => Skia.Paint(), []);
  paint.setColorFilter(
    Skia.ColorFilter.MakeBlend(Skia.Color(Colors.dark), BlendMode.SrcIn),
  );
  const emptyPaint = useMemo(() => Skia.Paint(), []);
  emptyPaint.setColorFilter(
    Skia.ColorFilter.MakeBlend(Skia.Color(Colors.blurTabBtn), BlendMode.SrcIn),
  );

  return (
    <Canvas style={{width: width, height: height + 1}}>
      <Group
        transform={fitbox('contain', src, dst)}
        layer={isFocused ? paint : emptyPaint}>
        <Path path="M6.99991 0C3.14032 0 -2.02894e-05 3.05065 -2.02894e-05 6.79575C-0.025395 12.274 6.73391 16.8164 6.99991 17C6.99991 17 14.0252 12.274 13.9998 6.8C13.9998 3.05065 10.8595 0 6.99991 0ZM6.99991 10.2C5.06618 10.2 3.49994 8.6785 3.49994 6.8C3.49994 4.9215 5.06618 3.4 6.99991 3.4C8.93364 3.4 10.4999 4.9215 10.4999 6.8C10.4999 8.6785 8.93364 10.2 6.99991 10.2Z" />
      </Group>
    </Canvas>
  );
};

export default TabLocationIcon;
