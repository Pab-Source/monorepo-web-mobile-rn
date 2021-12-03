import { useContext } from 'react';
import { ThemeContext } from '../Theme/Theme';
import { theme as defaultTheme } from '../../constants/theme';

export const useTheme = (): typeof defaultTheme => {
  const theme = useContext(ThemeContext);

  return theme;
};
