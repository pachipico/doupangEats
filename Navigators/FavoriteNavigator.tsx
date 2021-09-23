import {RouteProp} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {StackNavigationProp} from '@react-navigation/stack';
import React from 'react';
import FavoritesScreen from '../Screens/FavoritesScreen/FavoritesScreen';
import {StackParamList} from '../types';

const Stack = createNativeStackNavigator();
type StackProps = {
  route: RouteProp<StackParamList, 'FavoritesScreen'>;
  navigation: StackNavigationProp<StackParamList, 'FavoritesScreen'>;
};

const FavoriteNavigator: React.FC<StackProps> = ({route, navigation}) => {
  const {Navigator, Screen, Group} = Stack;

  return (
    <Navigator>
      <Screen
        name="FavoriteScreen"
        component={FavoritesScreen}
        options={{headerTitle: '즐겨찾기'}}
      />
    </Navigator>
  );
};

export default FavoriteNavigator;
