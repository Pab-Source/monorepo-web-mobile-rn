import React from 'react';
import { Text, TextInput, View } from 'react-native';
import { useTheme } from '../../context/hooks/useTheme';
import { makeStyles } from './styles';
export const BaseInput = (_ref) => {
  let { bottomLabel, onChange, style, placeholder } = _ref;
  const theme = useTheme();
  const styles = makeStyles(theme);
  return /*#__PURE__*/ React.createElement(
    View,
    {
      style: styles.container,
    },
    /*#__PURE__*/ React.createElement(TextInput, {
      placeholder: placeholder,
      onChangeText: onChange,
      style: [styles.input, style],
      placeholderTextColor: theme.inputColor,
    }),
    bottomLabel &&
      /*#__PURE__*/ React.createElement(
        Text,
        {
          style: styles.bottomLabel,
        },
        bottomLabel
      )
  );
};
//# sourceMappingURL=BaseInput.js.map
