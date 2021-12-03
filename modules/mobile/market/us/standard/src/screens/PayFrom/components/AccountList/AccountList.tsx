import React from 'react';
import { TouchableOpacity, View } from 'react-native';
import { makeStyles } from './styles';
import { AccountItem } from '../AccountItem/AccountItem';
import type { IAccountList } from './types';

export const AccountList: React.FC<IAccountList> = ({
  accountsList,
  onChange,
}) => {
  const accountListStyle = makeStyles();

  return (
    <View style={accountListStyle.container}>
      {accountsList?.map((account) => (
        <TouchableOpacity
          key={JSON.stringify(account)}
          onPress={() => onChange(account)}
        >
          <AccountItem account={account} />
        </TouchableOpacity>
      ))}
    </View>
  );
};

export * from './types';
