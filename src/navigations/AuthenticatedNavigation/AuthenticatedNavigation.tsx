import {createStackNavigator} from '@react-navigation/stack';
import React from 'react';
import ProfileNavigation from '../ProfileNavigation/ProfileNavigation';
import {AuthenticatedRouteList} from './AuthenticatedNavigationTypes';

const Stack = createStackNavigator<AuthenticatedRouteList>();

const AuthenticatedNavigation = () => {
  return (
    <Stack.Navigator initialRouteName="ProfileScreen">
      <Stack.Screen
        name="ProfileScreen"
        component={ProfileNavigation}
        options={{
          headerShown: false,
        }}
      />
    </Stack.Navigator>
  );
};

export default AuthenticatedNavigation;
