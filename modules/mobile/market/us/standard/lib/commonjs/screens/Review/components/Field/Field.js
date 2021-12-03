"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
var _exportNames = {
  Field: true
};
exports.Field = void 0;

var _react = _interopRequireDefault(require("react"));

var _reactNative = require("react-native");

var _useTheme = require("../../../../context/hooks/useTheme");

var _styles = require("./styles");

var _types = require("./types");

Object.keys(_types).forEach(function (key) {
  if (key === "default" || key === "__esModule") return;
  if (Object.prototype.hasOwnProperty.call(_exportNames, key)) return;
  if (key in exports && exports[key] === _types[key]) return;
  Object.defineProperty(exports, key, {
    enumerable: true,
    get: function () {
      return _types[key];
    }
  });
});

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

const Field = _ref => {
  let {
    label,
    value
  } = _ref;
  const theme = (0, _useTheme.useTheme)();
  const stylesField = (0, _styles.makeStyles)(theme);
  return /*#__PURE__*/_react.default.createElement(_reactNative.View, {
    style: stylesField.container
  }, /*#__PURE__*/_react.default.createElement(_reactNative.Text, {
    style: stylesField.label
  }, label), /*#__PURE__*/_react.default.createElement(_reactNative.Text, {
    style: stylesField.value
  }, value));
};

exports.Field = Field;
//# sourceMappingURL=Field.js.map