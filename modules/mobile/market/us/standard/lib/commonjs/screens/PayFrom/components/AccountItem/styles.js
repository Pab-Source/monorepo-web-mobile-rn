"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.makeStyles = void 0;

var _reactNative = require("react-native");

const makeStyles = theme => _reactNative.StyleSheet.create({
  container: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingHorizontal: 16,
    marginBottom: 16,
    borderRadius: 12,
    borderColor: theme.colorRadiusSelect,
    borderWidth: 1,
    height: 68,
    backgroundColor: theme.backgroundSelect
  },
  icon: {
    width: 32,
    height: 32
  },
  boxLeft: {
    flexDirection: 'row',
    alignItems: 'center'
  },
  infoAccount: {
    marginLeft: 8
  },
  accountTitle: {
    fontFamily: theme.fontFamily,
    color: theme.primaryColorSelect,
    fontSize: 16
  },
  accountEnterprise: {
    marginTop: -4,
    fontSize: 14,
    color: theme.secondaryColorSelect
  },
  accountAmount: {
    fontSize: 16,
    color: theme.primaryColorSelect
  }
});

exports.makeStyles = makeStyles;
//# sourceMappingURL=styles.js.map