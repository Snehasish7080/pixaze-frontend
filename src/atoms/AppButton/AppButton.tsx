import {
  Box,
  BoxShadow,
  Canvas,
  LinearGradient,
  rect,
  rrect,
  useCanvasRef,
  vec,
} from '@shopify/react-native-skia';
import React, {ReactNode} from 'react';
import {
  TouchableOpacity,
  useWindowDimensions,
  View,
  TouchableHighlight,
  TouchableOpacityProps,
  StyleProp,
  TextStyle,
  ViewStyle,
} from 'react-native';
import {Colors, FontFamily} from '../../utils/theme';
import AppText from '../AppText/AppText';

type AppButtonProps = TouchableOpacityProps & {
  width: number;
  height: number;
  children: ReactNode;
  textStyle?: StyleProp<TextStyle>;
  style?: StyleProp<ViewStyle>;
};
const AppButton: React.FC<AppButtonProps> = ({
  width,
  height,
  children,
  textStyle,
  style,
  ...props
}) => {
  const widthDiff = width + 45 - width;

  return (
    <View
      style={[
        style,
        {
          position: 'relative',
          flexDirection: 'row',
          width: width,
          alignItems: 'center',
          justifyContent: 'center',
        },
      ]}>
      <Canvas
        style={{
          height: height * 2.5,
          width: width + 45,
          position: 'absolute',
          top: -18,
        }}
        mode="continuous">
        <Box
          box={rrect(rect(widthDiff / 2, 10, width, height), 16, 16)}
          color="transparent">
          <BoxShadow dx={0} dy={15} blur={10} color={Colors.shadow} />
        </Box>
      </Canvas>
      <TouchableOpacity
        {...props}
        activeOpacity={0.8}
        style={{
          height: height,
          width: width,
          position: 'relative',
          alignItems: 'center',
          justifyContent: 'center',
        }}>
        <Canvas
          style={{
            height: '100%',
            width: '100%',
            position: 'absolute',
            top: 0,
          }}
          mode="continuous">
          <Box box={rrect(rect(0, 0, width, height), 16, 16)}>
            <LinearGradient
              start={vec(256, 256)}
              end={vec(0, 0)}
              colors={[Colors.primaryLight, Colors.secondary]}
            />
          </Box>
        </Canvas>

        <AppText
          lineHeight={14}
          style={[
            {
              color: Colors.white,
              fontFamily: FontFamily.LatoBold,
              fontSize: 14,
            },
            textStyle,
          ]}>
          {children}
        </AppText>
      </TouchableOpacity>
    </View>
  );
};

export default AppButton;
