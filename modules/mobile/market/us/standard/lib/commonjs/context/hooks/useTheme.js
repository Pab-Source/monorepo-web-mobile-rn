'use strict';

Object.defineProperty(exports, '__esModule', {
  value: true,
});
exports.useTheme = void 0;

var _react = require('react');

var _Theme = require('../Theme/Theme');

const useTheme = () => {
  const theme = (0, _react.useContext)(_Theme.ThemeContext);
  return theme;
};

exports.useTheme = useTheme;
//# sourceMappingURL=useTheme.js.map
