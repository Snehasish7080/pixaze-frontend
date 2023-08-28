import {BlurView} from '@react-native-community/blur';
import {
  Box,
  BoxShadow,
  Canvas,
  rect,
  rrect,
  useFont,
} from '@shopify/react-native-skia';
import React from 'react';
import {ScrollView, View} from 'react-native';
import AppText from '../../atoms/AppText/AppText';
import PolaroidLargeFrame from '../../molecules/PolaroidLargeFrame/PolaroidLargeFrame';
import {Colors} from '../../utils/theme';
import {styles} from './MemoDetailScreenStyles';

const MemoDetailScreen: React.FC = () => {
  return (
    <View style={styles.container}>
      {/* <BlurView
        style={styles.blurView}
        blurType="dark"
        blurAmount={6}
        reducedTransparencyFallbackColor={Colors.dark}
      /> */}
      <Tag height={200} />
      <ScrollView
        contentContainerStyle={{
          flexGrow: 1,
          paddingHorizontal: 20,
          paddingVertical: 100,
        }}
        showsVerticalScrollIndicator={false}>
        <PolaroidLargeFrame />
      </ScrollView>
    </View>
  );
};

type TagProps = {
  height: number;
};

const Tag = ({height}: TagProps) => {
  const font = useFont(
    require('../../assets/fonts/MarckScript-Regular.ttf'),
    22,
  );
  const titleWidth = font?.getTextWidth('holiday');
  if (!titleWidth) {
    return null;
  }
  const calculatedHeight = titleWidth + 30;
  const calculatedWidth = 50;
  return (
    <View
      style={[
        styles.tag,
        {
          width: calculatedWidth,
          height: calculatedHeight,
        },
      ]}>
      <Canvas
        style={{
          width: calculatedWidth + 20,
          height: calculatedHeight + 50,
          position: 'absolute',
          top: -25,
        }}>
        <Box
          box={rrect(rect(10, 25, calculatedWidth, calculatedHeight), 4, 4)}
          color={Colors.white}>
          <BoxShadow dx={-2} dy={1} blur={8} color={Colors.polaroidShadow} />
        </Box>
      </Canvas>
      <View
        style={[
          styles.textContainer,
          {
            width: titleWidth,
          },
        ]}>
        <AppText lineHeight={18} style={styles.tagText}>
          Holiday
        </AppText>
      </View>
    </View>
  );
};

export default MemoDetailScreen;
