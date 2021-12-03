import React from 'react';
import { TouchableOpacity, View } from 'react-native';
import { makeStyles } from './styles';
import { AccountItem } from '../AccountItem/AccountItem';
export const AccountList = (_ref) => {
  let { accountsList, onChange } = _ref;
  const accountListStyle = makeStyles();
  return /*#__PURE__*/ React.createElement(
    View,
    {
      style: accountListStyle.container,
    },
    accountsList === null || accountsList === void 0
      ? void 0
      : accountsList.map((account) =>
          /*#__PURE__*/ React.createElement(
            TouchableOpacity,
            {
              key: JSON.stringify(account),
              onPress: () => onChange(account),
            },
            /*#__PURE__*/ React.createElement(AccountItem, {
              account: account,
            })
          )
        )
  );
};
export * from './types';
//# sourceMappingURL=AccountList.js.map
