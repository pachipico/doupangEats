import Geolocation from '@react-native-community/geolocation';
import {StackNavigationProp} from '@react-navigation/stack';
import axios from 'axios';
import React, {useState} from 'react';
import styled from 'styled-components/native';
import {KAKAO_KEY} from '../../../config';
import {Address, HomeStackParamList} from '../../../types';

const Container = styled.SafeAreaView`
  background-color: white;
`;

const ColorContainer = styled.View`
  background-color: #f0efef;
`;

const Header = styled.View`
  padding: 10px;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  background-color: white;
`;

const HeaderText = styled.Text`
  font-size: 20px;
`;

const CloseButton = styled.Text`
  font-size: 16px;
`;

const CloseWrapper = styled.TouchableOpacity`
  position: relative;
  right: 100px;
`;

const InputContainer = styled.TouchableOpacity``;

const InputLocation = styled.Text`
  font-size: 16px;
  padding: 10px;
  color: gray;
  background-color: white;
`;

const CurrentButtonWrapper = styled.TouchableOpacity`
  align-items: center;
  padding: 10px 20px;
  margin-top: 10px;
  background-color: white;
`;

const CurrentLocationButtonText = styled.Text`
  border: 1px solid black;
  padding: 10px 90px;
`;

type ModalProps = {
  navigation: StackNavigationProp<HomeStackParamList, 'AddressSettingModal'>;
};

const AddressSettingModal: React.FC<ModalProps> = ({navigation}) => {
  const [currLocation, setCurrLocation] = useState<Address>();
  const handleSearch = (lat: number, long: number) => {
    const url = `https://dapi.kakao.com/v2/local/geo/coord2address.json?input_coord=WGS84&y=${lat}&x=${long}`;
    const headers = {Authorization: `KakaoAK ${KAKAO_KEY}`};
    axios.get(url, {headers: headers}).then(response => {
      // console.log(response.data.documents[0]);
      setCurrLocation(response.data.documents[0].address);
    });
  };
  return (
    <Container>
      <ColorContainer>
        <Header>
          <CloseWrapper
            onPress={() => {
              navigation.goBack();
            }}>
            <CloseButton>X</CloseButton>
          </CloseWrapper>
          <HeaderText>배달지 주소 설정</HeaderText>
        </Header>
        <InputContainer
          onPress={() => {
            console.log('pa');
            navigation.navigate('AddressSearchScreen');
          }}>
          <InputLocation>도로명, 건물명 또는 지번으로 검색</InputLocation>
        </InputContainer>
        <CurrentButtonWrapper
          onPress={() => {
            Geolocation.getCurrentPosition(info => {
              const lat = info.coords.latitude;
              const long = info.coords.longitude;
              handleSearch(lat, long);
            });

            if (currLocation) {
              navigation.navigate('HomeScreen', {
                address_name: currLocation.address_name,
              });
            }
          }}>
          <CurrentLocationButtonText>
            현재 위치로 주소 찾기
          </CurrentLocationButtonText>
        </CurrentButtonWrapper>
      </ColorContainer>
    </Container>
  );
};

export default AddressSettingModal;
