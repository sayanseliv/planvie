import { View, TextInput, TouchableOpacity, Text } from 'react-native';
import { useAuth } from '../context/AuthContext';
import { useState } from 'react';
import { StyleSheet } from 'react-native';
import { useThemeContext } from '../themes';

const SignInForm = () => {
  const { login } = useAuth();
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const { theme } = useThemeContext();

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
      <Text style={[styles.title, { color: theme.colors.text }]}>Sign In</Text>
      <TextInput
        placeholder='Username'
        onChangeText={setUsername}
        value={username}
        style={[
          styles.input,
          {
            borderColor: theme.colors.border,
            color: theme.colors.text,
            backgroundColor: theme.colors.card,
          },
        ]}
        placeholderTextColor={theme.colors.placeholder}
      />
      <TextInput
        placeholder='Password'
        onChangeText={setPassword}
        value={password}
        secureTextEntry
        style={[
          styles.input,
          {
            borderColor: theme.colors.border,
            color: theme.colors.text,
            backgroundColor: theme.colors.card,
          },
        ]}
        placeholderTextColor={theme.colors.placeholder}
      />
      <TouchableOpacity
        onPress={onSubmit}
        style={[
          styles.btn,
          {
            borderColor: theme.colors.primary,
            backgroundColor: theme.colors.card,
          },
        ]}>
        <Text style={{ color: theme.colors.primary }}>Sign In</Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 20,
    textAlign: 'center',
  },
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
  },
});

export default SignInForm;
