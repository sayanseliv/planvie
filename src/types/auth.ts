export interface User {
  id: string;
  username: string;
  email: string;
  createdAt?: string;
  updatedAt?: string;
}
export type AuthContextType = {
  user: User | null;
  isLoggedIn: boolean;
  login: (user: User, token: string, refreshToken: string) => void;
  logout: () => void;
};
