import React from 'react';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import HomeScreen from '../Screens/HomeScreen/HomeScreen';
import AddressSettingModal from '../Screens/HomeScreen/SubScreen/AddressSettingModal';
import AddressSearchScreen from '../Screens/HomeScreen/SubScreen/AddressSearchScreen';
import AddressDetail from '../Screens/HomeScreen/SubScreen/AddressDetail';
import {RouteProp} from '@react-navigation/native';
import {StackNavigationProp} from '@react-navigation/stack';
import {HomeStackParamList} from '../types';

const Stack = createNativeStackNavigator();

type Props = {
  navigation: StackNavigationProp<HomeStackParamList, 'HomeNavigator'>;
  route: RouteProp<HomeStackParamList, 'HomeNavigator'>;
};

const HomeNavigator: React.FC<Props> = ({navigation, route}) => {
  const {Navigator, Screen, Group} = Stack;

  return (
    <Navigator>
      <Screen
        name="HomeScreen"
        component={HomeScreen}
        options={{headerShown: false}}
      />
      <Group>
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
      </Group>
    </Navigator>
  );
};

export default HomeNavigator;
