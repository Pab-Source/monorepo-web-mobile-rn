"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
var _exportNames = {
  AccountList: true
};
exports.AccountList = void 0;

var _react = _interopRequireDefault(require("react"));

var _reactNative = require("react-native");

var _styles = require("./styles");

var _AccountItem = require("../AccountItem/AccountItem");

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

const AccountList = _ref => {
  let {
    accountsList,
    onChange
  } = _ref;
  const accountListStyle = (0, _styles.makeStyles)();
  return /*#__PURE__*/_react.default.createElement(_reactNative.View, {
    style: accountListStyle.container
  }, accountsList === null || accountsList === void 0 ? void 0 : accountsList.map(account => /*#__PURE__*/_react.default.createElement(_reactNative.TouchableOpacity, {
    key: JSON.stringify(account),
    onPress: () => onChange(account)
  }, /*#__PURE__*/_react.default.createElement(_AccountItem.AccountItem, {
    account: account
  }))));
};

exports.AccountList = AccountList;
//# sourceMappingURL=AccountList.js.map