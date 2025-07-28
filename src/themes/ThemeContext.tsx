// ThemeContext.tsx
import React, { createContext, useState, useContext, ReactNode } from 'react';
import { useColorScheme } from 'react-native';
import switchTheme from 'react-native-theme-switch-animation';
import lightTheme from './light';
import darkTheme from './dark';
import { ExtendedTheme } from '../types/theme';

interface ThemeContextType {
  theme: ExtendedTheme;
  toggleTheme: () => void;
  isDark: boolean;
}

const ThemeContext = createContext<ThemeContextType | undefined>(undefined);

export const ThemeProvider = ({ children }: { children: ReactNode }) => {
  const colorScheme = useColorScheme();
  const [isDark, setIsDark] = useState(colorScheme === 'dark');

  const toggleTheme = () => {
    switchTheme({
      switchThemeFunction: () => {
        setIsDark(prev => !prev);
      },
      animationConfig: {
        type: 'fade',
        duration: 500,
      },
    });
  };

  const theme = isDark ? darkTheme : lightTheme;

  return (
    <ThemeContext.Provider
      value={{
        theme,
        toggleTheme,
        isDark,
      }}>
      {children}
    </ThemeContext.Provider>
  );
};

export const useThemeContext = () => {
  const context = useContext(ThemeContext);
  if (!context)
    throw new Error('useThemeContext must be used within ThemeProvider');
  return context;
};
export const useTheme = useThemeContext;
