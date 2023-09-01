import {
  View,
  Text,
  TouchableOpacity,
  PixelRatio,
  useWindowDimensions,
} from 'react-native';
import React from 'react';
import {
  BottomTabDescriptorMap,
  BottomTabNavigationEventMap,
} from '@react-navigation/bottom-tabs/lib/typescript/src/types';
import {EdgeInsets} from 'react-native-safe-area-context';
import {
  NavigationHelpers,
  ParamListBase,
  TabNavigationState,
} from '@react-navigation/native';
import {styles} from './AppBottomTabBarStyles';
import AppText from '../../atoms/AppText/AppText';
import FeedIcon from '../../atoms/FeedIcon/FeedIcon';
import {Colors, FontFamily} from '../../utils/theme';
import ProfileIcon from '../../atoms/ProfileIcon/ProfileIcon';
import {Box, BoxShadow, Canvas, rect, rrect} from '@shopify/react-native-skia';

type AppBottomTabBarProps = {
  descriptors: BottomTabDescriptorMap;
  insets: EdgeInsets;
  navigation: NavigationHelpers<ParamListBase, BottomTabNavigationEventMap>;
  state: TabNavigationState<ParamListBase>;
};
const AppBottomTabBar: React.FC<AppBottomTabBarProps> = ({
  descriptors,
  insets,
  navigation,
  state,
}) => {
  const {width} = useWindowDimensions();
  const widthDiff = width * 0.2;
  return (
    <View style={styles.mainContainer}>
      <Canvas
        style={{
          height: 60 * 2.5,
          width: '100%',
          position: 'absolute',
          top: -18,
        }}
        mode="continuous">
        <Box
          box={rrect(rect(widthDiff / 2, 18, width * 0.8, 60), 20, 20)}
          color="white">
          <BoxShadow dx={0} dy={4} blur={10} color={Colors.polaroidShadow} />
        </Box>
      </Canvas>
      <View style={styles.container}>
        {state.routes.map((route, index) => {
          const {options} = descriptors[route.key];

          const label =
            options.tabBarLabel !== undefined
              ? options.tabBarLabel
              : options.title !== undefined
              ? options.title
              : route.name;

          const onPress = () => {
            navigation.navigate(route.name, {...route.params});
          };

          const isFocused = state.index === index;

          const icons = () => {
            if (options?.tabBarIcon) {
              return options?.tabBarIcon({
                focused: isFocused,
                color: 'black',
                size: 10,
              });
            }
          };
          return (
            <TouchableOpacity
              onPress={onPress}
              key={route.name}
              style={styles.tab}
              activeOpacity={0.7}>
              {icons()}
              <AppText
                lineHeight={14}
                style={{
                  fontSize: 12 / PixelRatio.getFontScale(),
                  marginTop: 5,
                  fontFamily: isFocused
                    ? FontFamily.LatoBold
                    : FontFamily.LatoRegular,
                }}>
                {label.toString()}
              </AppText>
            </TouchableOpacity>
          );
        })}
      </View>
    </View>
  );
};

export default AppBottomTabBar;
