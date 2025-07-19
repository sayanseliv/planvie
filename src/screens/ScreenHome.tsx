import React from 'react';
import { StyleSheet, Pressable } from 'react-native';
import { AnimatedContainer, AnimatedText } from '../components';
import { useTheme } from '../hooks';

const ScreenHome = () => {
  const { toggleTheme, isTransitioning } = useTheme();

  return (
    <AnimatedContainer style={styles.container}>
      <AnimatedText style={styles.welcomeText}>
        Welcome to Planvie!
      </AnimatedText>
      <Pressable
        onPress={toggleTheme}
        disabled={isTransitioning}
        style={styles.btnPrimary}>
        <AnimatedText>
          {isTransitioning ? 'Changing...' : 'Change Theme'}
        </AnimatedText>
      </Pressable>
    </AnimatedContainer>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  welcomeText: {
    fontSize: 20,
    marginBottom: 20,
  },
  btnPrimary: {
    padding: 10,
    borderRadius: 5,
    backgroundColor: '#48abed',
  },
});

export default ScreenHome;
