'use strict';

Object.defineProperty(exports, '__esModule', {
  value: true,
});
exports.DescriptionTwo = void 0;

var _react = _interopRequireDefault(require('react'));

var _components = require('../../../../../../components');

var _useTheme = require('../../../../../../context/hooks/useTheme');

function _interopRequireDefault(obj) {
  return obj && obj.__esModule ? obj : { default: obj };
}

const DescriptionTwo = (_ref) => {
  let { children } = _ref;
  const theme = (0, _useTheme.useTheme)();
  return /*#__PURE__*/ _react.default.createElement(
    _components.Description,
    {
      style: {
        color: theme.loadingSecondaryDescriptionColor,
        fontSize: 16,
        fontWeight: 'normal',
      },
    },
    children
  );
};

exports.DescriptionTwo = DescriptionTwo;
//# sourceMappingURL=DescriptionTwo.js.map
