import React, { ReactNode } from 'react';
import { Animated, ViewStyle } from 'react-native';
import { useAnimatedColors } from '../hooks';

interface Props {
  style?: ViewStyle;
  children: ReactNode;
}

export const AnimatedContainer: React.FC<Props> = ({ style, children }) => {
  const { animatedBackgroundColor } = useAnimatedColors();

  return (
    <Animated.View
      style={[{ backgroundColor: animatedBackgroundColor }, style]}>
      {children}
    </Animated.View>
  );
};
