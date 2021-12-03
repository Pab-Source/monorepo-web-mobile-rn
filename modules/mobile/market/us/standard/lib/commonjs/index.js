"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
var _exportNames = {
  RootComponent: true
};
exports.RootComponent = void 0;

var _react = _interopRequireDefault(require("react"));

var _native = require("@react-navigation/native");

var _nativeStack = require("@react-navigation/native-stack");

var _routes = require("./routes");

var _Theme = require("./context/Theme/Theme");

var _theme = require("./constants/theme");

var _components = require("./components");

Object.keys(_components).forEach(function (key) {
  if (key === "default" || key === "__esModule") return;
  if (Object.prototype.hasOwnProperty.call(_exportNames, key)) return;
  if (key in exports && exports[key] === _components[key]) return;
  Object.defineProperty(exports, key, {
    enumerable: true,
    get: function () {
      return _components[key];
    }
  });
});

var _screens = require("./screens");

Object.keys(_screens).forEach(function (key) {
  if (key === "default" || key === "__esModule") return;
  if (Object.prototype.hasOwnProperty.call(_exportNames, key)) return;
  if (key in exports && exports[key] === _screens[key]) return;
  Object.defineProperty(exports, key, {
    enumerable: true,
    get: function () {
      return _screens[key];
    }
  });
});

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

const RootComponent = _ref => {
  let {
    secureRoutes = {},
    theme = _theme.theme
  } = _ref;
  const Stack = (0, _nativeStack.createNativeStackNavigator)();
  const routes = Object.values({ ..._routes.internalRoutes,
    ...secureRoutes
  });
  return /*#__PURE__*/_react.default.createElement(_Theme.ThemeProvider, {
    theme: theme
  }, /*#__PURE__*/_react.default.createElement(_native.NavigationContainer, null, /*#__PURE__*/_react.default.createElement(Stack.Navigator, {
    initialRouteName: "Home",
    screenOptions: {
      headerShown: false
    }
  }, routes.map(route => {
    return /*#__PURE__*/_react.default.createElement(Stack.Screen, {
      key: JSON.stringify({
        route
      }),
      component: route.component,
      name: route.name
    });
  }))));
};

exports.RootComponent = RootComponent;
//# sourceMappingURL=index.js.map