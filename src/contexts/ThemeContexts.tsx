import React, { createContext, useContext, useState, ReactNode } from 'react';
import { darkTheme } from '../styles/theme/dark';
import { lightTheme } from '../styles/theme/light';
import { ThemeProvider as EmotionThemeProvider } from '@emotion/react';

type ThemeMode = 'light' | 'dark';

interface ThemeContextProps {
  toggleTheme: () => void;
  themeMode: ThemeMode;
}

const ThemeContext = createContext<ThemeContextProps | undefined>(undefined);

export const useThemeMode = () => {
  const context = useContext(ThemeContext);
  if (!context) {
    throw new Error('useThemeMode must be used within ThemeProvider');
  }
  return context;
};

export const ThemeProvider = ({ children }: { children: ReactNode }) => {
  const [themeMode, setThemeMode] = useState<ThemeMode>('dark');

  const toggleTheme = () => {
    setThemeMode(prev => (prev === 'dark' ? 'light' : 'dark'));
  };

  const currentTheme = themeMode === 'dark' ? darkTheme : lightTheme;

  return (
    <ThemeContext.Provider value={{ toggleTheme, themeMode }}>
      <EmotionThemeProvider theme={currentTheme}>
        {children}
      </EmotionThemeProvider>
    </ThemeContext.Provider>
  );
};