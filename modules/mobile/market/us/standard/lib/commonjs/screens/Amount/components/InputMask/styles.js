'use strict';

Object.defineProperty(exports, '__esModule', {
  value: true,
});
exports.makeStyles = void 0;

var _reactNative = require('react-native');

const makeStyles = (theme) =>
  _reactNative.StyleSheet.create({
    container: {
      minHeight: 200,
      width: '100%',
      alignItems: 'center',
      justifyContent: 'center',
    },
    wrapperInput: {
      flexDirection: 'row',
      alignItems: 'center',
    },
    input: {
      fontFamily: theme.fontFamily,
      fontSize: theme.sizeAmount,
      color: theme.colorAmount,
      opacity: theme.opacityAmount,
    },
  });

exports.makeStyles = makeStyles;
//# sourceMappingURL=styles.js.map
