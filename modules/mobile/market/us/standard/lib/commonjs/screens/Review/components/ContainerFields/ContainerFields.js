"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.ContainerFields = void 0;

var _react = _interopRequireDefault(require("react"));

var _reactNative = require("react-native");

var _styles = require("./styles");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

const ContainerFields = _ref => {
  let {
    children,
    style
  } = _ref;
  const stylesContainerFields = (0, _styles.makeStyles)();
  return /*#__PURE__*/_react.default.createElement(_reactNative.View, {
    style: [stylesContainerFields.container, style]
  }, children);
};

exports.ContainerFields = ContainerFields;
//# sourceMappingURL=ContainerFields.js.map