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

type CreateIconProps = {
  isFocused?: boolean;
};
const CreateIcon: React.FC<CreateIconProps> = ({isFocused}) => {
  const src = rect(0, 0, 18, 20);
  const dst = rect(0, 0, 18, 20);
  return (
    <Canvas style={{width: 20, height: 20}}>
      <Group transform={fitbox('contain', src, dst)}>
        <LinearGradient
          start={vec(1, 0)}
          end={vec(14, 20)}
          colors={[
            isFocused ? Colors.primaryExtraLight : Colors.primaryLight,
            isFocused ? Colors.secondary : Colors.secondaryExtraLight,
          ]}
          //   colors={['red', 'blue']}
        />
        <Path path="M14.0755 0H17.4615C18.8637 0 20 1.14585 20 2.55996V5.97452C20 7.38864 18.8637 8.53449 17.4615 8.53449H14.0755C12.6732 8.53449 11.537 7.38864 11.537 5.97452V2.55996C11.537 1.14585 12.6732 0 14.0755 0Z" />
        <Path path="M2.53852 0H5.92449C7.32676 0 8.46301 1.14585 8.46301 2.55996V5.97452C8.46301 7.38864 7.32676 8.53449 5.92449 8.53449H2.53852C1.13626 8.53449 0 7.38864 0 5.97452V2.55996C0 1.14585 1.13626 0 2.53852 0ZM2.53852 11.4655H5.92449C7.32676 11.4655 8.46301 12.6114 8.46301 14.0255V17.44C8.46301 18.8532 7.32676 20 5.92449 20H2.53852C1.13626 20 0 18.8532 0 17.44V14.0255C0 12.6114 1.13626 11.4655 2.53852 11.4655ZM17.4615 11.4655H14.0755C12.6732 11.4655 11.537 12.6114 11.537 14.0255V17.44C11.537 18.8532 12.6732 20 14.0755 20H17.4615C18.8637 20 20 18.8532 20 17.44V14.0255C20 12.6114 18.8637 11.4655 17.4615 11.4655Z" />
      </Group>
    </Canvas>
  );
};

export default CreateIcon;
