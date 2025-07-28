import React from 'react';
import { StyleSheet, View, Text } from 'react-native';
import { useThemeContext } from '../themes';

const ScreenAddTask = () => {
  const { theme } = useThemeContext();
  return (
    <View
      style={[styles.container, { backgroundColor: theme.colors.background }]}>
      <Text style={{ color: theme.colors.text }}>ScreenAddTask</Text>
    </View>
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
