import {useNavigation} from '@react-navigation/native';
import {NativeStackNavigationProp} from '@react-navigation/native-stack';
import {Box, BoxShadow, Canvas, rect, rrect} from '@shopify/react-native-skia';
import React from 'react';
import {PixelRatio, TouchableOpacity} from 'react-native';
import Animated from 'react-native-reanimated';
import AppText from '../../atoms/AppText/AppText';
import {ProfileRouteList} from '../../navigations/ProfileNavigation/ProfileNavigationTypes';
import {Colors} from '../../utils/theme';
import {styles} from './PolaroidSmallFrameStyles';

const width = 100;
const height = 130;
const widthDiff = width + 45 - width;

type PolaroidSmallFrameProps = {
  image: string;
  tag: string;
  id: string;
  alowTransition?: boolean;
};

const PolaroidSmallFrame: React.FC<PolaroidSmallFrameProps> = ({
  image,
  tag,
  id,
  alowTransition = true,
}) => {
  const navigation =
    useNavigation<NativeStackNavigationProp<ProfileRouteList>>();

  return (
    <Animated.View
      style={styles.container}
      sharedTransitionTag={alowTransition ? id : undefined}>
      {navigation.isFocused() && (
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
      )}
      <TouchableOpacity
        style={styles.pressable}
        activeOpacity={0.5}
        onPress={() => {
          navigation.navigate('MemoDetailScreen', {
            tag,
          });
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
          sharedTransitionTag={alowTransition ? image : undefined}
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
