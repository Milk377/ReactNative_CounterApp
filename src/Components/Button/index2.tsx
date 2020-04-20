import React from 'react';
import Styled from 'styled-components/native';

const Container = Styled.TouchableOpacity``;
const Icon = Styled.Image``;

interface Props {
  iconName: 'two' | 'plus';
  onPress?: () => void;
}

const Button2 = ({onPress}: Props) => {
  return (
    <Container onPress={onPress}>
      <Icon source={require('~/Assets/Images/twotwo.png')} />
    </Container>
  );
};
export default Button2;
