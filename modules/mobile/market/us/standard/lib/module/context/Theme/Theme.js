import React, { createContext } from 'react';
import { theme as defaultTheme } from '../../constants';
export const ThemeContext = /*#__PURE__*/ createContext(defaultTheme);
export const ThemeProvider = (_ref) => {
  let { children, theme } = _ref;
  return /*#__PURE__*/ React.createElement(
    ThemeContext.Provider,
    {
      value: theme,
    },
    children
  );
};
//# sourceMappingURL=Theme.js.map
