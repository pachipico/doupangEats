import React from 'react';
import styled from 'styled-components/native';

const Container = styled.View`
  padding: 10px 0px;
  border-bottom-width: 1px;
  border-bottom-color: lightgray;
`;
const MainText = styled.Text`
  font-size: 15px;
  margin-bottom: 8px;
  margin-top: 5px;
`;

const RowView = styled.View`
  flex-direction: row;
  align-items: center;
`;

const RoadTag = styled.Text`
  color: #0069b4;
  padding: 2px;
  border: 1px solid lightgray;
  font-size: 12px;
`;

const SubText = styled.Text`
  color: gray;
  margin-left: 10px;
`;

type Props = {
  roadName: string;
};

const DataListItem: React.FC<Props> = ({roadName}) => {
  return (
    <Container>
      <MainText>{roadName}</MainText>
      <RowView>
        <RoadTag>도로명</RoadTag>
        <SubText>{roadName.slice(0, roadName.indexOf('('))}</SubText>
      </RowView>
    </Container>
  );
};

export default DataListItem;
