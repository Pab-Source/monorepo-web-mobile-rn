'use strict';

Object.defineProperty(exports, '__esModule', {
  value: true,
});
exports.Loading = void 0;

var _react = _interopRequireDefault(require('react'));

var _reactNative = require('react-native');

var _useTheme = require('../../../../context/hooks/useTheme');

function _interopRequireDefault(obj) {
  return obj && obj.__esModule ? obj : { default: obj };
}

const Loading = () => {
  const theme = (0, _useTheme.useTheme)();
  return /*#__PURE__*/ _react.default.createElement(
    _reactNative.ActivityIndicator,
    {
      color: theme.loadingColor,
      size: 'large',
    }
  );
};

exports.Loading = Loading;
//# sourceMappingURL=Loading.js.map
