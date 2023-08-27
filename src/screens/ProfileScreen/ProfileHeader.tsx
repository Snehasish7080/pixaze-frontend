import React from 'react';
import {Image, TouchableOpacity, View} from 'react-native';
import AppText from '../../atoms/AppText/AppText';
import SettingsIcon from '../../atoms/SettingsIcon/SettingsIcon';
import {styles} from './ProfileScreenStyles';

const ProfileHeader: React.FC = () => {
  return (
    <View>
      <View style={styles.profileContainer}>
        <Image
          source={{
            uri: 'https://images.unsplash.com/photo-1517070208541-6ddc4d3efbcb?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1887&q=80',
          }}
          style={styles.profilePic}
        />
        <View style={styles.relationContainer}>
          <View style={styles.followersContainer}>
            <View style={styles.followers}>
              <AppText lineHeight={16} style={styles.count}>
                500
              </AppText>
              <AppText lineHeight={14} style={styles.followTitle}>
                Followers
              </AppText>
            </View>
            <View
              style={[
                styles.followers,
                {
                  marginLeft: 16,
                },
              ]}>
              <AppText lineHeight={16} style={styles.count}>
                100
              </AppText>
              <AppText lineHeight={14} style={styles.followTitle}>
                Following
              </AppText>
            </View>
          </View>
          <View style={styles.settingContainer}>
            <TouchableOpacity style={styles.editBtn}>
              <AppText lineHeight={14} style={styles.share}>
                Edit
              </AppText>
            </TouchableOpacity>
            <TouchableOpacity style={styles.shareBtn}>
              <AppText lineHeight={14} style={styles.share}>
                Share
              </AppText>
            </TouchableOpacity>

            <TouchableOpacity style={styles.settingBtn}>
              <SettingsIcon width={15} height={16} />
            </TouchableOpacity>
          </View>
        </View>
      </View>
      <View style={styles.nameContainer}>
        <AppText lineHeight={14} style={styles.userName}>
          @markphilips
        </AppText>
        <AppText lineHeight={14} style={styles.name}>
          Mark Philips
        </AppText>
        <AppText lineHeight={14} style={styles.about}>
          PIVOTGANG 🏀 CARE FOR ME TOUR OUT NOW 🎙 #CHI-TOWN {`\n`}This remind me
          of before we had insomnia Sleepin' peacefully, never needed a pile of
          drugs
        </AppText>
      </View>
      <View style={styles.mediaContainer}>
        <AppText
          lineHeight={14}
          style={[
            styles.count,
            {
              marginRight: 10,
            },
          ]}>
          100 Memo
        </AppText>
      </View>
    </View>
  );
};

export default ProfileHeader;
