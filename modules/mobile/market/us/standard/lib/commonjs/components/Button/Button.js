'use strict';

Object.defineProperty(exports, '__esModule', {
  value: true,
});
exports.Button = void 0;

var _react = _interopRequireDefault(require('react'));

var _reactNative = require('react-native');

var _useTheme = require('../../context/hooks/useTheme');

var _styles = require('./styles');

function _interopRequireDefault(obj) {
  return obj && obj.__esModule ? obj : { default: obj };
}

function _extends() {
  _extends =
    Object.assign ||
    function (target) {
      for (var i = 1; i < arguments.length; i++) {
        var source = arguments[i];
        for (var key in source) {
          if (Object.prototype.hasOwnProperty.call(source, key)) {
            target[key] = source[key];
          }
        }
      }
      return target;
    };
  return _extends.apply(this, arguments);
}

const Button = (_ref) => {
  let {
    children,
    disabled = false,
    onPress = () => {},
    style,
    styleText,
    ...props
  } = _ref;
  const theme = (0, _useTheme.useTheme)();
  const styles = (0, _styles.makeStyles)(theme);
  return /*#__PURE__*/ _react.default.createElement(
    _reactNative.TouchableOpacity,
    _extends({}, props, {
      disabled: disabled,
      onPress: onPress,
      style: [
        styles.button,
        disabled ? styles.buttonDisabled : styles.buttonActive,
        style,
      ],
    }),
    /*#__PURE__*/ _react.default.createElement(
      _reactNative.Text,
      {
        style: [
          styles.buttonText,
          disabled ? styles.buttonTextDisabled : styles.buttonTextActive,
          styleText,
        ],
      },
      children
    )
  );
};

exports.Button = Button;
//# sourceMappingURL=Button.js.map
