import { useThemeContext } from '../themes';

export const useTheme = () => {
  const { theme, isDark, toggleTheme } = useThemeContext();

  return {
    theme,
    isDark,
    toggleTheme,
    colors: theme.colors,
    fonts: theme.fonts,
  };
};
