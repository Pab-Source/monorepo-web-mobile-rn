'use strict';

Object.defineProperty(exports, '__esModule', {
  value: true,
});
exports.makeStyles = void 0;

var _reactNative = require('react-native');

const makeStyles = (theme) =>
  _reactNative.StyleSheet.create({
    container: {
      paddingTop: 33,
      paddingBottom: 26,
      paddingHorizontal: 24,
      backgroundColor: theme.layoutColor,
      justifyContent: 'space-between',
    },
  });

exports.makeStyles = makeStyles;
//# sourceMappingURL=styles.js.map
