"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.makeStyles = void 0;

var _reactNative = require("react-native");

const makeStyles = theme => _reactNative.StyleSheet.create({
  container: {
    height: '100%',
    paddingTop: 33,
    paddingHorizontal: 24,
    backgroundColor: theme.layoutColor,
    paddingBottom: 30
  }
});

exports.makeStyles = makeStyles;
//# sourceMappingURL=styles.js.map