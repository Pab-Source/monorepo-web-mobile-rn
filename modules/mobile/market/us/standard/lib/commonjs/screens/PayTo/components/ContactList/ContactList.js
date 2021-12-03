'use strict';

Object.defineProperty(exports, '__esModule', {
  value: true,
});
var _exportNames = {
  ContactList: true,
};
exports.ContactList = void 0;

var _react = _interopRequireDefault(require('react'));

var _reactNative = require('react-native');

var _ContactItem = require('../ContactItem/ContactItem');

var _styles = require('./styles');

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

const ContactList = (_ref) => {
  let { contacts, onChange } = _ref;
  const contactListStyle = (0, _styles.makeStyles)();
  return /*#__PURE__*/ _react.default.createElement(
    _reactNative.View,
    {
      style: contactListStyle.container,
    },
    contacts === null || contacts === void 0
      ? void 0
      : contacts.map((contact) =>
          /*#__PURE__*/ _react.default.createElement(
            _reactNative.TouchableOpacity,
            {
              key: JSON.stringify(contact),
              onPress: () => onChange(contact),
            },
            /*#__PURE__*/ _react.default.createElement(
              _ContactItem.ContactItem,
              {
                contact: contact,
              }
            )
          )
        )
  );
};

exports.ContactList = ContactList;
//# sourceMappingURL=ContactList.js.map
