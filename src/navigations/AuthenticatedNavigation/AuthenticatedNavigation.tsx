import {createStackNavigator} from '@react-navigation/stack';
import React from 'react';
import CreateScreen from '../../screens/CreateScreen/CreateScreen';
import TabNavigation from '../TabNavigation/TabNavigation';
import {AuthenticatedRouteList} from './AuthenticatedNavigationTypes';

const Stack = createStackNavigator<AuthenticatedRouteList>();

const AuthenticatedNavigation = () => {
  return (
    <Stack.Navigator initialRouteName="HomeScreen">
      <Stack.Screen
        name="HomeScreen"
        component={TabNavigation}
        options={{
          headerShown: false,
        }}
      />
      <Stack.Screen
        name="CreateScreen"
        component={CreateScreen}
        options={{
          headerShown: false,
          presentation: 'modal',
        }}
      />
    </Stack.Navigator>
  );
};

export default AuthenticatedNavigation;
