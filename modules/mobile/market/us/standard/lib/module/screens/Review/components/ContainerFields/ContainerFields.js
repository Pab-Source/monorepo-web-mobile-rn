import React from 'react';
import { View } from 'react-native';
import { makeStyles } from './styles';
export const ContainerFields = _ref => {
  let {
    children,
    style
  } = _ref;
  const stylesContainerFields = makeStyles();
  return /*#__PURE__*/React.createElement(View, {
    style: [stylesContainerFields.container, style]
  }, children);
};
//# sourceMappingURL=ContainerFields.js.map