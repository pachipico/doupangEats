import React from 'react';
import styled from 'styled-components/native';

const Container = styled.View`
  height: 80px;
  background-color: #c0dffe;
  justify-content: center;
  padding: 15px;
`;
const Text = styled.Text`
  color: #121450;
  font-size: 21px
  font-weight: bold;
`;

const Ad = () => {
  return (
    <Container>
      <Text>3,000원 무제한 할인 받기!</Text>
    </Container>
  );
};

export default Ad;
