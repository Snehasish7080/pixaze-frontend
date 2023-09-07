import {View, Text, TouchableOpacity} from 'react-native';
import React from 'react';
import AppText from '../../atoms/AppText/AppText';
import {useNavigation} from '@react-navigation/native';
import {StackNavigationProp} from '@react-navigation/stack';
import {AuthenticatedRouteList} from '../../navigations/AuthenticatedNavigation/AuthenticatedNavigationTypes';

const ExploreScreen = () => {
  const parentNavigation =
    useNavigation<StackNavigationProp<AuthenticatedRouteList>>();
  return (
    <View
      style={{
        justifyContent: 'center',
        flex: 1,
        alignItems: 'center',
      }}>
      <TouchableOpacity
        onPress={() => {
          parentNavigation.navigate('CreateScreen');
        }}>
        <AppText lineHeight={14}>Create</AppText>
      </TouchableOpacity>
    </View>
  );
};

export default ExploreScreen;
