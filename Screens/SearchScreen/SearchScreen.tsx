import React from 'react';

import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import {searchData} from '../../types';
import {Container} from '../HomeScreen/style';
import {
  Header,
  Input,
  Item,
  SearchButton,
  Body,
  TouchableWrapper,
  ItemRow,
  ItemText,
  ItemImg,
} from './style';

const SearchScreen = () => {
  const searchDatas: searchData[] = [
    {text: '신규 맛집'},
    {text: '1인분'},
    {text: '한식'},
    {text: '치킨'},
    {text: '분식'},
    {text: '돈까스'},
    {text: '족발/보쌈'},
    {text: '찜/탕'},
    {text: '구이'},
    {text: '피자'},
    {text: '중식'},
    {text: '일식'},
    {text: '회/해물'},
    {text: '양식'},
    {text: '커피/차'},
    {text: '디저트'},
    {text: '간식'},
    {text: '아시안'},
    {text: '샌드위치'},
    {text: '샐러드'},
    {text: '버거'},
    {text: '맥시칸'},
    {text: '도시락'},
    {text: '죽'},
    {text: '프랜차이즈'},
  ];
  return (
    <Container>
      <Header>
        <Input placeholder="검색어를 입력하세요" />
        <TouchableWrapper>
          <SearchButton>
            <Icon name="magnify" size={30} color="black" />
          </SearchButton>
        </TouchableWrapper>
      </Header>
      <Body>
        <ItemRow>
          {searchDatas.map((item, i) => {
            return (
              <Item key={i}>
                <ItemImg></ItemImg>
                <ItemText>{item.text}</ItemText>
              </Item>
            );
          })}
        </ItemRow>
      </Body>
    </Container>
  );
};

export default SearchScreen;
