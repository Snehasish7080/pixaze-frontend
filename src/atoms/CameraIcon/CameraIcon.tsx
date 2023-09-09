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

type CameraIconProps = {
  color?: string;
};
const CameraIcon: React.FC<CameraIconProps> = ({color = Colors.dark}) => {
  const src = rect(0, 0, 24, 24);
  const dst = rect(0, 0, 20, 20);

  const paint = useMemo(() => Skia.Paint(), []);
  paint.setColorFilter(
    Skia.ColorFilter.MakeBlend(Skia.Color(color), BlendMode.SrcIn),
  );

  return (
    <Canvas style={{width: 20, height: 20}}>
      <Group
        transform={fitbox('contain', src, dst)}
        layer={paint}
        style="stroke"
        strokeWidth={1.5}>
        <Path path="M22 19C22 19.5304 21.7893 20.0391 21.4142 20.4142C21.0391 20.7893 20.5304 21 20 21H4C3.46957 21 2.96086 20.7893 2.58579 20.4142C2.21071 20.0391 2 19.5304 2 19V8C2 6.9 2.9 6 4 6H7L9 3H15L17 6H20C20.5304 6 21.0391 6.21072 21.4142 6.58579C21.7893 6.96086 22 7.46957 22 8V19Z" />
        <Path path="M11.9998 17C14.2089 17 15.9998 15.2091 15.9998 13C15.9998 10.7909 14.2089 9 11.9998 9C9.79062 9 7.99976 10.7909 7.99976 13C7.99976 15.2091 9.79062 17 11.9998 17Z" />
      </Group>
    </Canvas>
  );
};

export default CameraIcon;
