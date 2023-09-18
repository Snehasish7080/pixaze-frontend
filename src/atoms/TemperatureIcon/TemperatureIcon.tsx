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

const TemperatureIcon = () => {
  const src = rect(0, 0, 1024, 1024);
  const dst = rect(0, 0, 18, 18);

  const paint = useMemo(() => Skia.Paint(), []);
  paint.setColorFilter(
    Skia.ColorFilter.MakeBlend(Skia.Color(Colors.dark), BlendMode.SrcIn),
  );
  const emptyPaint = useMemo(() => Skia.Paint(), []);
  emptyPaint.setColorFilter(
    Skia.ColorFilter.MakeBlend(Skia.Color(Colors.blurTabBtn), BlendMode.SrcIn),
  );
  return (
    <Canvas style={{width: 18, height: 18}}>
      <Group transform={fitbox('contain', src, dst)} layer={paint}>
        <Path path="M691.6 231.4H655c-10.9 0-19.8-8.9-19.8-19.8s8.9-19.8 19.8-19.8h36.6c10.9 0 19.8 8.9 19.8 19.8s-8.9 19.8-19.8 19.8zM691.6 305.7H655c-10.9 0-19.8-8.9-19.8-19.8s8.9-19.8 19.8-19.8h36.6c10.9 0 19.8 8.9 19.8 19.8s-8.9 19.8-19.8 19.8zM691.6 380H655c-10.9 0-19.8-8.9-19.8-19.8s8.9-19.8 19.8-19.8h36.6c10.9 0 19.8 8.9 19.8 19.8 0 10.8-8.9 19.8-19.8 19.8z" />
        <Path path="M603.3 589.7V159.5c0-51.9-42.2-94.1-94.1-94.1-51.9 0-94.1 42.2-94.1 94.1v430.2c-61 33.4-102.4 98.2-102.4 172.5 0 108.4 88.2 196.5 196.5 196.5s196.5-88.2 196.5-196.5c0-74.3-41.5-139.1-102.4-172.5z m-94.2 327.7c-85.6 0-155.3-69.7-155.3-155.3 0-50.3 24-95 61.2-123.4 12.4-9.5 26.3-17.2 41.2-22.6V159.5c0-29.2 23.7-52.9 52.9-52.9s52.9 23.7 52.9 52.9V616.1c14.9 5.4 28.8 13.1 41.2 22.6 37.1 28.4 61.2 73.1 61.2 123.4 0 85.7-69.6 155.3-155.3 155.3z" />
        <Path path="M509.4 766.5m-83.3 0a83.3 83.3 0 1 0 166.6 0 83.3 83.3 0 1 0-166.6 0Z" />
        <Path path="M613.3 767.2c-9.5-1.8-18.7 3.7-21.7 12.7-6.4 39.6-40.8 69.9-82.2 69.9-46 0-83.3-37.3-83.3-83.3s37.3-83.3 83.3-83.3c6.7 0 13.2 0.8 19.4 2.3 0.1-0.8 0.2-1.6 0.2-2.3V207.7c0-10.5-8.6-19-19-19-10.5 0-19 8.6-19 19v440.1c-0.9 0-1.9 0.1-2.8 0.3-49 9.1-86.8 46.6-96.3 95.5-12.7 65.2 30.1 128.6 95.3 141.2 7.7 1.5 15.4 2.2 23 2.2 56.5 0 107.1-40 118.2-97.5 1.9-10.3-4.8-20.3-15.1-22.3z" />
      </Group>
    </Canvas>
  );
};

export default TemperatureIcon;
