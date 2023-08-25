import {View, Text, Easing} from 'react-native';
import React from 'react';
import {createStackNavigator} from '@react-navigation/stack';
import {UnAuthenticatedRouteList} from './UnAuthenticatedNavigationTypes';
import LandingScreen from '../../screens/LandingScreen/LandingScreen';
import OtpScreen from '../../screens/OtpScreen/OtpScreen';
import LoginScreen from '../../screens/LoginScreen/LoginScreen';

const Stack = createStackNavigator<UnAuthenticatedRouteList>();

const UnAuthenticatedNavigation = () => {
  return (
    <Stack.Navigator initialRouteName="LandingScreen">
      <Stack.Screen
        name="LandingScreen"
        component={LandingScreen}
        options={{
          headerShown: false,
        }}
      />
      <Stack.Screen
        name="OtpScreen"
        component={OtpScreen}
        options={{
          headerShown: false,
          presentation: 'transparentModal',
          transitionSpec: {
            open: {
              animation: 'timing',
              config: {
                duration: 650,
                easing: Easing.in(Easing.bezier(0.31, 0.06, 0.41, 1.01)),
              },
            },
            close: {
              animation: 'timing',
              config: {
                duration: 650,
                easing: Easing.out(Easing.bezier(0.31, 0.06, 0.41, 1.01)),
              },
            },
          },
          cardStyleInterpolator: ({layouts, current, next}) => {
            return {
              cardStyle: {
                transform: [
                  {
                    translateY: current.progress.interpolate({
                      inputRange: [0, 1],
                      outputRange: [layouts.screen.height, 0],
                    }),
                  },
                  {
                    scale: next
                      ? next.progress.interpolate({
                          inputRange: [0, 1],
                          outputRange: [1, 0.9],
                        })
                      : 1,
                  },
                ],
              },
            };
          },
        }}
      />
      <Stack.Screen
        name="LoginScreen"
        component={LoginScreen}
        options={{
          headerShown: false,
          presentation: 'transparentModal',
          transitionSpec: {
            open: {
              animation: 'timing',
              config: {
                duration: 650,
                easing: Easing.in(Easing.bezier(0.31, 0.06, 0.41, 1.01)),
              },
            },
            close: {
              animation: 'timing',
              config: {
                duration: 650,
                easing: Easing.out(Easing.bezier(0.31, 0.06, 0.41, 1.01)),
              },
            },
          },
          cardStyleInterpolator: ({layouts, current, next}) => {
            return {
              cardStyle: {
                transform: [
                  {
                    translateY: current.progress.interpolate({
                      inputRange: [0, 1],
                      outputRange: [layouts.screen.height, 0],
                    }),
                  },
                  {
                    scale: next
                      ? next.progress.interpolate({
                          inputRange: [0, 1],
                          outputRange: [1, 0.9],
                        })
                      : 1,
                  },
                ],
              },
            };
          },
        }}
      />
    </Stack.Navigator>
  );
};

export default UnAuthenticatedNavigation;
