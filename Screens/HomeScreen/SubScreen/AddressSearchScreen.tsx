import {StackNavigationProp} from '@react-navigation/stack';
import React, {useEffect, useState} from 'react';
import styled from 'styled-components/native';
import {HomeStackParamList, LocationData} from '../../../types';
import {API_KEY} from '../../../config';
import axios from 'axios';
import SearchGuide from '../../../Components/HomeComponent/SearchGuide';
import DataListItem from '../../../Components/HomeComponent/DataListItem';
import {Button} from 'react-native';
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
  margin-bottom: 10px;
`;

const Input = styled.TextInput`
  font-size: 16px;
  padding: 10px;
  color: gray;
  background-color: white;
`;

const DataList = styled.ScrollView`
  background-color: white;
  padding: 0px 20px;
  height: 100%;
`;

const TouchWrapper = styled.TouchableOpacity``;

type ModalProps = {
  navigation: StackNavigationProp<HomeStackParamList, 'AddressSearchScreen'>;
};

const AddressSearchScreen: React.FC<ModalProps> = ({navigation}) => {
  const [inputText, setInputText] = useState<string>();
  const [searchData, setSearchData] = useState<LocationData[]>([]);
  const url = `https://www.juso.go.kr/addrlink/addrLinkApi.do?confmKey=${API_KEY}&currentPage=1&countPerPage=10&keyword=${inputText}&resultType=json`;
  const handleSubmit = () => {
    axios
      .get(url)
      .then(response => {
        console.log(response.data.results.juso);
        setSearchData(response.data.results.juso);
      })
      .catch(err => console.log(err));
  };

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
          <Input
            value={inputText}
            autoFocus={true}
            autoCapitalize="none"
            autoCorrect={false}
            onSubmitEditing={() => {
              handleSubmit();
            }}
            returnKeyType="search"
            onChangeText={prev => setInputText(prev)}
            placeholder="도로명, 건물명 또는 지번으로 검색"
          />
        </InputContainer>
        {searchData.length === 0 && <SearchGuide />}
        <DataList>
          {searchData &&
            searchData.map((each, i) => {
              console.log(each.roadAddr);
              return (
                <TouchWrapper
                  key={i}
                  onPress={() => {
                    console.log(each.roadAddr);
                    navigation.navigate('AddressDetail', {
                      address: each.roadAddr,
                    });
                  }}>
                  <DataListItem roadName={each.roadAddr} />
                </TouchWrapper>
              );
            })}
        </DataList>
      </ColorContainer>
    </Container>
  );
};

export default AddressSearchScreen;
