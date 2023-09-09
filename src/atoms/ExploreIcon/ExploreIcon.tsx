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

type ExploreIconProps = {
  isFocused?: boolean;
};
const ExploreIcon: React.FC<ExploreIconProps> = ({isFocused}) => {
  const src = rect(0, 0, 122.88, 122.88);
  const dst = rect(0, 0, 19, 19);

  const paint = useMemo(() => Skia.Paint(), []);
  paint.setColorFilter(
    Skia.ColorFilter.MakeBlend(Skia.Color(Colors.dark), BlendMode.SrcIn),
  );
  const emptyPaint = useMemo(() => Skia.Paint(), []);
  emptyPaint.setColorFilter(
    Skia.ColorFilter.MakeBlend(Skia.Color(Colors.blurTabBtn), BlendMode.SrcIn),
  );
  return (
    <Canvas style={{width: 20, height: 19}}>
      <Group
        transform={fitbox('contain', src, dst)}
        layer={isFocused ? paint : emptyPaint}>
        <Path path="M61.44,0A61.46,61.46,0,1,1,18,18,61.21,61.21,0,0,1,61.44,0ZM77,57.42l-7.23,4.11a7.56,7.56,0,0,1-.25,1.57,8,8,0,0,1-9.75,5.63,8.19,8.19,0,0,1-1.58-.61l-7.66,4.36L81.43,95.23,77,57.42ZM46.55,65.88l7.37-4.19A7.86,7.86,0,0,1,54.16,59a8,8,0,0,1,9.75-5.63,8.28,8.28,0,0,1,2.55,1.2L73,50.82,42.14,28.07l4.41,37.81ZM95.36,27.52a48,48,0,1,0,14,33.92,47.82,47.82,0,0,0-14-33.92Z" />
      </Group>
    </Canvas>
  );
};

export default ExploreIcon;
