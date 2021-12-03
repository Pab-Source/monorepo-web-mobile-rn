'use strict';

Object.defineProperty(exports, '__esModule', {
  value: true,
});
exports.makeStyles = void 0;

var _reactNative = require('react-native');

const makeStyles = (theme) =>
  _reactNative.StyleSheet.create({
    text: {
      color: theme.descriptionColor,
      marginTop: 12,
      fontSize: theme.descriptionSize,
      fontFamily: theme.fontFamily,
    },
  });

exports.makeStyles = makeStyles;
//# sourceMappingURL=styles.js.map
