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
  HomeScreen: Address;
  AddressSettingModal: undefined;
  AddressSearchScreen: undefined;
  AddressDetail: {address: string};
};

export type LocationData = {
  roadAddr: string;
};

export type Address = {
  main: string;
  detail?: string;
  extra?: string;
  name?: string | null;
};
