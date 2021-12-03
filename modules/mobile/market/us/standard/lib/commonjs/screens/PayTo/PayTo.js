"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
var _exportNames = {
  PayTo: true
};
exports.PayTo = void 0;

var _react = _interopRequireWildcard(require("react"));

var _components = require("./components");

var _components2 = require("../../components");

var _constants = require("./constants");

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

const PayTo = _ref => {
  let {
    contactList = _constants.list,
    navigation
  } = _ref;
  const [contacts, setContacts] = (0, _react.useState)(contactList);

  const handleChange = value => {
    const filtered = _constants.list.filter(contact => JSON.stringify(contact).toLowerCase().includes(value));

    setContacts(filtered);
  };

  const handleSelect = payTo => {
    navigation.navigate('PayFrom', {
      payTo: {
        label: 'Pay to',
        value: `${payTo.name}, ${payTo.phone}`,
        name: payTo.name
      }
    });
  };

  return /*#__PURE__*/_react.default.createElement(_components2.Container, {
    style: {
      flex: 1
    }
  }, /*#__PURE__*/_react.default.createElement(_components2.Header, null), /*#__PURE__*/_react.default.createElement(_components2.Title, null, "Pay to"), /*#__PURE__*/_react.default.createElement(_components.InputSearch, {
    onChange: handleChange
  }), /*#__PURE__*/_react.default.createElement(_components.ContactList, {
    contacts: contacts,
    onChange: handleSelect
  }));
};

exports.PayTo = PayTo;
PayTo.Container = _components2.Container;
PayTo.Header = _components2.Header;
PayTo.Title = _components2.Title;
PayTo.InputSearch = _components.InputSearch;
PayTo.ContactList = _components.ContactList;
PayTo.ContactItem = _components.ContactItem;
//# sourceMappingURL=PayTo.js.map