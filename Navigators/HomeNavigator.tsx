import React from 'react';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import HomeScreen from '../Screens/HomeScreen/HomeScreen';
import AddressSettingModal from '../Screens/HomeScreen/SubScreen/AddressSettingModal';
import AddressSearchScreen from '../Screens/HomeScreen/SubScreen/AddressSearchScreen';
import AddressDetail from '../Screens/HomeScreen/SubScreen/AddressDetail';

const Stack = createNativeStackNavigator();

const HomeNavigator = () => {
  const {Navigator, Screen} = Stack;
  return (
    <Navigator>
      <Screen
        name="HomeScreen"
        component={HomeScreen}
        options={{headerShown: false}}
      />
      <Screen
        name="AddressSearchScreen"
        component={AddressSearchScreen}
        options={{headerShown: false}}
      />

      <Screen
        name="AddressSettingModal"
        component={AddressSettingModal}
        options={{
          headerShown: false,
          presentation: 'card',
        }}
      />
      <Screen
        name="AddressDetail"
        component={AddressDetail}
        options={{headerShown: false}}
      />
    </Navigator>
  );
};

export default HomeNavigator;
