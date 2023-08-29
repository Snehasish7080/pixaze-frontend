import {NativeStackScreenProps} from '@react-navigation/native-stack';

export type ProfileRouteList = {
  NativeProfileScreen: undefined;
  MemoDetailScreen: {tag: string};
};
export type ProfileNavigationProp<T extends keyof ProfileRouteList> =
  NativeStackScreenProps<ProfileRouteList, T>;

export type ProfileNavProps<T extends keyof ProfileRouteList> =
  NativeStackScreenProps<ProfileRouteList, T>;
