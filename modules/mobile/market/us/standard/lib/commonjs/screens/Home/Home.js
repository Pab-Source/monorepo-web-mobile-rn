'use strict';

Object.defineProperty(exports, '__esModule', {
  value: true,
});
exports.Home = void 0;

var _react = _interopRequireDefault(require('react'));

var _components = require('./components');

var _components2 = require('../../components');

function _interopRequireDefault(obj) {
  return obj && obj.__esModule ? obj : { default: obj };
}

const Home = () => {
  return /*#__PURE__*/ _react.default.createElement(
    _components2.Container,
    {
      style: {
        flex: 1,
      },
    },
    /*#__PURE__*/ _react.default.createElement(
      _components2.Title,
      {
        style: {
          marginTop: 37,
        },
      },
      'Payments'
    ),
    /*#__PURE__*/ _react.default.createElement(
      _components.PaySomeone,
      null,
      'Pay someone'
    )
  );
};

exports.Home = Home;
Home.Container = _components2.Container;
Home.Title = _components2.Title;
Home.PaySomeone = _components.PaySomeone;
//# sourceMappingURL=Home.js.map
