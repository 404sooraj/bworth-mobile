// theme.js
import { useColorScheme } from 'react-native';

export const LightTheme = {
  text: '#151719',
  background: '#e9eff2',
  primary: '#284a62',
  secondary: '#75b1db',
  accent: '#1d8ad7',
};

export const DarkTheme = {
  text: '#e6e8ea',
  background: '#0d1316',
  primary: '#9dbfd7',
  secondary: '#245f8a',
  accent: '#2894e2',
};

export const useAppTheme = () => {
  const scheme = useColorScheme();
  return scheme === 'dark' ? DarkTheme : LightTheme;
};
