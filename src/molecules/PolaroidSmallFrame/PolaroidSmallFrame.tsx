import {View, Text, Image, PixelRatio} from 'react-native';
import React, {useState} from 'react';
import {styles} from './PolaroidSmallFrameStyles';
import AppText from '../../atoms/AppText/AppText';
import {Box, BoxShadow, Canvas, rect, rrect} from '@shopify/react-native-skia';
import {Colors} from '../../utils/theme';

const width = 100;
const height = 130;
const widthDiff = width + 45 - width;

type PolaroidSmallFrameProps = {
  image: string;
  tag: string;
};
const PolaroidSmallFrame: React.FC<PolaroidSmallFrameProps> = ({
  image,
  tag,
}) => {
  return (
    <View style={styles.container}>
      <Canvas
        style={{
          height: height + 55,
          width: width + 45,
          position: 'absolute',
          top: -18,
        }}
        mode="continuous">
        <Box
          box={rrect(rect(widthDiff / 2, 16.8, width, height), 2, 2)}
          color={Colors.white}>
          <BoxShadow dx={-3} dy={0} blur={6} color={Colors.polaroidShadow} />
        </Box>
      </Canvas>
      <Image
        source={{
          uri: image,
          height: 40,
          width: 40,
        }}
        style={[
          {
            width: '100%',
            height: PixelRatio.getPixelSizeForLayoutSize(90 / PixelRatio.get()),
            resizeMode: 'contain',
          },
        ]}
      />
      <AppText
        lineHeight={20}
        style={[
          styles.tag,
          {
            fontSize: 18 / PixelRatio.getFontScale(),
          },
        ]}>
        {tag}
      </AppText>
    </View>
  );
};

export default PolaroidSmallFrame;
