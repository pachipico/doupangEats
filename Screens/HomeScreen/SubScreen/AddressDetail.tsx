import {RouteProp} from '@react-navigation/native';
import {StackNavigationProp} from '@react-navigation/stack';
import React, {useCallback, useRef, useState} from 'react';

import {HomeStackParamList} from '../../../types';
import styled from 'styled-components/native';
import Icon from 'react-native-vector-icons/Ionicons';
import {TouchableOpacity} from 'react-native';
import {useKeyboard} from '../../../hooks/useKeyboard';

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
  margin: 15px 0px;
`;

const SelectButton1 = styled.TouchableOpacity<{selected: number}>`
  width: 30%;
  height: 60px;
  border: ${props =>
    props.selected === 1 ? '1px solid skyblue' : '1px solid black'};
  align-items: center;
  justify-content: center;
`;
const SelectButton2 = styled.TouchableOpacity<{selected: number}>`
  width: 30%;
  height: 60px;
  border: ${props =>
    props.selected === 2 ? '1px solid skyblue' : '1px solid black'};
  align-items: center;
  justify-content: center;
`;
const SelectButton3 = styled.TouchableOpacity<{selected: number}>`
  width: 30%;
  height: 60px;
  border: ${props =>
    props.selected === 3 ? '1px solid skyblue' : '1px solid black'};
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
  background-color: purple;
`;

type Props = {
  navigation: StackNavigationProp<HomeStackParamList, 'AddressDetail'>;
  route: RouteProp<HomeStackParamList, 'AddressDetail'>;
};

const AddressDetail: React.FC<Props> = ({route, navigation}) => {
  const [detail, setDetail] = useState<string>();
  const [extraInfo, setExtraInfo] = useState<string>();
  const [selectedBtn, setSelectedBtn] = useState<number>(0);
  const btnRef = useRef<TouchableOpacity>(null);
  const {address} = route.params;
  const [keyboardHeight] = useKeyboard();

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
              setDetail('');
            }}
            onFocus={() => {
              setDetail('상세주소|');
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
              setExtraInfo('');
            }}
            value={extraInfo}
            onFocus={() => {
              setExtraInfo('길 안내|');
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
                setSelectedBtn(1);
              }}
              activeOpacity={1.0}>
              <ButtonText1 selectedBtn={selectedBtn}>집</ButtonText1>
            </SelectButton1>
            <SelectButton2
              selected={selectedBtn}
              key="2"
              onPress={() => {
                setSelectedBtn(2);
              }}
              activeOpacity={1.0}>
              <ButtonText2 selectedBtn={selectedBtn}>회사</ButtonText2>
            </SelectButton2>
            <SelectButton3
              selected={selectedBtn}
              key="3"
              onPress={() => {
                setSelectedBtn(3);
              }}
              activeOpacity={1.0}>
              <ButtonText3 selectedBtn={selectedBtn}>기타</ButtonText3>
            </SelectButton3>
          </ButtonContainer>
        </Content>
      </Container>
      <ButtonWrapper keyboardHeight={keyboardHeight}>
        <SubmitButton
          title="완료"
          onPress={() => {
            console.log(keyboardHeight);
          }}
        />
      </ButtonWrapper>
    </>
  );
};

export default AddressDetail;
