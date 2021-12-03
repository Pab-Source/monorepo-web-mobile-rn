'use strict';

Object.defineProperty(exports, '__esModule', {
  value: true,
});
exports.makeStyles = void 0;

var _reactNative = require('react-native');

const makeStyles = (theme) =>
  _reactNative.StyleSheet.create({
    container: {
      marginTop: 20,
    },
    input: {
      height: 55,
      borderWidth: 1.4,
      borderRadius: 12,
      borderColor: theme.borderInputColor,
      backgroundColor: theme.backgroundInput,
      color: theme.inputColor,
      paddingHorizontal: 18,
      fontSize: theme.inputFontSize,
    },
    bottomLabel: {
      marginLeft: 7,
      marginTop: 7,
      fontSize: theme.labelSize,
      color: theme.labelColor,
    },
  });

exports.makeStyles = makeStyles;
//# sourceMappingURL=styles.js.map
