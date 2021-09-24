import React, {useState} from 'react';
import {Container} from '../HomeScreen/style';
import {
  Body,
  Header,
  HeaderText,
  HeaderText1,
  HeaderText2,
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
          <HeaderText1 currTab={currTab}>과거 주문 내역</HeaderText1>
        </LeftTextWrapper>
        <RightTextWrapper
          currTab={currTab}
          activeOpacity={1}
          onPress={() => {
            setCurrentTab('right');
          }}>
          <HeaderText2 currTab={currTab}>준비중</HeaderText2>
        </RightTextWrapper>
      </Header>
      <Body>{currTab === 'left' ? <OrderHistory /> : <CurrentOrder />}</Body>
    </Container>
  );
};

export default OrderScreen;
