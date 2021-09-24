import {RouteProp} from '@react-navigation/native';
import {StackNavigationProp} from '@react-navigation/stack';
import React from 'react';
import {Button, Text} from 'react-native';
import {StackParamList} from '../../types';
import {Container} from '../HomeScreen/style';
type StackProps = {
  route: RouteProp<StackParamList, 'FavoritesScreen'>;
  navigation: StackNavigationProp<StackParamList, 'FavoritesScreen'>;
};
const FavoritesScreen: React.FC<StackProps> = ({route, navigation}) => {
  return (
    <Container>
      <Text>Favorite</Text>
    </Container>
  );
};

export default FavoritesScreen;
