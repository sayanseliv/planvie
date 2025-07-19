import React, { ReactNode } from 'react';
import { Animated, TextStyle } from 'react-native';
import { useThemeContext } from '../themes';
import { lightTheme, darkTheme } from '../themes';

interface Props {
  style?: TextStyle;
  children: ReactNode;
}

export const AnimatedText: React.FC<Props> = ({ style, children }) => {
  const { animatedValue } = useThemeContext();

  const animatedTextColor = animatedValue.interpolate({
    inputRange: [0, 1],
    outputRange: [lightTheme.colors.text, darkTheme.colors.text],
  });

  return (
    <Animated.Text style={[{ color: animatedTextColor }, style]}>
      {children}
    </Animated.Text>
  );
};
