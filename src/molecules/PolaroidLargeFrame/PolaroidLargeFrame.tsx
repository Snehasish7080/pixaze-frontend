import {Box, BoxShadow, Canvas, rect, rrect} from '@shopify/react-native-skia';
import React, {useState} from 'react';
import {Image, PixelRatio} from 'react-native';
import Animated from 'react-native-reanimated';
import {horizontalScale} from '../../utils/scale';
import {Colors} from '../../utils/theme';
import {styles} from './PolaroidLargeFrameStyles';

const width = horizontalScale(250);
const widthDiff = width + 45 - width;

const PolaroidLargeFrame: React.FC = () => {
  const [layoutHeight, setLayoutHeight] = useState(0);
  return (
    <Animated.View
      style={styles.container}
      onLayout={e => {
        setLayoutHeight(e.nativeEvent.layout.height);
      }}
      sharedTransitionTag="sharedTag">
      <ShadowBox height={layoutHeight} />
      <Animated.Image
        source={{
          uri: 'https://images.unsplash.com/photo-1692566756123-116183f3081e?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1887&q=80',
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
        sharedTransitionTag="holiday"
      />
    </Animated.View>
  );
};

type ShadowBoxProps = {
  height: number;
};
const ShadowBox = ({height}: ShadowBoxProps) => {
  return (
    <Canvas
      style={{
        height: height + 55,
        width: width + 45,
        position: 'absolute',
        top: -18,
      }}>
      <Box
        box={rrect(rect(widthDiff / 2, 16.8, width, height), 4, 4)}
        color={Colors.white}>
        <BoxShadow dx={-2} dy={1} blur={8} color={Colors.polaroidShadow} />
      </Box>
    </Canvas>
  );
};

export default PolaroidLargeFrame;
