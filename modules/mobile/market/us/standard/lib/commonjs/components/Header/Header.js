"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.Header = void 0;

var _react = _interopRequireDefault(require("react"));

var _core = require("@react-navigation/core");

var _reactNative = require("react-native");

var _styles = require("./styles");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

const Header = _ref => {
  let {
    styleContainer = {},
    buttonProps = {},
    iconProps = {},
    onPress,
    close = false,
    ...props
  } = _ref;
  const navigation = (0, _core.useNavigation)();
  const headerStyles = (0, _styles.makeStyles)();
  return /*#__PURE__*/_react.default.createElement(_reactNative.View, _extends({}, props, {
    style: [headerStyles.container, styleContainer, close ? {
      alignItems: 'flex-end'
    } : {}]
  }), close ? /*#__PURE__*/_react.default.createElement(_reactNative.TouchableOpacity, {
    onPress: onPress ? onPress : () => navigation.goBack()
  }, /*#__PURE__*/_react.default.createElement(_reactNative.Image, _extends({}, iconProps, {
    source: require('../../assets/close.png')
  }))) : /*#__PURE__*/_react.default.createElement(_reactNative.TouchableOpacity, _extends({
    onPress: onPress ? onPress : () => navigation.goBack()
  }, buttonProps), /*#__PURE__*/_react.default.createElement(_reactNative.Image, _extends({}, iconProps, {
    source: require('../../assets/Vector.png')
  }))));
};

exports.Header = Header;
//# sourceMappingURL=Header.js.map