'use strict';

Object.defineProperty(exports, '__esModule', {
  value: true,
});
exports.makeStyles = void 0;

var _reactNative = require('react-native');

const makeStyles = (theme) =>
  _reactNative.StyleSheet.create({
    text: {
      fontFamily: theme.fontFamily,
      color: theme.titleColor,
      fontSize: theme.titleSize,
      fontWeight: 'bold',
    },
  });

exports.makeStyles = makeStyles;
//# sourceMappingURL=styles.js.map
