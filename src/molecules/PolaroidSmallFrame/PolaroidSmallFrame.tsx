import {useNavigation} from '@react-navigation/native';
import {StackNavigationProp} from '@react-navigation/stack';
import {Box, BoxShadow, Canvas, rect, rrect} from '@shopify/react-native-skia';
import React from 'react';
import {PixelRatio, TouchableOpacity} from 'react-native';
import Animated from 'react-native-reanimated';
import AppText from '../../atoms/AppText/AppText';
import {AuthenticatedRouteList} from '../../navigations/AuthenticatedNavigation/AuthenticatedNavigationTypes';
import {Colors} from '../../utils/theme';
import {styles} from './PolaroidSmallFrameStyles';

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
  const navigation =
    useNavigation<StackNavigationProp<AuthenticatedRouteList>>();

  return (
    <Animated.View style={styles.container} sharedTransitionTag={tag}>
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
      <TouchableOpacity
        style={styles.pressable}
        activeOpacity={0.5}
        onPress={() => {
          navigation.navigate('MemoDetailScreen');
        }}>
        <Animated.Image
          source={{
            uri: image,
            height: 40,
            width: 40,
          }}
          style={[
            {
              width: '100%',
              height: PixelRatio.getPixelSizeForLayoutSize(
                90 / PixelRatio.get(),
              ),
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
      </TouchableOpacity>
    </Animated.View>
  );
};

export default PolaroidSmallFrame;
