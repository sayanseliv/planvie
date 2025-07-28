import React, { ReactNode } from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { useInterpolatedTheme } from '../../hooks/useInterpolatedTheme';

interface Props {
  children: ReactNode;
}

export const AnimatedNavigationContainer: React.FC<Props> = ({ children }) => {
  const interpolatedTheme = useInterpolatedTheme();

  return (
    <NavigationContainer theme={interpolatedTheme}>
      {children}
    </NavigationContainer>
  );
};
