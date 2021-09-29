export type searchData = {
  text: string;
};
export type myEatsData = {
  text: string;
  iconName: string;
};

export type StackParamList = {
  FavoritesScreen: undefined;
  AppNavigator: undefined;
};

export type HomeStackParamList = {
  HomeNavigator: undefined;
  HomeScreen: {address: string; addressDetail?: string; extraDetail?: string};
  AddressSettingModal: undefined;
  AddressSearchScreen: undefined;
  AddressDetail: {address: string};
};

export type LocationData = {
  roadAddr: string;
};
