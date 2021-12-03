'use strict';

Object.defineProperty(exports, '__esModule', {
  value: true,
});
exports.PaySomeone = void 0;

var _react = _interopRequireDefault(require('react'));

var _native = require('@react-navigation/native');

var _useTheme = require('../../../../context/hooks/useTheme');

var _reactNative = require('react-native');

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

const PaySomeone = (_ref) => {
  let {
    children,
    styleContainer = {},
    styleText = {},
    onPress,
    ...props
  } = _ref;
  const theme = (0, _useTheme.useTheme)();
  const styles = (0, _styles.makeStyles)(theme);
  const navigation = (0, _native.useNavigation)();
  const validatePress = onPress ? onPress : () => navigation.navigate('PayTo');
  return /*#__PURE__*/ _react.default.createElement(
    _reactNative.TouchableOpacity,
    _extends(
      {
        onPress: validatePress,
        style: [styles.container, styleContainer],
      },
      props
    ),
    /*#__PURE__*/ _react.default.createElement(
      _reactNative.Text,
      {
        style: [styles.text, styleText],
      },
      /*#__PURE__*/ _react.default.createElement(_reactNative.Image, {
        style: styles.arrow,
        source: require('../../../../assets/arrowRight.png'),
      }),
      ' ',
      children
    )
  );
};

exports.PaySomeone = PaySomeone;
//# sourceMappingURL=PaySomeone.js.map
