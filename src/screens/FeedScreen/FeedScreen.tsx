import {View, Text, TouchableOpacity, FlatList} from 'react-native';
import React from 'react';
import AppText from '../../atoms/AppText/AppText';
import {useNavigation} from '@react-navigation/native';
import {StackNavigationProp} from '@react-navigation/stack';
import {AuthenticatedRouteList} from '../../navigations/AuthenticatedNavigation/AuthenticatedNavigationTypes';
import {styles} from './FeedScreenStyles';
import TravelCard from '../../molecules/TravelCard/TravelCard';

const data = [1, 2, 3, 4, 5, 6, 7, 8, 9, 0];
const FeedScreen: React.FC = () => {
  const parentNavigation =
    useNavigation<StackNavigationProp<AuthenticatedRouteList>>();
  return (
    <View style={styles.container}>
      <FlatList
        contentContainerStyle={{
          paddingVertical: 16,
          paddingHorizontal: 16,
        }}
        data={data}
        keyExtractor={item => item.toString()}
        renderItem={({item, index}) => {
          return <TravelCard />;
        }}
        ItemSeparatorComponent={() => <View style={{height: 20}} />}
      />
    </View>
  );
};

export default FeedScreen;
