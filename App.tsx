/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 */
import React from 'react';
import { StatusBar, StyleSheet, View } from 'react-native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import ScreenHome from './src/screens/ScreenHome';
import { ThemeProvider } from './src/themes';
import { AnimatedNavigationContainer } from './src/components';

const Stack = createNativeStackNavigator();

const AppInner = () => {
  return (
    <AnimatedNavigationContainer>
      <StatusBar hidden={true} />
      <View style={styles.container}>
        <Stack.Navigator initialRouteName='Home'>
          <Stack.Screen name='Home' component={ScreenHome} />
        </Stack.Navigator>
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
