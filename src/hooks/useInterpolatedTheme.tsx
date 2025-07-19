import { useState, useEffect } from 'react';
import { Theme } from '@react-navigation/native';
import { useThemeContext } from '../themes';
import { lightTheme, darkTheme } from '../themes';

const interpolateColor = (
  color1: string,
  color2: string,
  progress: number,
): string => {
  const cleanColor1 = color1.replace('#', '');
  const cleanColor2 = color2.replace('#', '');

  const r1 = parseInt(cleanColor1.substring(0, 2), 16);
  const g1 = parseInt(cleanColor1.substring(2, 4), 16);
  const b1 = parseInt(cleanColor1.substring(4, 6), 16);

  const r2 = parseInt(cleanColor2.substring(0, 2), 16);
  const g2 = parseInt(cleanColor2.substring(2, 4), 16);
  const b2 = parseInt(cleanColor2.substring(4, 6), 16);

  const r = Math.round(r1 + (r2 - r1) * progress);
  const g = Math.round(g1 + (g2 - g1) * progress);
  const b = Math.round(b1 + (b2 - b1) * progress);

  const toHex = (n: number) => n.toString(16).padStart(2, '0');
  return `#${toHex(r)}${toHex(g)}${toHex(b)}`;
};

const createInterpolatedTheme = (value: number): Theme => {
  const interpolatedColors: any = {};

  // All colors from the theme are automatically interpolated
  Object.keys(lightTheme.colors).forEach(colorKey => {
    interpolatedColors[colorKey] = interpolateColor(
      (lightTheme.colors as any)[colorKey],
      (darkTheme.colors as any)[colorKey],
      value,
    );
  });

  return {
    dark: value > 0.5,
    colors: interpolatedColors,
    fonts: lightTheme.fonts,
  };
};

export const useInterpolatedTheme = () => {
  const { animatedValue, isDark } = useThemeContext();
  const [interpolatedTheme, setInterpolatedTheme] = useState<Theme>(lightTheme);

  useEffect(() => {
    const listenerId = animatedValue.addListener(({ value }) => {
      const theme = createInterpolatedTheme(value);
      setInterpolatedTheme(theme);
    });

    // Set initial Theme
    const initialValue = isDark ? 1 : 0;
    const initialTheme = createInterpolatedTheme(initialValue);
    setInterpolatedTheme(initialTheme);

    return () => {
      animatedValue.removeListener(listenerId);
    };
  }, [animatedValue, isDark]);

  return interpolatedTheme;
};
