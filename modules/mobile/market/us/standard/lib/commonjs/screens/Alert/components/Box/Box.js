"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
var _exportNames = {
  Box: true
};
exports.Box = void 0;

var _react = _interopRequireDefault(require("react"));

var _reactNative = require("react-native");

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

const Box = _ref => {
  let {
    children,
    style
  } = _ref;
  const boxStyles = (0, _styles.makeStyles)();
  return /*#__PURE__*/_react.default.createElement(_reactNative.View, {
    style: [boxStyles.container, style]
  }, children);
};

exports.Box = Box;
//# sourceMappingURL=Box.js.map