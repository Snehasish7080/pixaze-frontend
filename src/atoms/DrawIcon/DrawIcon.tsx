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

const DrawIcon = () => {
  const src = rect(0, 0, 52, 52);
  const dst = rect(0, 0, 1.8, 1.8);

  const paint = useMemo(() => Skia.Paint(), []);
  paint.setColorFilter(
    Skia.ColorFilter.MakeBlend(Skia.Color(Colors.white), BlendMode.SrcIn),
  );

  return (
    <Canvas
      style={{
        width: 20,
        height: 19,
        transform: [
          {
            rotateX: '180deg',
          },
        ],
      }}>
      <Group transform={fitbox('contain', src, dst)} layer={paint}>
        <Path
          path={`M220 483 c-30 -20 -87 -68 -126 -107 -104 -104 -121 -179 -49 -213 l34 -16 -29 -38 c-36 -44 -38 -72 -8 -93 33 -23 68 -21 68 4 0 13 -7 20 -19 20 -33 0 -33 17 0 54 39 45 34 75 -16 99 -37 18 -43 37 -22 75 21 37 97 111 175 170 67 50 81 71 56 79 -5 2 -34 -13 -64 -34z`}
        />
        <Path
          path={`M420 390 c-12 -8 -7 -17 29 -54 34 -35 48 -43 58 -34 20 16 16 31 -20 66 -35 34 -44 37 -67 22z`}
        />
        <Path
          path={`M376 352 c-3 -5 17 -30 43 -56 33 -32 51 -44 56 -36 4 7 -10 29 -36 56 -44 45 -54 50 -63 36z`}
        />
        <Path
          path={`M257 232 c-82 -83 -99 -105 -113 -151 -20 -69 -12 -77 57 -57 47 14 68 30 152 114 l97 98 -48 47 -48 47 -97 -98z m-29 -145 c2 -12 -3 -17 -17 -17 -15 0 -21 6 -21 21 0 25 33 22 38 -4z`}
        />
      </Group>
    </Canvas>
  );
};

export default DrawIcon;
