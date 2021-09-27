import React, {Dispatch, SetStateAction} from 'react';
import styled from 'styled-components/native';
const Container = styled.TouchableOpacity<{isSelected: boolean}>`
  width: 30%;
  height: 60px;
  border: 1px solid black;
  align-items: center;
  justify-content: center;
  color: ${props => (props.isSelected ? 'blue' : 'black')};
`;
const ButtonText = styled.Text`
  font-size: 14px;
`;

type Props = {
  text: string;
  isSelected: boolean;
  setSelectedBtn: Dispatch<SetStateAction<string | undefined>>;
};

const SelectButton: React.FC<Props> = ({text, isSelected, setSelectedBtn}) => {
  return (
    <Container
      isSelected={isSelected}
      onPress={() => {
        setSelectedBtn(text);
        console.log(text, isSelected);
      }}>
      <ButtonText>{text}</ButtonText>
    </Container>
  );
};

export default SelectButton;
