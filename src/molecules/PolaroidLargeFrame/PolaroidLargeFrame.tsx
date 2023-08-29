import React from 'react';
import {PixelRatio} from 'react-native';
import Animated from 'react-native-reanimated';
import {horizontalScale} from '../../utils/scale';
import {styles} from './PolaroidLargeFrameStyles';

type PolaroidLargeFrameProps = {
  id: string;
  photo: {
    id: string;
    url: string;
  };
  tag: string;
};

const width = horizontalScale(250);

const PolaroidLargeFrame: React.FC<PolaroidLargeFrameProps> = ({
  id,
  photo,
  tag,
}) => {
  return (
    <Animated.View style={styles.container} sharedTransitionTag={photo.id}>
      <Animated.Image
        source={{
          uri: photo.url,
        }}
        style={[
          {
            width: '100%',
            height: PixelRatio.getPixelSizeForLayoutSize(
              270 / PixelRatio.get(),
            ),
            resizeMode: 'contain',
          },
        ]}
        sharedTransitionTag={photo.url}
      />
    </Animated.View>
  );
};

export default PolaroidLargeFrame;
