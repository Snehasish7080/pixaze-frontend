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

type ProfileIconProps = {
  isFocused?: boolean;
};

const ProfileIcon: React.FC<ProfileIconProps> = ({isFocused}) => {
  const src = rect(0, 0, 18, 20);
  const dst = rect(0, 0, 18, 20);
  return (
    <Canvas style={{width: 20, height: 20}}>
      <Group transform={fitbox('contain', src, dst)}>
        <LinearGradient
          start={vec(0, 0)}
          end={vec(14, 20)}
          colors={[
            isFocused ? Colors.primaryExtraLight : Colors.primaryLight,
            isFocused ? Colors.secondary : Colors.secondaryExtraLight,
          ]}
          //   colors={['red', 'blue']}
        />
        <Path path="M9.00008 11.1111C12.1067 11.1111 14.6252 8.6238 14.6252 5.55556C14.6252 2.48731 12.1067 0 9.00008 0C5.89343 0 3.375 2.48731 3.375 5.55556C3.375 8.6238 5.89343 11.1111 9.00008 11.1111Z" />
        <Path path="M17.9902 16.6757C17.9953 16.5966 17.9953 16.5174 17.9902 16.4383C17.968 16.146 17.8851 15.8607 17.7461 15.5981C17.1993 14.5296 15.6663 14.0456 14.3871 13.7716C13.4745 13.5816 12.5472 13.4595 11.6139 13.4063L10.6375 13.3333H10.1981H9.65125H8.34279H7.79597H7.35656L6.3801 13.4063C5.44686 13.4595 4.51958 13.5816 3.60695 13.7716C2.32779 14.0091 0.79474 14.5022 0.247921 15.5981C0.108983 15.8607 0.0260671 16.146 0.00380577 16.4383C-0.00126859 16.5174 -0.00126859 16.5966 0.00380577 16.6757C-0.000879295 16.7548 -0.000879295 16.8341 0.00380577 16.9132C0.0303656 17.2029 0.116575 17.4851 0.257686 17.7442C0.804505 18.8127 2.33755 19.2967 3.61672 19.5707C4.53105 19.7518 5.45762 19.8738 6.38987 19.936L7.36633 19.9999H7.60068H7.80574H10.2078H10.4129H10.6472L11.6237 19.936C12.556 19.8738 13.4825 19.7518 14.3969 19.5707C15.676 19.3241 17.2091 18.8401 17.7559 17.7442C17.8904 17.4769 17.9731 17.1893 18 16.8949C18.0012 16.8217 17.998 16.7485 17.9902 16.6757Z" />
      </Group>
    </Canvas>
  );
};

export default ProfileIcon;
