'use strict';

Object.defineProperty(exports, '__esModule', {
  value: true,
});
exports.makeStyles = void 0;

var _reactNative = require('react-native');

const makeStyles = (theme) =>
  _reactNative.StyleSheet.create({
    container: {
      marginTop: 17,
    },
    text: {
      color: theme.descriptionColor,
      fontWeight: 'bold',
      fontSize: 16,
      fontFamily: theme.fontFamily,
    },
    arrow: {
      height: 16,
      width: 16,
    },
  });

exports.makeStyles = makeStyles;
//# sourceMappingURL=styles.js.map
