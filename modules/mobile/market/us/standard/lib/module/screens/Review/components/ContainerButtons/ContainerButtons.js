import React from 'react';
import { View } from 'react-native';
import { makeStyles } from './styles';
export const ContainerButtons = _ref => {
  let {
    children,
    style
  } = _ref;
  const containerButtonsStyle = makeStyles();
  return /*#__PURE__*/React.createElement(View, {
    style: [containerButtonsStyle.container, style]
  }, children);
};
export * from './types';
//# sourceMappingURL=ContainerButtons.js.map