import {View, Text, TouchableOpacity} from 'react-native';
import React from 'react';
import AppText from '../../atoms/AppText/AppText';
import {useNavigation} from '@react-navigation/native';
import {StackNavigationProp} from '@react-navigation/stack';
import {AuthenticatedRouteList} from '../../navigations/AuthenticatedNavigation/AuthenticatedNavigationTypes';
import {styles} from './FeedScreenStyles';
import TravelCard from '../../molecules/TravelCard/TravelCard';

const FeedScreen: React.FC = () => {
  const parentNavigation =
    useNavigation<StackNavigationProp<AuthenticatedRouteList>>();
  return (
    <View style={styles.container}>
      <TravelCard />
    </View>
  );
};

export default FeedScreen;
