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

type FeedIconProps = {
  isFocused?: boolean;
};
const FeedIcon: React.FC<FeedIconProps> = ({isFocused}) => {
  const src = rect(0, 0, 79, 80);
  const dst = rect(-30, -30, 79, 80);
  return (
    <Canvas style={{width: 20, height: 20}}>
      <Group transform={fitbox('contain', src, dst)}>
        <LinearGradient
          start={vec(0, 0)}
          end={vec(16, 66)}
          colors={[
            isFocused ? Colors.primaryExtraLight : Colors.primaryLight,
            isFocused ? Colors.secondary : Colors.secondaryExtraLight,
          ]}
        />
        <Path path="M36.6437 48.7821V45.7152C36.6437 44.9381 37.2757 44.3067 38.0584 44.3018H40.9326C41.7189 44.3018 42.3563 44.9346 42.3563 45.7152V48.7732C42.3562 49.4473 42.904 49.9951 43.5829 50H45.5438C46.4596 50.0023 47.3388 49.6428 47.9872 49.0007C48.6356 48.3586 49 47.4868 49 46.5775V37.8658C49 37.1314 48.6721 36.4347 48.1046 35.9635L41.443 30.6743C40.2785 29.7491 38.6154 29.779 37.4854 30.7454L30.967 35.9635C30.3727 36.4208 30.0176 37.1196 30 37.8658V46.5686C30 48.4637 31.5474 50 33.4562 50H35.3723C35.6992 50.0023 36.0135 49.8751 36.2455 49.6464C36.4775 49.4178 36.6079 49.1067 36.6079 48.7821H36.6437Z" />
      </Group>
    </Canvas>
  );
};

export default FeedIcon;
