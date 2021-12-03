import React, { createContext } from 'react';
import { theme as defaultTheme } from '../../constants';

export const ThemeContext = createContext(defaultTheme);

export interface IThemeProvider {
  theme: typeof defaultTheme;
}

export const ThemeProvider: React.FC<IThemeProvider> = ({
  children,
  theme,
}) => {
  return (
    <ThemeContext.Provider value={theme}>{children}</ThemeContext.Provider>
  );
};
