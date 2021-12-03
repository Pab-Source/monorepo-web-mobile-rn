'use strict';

Object.defineProperty(exports, '__esModule', {
  value: true,
});
exports.makeStyles = void 0;

var _reactNative = require('react-native');

const makeStyles = (theme) =>
  _reactNative.StyleSheet.create({
    text: {
      marginTop: 20,
      paddingHorizontal: 10,
      textAlign: 'center',
      fontFamily: theme.fontFamily,
      fontSize: 24,
      fontWeight: 'bold',
      color: theme.loadingDescriptionColor,
    },
  });

exports.makeStyles = makeStyles;
//# sourceMappingURL=styles.js.map
