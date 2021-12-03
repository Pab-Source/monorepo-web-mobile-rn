import React from 'react';
import type { IPayFrom } from './types';
export declare const PayFrom: {
  ({ navigation, route }: IPayFrom): JSX.Element;
  Container: React.FC<{
    style?: import('react-native').ViewStyle | undefined;
  }>;
  Header: React.FC<import('../../components').IHeader>;
  Title: React.FC<import('../../components').ITitle>;
  Description: React.FC<import('../../components').IDescription>;
  AccountList: React.FC<import('./components').IAccountList>;
  AccountItem: React.FC<import('./components/AccountItem/types').IAccountItem>;
};
export * from './types';
