'use strict';

Object.defineProperty(exports, '__esModule', {
  value: true,
});
var _exportNames = {
  ContainerButtons: true,
};
exports.ContainerButtons = void 0;

var _react = _interopRequireDefault(require('react'));

var _reactNative = require('react-native');

var _styles = require('./styles');

var _types = require('./types');

Object.keys(_types).forEach(function (key) {
  if (key === 'default' || key === '__esModule') return;
  if (Object.prototype.hasOwnProperty.call(_exportNames, key)) return;
  if (key in exports && exports[key] === _types[key]) return;
  Object.defineProperty(exports, key, {
    enumerable: true,
    get: function () {
      return _types[key];
    },
  });
});

function _interopRequireDefault(obj) {
  return obj && obj.__esModule ? obj : { default: obj };
}

const ContainerButtons = (_ref) => {
  let { children, style } = _ref;
  const containerButtonsStyle = (0, _styles.makeStyles)();
  return /*#__PURE__*/ _react.default.createElement(
    _reactNative.View,
    {
      style: [containerButtonsStyle.container, style],
    },
    children
  );
};

exports.ContainerButtons = ContainerButtons;
//# sourceMappingURL=ContainerButtons.js.map
