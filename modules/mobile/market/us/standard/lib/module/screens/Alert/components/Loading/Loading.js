import React from 'react';
import { ActivityIndicator } from 'react-native';
import { useTheme } from '../../../../context/hooks/useTheme';
export const Loading = () => {
  const theme = useTheme();
  return /*#__PURE__*/React.createElement(ActivityIndicator, {
    color: theme.loadingColor,
    size: "large"
  });
};
//# sourceMappingURL=Loading.js.map