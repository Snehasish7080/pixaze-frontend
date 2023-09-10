import {View, Text, TouchableOpacity, FlatList} from 'react-native';
import React from 'react';
import AppText from '../../atoms/AppText/AppText';
import {useNavigation} from '@react-navigation/native';
import {StackNavigationProp} from '@react-navigation/stack';
import {AuthenticatedRouteList} from '../../navigations/AuthenticatedNavigation/AuthenticatedNavigationTypes';
import {styles} from './ExploreScreenStyles';
import ExploreFrame from '../../molecules/ExploreFrame/ExploreFrame';
import {profileData} from '../../utils/dummyData';

const ExploreScreen = () => {
  return (
    <View style={styles.container}>
      <FlatList
        contentContainerStyle={{
          paddingHorizontal: 16,
          paddingVertical: 26,
        }}
        data={profileData}
        keyExtractor={item => item.id}
        renderItem={({item, index}) => {
          return <ExploreFrame image={item.photos[0].url} tag={item.tag} />;
        }}
        numColumns={3}
        ItemSeparatorComponent={() => (
          <View
            style={{
              height: 4,
            }}
          />
        )}
        columnWrapperStyle={{
          justifyContent: 'space-between',
        }}
      />
    </View>
  );
};

export default ExploreScreen;
