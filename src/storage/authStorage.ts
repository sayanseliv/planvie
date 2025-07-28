import { User } from '../types/auth';
import { authStorage } from './mmkvStorage';
export const AuthStorage = {
  saveUser: (userData: User): void => {
    authStorage.set('user', JSON.stringify(userData));
    authStorage.set('isLoggedIn', true);
  },

  getUser: () => {
    const userData = authStorage.getString('user');
    return userData ? JSON.parse(userData) : null;
  },

  isLoggedIn: () => {
    return authStorage.getBoolean('isLoggedIn') || false;
  },

  logout: () => {
    authStorage.delete('user');
    authStorage.delete('auth_token');
    authStorage.delete('refresh_token');
    authStorage.set('isLoggedIn', false);
  },

  saveToken: (token: string) => {
    authStorage.set('auth_token', token);
  },

  getToken: () => {
    return authStorage.getString('auth_token');
  },

  saveRefreshToken: (refreshToken: string) => {
    authStorage.set('refresh_token', refreshToken);
  },

  getRefreshToken: () => {
    return authStorage.getString('refresh_token');
  },

  setBiometricEnabled: (enabled: boolean) => {
    authStorage.set('biometric_enabled', enabled);
  },

  isBiometricEnabled: () => {
    return authStorage.getBoolean('biometric_enabled') || false;
  },

  saveUsers: (users: User[]) => {
    authStorage.set('users', JSON.stringify(users));
  },

  getUsers: () => {
    const users = authStorage.getString('users');
    return users ? JSON.parse(users) : [];
  },

  saveLastLoginData: (username: string) => {
    authStorage.set('last_login_username', username);
    authStorage.set('last_login_timestamp', Date.now());
  },

  getLastLoginData: () => {
    return {
      username: authStorage.getString('last_login_username'),
      timestamp: authStorage.getNumber('last_login_timestamp'),
    };
  },

  clearAll: () => {
    authStorage.clearAll();
  },
};
