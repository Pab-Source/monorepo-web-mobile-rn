"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
var _exportNames = {
  Review: true
};
exports.Review = void 0;

var _react = _interopRequireDefault(require("react"));

var _reactNative = require("react-native");

var _components = require("../../components");

var _components2 = require("./components");

var _useTheme = require("../../context/hooks/useTheme");

var _types = require("./types");

Object.keys(_types).forEach(function (key) {
  if (key === "default" || key === "__esModule") return;
  if (Object.prototype.hasOwnProperty.call(_exportNames, key)) return;
  if (key in exports && exports[key] === _types[key]) return;
  Object.defineProperty(exports, key, {
    enumerable: true,
    get: function () {
      return _types[key];
    }
  });
});

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

const Review = _ref => {
  let {
    route,
    navigation
  } = _ref;
  const fields = Object.values({ ...route.params
  });
  const theme = (0, _useTheme.useTheme)();
  return /*#__PURE__*/_react.default.createElement(_components.Container, null, /*#__PURE__*/_react.default.createElement(_reactNative.View, null, /*#__PURE__*/_react.default.createElement(_components.Header, null), /*#__PURE__*/_react.default.createElement(_components.Title, null, "Review")), /*#__PURE__*/_react.default.createElement(_components2.ContainerFields, null, fields === null || fields === void 0 ? void 0 : fields.map(field => /*#__PURE__*/_react.default.createElement(_components2.Field, {
    key: JSON.stringify(field),
    label: field.label,
    value: field.value
  }))), /*#__PURE__*/_react.default.createElement(_components2.ContainerButtons, null, /*#__PURE__*/_react.default.createElement(_components.Button, {
    onPress: () => navigation.navigate('Alert', { ...route.params
    })
  }, "Send payment"), /*#__PURE__*/_react.default.createElement(_components.Button, {
    style: {
      marginTop: 10,
      backgroundColor: theme.backgroundColorCancel
    },
    styleText: {
      color: theme.textColorCancel
    },
    onPress: () => navigation.popToTop()
  }, "Cancel")));
};

exports.Review = Review;
Review.Container = _components.Container;
Review.Header = _components.Header;
Review.Title = _components.Title;
Review.ContainerFields = _components2.ContainerFields;
Review.Field = _components2.Field;
Review.ContainerButtons = _components2.ContainerButtons;
Review.Button = _components.Button;
//# sourceMappingURL=Review.js.map