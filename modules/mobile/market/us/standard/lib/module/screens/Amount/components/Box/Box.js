import React from 'react';
import { View } from 'react-native';
import { makeStyles } from './styles';
export const Box = _ref => {
  let {
    children
  } = _ref;
  const boxStyles = makeStyles();
  return /*#__PURE__*/React.createElement(View, {
    style: boxStyles.container
  }, children);
};
//# sourceMappingURL=Box.js.map