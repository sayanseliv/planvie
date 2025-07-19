import React from 'react';
import { StyleSheet, Pressable, ScrollView, View, Text } from 'react-native';
import { AnimatedContainer, AnimatedText } from '../components';
import { useTheme } from '../hooks';

const ScreenAddTask = () => {
  return (
    <AnimatedContainer style={styles.container}>
      <AnimatedText>ScreenAddTask</AnimatedText>
    </AnimatedContainer>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 10,
    alignItems: 'stretch',
    justifyContent: 'flex-start',
  },
});

export default ScreenAddTask;
