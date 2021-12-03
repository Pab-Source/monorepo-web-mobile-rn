'use strict';

Object.defineProperty(exports, '__esModule', {
  value: true,
});
var _exportNames = {
  PayFrom: true,
};
exports.PayFrom = void 0;

var _react = _interopRequireDefault(require('react'));

var _components = require('../../components');

var _components2 = require('./components');

var _constants = require('./constants');

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

const PayFrom = (_ref) => {
  let { navigation, route } = _ref;

  const handleChange = (option) => {
    navigation.navigate('Amount', {
      ...route.params,
      payFrom: {
        label: 'Pay from',
        value: `${option.accountType} - ${option.accountCode}, Tekbank`,
      },
    });
  };

  return /*#__PURE__*/ _react.default.createElement(
    _components.Container,
    null,
    /*#__PURE__*/ _react.default.createElement(_components.Header, null),
    /*#__PURE__*/ _react.default.createElement(
      _components.Title,
      null,
      'Pay from'
    ),
    /*#__PURE__*/ _react.default.createElement(
      _components.Description,
      null,
      'Choose the account to make the payment from'
    ),
    /*#__PURE__*/ _react.default.createElement(_components2.AccountList, {
      onChange: handleChange,
      accountsList: _constants.listAccounts,
    })
  );
};

exports.PayFrom = PayFrom;
PayFrom.Container = _components.Container;
PayFrom.Header = _components.Header;
PayFrom.Title = _components.Title;
PayFrom.Description = _components.Description;
PayFrom.AccountList = _components2.AccountList;
PayFrom.AccountItem = _components2.AccountItem;
//# sourceMappingURL=PayFrom.js.map
