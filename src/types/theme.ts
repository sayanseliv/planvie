import { Theme as NavigationTheme } from '@react-navigation/native';

export interface ExtendedTheme extends NavigationTheme {
  colors: NavigationTheme['colors'] & {
    placeholder: string;
    surface: string;
    textSecondary: string;
  };
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
