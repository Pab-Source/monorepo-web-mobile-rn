"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.InputMask = void 0;

var _react = _interopRequireDefault(require("react"));

var _reactNative = require("react-native");

var _reactNativeTextInputMask = _interopRequireDefault(require("react-native-text-input-mask"));

var _useTheme = require("../../../../context/hooks/useTheme");

var _styles = require("./styles");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

const InputMask = _ref => {
  let {
    onChange
  } = _ref;
  const theme = (0, _useTheme.useTheme)();
  const styles = (0, _styles.makeStyles)(theme);
  return /*#__PURE__*/_react.default.createElement(_reactNative.View, {
    style: styles.container
  }, /*#__PURE__*/_react.default.createElement(_reactNative.View, {
    style: styles.wrapperInput
  }, /*#__PURE__*/_react.default.createElement(_reactNative.Image, {
    source: require('../../../../assets/dollar.png')
  }), /*#__PURE__*/_react.default.createElement(_reactNativeTextInputMask.default, {
    keyboardType: "numeric",
    style: styles.input,
    placeholder: "0,00",
    placeholderTextColor: theme.colorAmountPlaceholder,
    onChangeText: formatted => onChange(formatted),
    mask: '[999990].[99]'
  })));
};

exports.InputMask = InputMask;
//# sourceMappingURL=InputMask.js.map