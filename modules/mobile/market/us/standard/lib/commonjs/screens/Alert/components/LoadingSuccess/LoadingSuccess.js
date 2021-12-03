'use strict';

Object.defineProperty(exports, '__esModule', {
  value: true,
});
var _exportNames = {
  LoadingSuccess: true,
};
exports.LoadingSuccess = void 0;

var _react = _interopRequireDefault(require('react'));

var _ = require('..');

var _components = require('../../../../components');

var _native = require('@react-navigation/native');

var _DescriptionTwo = require('./components/DescriptionTwo/DescriptionTwo');

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

const LoadingSuccess = (_ref) => {
  let { data } = _ref;
  const navigation = (0, _native.useNavigation)();

  const handleNavigate = () => navigation.popToTop();

  return /*#__PURE__*/ _react.default.createElement(
    _components.Container,
    {
      style: {
        justifyContent: 'space-between',
      },
    },
    /*#__PURE__*/ _react.default.createElement(_components.Header, {
      close: true,
      onPress: handleNavigate,
    }),
    /*#__PURE__*/ _react.default.createElement(
      _.Box,
      null,
      /*#__PURE__*/ _react.default.createElement(
        _.Description,
        null,
        'Ok, we sent ',
        data.amount.value,
        ' to ',
        '\n',
        data.payTo.name
      ),
      /*#__PURE__*/ _react.default.createElement(
        _DescriptionTwo.DescriptionTwo,
        null,
        'You\u2019ll receive an email when the recipient accepts your payment.'
      )
    ),
    /*#__PURE__*/ _react.default.createElement(
      _.Box,
      null,
      /*#__PURE__*/ _react.default.createElement(_.InfoImage, {
        image: require('../../../../assets/success.png'),
      })
    ),
    /*#__PURE__*/ _react.default.createElement(
      _components.Button,
      {
        style: {
          marginTop: 40,
        },
        onPress: handleNavigate,
      },
      'Back to payments'
    )
  );
};

exports.LoadingSuccess = LoadingSuccess;
//# sourceMappingURL=LoadingSuccess.js.map
