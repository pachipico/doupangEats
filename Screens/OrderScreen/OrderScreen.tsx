import React, {useState} from 'react';
import {Container} from '../HomeScreen/style';
import {
  Body,
  Header,
  HeaderText,
  LeftTextWrapper,
  RightTextWrapper,
} from './style';
import CurrentOrder from './SubScreen/CurrentOrder';
import OrderHistory from './SubScreen/OrderHistory';

const OrderScreen = () => {
  const [currTab, setCurrentTab] = useState<string>('left');
  return (
    <Container>
      <Header>
        <LeftTextWrapper
          currTab={currTab}
          activeOpacity={1}
          onPress={() => {
            setCurrentTab('left');
          }}>
          <HeaderText>과거 주문 내역</HeaderText>
        </LeftTextWrapper>
        <RightTextWrapper
          currTab={currTab}
          activeOpacity={1}
          onPress={() => {
            setCurrentTab('right');
          }}>
          <HeaderText>준비중</HeaderText>
        </RightTextWrapper>
      </Header>
      <Body>{currTab === 'left' ? <OrderHistory /> : <CurrentOrder />}</Body>
    </Container>
  );
};

export default OrderScreen;
