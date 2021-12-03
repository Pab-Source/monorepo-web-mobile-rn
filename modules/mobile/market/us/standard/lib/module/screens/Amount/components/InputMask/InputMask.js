import React from 'react';
import { View, Image } from 'react-native';
import TextInputMask from 'react-native-text-input-mask';
import { useTheme } from '../../../../context/hooks/useTheme';
import { makeStyles } from './styles';
export const InputMask = _ref => {
  let {
    onChange
  } = _ref;
  const theme = useTheme();
  const styles = makeStyles(theme);
  return /*#__PURE__*/React.createElement(View, {
    style: styles.container
  }, /*#__PURE__*/React.createElement(View, {
    style: styles.wrapperInput
  }, /*#__PURE__*/React.createElement(Image, {
    source: require('../../../../assets/dollar.png')
  }), /*#__PURE__*/React.createElement(TextInputMask, {
    keyboardType: "numeric",
    style: styles.input,
    placeholder: "0,00",
    placeholderTextColor: theme.colorAmountPlaceholder,
    onChangeText: formatted => onChange(formatted),
    mask: '[999990].[99]'
  })));
};
//# sourceMappingURL=InputMask.js.map