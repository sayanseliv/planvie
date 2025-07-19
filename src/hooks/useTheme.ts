import { useThemeContext } from '../themes';

export const useTheme = () => {
  const { theme, isDark, toggleTheme, isTransitioning } = useThemeContext();

  return {
    theme,
    isDark,
    toggleTheme,
    isTransitioning,
    colors: theme.colors,
    fonts: theme.fonts,
  };
};
