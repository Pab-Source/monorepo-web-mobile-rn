import React from 'react';
import { Header, Title, Description, Container } from '../../components';
import { AccountList, AccountItem } from './components';
import { listAccounts } from './constants';
export const PayFrom = _ref => {
  let {
    navigation,
    route
  } = _ref;

  const handleChange = option => {
    navigation.navigate('Amount', { ...route.params,
      payFrom: {
        label: 'Pay from',
        value: `${option.accountType} - ${option.accountCode}, Tekbank`
      }
    });
  };

  return /*#__PURE__*/React.createElement(Container, null, /*#__PURE__*/React.createElement(Header, null), /*#__PURE__*/React.createElement(Title, null, "Pay from"), /*#__PURE__*/React.createElement(Description, null, "Choose the account to make the payment from"), /*#__PURE__*/React.createElement(AccountList, {
    onChange: handleChange,
    accountsList: listAccounts
  }));
};
PayFrom.Container = Container;
PayFrom.Header = Header;
PayFrom.Title = Title;
PayFrom.Description = Description;
PayFrom.AccountList = AccountList;
PayFrom.AccountItem = AccountItem;
export * from './types';
//# sourceMappingURL=PayFrom.js.map