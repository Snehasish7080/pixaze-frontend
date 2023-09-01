import {StackScreenProps} from '@react-navigation/stack';

export type AuthenticatedRouteList = {
  HomeScreen: undefined;
  CreateScreen: undefined;
};
export type AuthenticatedNavigationProp<
  T extends keyof AuthenticatedRouteList,
> = StackScreenProps<AuthenticatedRouteList, T>;

export type AuthenticatedNavProps<T extends keyof AuthenticatedRouteList> =
  StackScreenProps<AuthenticatedRouteList, T>;
