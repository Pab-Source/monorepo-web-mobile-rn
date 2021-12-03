'use strict';

Object.defineProperty(exports, '__esModule', {
  value: true,
});
exports.Arrow = void 0;

var _react = _interopRequireDefault(require('react'));

var _reactNative = require('react-native');

var _styles = require('./styles');

function _interopRequireDefault(obj) {
  return obj && obj.__esModule ? obj : { default: obj };
}

const Arrow = (_ref) => {
  let { direction } = _ref;
  const styles = (0, _styles.makeStyles)();
  return direction === 'right'
    ? /*#__PURE__*/ _react.default.createElement(_reactNative.Image, {
        source: require('../../../../../assets/Vector.png'),
        style: styles.icon,
      })
    : /*#__PURE__*/ _react.default.createElement(_reactNative.Image, {
        source: require('../../../../../assets/Vector.png'),
      });
};

exports.Arrow = Arrow;
//# sourceMappingURL=Arrow.js.map
