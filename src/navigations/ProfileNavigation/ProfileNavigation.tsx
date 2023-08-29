import {createNativeStackNavigator} from '@react-navigation/native-stack';
import React from 'react';
import MemoDetailScreen from '../../screens/MemoDetailScreen/MemoDetailScreen';
import ProfileScreen from '../../screens/ProfileScreen/ProfileScreen';
import {ProfileRouteList} from './ProfileNavigationTypes';

const Stack = createNativeStackNavigator<ProfileRouteList>();

const ProfileNavigation = () => {
  return (
    <Stack.Navigator initialRouteName="NativeProfileScreen">
      <Stack.Screen
        name="NativeProfileScreen"
        component={ProfileScreen}
        options={{
          headerShown: false,
        }}
      />
      <Stack.Screen
        name="MemoDetailScreen"
        component={MemoDetailScreen}
        options={{
          presentation: 'transparentModal',
          headerShown: false,
          animation: 'fade',
          animationDuration: 600,
        }}
      />
    </Stack.Navigator>
  );
};

export default ProfileNavigation;
