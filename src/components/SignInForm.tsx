import { View, TextInput, TouchableOpacity, Text } from 'react-native';
import { useAuth } from '../context/AuthContext';
import { useState } from 'react';
import { StyleSheet } from 'react-native';
import { AnimatedText } from './animated/AnimatedText';
import { useTheme } from '../hooks';

const SignInForm = () => {
  const { login } = useAuth();
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const { colors } = useTheme();

  const onSubmit = () => {
    if (username.length > 0) {
      const fakeUser = { id: '1', username, email: `${username}@mail.com` };
      login(fakeUser, 'fake-token', 'fake-refresh-token');
      setUsername('');
      setPassword('');
    }
  };

  return (
    <View>
      <AnimatedText>Sign In</AnimatedText>
      <TextInput
        placeholder='Username'
        onChangeText={setUsername}
        value={username}
        style={[
          styles.input,
          { borderColor: colors.border, color: colors.text },
        ]}
        placeholderTextColor={colors.placeholder}
      />
      <TextInput
        placeholder='Password'
        onChangeText={setPassword}
        value={password}
        secureTextEntry
        style={[
          styles.input,
          { borderColor: colors.border, color: colors.text },
        ]}
        placeholderTextColor={colors.placeholder}
      />
      <TouchableOpacity
        onPress={onSubmit}
        style={[styles.btn, { borderColor: colors.primary }]}>
        <Text style={{ color: colors.primary }}>Sign In</Text>
      </TouchableOpacity>
    </View>
  );
};
const styles = StyleSheet.create({
  input: {
    height: 40,
    marginBlock: 12,
    borderWidth: 1,
    padding: 10,
    borderRadius: 6,
  },
  btn: {
    alignSelf: 'center',
    alignItems: 'center',
    width: '50%',
    padding: 5,
    borderRadius: 6,
    borderWidth: 1,
    backgroundColor: '#ffffff',
  },
});
export default SignInForm;
