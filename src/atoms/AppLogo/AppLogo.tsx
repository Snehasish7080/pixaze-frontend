import {View, Text} from 'react-native';
import React, {useMemo} from 'react';
import {
  BlendMode,
  Canvas,
  fitbox,
  Group,
  ImageSVG,
  LinearGradient,
  Path,
  rect,
  Skia,
  useSVG,
  vec,
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
      {/* <Group transform={fitbox('contain', src, dst)} layer={paint}>
        <ImageSVG svg={Logo} width={100} height={100} />
      </Group> */}
      <Group transform={fitbox('contain', src, dst)}>
        <LinearGradient
          start={vec(256, 0)}
          end={vec(0, 256)}
          colors={[Colors.primary, Colors.secondary]}
        />
        <Path path="M0.117188 114.804V0.833984H412.839V114.804H373.795V39.8781H39.1613V114.804H0.117188ZM0.117188 581.763V695.733H412.839V581.763H373.795V656.689H39.1613V581.763H0.117188Z" />
        <Path
          path="M141.669 433.758H0.158691V0.808105H141.669V433.758ZM269.283 87.2645H164.519V0.808105H326.341L412.798 87.2645V235.724L326.341 322.447H164.519V235.724H269.283V87.2645Z"
          transform={fitbox(
            'contain',
            rect(0, 0, 434, 434),
            rect(0, 0, 434, 434),
          )}
        />
      </Group>
    </Canvas>
  );
};

export default AppLogo;
