/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 */
import React from 'react';
import { StatusBar, StyleSheet, View } from 'react-native';
import { ThemeProvider, useThemeContext } from './src/themes';
import { AppNavigator } from './src/navigation';
import { AuthProvider } from './src/context/AuthContext';

const AppInner = () => {
  const { theme } = useThemeContext();
  return (
    <>
      <StatusBar hidden={true} />
      <View
        style={[
          styles.container,
          { backgroundColor: theme.colors.background },
        ]}>
        <AppNavigator />
      </View>
    </>
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
