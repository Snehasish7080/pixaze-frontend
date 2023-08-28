import {View, Text, Easing} from 'react-native';
import React from 'react';
import {createStackNavigator} from '@react-navigation/stack';
import {AuthenticatedRouteList} from './AuthenticatedNavigationTypes';
import ProfileScreen from '../../screens/ProfileScreen/ProfileScreen';
import MemoDetailScreen from '../../screens/MemoDetailScreen/MemoDetailScreen';
// import AppHeader from '../../atoms/AppHeader/AppHeader';

const Stack = createStackNavigator<AuthenticatedRouteList>();

const AuthenticatedNavigation = () => {
  return (
    <Stack.Navigator initialRouteName="ProfileScreen">
      <Stack.Screen
        name="ProfileScreen"
        component={ProfileScreen}
        options={{
          headerShown: true,
        }}
      />
      <Stack.Screen
        name="MemoDetailScreen"
        component={MemoDetailScreen}
        options={{
          presentation: 'transparentModal',
          headerShown: false,
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
                    scale: current.progress.interpolate({
                      inputRange: [0, 1],
                      outputRange: [0.8, 1],
                    }),
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

export default AuthenticatedNavigation;
