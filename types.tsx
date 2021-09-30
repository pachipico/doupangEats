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
  AddressSettingModal: Address;
  AddressSearchScreen: Address;
  AddressDetail: {address: string};
};

export type LocationData = {
  roadAddr: string;
};

export type Address = {
  address_name: string;
  detail?: string;
  extra?: string;
  name?: string | null;
};
