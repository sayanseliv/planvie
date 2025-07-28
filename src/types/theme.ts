import { Theme as NavigationTheme } from '@react-navigation/native';

export interface ExtendedTheme extends NavigationTheme {
  colors: NavigationTheme['colors'] & CustomThemeColors;
}

export interface CustomThemeColors {
  primary: string;
  background: string;
  card: string;
  text: string;
  border: string;
  placeholder: string;
  notification: string;
  surface: string;
  textSecondary: string;
}
