'use strict';

Object.defineProperty(exports, '__esModule', {
  value: true,
});
var _exportNames = {
  Amount: true,
};
exports.Amount = void 0;

var _react = _interopRequireWildcard(require('react'));

var _components = require('../../components');

var _components2 = require('./components');

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

function _getRequireWildcardCache(nodeInterop) {
  if (typeof WeakMap !== 'function') return null;
  var cacheBabelInterop = new WeakMap();
  var cacheNodeInterop = new WeakMap();
  return (_getRequireWildcardCache = function (nodeInterop) {
    return nodeInterop ? cacheNodeInterop : cacheBabelInterop;
  })(nodeInterop);
}

function _interopRequireWildcard(obj, nodeInterop) {
  if (!nodeInterop && obj && obj.__esModule) {
    return obj;
  }
  if (obj === null || (typeof obj !== 'object' && typeof obj !== 'function')) {
    return { default: obj };
  }
  var cache = _getRequireWildcardCache(nodeInterop);
  if (cache && cache.has(obj)) {
    return cache.get(obj);
  }
  var newObj = {};
  var hasPropertyDescriptor =
    Object.defineProperty && Object.getOwnPropertyDescriptor;
  for (var key in obj) {
    if (key !== 'default' && Object.prototype.hasOwnProperty.call(obj, key)) {
      var desc = hasPropertyDescriptor
        ? Object.getOwnPropertyDescriptor(obj, key)
        : null;
      if (desc && (desc.get || desc.set)) {
        Object.defineProperty(newObj, key, desc);
      } else {
        newObj[key] = obj[key];
      }
    }
  }
  newObj.default = obj;
  if (cache) {
    cache.set(obj, newObj);
  }
  return newObj;
}

const Amount = (_ref) => {
  let { navigation, route } = _ref;
  const [actualAmount, setActualAmount] = (0, _react.useState)('');

  const handleChange = (value) => setActualAmount(value);

  const handleNavigate = () => {
    navigation.navigate('When', {
      ...route.params,
      amount: {
        label: 'Amount',
        value: `$${actualAmount}`,
      },
    });
  };

  return /*#__PURE__*/ _react.default.createElement(
    _components.Container,
    {
      style: {
        flex: 1,
      },
    },
    /*#__PURE__*/ _react.default.createElement(_components.Header, null),
    /*#__PURE__*/ _react.default.createElement(
      _components2.Box,
      null,
      /*#__PURE__*/ _react.default.createElement(
        _components2.FirstElement,
        null,
        /*#__PURE__*/ _react.default.createElement(
          _components.Title,
          null,
          'Amount'
        ),
        /*#__PURE__*/ _react.default.createElement(_components2.InputMask, {
          onChange: handleChange,
        })
      ),
      /*#__PURE__*/ _react.default.createElement(
        _components.Button,
        {
          disabled: !actualAmount,
          onPress: handleNavigate,
        },
        'Continue'
      )
    )
  );
};

exports.Amount = Amount;
Amount.Container = _components.Container;
Amount.Header = _components.Header;
Amount.Box = _components2.Box;
Amount.FirstElement = _components2.FirstElement;
Amount.Title = _components.Title;
Amount.InputMask = _components2.InputMask;
Amount.Button = _components.Button;
//# sourceMappingURL=Amount.js.map
