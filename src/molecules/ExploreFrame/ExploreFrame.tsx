import {Blur, Box, Canvas, rect, rrect} from '@shopify/react-native-skia';
import React from 'react';
import {Image, PixelRatio, View} from 'react-native';
import AppText from '../../atoms/AppText/AppText';
import {Colors} from '../../utils/theme';
import {styles} from './ExploreFrameStyles';

type ExploreFrameProps = {
  image: string;
  tag: string;
};
const ExploreFrame: React.FC<ExploreFrameProps> = ({image, tag}) => {
  return (
    <View style={styles.container}>
      <Image
        source={{
          uri: image,
        }}
        style={styles.image}
      />
      <View style={styles.tagContainer}>
        <AppText
          lineHeight={12}
          style={[
            styles.tag,
            {
              fontSize: 12 / PixelRatio.getFontScale(),
            },
          ]}>
          {tag} (1.1k)
        </AppText>
      </View>
    </View>
  );
};

export default ExploreFrame;
