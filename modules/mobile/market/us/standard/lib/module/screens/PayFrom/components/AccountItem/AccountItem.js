import React from 'react';
import { Image, Text, View } from 'react-native';
import { useTheme } from '../../../../context/hooks/useTheme';
import { makeStyles } from './styles';
export const AccountItem = (_ref) => {
  let { account } = _ref;
  const theme = useTheme();
  const accountItemStyle = makeStyles(theme);
  return /*#__PURE__*/ React.createElement(
    View,
    {
      style: [accountItemStyle.container],
    },
    /*#__PURE__*/ React.createElement(
      View,
      {
        style: accountItemStyle.boxLeft,
      },
      /*#__PURE__*/ React.createElement(Image, {
        style: accountItemStyle.icon,
        source: require('../../../../assets/tek.png'),
      }),
      /*#__PURE__*/ React.createElement(
        View,
        {
          style: accountItemStyle.infoAccount,
        },
        /*#__PURE__*/ React.createElement(
          Text,
          {
            style: accountItemStyle.accountTitle,
          },
          account.accountType,
          ' - ',
          account.accountCode
        ),
        /*#__PURE__*/ React.createElement(
          Text,
          {
            style: accountItemStyle.accountEnterprise,
          },
          'Tekbank'
        )
      )
    ),
    /*#__PURE__*/ React.createElement(
      Text,
      {
        style: accountItemStyle.accountAmount,
      },
      account.accountAmount
    )
  );
};
//# sourceMappingURL=AccountItem.js.map
