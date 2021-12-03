import React from 'react';
import { Image, Text, View } from 'react-native';
import { useTheme } from '../../../../context/hooks/useTheme';
import { makeStyles } from './styles';
import type { IAccountItem } from './types';

export const AccountItem: React.FC<IAccountItem> = ({ account }) => {
  const theme = useTheme();

  const accountItemStyle = makeStyles(theme);

  return (
    <View style={[accountItemStyle.container]}>
      <View style={accountItemStyle.boxLeft}>
        <Image
          style={accountItemStyle.icon}
          source={require('../../../../assets/bank.png')}
        />
        <View style={accountItemStyle.infoAccount}>
          <Text style={accountItemStyle.accountTitle}>
            {account.accountType} - {account.accountCode}
          </Text>
          <Text style={accountItemStyle.accountEnterprise}>Bank</Text>
        </View>
      </View>
      <Text style={accountItemStyle.accountAmount}>
        {account.accountAmount}
      </Text>
    </View>
  );
};
