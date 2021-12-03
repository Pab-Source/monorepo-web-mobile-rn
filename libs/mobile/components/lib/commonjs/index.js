'use strict';

Object.defineProperty(exports, '__esModule', {
  value: true,
});
exports.ExampleComponent = void 0;

var _react = _interopRequireDefault(require('react'));

var _reactNative = require('react-native');

function _interopRequireDefault(obj) {
  return obj && obj.__esModule ? obj : { default: obj };
}

const ExampleComponent = () => {
  return /*#__PURE__*/ _react.default.createElement(
    _reactNative.View,
    null,
    /*#__PURE__*/ _react.default.createElement(
      _reactNative.Text,
      null,
      'Example component'
    )
  );
};

exports.ExampleComponent = ExampleComponent;
//# sourceMappingURL=index.js.map
