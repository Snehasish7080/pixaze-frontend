import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import React from 'react';
import ExploreIcon from '../../atoms/ExploreIcon/ExploreIcon';
import FeedIcon from '../../atoms/FeedIcon/FeedIcon';
import ProfileIcon from '../../atoms/ProfileIcon/ProfileIcon';
import AppBottomTabBar from '../../molecules/AppBottomTabBar/AppBottomTabBar';
import AppHeader from '../../molecules/AppHeader/AppHeader';
import ExploreScreen from '../../screens/ExploreScreen/ExploreScreen';
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
          header: () => <AppHeader hideBack={true} mainTitle="Feed" />,
        }}
      />
      <Tab.Screen
        name="ExploreScreen"
        component={ExploreScreen}
        options={{
          tabBarIcon: ({focused}) => {
            return <ExploreIcon isFocused={focused} />;
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
