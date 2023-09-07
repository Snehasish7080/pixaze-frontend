import {View, Text, Image} from 'react-native';
import React from 'react';
import {styles} from './TravelCardStyles';
import AppText from '../../atoms/AppText/AppText';

const TravelCard: React.FC = () => {
  return (
    <View>
      <View
        style={{
          alignItems: 'center',
        }}>
        <Image
          source={require('../../assets/images/jaipurtag.png')}
          style={styles.essenceImage}
        />
      </View>
      <AppText lineHeight={14} style={{textAlign: 'center'}}>
        jaipur Dairy
      </AppText>
      <View style={styles.container}>
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
