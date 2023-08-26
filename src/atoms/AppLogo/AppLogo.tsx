import {
  Canvas,
  fitbox,
  Group,
  LinearGradient,
  Path,
  rect,
  vec,
} from '@shopify/react-native-skia';
import React from 'react';
import {Colors} from '../../utils/theme';

const width = 60;
const height = 60;

const AppLogo = () => {
  const src = rect(0, 0, 415, 701);
  const dst = rect(0, 0, width, height);
  return (
    <Canvas style={{width: width, height: height, marginBottom: 10}}>
      <Group transform={fitbox('contain', src, dst)}>
        <LinearGradient
          start={vec(256, 256)}
          end={vec(0, 0)}
          colors={[Colors.primary, Colors.secondary]}
        />
        <Path path="M0.117188 114.804V0.833984H412.839V114.804H373.795V39.8781H39.1613V114.804H0.117188ZM0.117188 581.763V695.733H412.839V581.763H373.795V656.689H39.1613V581.763H0.117188Z" />
        <Path
          path="M141.669 433.758H0.158691V0.808105H141.669V433.758ZM269.283 87.2645H164.519V0.808105H326.341L412.798 87.2645V235.724L326.341 322.447H164.519V235.724H269.283V87.2645Z"
          transform={[{translateY: 130}]}
        />
      </Group>
    </Canvas>
  );
};

export default AppLogo;
