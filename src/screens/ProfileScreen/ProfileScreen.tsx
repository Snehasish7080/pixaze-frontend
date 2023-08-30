import React from 'react';
import {
  FlatList,
  Image,
  TouchableOpacity,
  useWindowDimensions,
  View,
} from 'react-native';
import AppText from '../../atoms/AppText/AppText';
import SettingsIcon from '../../atoms/SettingsIcon/SettingsIcon';
import AppHeader from '../../molecules/AppHeader/AppHeader';
import PolaroidSmallFrame from '../../molecules/PolaroidSmallFrame/PolaroidSmallFrame';
import {AuthenticatedNavProps} from '../../navigations/AuthenticatedNavigation/AuthenticatedNavigationTypes';
import {ProfileNavProps} from '../../navigations/ProfileNavigation/ProfileNavigationTypes';
import GroupedPolaroidFrame from '../../organisms/GroupedPolaroidFrame/GroupedPolaroidFrame';
import {profileData} from '../../utils/dummyData';
import ProfileHeader from './ProfileHeader';
import {styles} from './ProfileScreenStyles';

const ProfileScreen: React.FC<ProfileNavProps<'NativeProfileScreen'>> = () => {
  const {width} = useWindowDimensions();
  return (
    <>
      <AppHeader title="Mark Philips" />
      <View style={styles.container}>
        <FlatList
          data={profileData}
          ListHeaderComponent={<ProfileHeader />}
          keyExtractor={item => item.id}
          numColumns={3}
          renderItem={({item, index}) => {
            if (item.count === 1) {
              return (
                <View
                  style={{
                    width: width / 3 - 16,
                    alignItems: 'center',
                  }}>
                  <PolaroidSmallFrame
                    image={item.photos[0].url}
                    tag={item.tag}
                    id={item.photos[0].id}
                  />
                </View>
              );
            } else {
              return (
                <View
                  style={{
                    width: width / 3 - 16,
                    alignItems: 'center',
                  }}>
                  <GroupedPolaroidFrame
                    count={item.count}
                    photos={item.photos.slice(0, 2)}
                    tag={item.tag}
                  />
                </View>
              );
            }
          }}
          contentContainerStyle={{
            paddingHorizontal: 16,
          }}
          columnWrapperStyle={{
            justifyContent: 'space-between',
            marginBottom: 25,
          }}
        />
      </View>
    </>
  );
};

export default ProfileScreen;
