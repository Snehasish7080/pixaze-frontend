import {View, Text, Easing} from 'react-native';
import React from 'react';
import {createStackNavigator} from '@react-navigation/stack';
import {AuthenticatedRouteList} from './AuthenticatedNavigationTypes';
import ProfileScreen from '../../screens/ProfileScreen/ProfileScreen';
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
          // header: ({navigation, options}) => (
          //   <AppHeader
          //     onClickBack={() => {
          //       if (navigation.canGoBack()) {
          //         navigation.goBack();
          //       }
          //     }}>
          //     {options?.title}
          //   </AppHeader>
          // ),
        }}
      />
    </Stack.Navigator>
  );
};

export default AuthenticatedNavigation;
