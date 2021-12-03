'use strict';

Object.defineProperty(exports, '__esModule', {
  value: true,
});
exports.makeStyles = void 0;

var _reactNative = require('react-native');

const makeStyles = (theme) =>
  _reactNative.StyleSheet.create({
    container: {
      marginTop: 24,
      borderWidth: 0.9,
      paddingRight: 15,
      backgroundColor: theme.backgroundInput,
      borderColor: theme.borderInputColor,
      borderRadius: 12,
      flexDirection: 'row',
      alignItems: 'center',
    },
    input: {
      flex: 1,
      paddingHorizontal: 20,
      fontSize: theme.inputFontSize,
      color: theme.inputColor,
      fontFamily: theme.fontFamily,
    },
    icon: {},
  });

exports.makeStyles = makeStyles;
//# sourceMappingURL=styles.js.map
