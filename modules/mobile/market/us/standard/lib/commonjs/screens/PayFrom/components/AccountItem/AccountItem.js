'use strict';

Object.defineProperty(exports, '__esModule', {
  value: true,
});
exports.AccountItem = void 0;

var _react = _interopRequireDefault(require('react'));

var _reactNative = require('react-native');

var _useTheme = require('../../../../context/hooks/useTheme');

var _styles = require('./styles');

function _interopRequireDefault(obj) {
  return obj && obj.__esModule ? obj : { default: obj };
}

const AccountItem = (_ref) => {
  let { account } = _ref;
  const theme = (0, _useTheme.useTheme)();
  const accountItemStyle = (0, _styles.makeStyles)(theme);
  return /*#__PURE__*/ _react.default.createElement(
    _reactNative.View,
    {
      style: [accountItemStyle.container],
    },
    /*#__PURE__*/ _react.default.createElement(
      _reactNative.View,
      {
        style: accountItemStyle.boxLeft,
      },
      /*#__PURE__*/ _react.default.createElement(_reactNative.Image, {
        style: accountItemStyle.icon,
        source: require('../../../../assets/tek.png'),
      }),
      /*#__PURE__*/ _react.default.createElement(
        _reactNative.View,
        {
          style: accountItemStyle.infoAccount,
        },
        /*#__PURE__*/ _react.default.createElement(
          _reactNative.Text,
          {
            style: accountItemStyle.accountTitle,
          },
          account.accountType,
          ' - ',
          account.accountCode
        ),
        /*#__PURE__*/ _react.default.createElement(
          _reactNative.Text,
          {
            style: accountItemStyle.accountEnterprise,
          },
          'Tekbank'
        )
      )
    ),
    /*#__PURE__*/ _react.default.createElement(
      _reactNative.Text,
      {
        style: accountItemStyle.accountAmount,
      },
      account.accountAmount
    )
  );
};

exports.AccountItem = AccountItem;
//# sourceMappingURL=AccountItem.js.map
