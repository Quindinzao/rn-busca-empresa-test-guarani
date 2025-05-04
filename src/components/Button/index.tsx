// External Libraries
import React from 'react';

// Styles
import { ButtonText, TouchableOpacityButton } from './styles';

interface ButtonProps {
  title: string;
  onPress: () => void;
}

const Button = ({title, onPress}: ButtonProps) => {
  return (
    <TouchableOpacityButton activeOpacity={0.7} onPress={onPress}>
      <ButtonText>{title}</ButtonText>
    </TouchableOpacityButton>
  );
};

export default Button;
