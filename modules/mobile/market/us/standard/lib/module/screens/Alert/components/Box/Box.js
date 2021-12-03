import React from 'react';
import { View } from 'react-native';
import { makeStyles } from './styles';
export const Box = _ref => {
  let {
    children,
    style
  } = _ref;
  const boxStyles = makeStyles();
  return /*#__PURE__*/React.createElement(View, {
    style: [boxStyles.container, style]
  }, children);
};
export * from './types';
//# sourceMappingURL=Box.js.map