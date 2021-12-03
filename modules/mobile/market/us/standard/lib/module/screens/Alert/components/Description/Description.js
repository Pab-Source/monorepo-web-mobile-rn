import React from 'react';
import { Text } from 'react-native';
import { useTheme } from '../../../../context/hooks/useTheme';
import { makeStyles } from './styles';
export const Description = (_ref) => {
  let { children, style } = _ref;
  const theme = useTheme();
  const descriptionStyles = makeStyles(theme);
  return /*#__PURE__*/ React.createElement(
    Text,
    {
      style: [descriptionStyles.text, style],
    },
    children
  );
};
export * from './types';
//# sourceMappingURL=Description.js.map
