import { Theme } from '@emotion/react';

export const darkTheme: Theme = {
  title: 'dark',
  colors: {
    primary: '#FEBB34',
    secondary: '#B26F35',

    backgroundApp: '#2C2C2C',
    backgroundButton: '#D79435',
    backgroundTextInput: '#3A3A3A',
    borderTextInput: '#3A3A3A',

    color: '#FFFFFF',
    colorLabel: '#8E8E8E',
    colorPlaceholder: '#8E8E8E',
  },
  typography: {
    fontFamily: {
      light: 'LatoLight',
      regular: 'LatoRegular',
      bold: 'LatoBold',
    },
    fontSize: {
      small: 12,
      medium: 16,
      large: 24,
    },
  },
  spacing: {
    sm: 8,
    xs: 4,
    md: 16,
    lg: 24,
    xl: 32,
  },
  borderRadius: {
    small: 8,
    medium: 12,
    large: 16,
  },
};
