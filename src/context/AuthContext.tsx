import React, { createContext, useContext, useState, useEffect } from 'react';
import { User } from '../types/auth';
import { AuthStorage } from '../storage/authStorage';
import type { AuthContextType } from '../types/auth';

const AuthContext = createContext<AuthContextType | null>(null);

export const AuthProvider: React.FC<{ children: React.ReactNode }> = ({
  children,
}) => {
  const [user, setUser] = useState<User | null>(null);
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  useEffect(() => {
    const init = () => {
      const storedUser = AuthStorage.getUser();
      const loggedIn = AuthStorage.isLoggedIn();

      setUser(storedUser);
      setIsLoggedIn(loggedIn);
    };
    init();
  }, []);

  const login = (userData: User, token: string, refreshToken: string) => {
    AuthStorage.saveUser(userData);
    AuthStorage.saveToken(token);
    AuthStorage.saveRefreshToken(refreshToken);
    setUser(userData);
    setIsLoggedIn(true);
  };

  const logout = () => {
    AuthStorage.logout();
    setUser(null);
    setIsLoggedIn(false);
  };

  return (
    <AuthContext.Provider value={{ user, isLoggedIn, login, logout }}>
      {children}
    </AuthContext.Provider>
  );
};

export const useAuth = (): AuthContextType => {
  const context = useContext(AuthContext);
  if (!context) throw new Error('useAuth must be used within AuthProvider');
  return context;
};
