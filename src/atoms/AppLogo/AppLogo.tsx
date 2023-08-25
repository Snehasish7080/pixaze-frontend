import {View, Text} from 'react-native';
import React, {useMemo} from 'react';
import {
  BlendMode,
  Canvas,
  fitbox,
  Group,
  ImageSVG,
  rect,
  Skia,
  useSVG,
} from '@shopify/react-native-skia';
import {Colors} from '../../utils/theme';

const width = 60;
const height = 60;

const AppLogo = () => {
  const Logo = useSVG(require('../../assets/icons/Logo.svg'));

  const paint = useMemo(() => Skia.Paint(), []);
  paint.setColorFilter(
    Skia.ColorFilter.MakeBlend(Skia.Color(Colors.primary), BlendMode.SrcIn),
  );

  if (!Logo) {
    return null;
  }

  const src = rect(0, 0, Logo.width(), Logo.height());
  const dst = rect(0, 0, width, height);

  return (
    <Canvas style={{width: width, height: height, marginBottom: 10}}>
      <Group transform={fitbox('contain', src, dst)} layer={paint}>
        <ImageSVG svg={Logo} width={100} height={100} />
      </Group>
    </Canvas>
  );
};

export default AppLogo;
