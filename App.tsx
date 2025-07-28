/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 */
import React from 'react';
import { StatusBar, StyleSheet, View } from 'react-native';
import { ThemeProvider } from './src/themes';
import { AnimatedNavigationContainer } from './src/components/animated/AnimatedNavigationContainer';
import { AppNavigator } from './src/navigation';
import { AuthProvider } from './src/context/AuthContext';

const AppInner = () => {
  return (
    <AnimatedNavigationContainer>
      <StatusBar hidden={true} />
      <View style={styles.container}>
        <AppNavigator />
      </View>
    </AnimatedNavigationContainer>
  );
};

export default function App() {
  return (
    <ThemeProvider>
      <AuthProvider>
        <AppInner />
      </AuthProvider>
    </ThemeProvider>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});
