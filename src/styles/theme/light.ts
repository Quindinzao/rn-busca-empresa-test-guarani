import { Theme } from '@emotion/react';
import { darkTheme } from './dark';

export const lightTheme: Theme = {
  ...darkTheme,
  title: 'dark',
  colors: {
    primary: '#0D8094',
    secondary: '#08434D',

    backgroundApp: '#FFFFFF',
    backgroundButton: '#0A6271',
    backgroundTextInput: '#ECECEC',
    borderTextInput: '#E9E9E9',

    color: '#000000',
    colorLabel: '#6E6E6E',
    colorPlaceholder: '#AAAAAA',
  },
};
