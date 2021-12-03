import { useContext } from 'react';
import { ThemeContext } from '../Theme/Theme';
export const useTheme = () => {
  const theme = useContext(ThemeContext);
  return theme;
};
//# sourceMappingURL=useTheme.js.map
