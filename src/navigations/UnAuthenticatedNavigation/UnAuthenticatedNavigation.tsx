import {createStackNavigator} from '@react-navigation/stack';
import React from 'react';
import LandingScreen from '../../screens/LandingScreen/LandingScreen';
import SignupScreen from '../../screens/SignupScreen/SignupScreen';
import {UnAuthenticatedRouteList} from './UnAuthenticatedNavigationTypes';

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
        name="SignupScreen"
        component={SignupScreen}
        options={{
          headerShown: false,
        }}
      />
    </Stack.Navigator>
  );
};

export default UnAuthenticatedNavigation;
