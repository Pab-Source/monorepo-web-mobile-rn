import React from 'react';
import { View, Text } from 'react-native';
import { useTheme } from '../../../../context/hooks/useTheme';
import { makeStyles } from './styles';
export const Field = _ref => {
  let {
    label,
    value
  } = _ref;
  const theme = useTheme();
  const stylesField = makeStyles(theme);
  return /*#__PURE__*/React.createElement(View, {
    style: stylesField.container
  }, /*#__PURE__*/React.createElement(Text, {
    style: stylesField.label
  }, label), /*#__PURE__*/React.createElement(Text, {
    style: stylesField.value
  }, value));
};
export * from './types';
//# sourceMappingURL=Field.js.map