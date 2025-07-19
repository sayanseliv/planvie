import React, {
  createContext,
  useState,
  useContext,
  ReactNode,
  useEffect,
  useRef,
} from 'react';
import { Theme } from '@react-navigation/native';
import { Animated } from 'react-native';
import lightTheme from './light';
import darkTheme from './dark';

interface ThemeContextType {
  theme: Theme;
  toggleTheme: () => void;
  isDark: boolean;
  animatedValue: Animated.Value;
  isTransitioning: boolean;
}

const ThemeContext = createContext<ThemeContextType | undefined>(undefined);

export const ThemeProvider = ({ children }: { children: ReactNode }) => {
  const [isDark, setIsDark] = useState(false);
  const [isTransitioning, setIsTransitioning] = useState(false);
  const animatedValue = useRef(new Animated.Value(0)).current;

  const toggleTheme = () => {
    setIsTransitioning(true);

    Animated.timing(animatedValue, {
      toValue: isDark ? 0 : 1,
      duration: 300,
      useNativeDriver: false,
    }).start(() => {
      setIsDark(prev => !prev);
      setIsTransitioning(false);
    });
  };

  useEffect(() => {
    animatedValue.setValue(isDark ? 1 : 0);
  }, [isDark, animatedValue]);

  const theme = isDark ? darkTheme : lightTheme;

  return (
    <ThemeContext.Provider
      value={{
        theme,
        toggleTheme,
        isDark,
        animatedValue,
        isTransitioning,
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
