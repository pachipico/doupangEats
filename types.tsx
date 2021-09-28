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
  HomeScreen: undefined;
  AddressSettingModal: undefined;
  AddressSearchScreen: undefined;
  AddressDetail: {address: string};
};

export type LocationData = {
  roadAddr: string;
};
