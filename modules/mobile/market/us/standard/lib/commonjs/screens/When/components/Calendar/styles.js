"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.palette = exports.makeStyles = void 0;

var _reactNative = require("react-native");

const palette = {
  DarkGrey: '#3B3B3B',
  Orange: '#E36414',
  ExtraDarkGrey: '#C2C2C2'
};
exports.palette = palette;

const makeStyles = theme => _reactNative.StyleSheet.create({
  container: {
    marginTop: 25,
    backgroundColor: theme.layoutColor
  },
  icon: {
    transform: [{
      rotateZ: '180deg'
    }]
  },
  badgeCalendar: {
    borderRadius: 12,
    alignItems: 'center',
    justifyContent: 'center',
    height: 30,
    width: 30
  }
});

exports.makeStyles = makeStyles;
//# sourceMappingURL=styles.js.map