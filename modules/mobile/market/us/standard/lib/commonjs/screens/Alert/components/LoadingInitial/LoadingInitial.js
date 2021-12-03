"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.LoadingInitial = void 0;

var _react = _interopRequireDefault(require("react"));

var _ = require("..");

var _components = require("../../../../components");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

const LoadingInitial = () => {
  return /*#__PURE__*/_react.default.createElement(_components.Container, {
    style: {
      justifyContent: 'center'
    }
  }, /*#__PURE__*/_react.default.createElement(_.Box, null, /*#__PURE__*/_react.default.createElement(_.Loading, null), /*#__PURE__*/_react.default.createElement(_.Description, null, "One second, we are sending your payment...")), /*#__PURE__*/_react.default.createElement(_.Box, {
    style: {
      marginTop: 74
    }
  }, /*#__PURE__*/_react.default.createElement(_.InfoImage, {
    image: require('../../../../assets/one-second.png')
  })));
};

exports.LoadingInitial = LoadingInitial;
LoadingInitial.Container = _components.Container;
LoadingInitial.Box = _.Box;
LoadingInitial.Loading = _.Loading;
LoadingInitial.Description = _.Description;
LoadingInitial.InfoImage = _.InfoImage;
//# sourceMappingURL=LoadingInitial.js.map