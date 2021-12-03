"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.Description = void 0;

var _react = _interopRequireDefault(require("react"));

var _reactNative = require("react-native");

var _useTheme = require("../../context/hooks/useTheme");

var _styles = require("./styles");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

const Description = _ref => {
  let {
    children,
    style,
    ...props
  } = _ref;
  const theme = (0, _useTheme.useTheme)();
  const stylesDescription = (0, _styles.makeStyles)(theme);
  return /*#__PURE__*/_react.default.createElement(_reactNative.Text, _extends({
    style: [stylesDescription.text, style]
  }, props), children);
};

exports.Description = Description;
//# sourceMappingURL=Description.js.map