'use strict';

Object.defineProperty(exports, '__esModule', {
  value: true,
});
exports.makeStyles = void 0;

var _reactNative = require('react-native');

const makeStyles = (theme) =>
  _reactNative.StyleSheet.create({
    container: {
      marginBottom: 20,
    },
    label: {
      fontFamily: theme.fontFamily,
      fontSize: theme.reviewLabelSize,
      color: theme.reviewLabelColor,
    },
    value: {
      fontFamily: theme.fontFamily,
      color: theme.reviewValueColor,
      fontSize: theme.reviewValueSize,
      fontWeight: 'bold',
    },
  });

exports.makeStyles = makeStyles;
//# sourceMappingURL=styles.js.map
