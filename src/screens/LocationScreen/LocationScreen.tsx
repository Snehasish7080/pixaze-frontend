import {View, Text, Image, PixelRatio} from 'react-native';
import React from 'react';
import {styles} from './LocationScreenStyles';
import {profileData} from '../../utils/dummyData';
import TabLocationIcon from '../../atoms/LocationIcon/TabLocationIcon';
import AppText from '../../atoms/AppText/AppText';
import LocationMark from '../../molecules/LocationMark/LocationMark';

const LocationScreen: React.FC = () => {
  return (
    <View style={styles.container}>
      <LocationMark image={profileData[0].photos[0].url} />
      <LocationMark image={profileData[1].photos[0].url} />
      <LocationMark image={profileData[3].photos[0].url} />
    </View>
  );
};

export default LocationScreen;
