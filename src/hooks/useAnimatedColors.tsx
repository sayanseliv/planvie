import { useThemeContext } from '../themes';
import { lightTheme, darkTheme } from '../themes';

export const useAnimatedColors = () => {
  const { animatedValue } = useThemeContext();

  const animatedBackgroundColor = animatedValue.interpolate({
    inputRange: [0, 1],
    outputRange: [lightTheme.colors.background, darkTheme.colors.background],
  });

  const animatedTextColor = animatedValue.interpolate({
    inputRange: [0, 1],
    outputRange: [lightTheme.colors.text, darkTheme.colors.text],
  });

  const animatedBorderColor = animatedValue.interpolate({
    inputRange: [0, 1],
    outputRange: [lightTheme.colors.border, darkTheme.colors.border],
  });

  const animatedCardColor = animatedValue.interpolate({
    inputRange: [0, 1],
    outputRange: [lightTheme.colors.card, darkTheme.colors.card],
  });

  return {
    animatedBackgroundColor,
    animatedTextColor,
    animatedBorderColor,
    animatedCardColor,
  };
};
