import {View, Text, Image, PixelRatio, FlatList} from 'react-native';
import React from 'react';
import {styles} from './LocationScreenStyles';
import {profileData} from '../../utils/dummyData';
import TabLocationIcon from '../../atoms/LocationIcon/TabLocationIcon';
import AppText from '../../atoms/AppText/AppText';
import LocationMark from '../../molecules/LocationMark/LocationMark';

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
        ItemSeparatorComponent={() => <View style={{height: 16}} />}
      />
    </View>
  );
};

export default LocationScreen;
