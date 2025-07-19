/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 */
import React from 'react';
import { StatusBar, StyleSheet, View } from 'react-native';
import { ThemeProvider } from './src/themes';
import { AnimatedNavigationContainer } from './src/components';
import { AppNavigator } from './src/navigation';

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
      <AppInner />
    </ThemeProvider>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});
