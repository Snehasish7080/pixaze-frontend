import React from 'react';
import {FlatList, View} from 'react-native';
import AppHeader from '../../molecules/AppHeader/AppHeader';
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
              <MemoFrame
                count={item.count}
                photos={item.photos}
                tag={item.tag}
                desc={item.desc}
                location={item.location}
                memoImage={item.memoImage}
                memoWidth={item.memoHeight}
                memoHeight={item.memoHeight}
                index={index}
              />
            );
          }}
          contentContainerStyle={{
            paddingHorizontal: 30,
            paddingVertical: 30,
          }}
          ItemSeparatorComponent={() => <View style={styles.itemSeparator} />}
        />
      </View>
    </>
  );
};

export default ProfileScreen;
