import {View, Text, Image, PixelRatio} from 'react-native';
import React from 'react';
import {styles} from './LocationMarkStyles';
import TabLocationIcon from '../../atoms/LocationIcon/TabLocationIcon';
import {profileData} from '../../utils/dummyData';
import AppText from '../../atoms/AppText/AppText';

type LocationMarkProps = {
  image: string;
};
const LocationMark: React.FC<LocationMarkProps> = ({image}) => {
  return (
    <View style={styles.container}>
      <AppText
        lineHeight={12}
        style={[
          styles.location,
          {
            fontSize: 12 / PixelRatio.getFontScale(),
          },
        ]}>
        Hawa Mahal
      </AppText>

      <View style={styles.imageContainer}>
        <Image
          source={{
            uri: image,
          }}
          style={styles.image}
        />
        <View style={styles.locationContainer}>
          <TabLocationIcon width={12} height={14} />
          <AppText
            lineHeight={12}
            style={[
              styles.location,
              {
                fontSize: 10 / PixelRatio.getFontScale(),
              },
            ]}>
            900m
          </AppText>
        </View>
      </View>
    </View>
  );
};

export default LocationMark;
