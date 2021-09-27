import React from 'react';
import styled from 'styled-components/native';

const Container = styled.View`
  background-color: white;

  padding: 20px;
`;

const TextWrapper = styled.View`
  margin-bottom: 10px;
`;

const SearchGuideHeader = styled.Text`
  font-weight: bold;
  margin-bottom: 10px;
`;

const SearchGuideText = styled.Text``;

const SearchGuide = () => {
  return (
    <Container>
      <SearchGuideHeader>검색Tip</SearchGuideHeader>
      <TextWrapper>
        <SearchGuideText>* 도로명 + 건불번호</SearchGuideText>
        <SearchGuideText style={{color: 'gray'}}>
          {' '}
          &nbsp;(예: 송파대로 570)
        </SearchGuideText>
      </TextWrapper>
      <TextWrapper>
        <SearchGuideText>* 동/읍/면/리 + 번지</SearchGuideText>
        <SearchGuideText style={{color: 'gray'}}>
          {' '}
          &nbsp;(예: 신촌동 7-30)
        </SearchGuideText>
      </TextWrapper>
      <TextWrapper>
        <SearchGuideText>* 건물명, 아파트명</SearchGuideText>
        <SearchGuideText style={{color: 'gray'}}>
          {' '}
          &nbsp;(예: 반포자이아파트)
        </SearchGuideText>
      </TextWrapper>
    </Container>
  );
};

export default SearchGuide;
