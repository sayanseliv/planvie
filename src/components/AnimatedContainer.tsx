import React, { ReactNode } from 'react';
import { Animated, ViewStyle } from 'react-native';
import { useThemeContext } from '../themes';
import { lightTheme, darkTheme } from '../themes';

interface Props {
  style?: ViewStyle;
  children: ReactNode;
}

export const AnimatedContainer: React.FC<Props> = ({ style, children }) => {
  const { animatedValue } = useThemeContext();

  const animatedBackgroundColor = animatedValue.interpolate({
    inputRange: [0, 1],
    outputRange: [lightTheme.colors.background, darkTheme.colors.background],
  });

  return (
    <Animated.View
      style={[{ backgroundColor: animatedBackgroundColor }, style]}>
      {children}
    </Animated.View>
  );
};
