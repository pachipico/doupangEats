import React from 'react';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import styled from 'styled-components/native';

const Container = styled.View`
  flex-direction: row;
  padding: 18px 0px;
  align-items: center;
`;
const Text = styled.Text`
  font-size: 19px;
`;
const IconWrapper = styled.View`
  padding: 0px 14px;
`;
type ListProps = {
  text: string;
  iconName: string;
};

const List: React.FC<ListProps> = ({text, iconName}) => {
  return (
    <Container>
      <IconWrapper>
        <Icon name="tree-outline" size={24} color="black" />
      </IconWrapper>
      <Text>{text}</Text>
    </Container>
  );
};

export default List;
