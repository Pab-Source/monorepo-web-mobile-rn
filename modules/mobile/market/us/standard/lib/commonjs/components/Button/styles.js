"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.makeStyles = void 0;

var _reactNative = require("react-native");

const makeStyles = theme => _reactNative.StyleSheet.create({
  button: {
    borderRadius: 12,
    width: '100%',
    alignItems: 'center',
    justifyContent: 'center',
    height: 51
  },
  buttonDisabled: {
    backgroundColor: theme.buttonDisabled
  },
  buttonActive: {
    backgroundColor: theme.buttonActive
  },
  buttonText: {
    fontFamily: theme.fontFamily,
    fontSize: 16,
    fontWeight: 'bold'
  },
  buttonTextDisabled: {
    color: theme.buttonTextDisabled
  },
  buttonTextActive: {
    color: theme.buttonTextActive
  }
});

exports.makeStyles = makeStyles;
//# sourceMappingURL=styles.js.map