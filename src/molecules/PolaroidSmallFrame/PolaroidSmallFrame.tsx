import {useNavigation} from '@react-navigation/native';
import {NativeStackNavigationProp} from '@react-navigation/native-stack';
import {Box, BoxShadow, Canvas, rect, rrect} from '@shopify/react-native-skia';
import React from 'react';
import {PixelRatio, TouchableOpacity, View} from 'react-native';
import Animated from 'react-native-reanimated';
import AppText from '../../atoms/AppText/AppText';
import {ProfileRouteList} from '../../navigations/ProfileNavigation/ProfileNavigationTypes';
import {Colors} from '../../utils/theme';
import {styles} from './PolaroidSmallFrameStyles';

const width = 150;
const height = 170;
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
    <View style={styles.container}>
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
            box={rrect(rect(widthDiff / 2, 16.8, width, height), 4, 4)}
            color={Colors.white}>
            <BoxShadow dx={-3} dy={0} blur={6} color={Colors.polaroidShadow} />
          </Box>
        </Canvas>
      )}
      <Animated.View
        style={styles.pressable}
        sharedTransitionTag={alowTransition ? id : undefined}>
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
                  120 / PixelRatio.get(),
                ),
                resizeMode: 'contain',
              },
            ]}
            sharedTransitionTag={alowTransition ? image : undefined}
          />
          <AppText
            lineHeight={24}
            style={[
              styles.tag,
              {
                fontSize: 22 / PixelRatio.getFontScale(),
              },
            ]}>
            {tag}
          </AppText>
        </TouchableOpacity>
      </Animated.View>
    </View>
  );
};

export default PolaroidSmallFrame;
