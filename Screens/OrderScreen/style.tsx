import styled from 'styled-components/native';

export const Header = styled.View`
  flex-direction: row;
  position: absolute;
  padding: 10px 0;

  top: 45px;
`;
export const LeftTextWrapper = styled.TouchableOpacity<{currTab: string}>`
  justify-content: center;
  align-items: center;
  width: 50%;
  border-bottom-width: 2px;
  border-bottom-color: ${props =>
    props.currTab === 'left' ? 'black' : '#b5b5b5'};
  padding: 10px;
`;
export const RightTextWrapper = styled.TouchableOpacity<{currTab: string}>`
  justify-content: center;
  align-items: center;
  width: 50%;
  border-bottom-width: 2px;
  border-bottom-color: ${props =>
    props.currTab === 'right' ? 'black' : '#b5b5b5'};
  padding: 10px;
`;

export const HeaderText1 = styled.Text<{currTab: string}>`
  color: ${p => (p.currTab === 'left' ? 'black' : '#b5b5b5')};
`;
export const HeaderText2 = styled.Text<{currTab: string}>`
  color: ${p => (p.currTab === 'right' ? 'black' : '#b5b5b5')};
`;
export const Body = styled.View`
  flex: 1;
  margin-top: 55px;
`;
