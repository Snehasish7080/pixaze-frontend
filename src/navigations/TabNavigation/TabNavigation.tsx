import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import React from 'react';
import CreateIcon from '../../atoms/CreateIcon/CreateIcon';
import FeedIcon from '../../atoms/FeedIcon/FeedIcon';
import ProfileIcon from '../../atoms/ProfileIcon/ProfileIcon';
import AppBottomTabBar from '../../molecules/AppBottomTabBar/AppBottomTabBar';
import CreateScreen from '../../screens/CreateScreen/CreateScreen';
import FeedScreen from '../../screens/FeedScreen/FeedScreen';
import ProfileNavigation from '../ProfileNavigation/ProfileNavigation';
import {TabNavigationRouteList} from './TabNavigationTypes';

const Tab = createBottomTabNavigator<TabNavigationRouteList>();
const TabNavigation = () => {
  return (
    <Tab.Navigator
      tabBar={props => {
        return <AppBottomTabBar {...props} />;
      }}>
      <Tab.Screen
        name="FeedScreen"
        component={FeedScreen}
        options={{
          tabBarIcon: ({focused}) => {
            return <FeedIcon isFocused={focused} />;
          },
          title: 'Feed',
        }}
      />
      <Tab.Screen
        name="CreateScreen"
        component={CreateScreen}
        options={{
          tabBarIcon: ({focused}) => {
            return <CreateIcon isFocused={focused} />;
          },
        }}
      />
      <Tab.Screen
        name="ProfileScreen"
        component={ProfileNavigation}
        options={{
          headerShown: false,
          title: 'Profile',
          tabBarIcon: ({focused}) => {
            return <ProfileIcon isFocused={focused} />;
          },
        }}
      />
    </Tab.Navigator>
  );
};

export default TabNavigation;
