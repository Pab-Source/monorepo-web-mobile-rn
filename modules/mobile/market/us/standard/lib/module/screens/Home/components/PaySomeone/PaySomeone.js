function _extends() {
  _extends =
    Object.assign ||
    function (target) {
      for (var i = 1; i < arguments.length; i++) {
        var source = arguments[i];
        for (var key in source) {
          if (Object.prototype.hasOwnProperty.call(source, key)) {
            target[key] = source[key];
          }
        }
      }
      return target;
    };
  return _extends.apply(this, arguments);
}

import React from 'react';
import { useNavigation } from '@react-navigation/native';
import { useTheme } from '../../../../context/hooks/useTheme';
import { Image, Text, TouchableOpacity } from 'react-native';
import { makeStyles } from './styles';
export const PaySomeone = (_ref) => {
  let {
    children,
    styleContainer = {},
    styleText = {},
    onPress,
    ...props
  } = _ref;
  const theme = useTheme();
  const styles = makeStyles(theme);
  const navigation = useNavigation();
  const validatePress = onPress ? onPress : () => navigation.navigate('PayTo');
  return /*#__PURE__*/ React.createElement(
    TouchableOpacity,
    _extends(
      {
        onPress: validatePress,
        style: [styles.container, styleContainer],
      },
      props
    ),
    /*#__PURE__*/ React.createElement(
      Text,
      {
        style: [styles.text, styleText],
      },
      /*#__PURE__*/ React.createElement(Image, {
        style: styles.arrow,
        source: require('../../../../assets/arrowRight.png'),
      }),
      ' ',
      children
    )
  );
};
//# sourceMappingURL=PaySomeone.js.map
