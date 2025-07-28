import { useState } from 'react';
import { View, Text, TouchableOpacity, StyleSheet } from 'react-native';
import SignInForm from '../components/SignInForm';
import { AnimatedText } from '../components';
import { AuthStorage } from '../storage/authStorage';

const ScreenAuth = () => {
  const [isSignIn, setIsSignIn] = useState(true);
  const loggedIn = AuthStorage.isLoggedIn();
  const storedUser = AuthStorage.getUser();

  return (
    <View style={styles.wrapper}>
      {loggedIn && storedUser.id && (
        <AnimatedText>Hello {storedUser.username}</AnimatedText>
      )}
      <View style={styles.container}>
        <TouchableOpacity onPress={() => setIsSignIn(true)}>
          <Text style={[isSignIn && styles.active]}>Sign In</Text>
        </TouchableOpacity>
        <Text> | </Text>
        <TouchableOpacity onPress={() => setIsSignIn(false)}>
          <Text style={[!isSignIn && styles.active]}>Sign Up</Text>
        </TouchableOpacity>
      </View>
      <SignInForm />
      {/* {isSignIn ? <SignInForm /> : <SignUpForm />} */}
    </View>
  );
};
const styles = StyleSheet.create({
  wrapper: { flex: 1, padding: 16 },
  container: {
    flexDirection: 'row',
    justifyContent: 'center',
    marginBottom: 20,
  },
  active: {
    color: '#48abed',
  },
});
export default ScreenAuth;
