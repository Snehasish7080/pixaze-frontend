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

const OptionIcon: React.FC = () => {
  const src = rect(0, 0, 23, 5);
  const dst = rect(0, 0, 20, 4);

  const paint = useMemo(() => Skia.Paint(), []);
  paint.setColorFilter(
    Skia.ColorFilter.MakeBlend(Skia.Color(Colors.dark), BlendMode.SrcIn),
  );
  return (
    <Canvas style={{width: 23, height: 5}}>
      <Group transform={fitbox('contain', src, dst)} layer={paint}>
        <Path path="M11.5 5C12.8807 5 14 3.88071 14 2.5C14 1.11929 12.8807 0 11.5 0C10.1193 0 9 1.11929 9 2.5C9 3.88071 10.1193 5 11.5 5Z" />
        <Path path="M20.5 5C21.8807 5 23 3.88071 23 2.5C23 1.11929 21.8807 0 20.5 0C19.1193 0 18 1.11929 18 2.5C18 3.88071 19.1193 5 20.5 5Z" />
        <Path path="M2.5 5C3.88071 5 5 3.88071 5 2.5C5 1.11929 3.88071 0 2.5 0C1.11929 0 0 1.11929 0 2.5C0 3.88071 1.11929 5 2.5 5Z" />
      </Group>
    </Canvas>
  );
};

export default OptionIcon;
