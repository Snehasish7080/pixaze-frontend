import {
  View,
  Text,
  Image,
  PixelRatio,
  useWindowDimensions,
  Vibration,
} from 'react-native';
import React, {useState} from 'react';
import {styles} from './LocationMarkStyles';
import TabLocationIcon from '../../atoms/LocationIcon/TabLocationIcon';
import {profileData} from '../../utils/dummyData';
import AppText from '../../atoms/AppText/AppText';
import {Box, BoxShadow, Canvas, rect, rrect} from '@shopify/react-native-skia';
import {Colors} from '../../utils/theme';
import CameraIcon from '../../atoms/CameraIcon/CameraIcon';
import HeartIconButton from '../../atoms/HeartIconButton/HeartIconButton';
import CommentButton from '../../atoms/CommentButton/CommentButton';
import ShareButton from '../../atoms/ShareButton/ShareButton';

type LocationMarkProps = {
  images: string[];
  location?: string;
  tag?: string;
};

const top = -15;
const LocationMark: React.FC<LocationMarkProps> = ({images, location, tag}) => {
  const {width} = useWindowDimensions();
  const [isLiked, setIsLiked] = useState(true);

  const handleLike = () => {
    setIsLiked(!isLiked);
    Vibration.vibrate(1);
  };
  return (
    <View
      style={[
        styles.container,
        {
          width: width - 32,
        },
      ]}>
      <Canvas
        style={{
          height: 140 + 30,
          width: width + 32,
          position: 'absolute',
          top: top,
          left: -20,
        }}
        mode="continuous">
        <Box
          box={rrect(rect(20, Math.abs(top), width - 32, 140), 4, 4)}
          color={Colors.white}>
          <BoxShadow dx={0} dy={0} blur={6} color={Colors.polaroidShadow} />
        </Box>
      </Canvas>

      <View style={styles.imageContainer}>
        {images.map((item, index) => {
          return (
            <Image
              source={{
                uri: images[index],
              }}
              style={styles.image}
              key={index}
            />
          );
        })}
        {images.length < 3 && (
          <View style={[styles.addMemo]}>
            <CameraIcon />
          </View>
        )}
        {images.length === 3 && (
          <View style={styles.absoluteAddMemo}>
            <CameraIcon color={Colors.white} />
          </View>
        )}
      </View>
      <View style={styles.locationContainer}>
        <View>
          {Boolean(location) && (
            <AppText
              lineHeight={16}
              style={[
                styles.location,
                {
                  fontSize: 16 / PixelRatio.getFontScale(),
                },
              ]}>
              {location}
            </AppText>
          )}
          {!Boolean(location) && (
            <AppText
              lineHeight={16}
              style={[
                styles.location,
                {
                  fontSize: 16 / PixelRatio.getFontScale(),
                },
              ]}>
              {tag}
            </AppText>
          )}
          {Boolean(location) && (
            <AppText
              lineHeight={14}
              style={[
                styles.tag,
                {
                  fontSize: 12 / PixelRatio.getFontScale(),
                },
              ]}>
              {tag}
            </AppText>
          )}
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
        <View style={styles.actionContainer}>
          <HeartIconButton
            liked={isLiked}
            handleLiked={undefined}
            color={Colors.dark}
            width={15}
            height={15}
          />
          <AppText
            lineHeight={14}
            style={[
              styles.likes,
              {
                fontSize: 10 / PixelRatio.getFontScale(),
              },
            ]}>
            1.1k
          </AppText>
        </View>
      </View>
    </View>
  );
};

export default LocationMark;
