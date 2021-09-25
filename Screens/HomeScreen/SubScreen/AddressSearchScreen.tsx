import {StackNavigationProp} from '@react-navigation/stack';
import React, {useEffect} from 'react';
import styled from 'styled-components/native';
import {HomeStackParamList} from '../../../types';

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
  navigation: StackNavigationProp<HomeStackParamList, 'AddressSearchScreen'>;
};

const AddressSearchScreen: React.FC<ModalProps> = ({navigation}) => {
  useEffect(() => {
    console.log('iim here');
  }, []);
  return (
    <Container>
      <ColorContainer>
        <Header>
          <CloseWrapper
            onPress={() => {
              navigation.navigate('HomeScreen');
            }}>
            <CloseButton>X</CloseButton>
          </CloseWrapper>
          <HeaderText>배달지 주소 설정</HeaderText>
        </Header>
        <InputContainer onPress={() => {}}>
          <InputLocation>도로명, 건물명 또는 지번으로 검색</InputLocation>
        </InputContainer>
      </ColorContainer>
    </Container>
  );
};

export default AddressSearchScreen;
