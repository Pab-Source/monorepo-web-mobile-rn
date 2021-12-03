'use strict';

Object.defineProperty(exports, '__esModule', {
  value: true,
});
exports.Box = void 0;

var _react = _interopRequireDefault(require('react'));

var _reactNative = require('react-native');

var _styles = require('./styles');

function _interopRequireDefault(obj) {
  return obj && obj.__esModule ? obj : { default: obj };
}

const Box = (_ref) => {
  let { children } = _ref;
  const boxStyles = (0, _styles.makeStyles)();
  return /*#__PURE__*/ _react.default.createElement(
    _reactNative.View,
    {
      style: boxStyles.container,
    },
    children
  );
};

exports.Box = Box;
//# sourceMappingURL=Box.js.map
