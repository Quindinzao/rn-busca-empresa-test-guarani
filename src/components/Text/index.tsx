import React from 'react';
import { Text as RNText, TextProps } from 'react-native';
import { useTheme, Theme } from '@emotion/react';

interface CustomTextProps extends TextProps {
  fontFamilyProp?: keyof Theme['typography']['fontFamily'];
  fontSizeProp?: keyof Theme['typography']['fontSize'];
}

const Text = ({
  children,
  fontFamilyProp,
  fontSizeProp,
  ...rest
}: CustomTextProps) => {
  const theme = useTheme();

  const getFontSize = (fontSize: CustomTextProps['fontSizeProp']) => {
    return fontSize ? theme.typography.fontSize[fontSize] : theme.typography.fontSize.medium;
  };

  const getFontFamily = (fontFamily: CustomTextProps['fontFamilyProp']) => {
    return fontFamily ? theme.typography.fontFamily[fontFamily] : theme.typography.fontFamily.regular;
  };

  const fontSize = getFontSize(fontSizeProp);
  const fontFamily = getFontFamily(fontFamilyProp);

  return (
    <RNText style={[{ fontFamily, fontSize, color: theme.colors.color, ...rest.style?.valueOf }]}>
      {children}
    </RNText>
  );
};

export default Text;
