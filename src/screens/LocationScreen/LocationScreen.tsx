import React from 'react';
import {FlatList, View} from 'react-native';
import LocationMark from '../../molecules/LocationMark/LocationMark';
import {profileData} from '../../utils/dummyData';
import {styles} from './LocationScreenStyles';

const LocationScreen: React.FC = () => {
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
          return (
            <LocationMark
              images={item.photos.map(x => x.url).slice(0, 3)}
              location={item?.location}
              tag={item.tag}
            />
          );
        }}
        ItemSeparatorComponent={() => <View style={{height: 26}} />}
      />
    </View>
  );
};

export default LocationScreen;
