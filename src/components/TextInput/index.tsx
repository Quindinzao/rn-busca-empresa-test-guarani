// External Libraries
import React from 'react';
import { TextInputProps as RNTextInputProps } from 'react-native';
import { useTheme } from '@emotion/react';

// Components
import Text from '../Text';

// Styles
import { ContainerTextInput, RNTextInput } from './styles';

interface TextInputProps extends RNTextInputProps {
  label: string;
  spaceFilled?: 1 | 2 | 3;
  disabled?: boolean;
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
