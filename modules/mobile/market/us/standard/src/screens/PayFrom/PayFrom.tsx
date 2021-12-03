import React from 'react';
import { Header, Title, Description, Container } from '../../components';
import { AccountList, AccountItem } from './components';
import { listAccounts } from './constants';
import type { IPayFrom, TlistAccounts } from './types';

export const PayFrom = ({ navigation, route }: IPayFrom) => {
  const handleChange = (option: TlistAccounts) => {
    navigation.navigate('Amount', {
      ...route.params,
      payFrom: {
        label: 'Pay from',
        value: `${option.accountType} - ${option.accountCode}, Bank`,
      },
    });
  };

  return (
    <Container>
      <Header />
      <Title>Pay from</Title>
      <Description>Choose the account to make the payment from</Description>
      <AccountList onChange={handleChange} accountsList={listAccounts} />
    </Container>
  );
};

PayFrom.Container = Container;
PayFrom.Header = Header;
PayFrom.Title = Title;
PayFrom.Description = Description;
PayFrom.AccountList = AccountList;
PayFrom.AccountItem = AccountItem;

export * from './types';
