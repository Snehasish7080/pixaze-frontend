import {
  BlendMode,
  Canvas,
  Group,
  ImageSVG,
  Skia,
} from '@shopify/react-native-skia';
import React, {useMemo} from 'react';
import {TouchableOpacity} from 'react-native';
import {backIcon} from '../../assets/icons/icons';
import {Colors} from '../../utils/theme';

type BackButtonProps = {onPress: () => void};
const BackButton = ({onPress}: BackButtonProps) => {
  const paint = useMemo(() => Skia.Paint(), []);
  paint.setColorFilter(
    Skia.ColorFilter.MakeBlend(Skia.Color(Colors.dark), BlendMode.SrcIn),
  );
  return (
    <TouchableOpacity
      activeOpacity={0.7}
      onPress={onPress}
      style={{
        width: 30,
        height: '70%',
        justifyContent: 'center',
      }}>
      <Canvas
        style={{
          width: 14,
          height: 13,
        }}>
        <Group>
          <Group layer={paint}>
            <ImageSVG svg={backIcon} x={0} y={0} width={14} height={13} />
          </Group>
        </Group>
      </Canvas>
    </TouchableOpacity>
  );
};

export default BackButton;
