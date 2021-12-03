"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
var _exportNames = {
  When: true
};
exports.When = void 0;

var _react = _interopRequireWildcard(require("react"));

var _reactNative = require("react-native");

var _components = require("./components");

var _components2 = require("../../components");

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

function _getRequireWildcardCache(nodeInterop) { if (typeof WeakMap !== "function") return null; var cacheBabelInterop = new WeakMap(); var cacheNodeInterop = new WeakMap(); return (_getRequireWildcardCache = function (nodeInterop) { return nodeInterop ? cacheNodeInterop : cacheBabelInterop; })(nodeInterop); }

function _interopRequireWildcard(obj, nodeInterop) { if (!nodeInterop && obj && obj.__esModule) { return obj; } if (obj === null || typeof obj !== "object" && typeof obj !== "function") { return { default: obj }; } var cache = _getRequireWildcardCache(nodeInterop); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (key !== "default" && Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj.default = obj; if (cache) { cache.set(obj, newObj); } return newObj; }

const When = _ref => {
  let {
    navigation,
    route,
    goTo = 'Review'
  } = _ref;
  const [actualDate, setActualDate] = (0, _react.useState)('');

  const handleNavigate = () => {
    navigation.navigate(goTo, { ...route.params,
      when: {
        label: 'When',
        value: actualDate
      }
    });
  };

  return /*#__PURE__*/_react.default.createElement(_components2.Container, {
    style: {
      flex: 1,
      justifyContent: 'space-between'
    }
  }, /*#__PURE__*/_react.default.createElement(_reactNative.View, null, /*#__PURE__*/_react.default.createElement(_components2.Header, null), /*#__PURE__*/_react.default.createElement(_components2.Title, null, "When"), /*#__PURE__*/_react.default.createElement(_components.Description, null, "Choose date")), /*#__PURE__*/_react.default.createElement(_components.Calendar, {
    onChange: date => setActualDate(date)
  }), /*#__PURE__*/_react.default.createElement(_components2.Button, {
    disabled: !actualDate,
    onPress: handleNavigate,
    style: {
      marginTop: 40
    }
  }, "Continue"));
};

exports.When = When;
When.Container = _components2.Container;
When.Header = _components2.Header;
When.Title = _components2.Title;
When.Description = _components.Description;
When.Calendar = _components.Calendar;
When.Button = _components2.Button;
//# sourceMappingURL=When.js.map