import React from 'react';
import { TextInputProps as RNTextInputProps } from 'react-native';
import { ContainerTextInput, RNTextInput } from './styles';
import { useTheme } from '@emotion/react';
import Text from '../Text';

interface TextInputProps extends RNTextInputProps {
  label: string;
  spaceFilled?: 1 | 2 | 3;
}

const TextInput = ({ label, spaceFilled, ...rest }: TextInputProps) => {
  const {colors} = useTheme();
  return (
    <ContainerTextInput spaceFilled={spaceFilled}>
      <Text fontFamilyProp="light" fontSizeProp="small">{label}</Text>
      <RNTextInput placeholderTextColor={colors.colorPlaceholder} {...rest} />
    </ContainerTextInput>
  );
};

export default TextInput;
