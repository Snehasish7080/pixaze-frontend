import React from 'react';
import {Image, PixelRatio, View} from 'react-native';
import AppText from '../../atoms/AppText/AppText';
import {styles} from './TravelCardStyles';

const TravelCard: React.FC = () => {
  return (
    <View>
      <View style={styles.locationContainer}>
        <AppText
          lineHeight={20}
          style={[
            styles.location,
            {
              fontSize: 20 / PixelRatio.getFontScale(),
            },
          ]}>
          Jaipur, India
        </AppText>
        <AppText
          lineHeight={14}
          style={[
            styles.date,
            {
              fontSize: 12 / PixelRatio.getFontScale(),
            },
          ]}>
          8 sep 2023
        </AppText>
      </View>
      <View style={styles.imageContainer}>
        <Image
          source={{
            uri: 'https://images.unsplash.com/photo-1523906834658-6e24ef2386f9?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1883&q=80',
          }}
          style={styles.image}
        />
      </View>
    </View>
  );
};

export default TravelCard;
