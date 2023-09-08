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

const LocationIcon = () => {
  const src = rect(0, 0, 30, 30);
  const dst = rect(18, 18, 1.85, 1.85);

  const paint = useMemo(() => Skia.Paint(), []);
  paint.setColorFilter(
    Skia.ColorFilter.MakeBlend(
      Skia.Color(Colors.locationColor),
      BlendMode.SrcIn,
    ),
  );
  const emptyPaint = useMemo(() => Skia.Paint(), []);
  emptyPaint.setColorFilter(
    Skia.ColorFilter.MakeBlend(Skia.Color(Colors.blurTabBtn), BlendMode.SrcIn),
  );
  return (
    <Canvas style={{width: 16, height: 23}}>
      <Group transform={fitbox('contain', src, dst)} layer={paint}>
        <Path
          path="M98 264 c-30 -16 -58 -61 -58 -94 0 -31 18 -61 60 -100 20 -19 40 -42 43 -50 6 -13 8 -13 14 0 3 8 23 31 43 50 62 58 73 96 45 150 -28 54 -94 74 -147 44z m77 -94 c0 -18 -6 -26 -23 -28 -13 -2 -25 3 -28 12 -10 26 4 48 28 44 17 -2 23 -10 23 -28z"
          transform={[
            {
              rotate: 3.1,
            },
          ]}
        />
      </Group>
    </Canvas>
  );
};

export default LocationIcon;
