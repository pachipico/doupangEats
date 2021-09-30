import styled from 'styled-components/native';

export const Container = styled.SafeAreaView`
  flex: 1;
`;

export const Header = styled.View`
  position: absolute;

  width: 100%;
  align-items: center;
  justify-content: center;
  top: 45px;
  z-index: 1;
  padding: 15px;
`;

export const HeaderContent = styled.TouchableOpacity``;

export const HeaderText = styled.Text`
  font-size: 16px;
`;

export const IconWrapper = styled.TouchableOpacity`
  position: absolute;
  right: 15px;
  z-index: 2;
`;

export const Body = styled.ScrollView`
  margin-top: 45px;
`;

export const Toast = styled.View`
  border: 1px solid orange;
  padding: 10px;
  width: 90%
  background-color: white;
  position: absolute;
  bottom: 10px;
  align-self: center;
  align-items: center;
  flex-direction: row;
`;

export const ToastLogo = styled.Text`
  color: orange;
  font-size: 15px;
`;

export const Bar = styled.View`
  border-right-width: 1px;
  border-right-color: gray;
  height: 10px;
  margin: 0px 10px;
`;

export const ToastText = styled.Text`
  font-size: 15px;
`;

export const CloseButton = styled.TouchableOpacity`
  position: absolute;
  right: 10px;
`;
