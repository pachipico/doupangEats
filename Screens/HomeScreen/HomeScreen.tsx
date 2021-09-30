import {RouteProp} from '@react-navigation/native';
import {StackNavigationProp} from '@react-navigation/stack';
import React, {useEffect, useState} from 'react';
import * as Animatable from 'react-native-animatable';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
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
            navigation.navigate('AddressSettingModal');
          }}>
          <HeaderText>{route.params.main}</HeaderText>
        </HeaderContent>
        <IconWrapper
          onPress={() => {
            console.log(route.params);
          }}>
          <Icon name="magnify" size={25} color="black" />
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
