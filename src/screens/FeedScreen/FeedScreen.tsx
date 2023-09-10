import {View, Text, TouchableOpacity, FlatList} from 'react-native';
import React from 'react';
import AppText from '../../atoms/AppText/AppText';
import {useNavigation} from '@react-navigation/native';
import {StackNavigationProp} from '@react-navigation/stack';
import {AuthenticatedRouteList} from '../../navigations/AuthenticatedNavigation/AuthenticatedNavigationTypes';
import {styles} from './FeedScreenStyles';
import TravelCard from '../../molecules/TravelCard/TravelCard';
import {profileData} from '../../utils/dummyData';

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
        data={profileData}
        keyExtractor={item => item.id}
        renderItem={({item, index}) => {
          return (
            <TravelCard
              images={item.photos.map(x => x.url)}
              location={item?.location}
              tag={item.tag}
            />
          );
        }}
        ItemSeparatorComponent={() => <View style={{height: 20}} />}
      />
    </View>
  );
};

export default FeedScreen;
