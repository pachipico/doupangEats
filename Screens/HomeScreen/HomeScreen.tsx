import AsyncStorage from '@react-native-async-storage/async-storage';
import {RouteProp} from '@react-navigation/native';
import {StackNavigationProp} from '@react-navigation/stack';
import React, {useEffect, useState} from 'react';
import * as Animatable from 'react-native-animatable';
import Icon from 'react-native-vector-icons/Ionicons';
import styled from 'styled-components/native';
import Ad from '../../Components/MyEatsComponent/Ad';
import {Address, HomeStackParamList} from '../../types';
import {
  Bar,
  Body,
  CloseButton,
  Container,
  Header,
  HeaderContent,
  HeaderText,
  IconWrapper,
  Toast,
  ToastLogo,
  ToastText,
} from './style';

const Test = Animatable.createAnimatableComponent(styled.View``);

type StackProps = {
  route: RouteProp<HomeStackParamList, 'HomeScreen'>;
  navigation: StackNavigationProp<HomeStackParamList, 'HomeScreen'>;
  address: Address;
};

const HomeScreen: React.FC<StackProps> = ({route, navigation}) => {
  const [isScrolling, setIsScrollEnd] = useState<boolean>(false);
  const [isClosed, setIsClosed] = useState<boolean>(false);

  return (
    <Container>
      <Header>
        <HeaderContent
          onPress={() => {
            navigation.navigate('AddressSettingModal', route.params);
          }}>
          <HeaderText>
            <Icon name="ios-location-outline" color="gray" size={15} /> &nbsp;
            {route.params.name ||
              route.params.address_name.slice(0, 16) + '...'}
            <Icon name="chevron-down-outline" color="blue" size={16} />
          </HeaderText>
        </HeaderContent>
        <IconWrapper
          onPress={() => {
            try {
              AsyncStorage.clear();
            } catch (e) {
              // clear error
            }

            console.log('Done.');
          }}>
          <Icon name="search" size={25} color="black" />
        </IconWrapper>
      </Header>
      <Body
        onScrollEndDrag={() => {
          console.log('end');
          setIsScrollEnd(false);
        }}
        onScrollBeginDrag={() => {
          setIsScrollEnd(true);
          console.log('scrolling');
        }}
        scrollEventThrottle={16}>
        <Ad />
        <Ad />
        <Ad />
        <Ad />
        <Ad />
        <Ad />
        <Ad />
        <Ad />
        <Ad />
        <Ad />
        <Ad />
        <Ad />
        <Ad />
        <Ad />
        <Ad />
        <Ad />
        <Ad />
        <Ad />
        <Ad />
        <Ad />
        <Ad />
        <Ad />
        <Ad />
        <Ad />
        <Ad />
        <Ad />
        <Ad />
      </Body>
      {!isClosed && !isScrolling && (
        <Test
          animation="fadeInUp"
          // ref={AnimationRef}
          useNativeDriver={true}
          delay={50}>
          <Toast>
            <ToastLogo>치타배달</ToastLogo>
            <Bar />
            <ToastText>30분 내 도착하는 맛집 289개!</ToastText>
            <CloseButton
              onPress={() => {
                setIsClosed(true);
              }}>
              <ToastText>
                <Icon name="close" size={20} color="black" />
              </ToastText>
            </CloseButton>
          </Toast>
        </Test>
      )}
    </Container>
  );
};

export default HomeScreen;
