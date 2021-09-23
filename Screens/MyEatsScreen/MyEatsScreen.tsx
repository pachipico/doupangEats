import React from 'react';
import Ad from '../../Components/MyEatsComponent/Ad';
import List from '../../Components/MyEatsComponent/List';
import {myEatsData} from '../../types';

import {
  Body,
  Container,
  UserInfoContainer,
  UserName,
  UserNumber,
} from './style';

const MyEatsScreen = () => {
  const myEatsDatas: myEatsData[] = [
    {text: '배달 주소 관리', iconName: ''},
    {text: '즐겨찾기', iconName: ''},
    {text: '할인쿠폰', iconName: ''},
    {text: '진행중인 이벤트', iconName: ''},
    {text: '결제관리', iconName: ''},
    {text: '배달파트너 모집', iconName: ''},
    {text: '자주 묻는 질문', iconName: ''},
    {text: '고객 지원', iconName: ''},
    {text: '설정', iconName: ''},
    {text: '공지사항', iconName: ''},
    {text: '약관 * 개인정보 처리방침', iconName: ''},
  ];
  return (
    <Container>
      <UserInfoContainer>
        <UserName>서정훈</UserName>
        <UserNumber>010-****-7028</UserNumber>
      </UserInfoContainer>
      <Ad />
      <Body>
        {myEatsDatas.map((item, i) => {
          return <List text={item.text} iconName={item.iconName} />;
        })}
      </Body>
    </Container>
  );
};

export default MyEatsScreen;
