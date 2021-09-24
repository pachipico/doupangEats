import React from 'react';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import {NavigationContainer} from '@react-navigation/native';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import HomeScreen from '../Screens/HomeScreen/HomeScreen';
import MyEatsScreen from '../Screens/MyEatsScreen/MyEatsScreen';
import OrderScreen from '../Screens/OrderScreen/OrderScreen';
import SearchScreen from '../Screens/SearchScreen/SearchScreen';
import FavoriteNavigator from './FavoriteNavigator';

const Tab = createBottomTabNavigator();

const AppNavigator = () => {
  return (
    <NavigationContainer>
      <Tab.Navigator
        screenOptions={({route}) => ({
          tabBarIcon: ({focused}) => {
            let iconName;
            switch (route.name) {
              case '홈':
                iconName = 'home-variant-outline';
                break;
              case '검색':
                iconName = 'magnify';
                break;
              case '즐겨찾기':
                iconName = 'heart-outline';
                break;
              case '주문내역':
                iconName = 'clipboard-check-outline';
                break;
              case 'My 이츠':
                iconName = 'human-male';
                break;
              default:
                iconName = 'sdaf';
                break;
            }

            // You can return any component that you like here!
            return (
              <Icon
                name={iconName}
                size={27}
                color={focused ? 'black' : 'gray'}
              />
            );
          },
          tabBarActiveTintColor: 'black',
          tabBarInactiveTintColor: 'gray',
        })}>
        <Tab.Screen
          name="홈"
          component={HomeScreen}
          options={{headerShown: false}}
        />
        <Tab.Screen
          name="검색"
          component={SearchScreen}
          options={{headerShown: false}}
        />
        <Tab.Screen
          name="즐겨찾기"
          component={FavoriteNavigator}
          options={{
            tabBarStyle: {display: 'none'},
            headerShown: false,
          }}
        />

        <Tab.Screen
          name="주문내역"
          component={OrderScreen}
          options={{headerShown: false}}
        />
        <Tab.Screen
          name="My 이츠"
          component={MyEatsScreen}
          options={{headerShown: false}}
        />
      </Tab.Navigator>
    </NavigationContainer>
  );
};

export default AppNavigator;
