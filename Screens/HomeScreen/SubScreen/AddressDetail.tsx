import {RouteProp} from '@react-navigation/native';
import {StackNavigationProp} from '@react-navigation/stack';
import React, {useEffect, useRef, useState} from 'react';

import {Address, HomeStackParamList} from '../../../types';
import styled from 'styled-components/native';
import Icon from 'react-native-vector-icons/Ionicons';
import {TouchableOpacity} from 'react-native';
import {useKeyboard} from '../../../hooks/useKeyboard';
import AsyncStorage from '@react-native-async-storage/async-storage';

const Container = styled.SafeAreaView`
  flex: 1;
  justify-content: flex-end;
`;

const TouchWrapper = styled.TouchableOpacity``;
const Header = styled.View`
  justify-content: center;
  flex-direction: row;
`;

const BackButton = styled.Text`
  position: relative;
  right: 110px;
`;

const HeaderTitle = styled.Text`
  font-size: 18px;
  margin-bottom: 10px;
  font-weight: bold;
`;

const Content = styled.ScrollView`
  padding: 0px 15px;
  flex: 1;
`;

const Location = styled.View`
  flex-direction: row;
  align-items: center;
  border-bottom-width: 1px;
  padding: 10px;
  border-bottom-color: lightgray;
`;

const LocationIcon = styled.Text`
  padding-right: 10px;
`;

const TextWrapper = styled.View``;

const LocationTitle = styled.Text`
  font-size: 15px;
`;

const LocationSub = styled.Text`
  font-size: 13px;
  color: gray;
`;

const AddressInput = styled.TextInput`
  font-size: 16px;
  padding: 16px 0px;
  border-bottom-width: 1px;
  border-bottom-color: lightgray;
`;

const ButtonContainer = styled.View`
  flex-direction: row;
  justify-content: space-between;
  margin-top: 15px;
`;

const SelectButton1 = styled.TouchableOpacity<{selected: number}>`
  width: 30%;
  height: 60px;
  border: ${props =>
    props.selected === 1 ? '2px solid skyblue' : '1px solid black'};
  align-items: center;
  justify-content: center;
`;
const SelectButton2 = styled.TouchableOpacity<{selected: number}>`
  width: 30%;
  height: 60px;
  border: ${props =>
    props.selected === 2 ? '2px solid skyblue' : '1px solid black'};
  align-items: center;
  justify-content: center;
`;
const SelectButton3 = styled.TouchableOpacity<{selected: number}>`
  width: 30%;
  height: 60px;
  border: ${props =>
    props.selected === 3 ? '2px solid skyblue' : '1px solid black'};
  align-items: center;
  justify-content: center;
`;

const ButtonText1 = styled.Text<{selectedBtn: number}>`
  font-size: 14px;
  color: ${props => (props.selectedBtn === 1 ? 'skyblue' : 'black')};
`;
const ButtonText2 = styled.Text<{selectedBtn: number}>`
  font-size: 14px;
  color: ${props => (props.selectedBtn === 2 ? 'skyblue' : 'black')};
`;
const ButtonText3 = styled.Text<{selectedBtn: number}>`
  font-size: 14px;
  color: ${props => (props.selectedBtn === 3 ? 'skyblue' : 'black')};
`;

const SubmitButton = styled.Button``;

const ButtonWrapper = styled.View<{keyboardHeight: number}>`
  margin-bottom: ${props =>
    props.keyboardHeight ? props.keyboardHeight - 80 + 'px' : 0};
  background-color: #1f6ce2;
`;

const NameInput = styled.TextInput`
  font-size: 16px;
  padding: 16px 0px;
  border-bottom-width: 1px;
  border-bottom-color: lightgray;
`;

type Props = {
  navigation: StackNavigationProp<HomeStackParamList, 'AddressDetail'>;
  route: RouteProp<HomeStackParamList, 'AddressDetail'>;
};

const AddressDetail: React.FC<Props> = ({route, navigation}) => {
  const [detail, setDetail] = useState<string>();
  const [extraInfo, setExtraInfo] = useState<string>();
  const [selectedBtn, setSelectedBtn] = useState<number>(0);
  const [addressName, setAddressName] = useState<string | null>(null);
  const [name, setName] = useState<string>();
  const btnRef = useRef<TouchableOpacity>(null);

  const getData = async () => {
    try {
      const jsonValue = await AsyncStorage.getItem('locationHistory');
      return jsonValue != null ? JSON.parse(jsonValue) : null;
    } catch (e) {
      console.log('failed to get data from storage:', e);
    }
  };

  const saveCurrLocation = async (value: Address) => {
    try {
      let history: Address[] = await getData();
      if (history) {
        if (history.includes(value)) {
          console.log('중복');
        } else {
          history.push(value);
        }
      } else {
        history = [value];
      }
      const jsonValue = JSON.stringify(history);
      await AsyncStorage.setItem('locationHistory', jsonValue);
      console.log('successfully saved to storage');
    } catch (e) {
      console.log('failed to save data to storage:', e);
    }
  };

  const {address} = route.params;
  const [keyboardHeight] = useKeyboard();
  useEffect(() => {
    setDetail('');
    setExtraInfo('');
  }, []);
  return (
    <>
      <Container>
        <Header>
          <TouchWrapper
            onPress={() => {
              navigation.goBack();
            }}>
            <BackButton>
              <Icon name="arrow-back" size={22} color="black" />
            </BackButton>
          </TouchWrapper>
          <HeaderTitle>배달지 상세 정보</HeaderTitle>
        </Header>
        <Content>
          <Location>
            <LocationIcon>
              <Icon name="location-outline" size={16} color="gray" />
            </LocationIcon>
            <TextWrapper>
              <LocationTitle>
                {address.slice(0, address.indexOf('('))}
              </LocationTitle>
              <LocationSub>
                {address.slice(0, address.indexOf('('))}
              </LocationSub>
            </TextWrapper>
          </Location>
          <AddressInput
            keyboardType="name-phone-pad"
            autoCapitalize="none"
            autoCorrect={false}
            onEndEditing={() => {
              if (detail === '상세주소|') {
                setDetail('');
              }
            }}
            onFocus={() => {
              if (detail === '') {
                setDetail('상세주소|');
              }
            }}
            onChangeText={prev => {
              setDetail(prev);
            }}
            value={detail}
            placeholder="상세주소 (아파트/동/호)"
          />
          <AddressInput
            keyboardType="name-phone-pad"
            autoCapitalize="none"
            autoCorrect={false}
            onEndEditing={() => {
              if (extraInfo === '길 안내|') {
                setExtraInfo('');
              }
            }}
            value={extraInfo}
            onFocus={() => {
              if (extraInfo === '') {
                setExtraInfo('길 안내|');
              }
            }}
            onChangeText={prev => {
              setExtraInfo(prev);
            }}
            placeholder="길 안내 (예: 1층에 올리브영이 있는 오피스텔)"
          />
          <ButtonContainer>
            <SelectButton1
              ref={btnRef}
              selected={selectedBtn}
              key="1"
              onPress={() => {
                if (selectedBtn === 1) {
                  setSelectedBtn(0);
                  setAddressName(null);
                } else {
                  setSelectedBtn(1);
                  setAddressName('집');
                }
              }}
              activeOpacity={1.0}>
              <ButtonText1 selectedBtn={selectedBtn}>집</ButtonText1>
            </SelectButton1>
            <SelectButton2
              selected={selectedBtn}
              key="2"
              onPress={() => {
                if (selectedBtn === 2) {
                  setSelectedBtn(0);
                  setAddressName(null);
                } else {
                  setSelectedBtn(2);
                  setAddressName('회사');
                }
              }}
              activeOpacity={1.0}>
              <ButtonText2 selectedBtn={selectedBtn}>회사</ButtonText2>
            </SelectButton2>
            <SelectButton3
              selected={selectedBtn}
              key="3"
              onPress={() => {
                if (selectedBtn === 3) {
                  setSelectedBtn(0);
                  setAddressName(null);
                } else {
                  setSelectedBtn(3);
                  setAddressName('기타');
                }
              }}
              activeOpacity={1.0}>
              <ButtonText3 selectedBtn={selectedBtn}>기타</ButtonText3>
            </SelectButton3>
          </ButtonContainer>
          {addressName === '기타' && (
            <NameInput
              placeholder="주소 별칭"
              value={name}
              onChangeText={text => {
                setName(text);
              }}
            />
          )}
        </Content>
      </Container>
      <ButtonWrapper keyboardHeight={keyboardHeight}>
        <SubmitButton
          color="white"
          title="완료"
          onPress={() => {
            console.log(
              detail?.slice(detail?.indexOf('|') + 1, detail?.length),
              extraInfo?.slice(extraInfo?.indexOf('|') + 1, extraInfo?.length),
            );
            const searchedData: Address = {
              address_name: route.params.address.slice(
                0,
                route.params.address.indexOf('('),
              ),
              detail: detail?.slice(detail?.indexOf('|') + 1, detail?.length),
              extra: extraInfo?.slice(
                extraInfo?.indexOf('|') + 1,
                extraInfo?.length,
              ),
              name: name ? name : addressName,
            };
            console.log(searchedData);
            saveCurrLocation(searchedData);
            navigation.navigate('HomeScreen', searchedData);
          }}
        />
      </ButtonWrapper>
    </>
  );
};

export default AddressDetail;
