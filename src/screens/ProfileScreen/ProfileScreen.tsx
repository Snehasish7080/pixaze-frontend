import React from 'react';
import {FlatList, View} from 'react-native';
import AppHeader from '../../molecules/AppHeader/AppHeader';
import LocationMark from '../../molecules/LocationMark/LocationMark';
import {ProfileNavProps} from '../../navigations/ProfileNavigation/ProfileNavigationTypes';
import MemoFrame from '../../organisms/MemoFrame/MemoFrame';
import {profileData} from '../../utils/dummyData';
import ProfileHeader from './ProfileHeader';
import {styles} from './ProfileScreenStyles';

const ProfileScreen: React.FC<ProfileNavProps<'NativeProfileScreen'>> = () => {
  return (
    <>
      <AppHeader title="Mark Philips" hideBack={true} />
      <View style={styles.container}>
        <FlatList
          data={profileData}
          ListHeaderComponent={<ProfileHeader />}
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
          contentContainerStyle={{
            paddingHorizontal: 16,
            paddingVertical: 30,
          }}
          ItemSeparatorComponent={() => <View style={styles.itemSeparator} />}
        />
      </View>
    </>
  );
};

export default ProfileScreen;
