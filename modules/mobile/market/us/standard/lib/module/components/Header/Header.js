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
import { useNavigation } from '@react-navigation/core';
import { Image, TouchableOpacity, View } from 'react-native';
import { makeStyles } from './styles';
export const Header = (_ref) => {
  let {
    styleContainer = {},
    buttonProps = {},
    iconProps = {},
    onPress,
    close = false,
    ...props
  } = _ref;
  const navigation = useNavigation();
  const headerStyles = makeStyles();
  return /*#__PURE__*/ React.createElement(
    View,
    _extends({}, props, {
      style: [
        headerStyles.container,
        styleContainer,
        close
          ? {
              alignItems: 'flex-end',
            }
          : {},
      ],
    }),
    close
      ? /*#__PURE__*/ React.createElement(
          TouchableOpacity,
          {
            onPress: onPress ? onPress : () => navigation.goBack(),
          },
          /*#__PURE__*/ React.createElement(
            Image,
            _extends({}, iconProps, {
              source: require('../../assets/close.png'),
            })
          )
        )
      : /*#__PURE__*/ React.createElement(
          TouchableOpacity,
          _extends(
            {
              onPress: onPress ? onPress : () => navigation.goBack(),
            },
            buttonProps
          ),
          /*#__PURE__*/ React.createElement(
            Image,
            _extends({}, iconProps, {
              source: require('../../assets/Vector.png'),
            })
          )
        )
  );
};
//# sourceMappingURL=Header.js.map
