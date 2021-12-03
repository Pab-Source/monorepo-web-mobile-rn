function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

import React from 'react';
import { Text, TouchableOpacity } from 'react-native';
import { useTheme } from '../../context/hooks/useTheme';
import { makeStyles } from './styles';
export const Button = _ref => {
  let {
    children,
    disabled = false,
    onPress = () => {},
    style,
    styleText,
    ...props
  } = _ref;
  const theme = useTheme();
  const styles = makeStyles(theme);
  return /*#__PURE__*/React.createElement(TouchableOpacity, _extends({}, props, {
    disabled: disabled,
    onPress: onPress,
    style: [styles.button, disabled ? styles.buttonDisabled : styles.buttonActive, style]
  }), /*#__PURE__*/React.createElement(Text, {
    style: [styles.buttonText, disabled ? styles.buttonTextDisabled : styles.buttonTextActive, styleText]
  }, children));
};
//# sourceMappingURL=Button.js.map