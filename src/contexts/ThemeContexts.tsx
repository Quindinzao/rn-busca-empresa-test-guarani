// External Libraries
import React, { createContext, useContext, useState, useEffect, ReactNode } from 'react';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { ActivityIndicator } from 'react-native';
import { ThemeProvider as EmotionThemeProvider } from '@emotion/react';

// Styles
import { darkTheme } from '../styles/theme/dark';
import { lightTheme } from '../styles/theme/light';

type ThemeMode = 'light' | 'dark';

interface ThemeContextProps {
  toggleTheme: () => void;
  themeMode: ThemeMode;
}

const ThemeContext = createContext<ThemeContextProps | undefined>(undefined);

export const useThemeMode = () => {
  const context = useContext(ThemeContext);
  if (!context) {throw new Error('useThemeMode must be used within ThemeProvider');}
  return context;
};

const THEME_KEY = '@app/theme';

export const ThemeProvider = ({ children }: { children: ReactNode }) => {
  const [themeMode, setThemeMode] = useState<ThemeMode>('dark');
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const loadTheme = async () => {
      const storedTheme = await AsyncStorage.getItem(THEME_KEY);
      if (storedTheme === 'light' || storedTheme === 'dark') {
        setThemeMode(storedTheme);
      }
      setIsLoading(false);
    };
    loadTheme();
  }, []);

  const toggleTheme = async () => {
    const newTheme = themeMode === 'dark' ? 'light' : 'dark';
    setThemeMode(newTheme);
    await AsyncStorage.setItem(THEME_KEY, newTheme);
  };

  const currentTheme = themeMode === 'dark' ? darkTheme : lightTheme;

  if (isLoading) {return <ActivityIndicator />;}

  return (
    <ThemeContext.Provider value={{ toggleTheme, themeMode }}>
      <EmotionThemeProvider theme={currentTheme}>
        {children}
      </EmotionThemeProvider>
    </ThemeContext.Provider>
  );
};
