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

const TintIcon = () => {
  const src = rect(0, 0, 32, 32);
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
        <Path path="M 16 3.4375 L 15.21875 4.375 C 15.21875 4.375 13.21875 6.785156 11.1875 9.78125 C 10.171875 11.28125 9.125 12.917969 8.34375 14.5 C 7.5625 16.082031 7 17.597656 7 19 C 7 23.945313 11.054688 28 16 28 C 20.945313 28 25 23.945313 25 19 C 25 17.597656 24.4375 16.082031 23.65625 14.5 C 22.875 12.917969 21.828125 11.28125 20.8125 9.78125 C 18.78125 6.785156 16.78125 4.375 16.78125 4.375 Z M 16 6.65625 C 16.558594 7.347656 17.605469 8.574219 19.1875 10.90625 C 20.171875 12.355469 21.125 13.953125 21.84375 15.40625 C 22.5625 16.859375 23 18.203125 23 19 C 23 22.855469 19.855469 26 16 26 C 12.144531 26 9 22.855469 9 19 C 9 18.203125 9.4375 16.859375 10.15625 15.40625 C 10.875 13.953125 11.828125 12.355469 12.8125 10.90625 C 14.394531 8.574219 15.441406 7.347656 16 6.65625 Z M 11 19 C 11 21.746094 13.253906 24 16 24 L 16 22 C 14.34375 22 13 20.65625 13 19 Z" />
      </Group>
    </Canvas>
  );
};

export default TintIcon;
