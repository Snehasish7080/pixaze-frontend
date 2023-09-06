import {
  View,
  Text,
  Image,
  TouchableOpacity,
  PixelRatio,
  ScrollView,
} from 'react-native';
import React from 'react';
import {AuthenticatedNavProps} from '../../navigations/AuthenticatedNavigation/AuthenticatedNavigationTypes';
import AppHeader from '../../molecules/AppHeader/AppHeader';
import {styles} from './EditScreenStyles';
import AppText from '../../atoms/AppText/AppText';
import {
  Canvas,
  ColorMatrix,
  Image as SkiaImage,
  useImage,
} from '@shopify/react-native-skia';

const IMAGE_HEIGHT = 350;
const EditScreen: React.FC<AuthenticatedNavProps<'EditScreen'>> = ({
  navigation,
  route,
}) => {
  const {image} = route?.params;
  return (
    <>
      <AppHeader
        mainTitle="Edit"
        onBack={() => {
          navigation.goBack();
        }}
        rightSection={
          <TouchableOpacity>
            <AppText
              lineHeight={14}
              style={[
                styles.next,
                {
                  fontSize: 14 / PixelRatio.getFontScale(),
                },
              ]}>
              Next
            </AppText>
          </TouchableOpacity>
        }
      />
      <View style={styles.container}>
        <Image source={{uri: image}} style={styles.mainImage} />

        <View style={styles.filterContainer}>
          <ScrollView
            horizontal
            contentContainerStyle={{
              paddingVertical: 20,
              paddingHorizontal: 16,
            }}>
            {Array(10)
              .fill(undefined)
              .map((item, index) => {
                return <FilterComponent image={image} key={index} />;
              })}
          </ScrollView>
        </View>
      </View>
    </>
  );
};

type FilterComponentProps = {
  image: string;
};
const FilterComponent = ({image}: FilterComponentProps) => {
  const src = useImage(image);
  return (
    <View style={styles.image}>
      <Canvas style={{width: '100%', height: '100%'}}>
        <SkiaImage image={src} x={0} y={0} width={80} height={80} fit="cover" />
        <ColorMatrix
          matrix={[
            0, 1.0, 0, 0, 0, 0, 1.0, 0, 0, 0, 0, 0.6, 1, 0, 0, 0, 0, 0, 1, 0,
          ]}
        />
      </Canvas>
    </View>
  );
};

export default EditScreen;
