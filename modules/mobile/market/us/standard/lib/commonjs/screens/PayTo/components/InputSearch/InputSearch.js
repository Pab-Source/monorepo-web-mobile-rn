'use strict';

Object.defineProperty(exports, '__esModule', {
  value: true,
});
var _exportNames = {
  InputSearch: true,
};
exports.InputSearch = void 0;

var _react = _interopRequireDefault(require('react'));

var _reactNative = require('react-native');

var _useTheme = require('../../../../context/hooks/useTheme');

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

const InputSearch = (_ref) => {
  let {
    containerStyle = {},
    inputStyle = {},
    inputProps = {},
    iconProps = {},
    iconStyle = {},
    onChange,
  } = _ref;
  const theme = (0, _useTheme.useTheme)();
  const inputStyles = (0, _styles.makeStyles)(theme);
  return /*#__PURE__*/ _react.default.createElement(
    _reactNative.View,
    {
      style: [inputStyles.container, containerStyle],
    },
    /*#__PURE__*/ _react.default.createElement(
      _reactNative.TextInput,
      _extends(
        {
          style: [inputStyles.input, inputStyle],
          placeholder: 'Search contact by name, email or phone',
          placeholderTextColor: theme.inputColor,
          onChangeText: onChange,
        },
        inputProps
      )
    ),
    /*#__PURE__*/ _react.default.createElement(
      _reactNative.Image,
      _extends({}, iconProps, {
        style: [inputStyles.icon, iconStyle],
        source: require('../../assets/Zoom.png'),
      })
    )
  );
};

exports.InputSearch = InputSearch;
//# sourceMappingURL=InputSearch.js.map
