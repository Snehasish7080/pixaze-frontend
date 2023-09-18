import {
  BlendMode,
  Canvas,
  fitbox,
  Group,
  Path,
  rect,
  Skia,
} from '@shopify/react-native-skia';
import React, {useMemo} from 'react';
import {Colors} from '../../utils/theme';

const ContrastIcon = () => {
  const src = rect(0, 0, 24, 24);
  const dst = rect(0, 0, 16, 16);

  const paint = useMemo(() => Skia.Paint(), []);
  paint.setColorFilter(
    Skia.ColorFilter.MakeBlend(Skia.Color(Colors.dark), BlendMode.SrcIn),
  );
  const emptyPaint = useMemo(() => Skia.Paint(), []);
  emptyPaint.setColorFilter(
    Skia.ColorFilter.MakeBlend(Skia.Color(Colors.blurTabBtn), BlendMode.SrcIn),
  );
  return (
    <Canvas style={{width: 16, height: 16}}>
      <Group transform={fitbox('contain', src, dst)} layer={paint}>
        <Path path="M12 2.2a9.8 9.8 0 1 0 9.8 9.8A9.81 9.81 0 0 0 12 2.2zM3.2 12A8.81 8.81 0 0 1 12 3.2v17.6A8.81 8.81 0 0 1 3.2 12z" />
      </Group>
    </Canvas>
  );
};

export default ContrastIcon;
