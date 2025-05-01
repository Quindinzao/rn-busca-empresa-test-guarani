import '@emotion/react';

declare module '@emotion/react' {
  export interface Theme {
    title: string;
    colors: {
      primary: string;
      secondary: string;

      backgroundApp: string;
      backgroundButton: string;
      backgroundTextInput: string;
      borderTextInput: string;

      color: string;
      colorLabel: string;
      colorPlaceholder: string;
    };
    typography: {
      fontFamily: {
        light: string,
        regular: string,
        bold: string,
      },
      fontSize: {
        small: number,
        medium: number,
        large: number,
      },
    },
    spacing: {
      sm: number;
      xs: number;
      md: number;
      lg: number;
      xl: number;
    };
    borderRadius: {
      small: number;
      medium: number;
      large: number;
    }
  }
}
