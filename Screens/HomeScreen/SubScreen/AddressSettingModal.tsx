import AsyncStorage from '@react-native-async-storage/async-storage';
import Geolocation from '@react-native-community/geolocation';
import {RouteProp} from '@react-navigation/native';
import {StackNavigationProp} from '@react-navigation/stack';
import axios from 'axios';
import React, {useCallback, useEffect, useState} from 'react';
import Icon from 'react-native-vector-icons/Ionicons';

import styled from 'styled-components/native';
import {KAKAO_KEY} from '../../../config';
import {Address, HomeStackParamList} from '../../../types';

const Container = styled.SafeAreaView`
  background-color: white;
  flex: 1;
`;

const ColorContainer = styled.View`
  background-color: #f0efef;
  flex: 1;
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

const InputContainer = styled.TouchableOpacity`
  flex-direction: row;
  align-items: center;
`;

const InputLocation = styled.Text`
  font-size: 16px;

  flex-grow: 1;
  padding: 10px 20px;
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

const HistoryList = styled.View`
  flex: 1;
  background-color: white;
  padding: 16px;
  padding-right: 0px;
`;

const HistoryItem = styled.TouchableOpacity`
  flex-direction: row;
  align-items: center;
  border-bottom-width: 1px;
  border-bottom-color: #b5b5b5;
`;

const HistoryIcon = styled.Text`
  margin-right: 16px;
`;

const TextWrapper = styled.View`
  padding: 10px 0px;
`;

const Row = styled.View`
  flex-direction: row;
  align-items: center;
`;
const HistoryItemName = styled.Text`
  font-size: 15px;
  width: 300px;
`;

const HistoryItemAddress = styled.Text`
  color: #b5b5b5;
  width: 300px;
`;
const Checked = styled.Text``;
type ModalProps = {
  navigation: StackNavigationProp<HomeStackParamList, 'AddressSettingModal'>;
  route: RouteProp<HomeStackParamList, 'AddressSettingModal'>;
};

const AddressSettingModal: React.FC<ModalProps> = ({navigation, route}) => {
  const [currLocation, setCurrLocation] = useState<Address>();
  const [history, setHistory] = useState<Address[]>();
  const handleSearch = (lat: number, long: number) => {
    const url = `https://dapi.kakao.com/v2/local/geo/coord2address.json?input_coord=WGS84&y=${lat}&x=${long}`;
    const headers = {Authorization: `KakaoAK ${KAKAO_KEY}`};
    axios.get(url, {headers: headers}).then(response => {
      setCurrLocation(response.data.documents[0].address);
    });
  };
  const getHistory = useCallback(async () => {
    try {
      const jsonValue = await AsyncStorage.getItem('locationHistory');
      if (jsonValue !== null) {
        setHistory(JSON.parse(jsonValue));
      }
    } catch (e) {
      console.log('failed to fetch location history', e);
    }
  }, []);
  useEffect(() => {
    getHistory();
  }, [getHistory]);

  return (
    <Container>
      <ColorContainer>
        <Header>
          <CloseWrapper
            onPress={() => {
              navigation.goBack();
            }}>
            <CloseButton>
              <Icon name="close" size={24} color="black" />
            </CloseButton>
          </CloseWrapper>
          <HeaderText>배달지 주소 설정</HeaderText>
        </Header>
        <InputContainer
          onPress={() => {
            navigation.navigate('AddressSearchScreen', route.params);
          }}>
          <InputLocation>
            <Icon name="search" color="#b5b5b5" size={20} />
            &nbsp;도로명, 건물명 또는 지번으로 검색
          </InputLocation>
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
        <HistoryList>
          {history?.map((each, i) => {
            let selected = false;
            if (
              each.address_name == route.params.address_name &&
              each.detail == route.params.detail &&
              each.extra == route.params.extra &&
              each.name == route.params.name
            ) {
              selected = true;
            } else {
              selected = false;
            }

            return (
              <HistoryItem
                key={i}
                activeOpacity={1.0}
                onPress={() => {
                  navigation.navigate('HomeScreen', each);
                }}>
                <HistoryIcon>
                  {each.name == null && (
                    <Icon name="ios-location" color="#b5b5b5" size={20} />
                  )}
                  {each.name === '집' && (
                    <Icon name="md-home" color="#b5b5b5" size={20} />
                  )}
                  {each.name === '회사' && (
                    <Icon
                      name="ios-briefcase-outline"
                      color="#b5b5b5"
                      size={20}
                    />
                  )}
                </HistoryIcon>

                <Row>
                  <TextWrapper>
                    <HistoryItemName>
                      {each.name || each.address_name}
                    </HistoryItemName>
                    <HistoryItemAddress>{`${each.address_name} ${each.detail}`}</HistoryItemAddress>
                  </TextWrapper>

                  {selected && (
                    <Checked>
                      <Icon name="ios-checkmark-sharp" color="blue" size={26} />
                    </Checked>
                  )}
                </Row>
              </HistoryItem>
            );
          })}
        </HistoryList>
      </ColorContainer>
    </Container>
  );
};

export default AddressSettingModal;
