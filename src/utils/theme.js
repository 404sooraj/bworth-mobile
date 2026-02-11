// hooks/useTabIconColor.js
import { useAppTheme } from '../theme/theme';

export const useTabIconColor = (focused) => {
  const theme = useAppTheme();
  return focused ? theme.accent : theme.text;
};
