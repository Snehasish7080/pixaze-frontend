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

const SaturateIcon = () => {
  const src = rect(-1.5, 0, 15, 15);
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
        <Path
          path="M392.54029,248.622619 C391.919172,247.841981 391.241067,247.124106 390.63952,246.594006 C390.375508,246.361352 389.889452,246 390,246 C390.110548,246 389.624492,246.361352 389.36048,246.594006 C388.758933,247.124106 388.080828,247.841981 387.45971,248.622619 C385.937499,250.535776 385,252.487925 385,254 C385,256.808331 387.210659,259 390,259 C392.789341,259 395,256.808331 395,254 C395,252.487925 394.062501,250.535776 392.54029,248.622619 Z M390,260 C386.686292,260 384,257.388328 384,254 C384,250 389.13916,245 390,245 C390.86084,245 396,250 396,254 C396,257.388328 393.313708,260 390,260 Z"
          fillType={'evenOdd'}
          transform={[{translateX: -384}, {translateY: -245}]}
        />
      </Group>
    </Canvas>
  );
};

export default SaturateIcon;
