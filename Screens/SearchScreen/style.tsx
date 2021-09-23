import styled from 'styled-components/native';

export const Header = styled.View`
  position: absolute;
  top: 45px;
  flex-direction: row;
  padding: 10px;
  align-items: center;
`;

export const Input = styled.TextInput`
  background-color: lightgray;
  padding: 9px;
  flex-grow: 1;
  border-radius: 100px;
  font-weight: bold;
  font-size: 16px;
`;

export const SearchButton = styled.Text``;

export const TouchableWrapper = styled.TouchableOpacity`
  padding-left: 5px;
`;

export const Body = styled.ScrollView`
  margin-top: 60px;
  padding: 0px 10px;
`;

export const ItemRow = styled.View`
  flex-direction: row;
  justify-content: space-around;
  height: 110px;
  flex-wrap: wrap;
  height: 100%;
`;

export const Item = styled.View`
  align-items: center;
  margin-bottom: 10px;
`;
export const ItemImg = styled.View`
  width: 110px;
  height: 110px;
  background-color: gray;
  border-radius: 75px;
`;

export const ItemText = styled.Text`
  margin: 10px;
`;
