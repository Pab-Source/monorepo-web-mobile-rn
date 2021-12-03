"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
var _exportNames = {
  ContactItem: true
};
exports.ContactItem = void 0;

var _react = _interopRequireDefault(require("react"));

var _reactNative = require("react-native");

var _useTheme = require("../../../../context/hooks/useTheme");

var _styles = require("./styles");

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

const ContactItem = _ref => {
  let {
    contact
  } = _ref;
  const theme = (0, _useTheme.useTheme)();
  const contactItemStyle = (0, _styles.makeStyles)(theme);
  const {
    name,
    phone
  } = contact;
  const initials = name.split(' ').reduce((acc, _ref2) => {
    let [firstLetter] = _ref2;
    return acc + firstLetter;
  }, '');
  return /*#__PURE__*/_react.default.createElement(_reactNative.View, {
    style: contactItemStyle.container
  }, /*#__PURE__*/_react.default.createElement(_reactNative.View, {
    style: contactItemStyle.badgeInitials
  }, /*#__PURE__*/_react.default.createElement(_reactNative.Text, {
    style: contactItemStyle.textInitials
  }, initials)), /*#__PURE__*/_react.default.createElement(_reactNative.View, {
    style: contactItemStyle.contactBody
  }, /*#__PURE__*/_react.default.createElement(_reactNative.Text, {
    style: contactItemStyle.name
  }, name), /*#__PURE__*/_react.default.createElement(_reactNative.Text, {
    style: contactItemStyle.phone
  }, "Tel. ", phone)));
};

exports.ContactItem = ContactItem;
//# sourceMappingURL=ContactItem.js.map