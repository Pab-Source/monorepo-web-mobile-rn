'use strict';

Object.defineProperty(exports, '__esModule', {
  value: true,
});
exports.BaseInput = void 0;

var _react = _interopRequireDefault(require('react'));

var _reactNative = require('react-native');

var _useTheme = require('../../context/hooks/useTheme');

var _styles = require('./styles');

function _interopRequireDefault(obj) {
  return obj && obj.__esModule ? obj : { default: obj };
}

const BaseInput = (_ref) => {
  let { bottomLabel, onChange, style, placeholder } = _ref;
  const theme = (0, _useTheme.useTheme)();
  const styles = (0, _styles.makeStyles)(theme);
  return /*#__PURE__*/ _react.default.createElement(
    _reactNative.View,
    {
      style: styles.container,
    },
    /*#__PURE__*/ _react.default.createElement(_reactNative.TextInput, {
      placeholder: placeholder,
      onChangeText: onChange,
      style: [styles.input, style],
      placeholderTextColor: theme.inputColor,
    }),
    bottomLabel &&
      /*#__PURE__*/ _react.default.createElement(
        _reactNative.Text,
        {
          style: styles.bottomLabel,
        },
        bottomLabel
      )
  );
};

exports.BaseInput = BaseInput;
//# sourceMappingURL=BaseInput.js.map
