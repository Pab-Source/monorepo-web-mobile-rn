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
import { Text } from 'react-native';
import { useTheme } from '../../context/hooks/useTheme';
import { makeStyles } from './styles';
export const Description = (_ref) => {
  let { children, style, ...props } = _ref;
  const theme = useTheme();
  const stylesDescription = makeStyles(theme);
  return /*#__PURE__*/ React.createElement(
    Text,
    _extends(
      {
        style: [stylesDescription.text, style],
      },
      props
    ),
    children
  );
};
//# sourceMappingURL=Description.js.map
