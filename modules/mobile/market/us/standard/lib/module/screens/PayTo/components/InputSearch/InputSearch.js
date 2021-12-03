function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

import React from 'react';
import { Image, TextInput, View } from 'react-native';
import { useTheme } from '../../../../context/hooks/useTheme';
import { makeStyles } from './styles';
export const InputSearch = _ref => {
  let {
    containerStyle = {},
    inputStyle = {},
    inputProps = {},
    iconProps = {},
    iconStyle = {},
    onChange
  } = _ref;
  const theme = useTheme();
  const inputStyles = makeStyles(theme);
  return /*#__PURE__*/React.createElement(View, {
    style: [inputStyles.container, containerStyle]
  }, /*#__PURE__*/React.createElement(TextInput, _extends({
    style: [inputStyles.input, inputStyle],
    placeholder: "Search contact by name, email or phone",
    placeholderTextColor: theme.inputColor,
    onChangeText: onChange
  }, inputProps)), /*#__PURE__*/React.createElement(Image, _extends({}, iconProps, {
    style: [inputStyles.icon, iconStyle],
    source: require('../../assets/Zoom.png')
  })));
};
export * from './types';
//# sourceMappingURL=InputSearch.js.map