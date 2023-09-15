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

type ExposureIconProps = {
  width?: number;
  height?: number;
};
const ExposureIcon: React.FC<ExposureIconProps> = ({
  height = 50,
  width = 50,
}) => {
  const src = rect(0, 0, 50, 50);
  const dst = rect(0, 0, 3, 3);

  const paint = useMemo(() => Skia.Paint(), []);
  paint.setColorFilter(
    Skia.ColorFilter.MakeBlend(Skia.Color(Colors.dark), BlendMode.SrcIn),
  );

  return (
    <Canvas style={{width: width, height: height + 1}}>
      <Group transform={fitbox('contain', src, dst)} layer={paint}>
        <Path
          path={`M56 444 c-24 -23 -24 -365 0 -388 23 -24 365 -24 388 0 24 23 24 365 0 388 -23 24 -365 24 -388 0z m189 -184 l-180 -180 -3 167 c-1 92 0 173 2 180 4 10 47 13 183 13 l178 0 -180 -180z m191 -187 c-4 -10 -47 -13 -183 -13 l-178 0 180 180 180 180 3 -167 c1 -92 0 -173 -2 -180z`}
        />
        <Path
          path={`M150 380 c0 -27 -3 -30 -30 -30 -16 0 -30 -4 -30 -10 0 -5 14 -10 30 -10 27 0 30 -3 30 -30 0 -16 5 -30 10 -30 6 0 10 14 10 30 0 27 3 30 30 30 17 0 30 5 30 10 0 6 -13 10 -30 10 -27 0 -30 3 -30 30 0 17 -4 30 -10 30 -5 0 -10 -13 -10 -30z`}
        />
        <Path
          path={`M270 160 c0 -6 30 -10 70 -10 40 0 70 4 70 10 0 6 -30 10 -70 10 -40 0 -70 -4 -70 -10z`}
        />
      </Group>
    </Canvas>
  );
};

export default ExposureIcon;
