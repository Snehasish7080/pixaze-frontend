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
import PolaroidSmallFrame from '../../molecules/PolaroidSmallFrame/PolaroidSmallFrame';
import GroupedPolaroidFrame from '../../organisms/GroupedPolaroidFrame/GroupedPolaroidFrame';
import ProfileHeader from './ProfileHeader';
import {styles} from './ProfileScreenStyles';

const data = [
  {
    id: '1',
    photos: [
      {
        id: '1',
        url: 'https://images.unsplash.com/photo-1692566756123-116183f3081e?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1887&q=80',
      },
    ],
    tag: 'holiday',
    count: 1,
  },
  {
    id: '2',
    photos: [
      {
        id: '1',
        url: 'https://images.unsplash.com/photo-1693031262676-05efcfb6a3f3?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80',
      },
      {
        id: '2',
        url: 'https://plus.unsplash.com/premium_photo-1691598048488-04d4d62286cc?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1887&q=80',
      },
    ],
    tag: 'breakfast',
    count: 2,
  },
  {
    id: '3',
    photos: [
      {
        id: '1',
        url: 'https://images.unsplash.com/photo-1692878968489-24ee70109984?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1887&q=80',
      },
    ],
    tag: 'sunset',
    count: 1,
  },
  {
    id: '4',
    photos: [
      {
        id: '1',
        url: 'https://images.unsplash.com/photo-1682687219640-b3f11f4b7234?ixlib=rb-4.0.3&ixid=M3wxMjA3fDF8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80',
      },
      {
        id: '2',
        url: 'https://images.unsplash.com/photo-1682687218147-9806132dc697?ixlib=rb-4.0.3&ixid=M3wxMjA3fDF8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1975&q=80',
      },
    ],
    tag: '27-08-2023',
    count: 4,
  },
  {
    id: '5',
    photos: [
      {
        id: '1',
        url: 'https://images.unsplash.com/photo-1692821272364-a6fc9bb46d79?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1887&q=80',
      },
    ],
    tag: 'Night out',
    count: 1,
  },
  {
    id: '6',
    photos: [
      {
        id: '1',
        url: 'https://plus.unsplash.com/premium_photo-1692883560684-b7aa96067290?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1887&q=80',
      },
    ],
    tag: "let's start",
    count: 1,
  },
];
const ProfileScreen = () => {
  const {width} = useWindowDimensions();
  return (
    <View style={styles.container}>
      <FlatList
        data={data}
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
                <PolaroidSmallFrame image={item.photos[0].url} tag={item.tag} />
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
                  photos={item.photos}
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
          marginBottom: 10,
        }}
      />
    </View>
  );
};

export default ProfileScreen;
