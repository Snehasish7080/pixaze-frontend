import {View, Image, PixelRatio} from 'react-native';
import React from 'react';
import PolaroidSmallFrame from '../../molecules/PolaroidSmallFrame/PolaroidSmallFrame';
import GroupedPolaroidFrame from '../GroupedPolaroidFrame/GroupedPolaroidFrame';
import {styles} from './MemoFrameStyles';
import AppText from '../../atoms/AppText/AppText';

type MemoFrameProps = {
  photos: {
    id: string;
    url: string;
  }[];
  count: number;
  tag: string;
  desc?: string;
  location?: string;
  memoImage?: any;
  memoWidth?: number;
  memoHeight?: number;
  index: number;
};

const MemoFrame: React.FC<MemoFrameProps> = ({
  count,
  photos,
  tag,
  desc,
  location,
  memoImage,
  memoWidth = 20,
  memoHeight = 20,
  index,
}) => {
  return (
    <View
      style={[
        styles.container,
        {
          flexDirection: index % 2 ? 'row' : 'row-reverse',
        },
      ]}>
      {count === 1 && (
        <PolaroidSmallFrame image={photos[0].url} tag={tag} id={photos[0].id} />
      )}
      {count > 1 && (
        <GroupedPolaroidFrame
          count={count}
          photos={photos.slice(0, 2)}
          tag={tag}
        />
      )}

      <View
        style={[
          styles.info,
          {
            marginRight: index % 2 ? 0 : 30,
            marginLeft: index % 2 ? 30 : 0,
          },
        ]}>
        <AppText lineHeight={18} style={styles.date}>
          31 Aug 2023
        </AppText>
        {Boolean(desc) && (
          <AppText lineHeight={14} style={[styles.desc]}>
            {desc}
          </AppText>
        )}
        {Boolean(location) && (
          <View style={styles.locationContainer}>
            <Image
              source={require('../../assets/icons/location.png')}
              style={{
                width: PixelRatio.getPixelSizeForLayoutSize(
                  20 / PixelRatio.get(),
                ),
                height: PixelRatio.getPixelSizeForLayoutSize(
                  20 / PixelRatio.get(),
                ),
              }}
            />
            <AppText lineHeight={14} style={styles.location}>
              {location}
            </AppText>
          </View>
        )}

        {Boolean(memoImage) && (
          <View style={styles.memoImageContainer}>
            <Image
              source={memoImage}
              style={{
                // width: PixelRatio.getPixelSizeForLayoutSize(
                //   memoWidth / PixelRatio.get(),
                // ),
                width: '100%',
                height: PixelRatio.getPixelSizeForLayoutSize(
                  memoHeight / PixelRatio.get(),
                ),
                resizeMode: 'contain',
                position: 'absolute',
                bottom: -20,
              }}
            />
          </View>
        )}
      </View>
    </View>
  );
};

export default MemoFrame;
