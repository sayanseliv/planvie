import React, { ReactNode } from 'react';
import { Animated, TextStyle } from 'react-native';
import { useAnimatedColors } from '../hooks';

interface Props {
  style?: TextStyle;
  children: ReactNode;
}

export const AnimatedText: React.FC<Props> = ({ style, children }) => {
  const { animatedTextColor } = useAnimatedColors();

  return (
    <Animated.Text style={[{ color: animatedTextColor }, style]}>
      {children}
    </Animated.Text>
  );
};
