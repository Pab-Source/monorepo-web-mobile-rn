import React from 'react';
import type { IPayTo } from './types';
export declare const PayTo: {
  ({ contactList, navigation }: IPayTo): JSX.Element;
  Container: React.FC<{
    style?: import('react-native').ViewStyle | undefined;
  }>;
  Header: React.FC<import('../../components').IHeader>;
  Title: React.FC<import('../../components').ITitle>;
  InputSearch: React.FC<import('./components').IInputSearch>;
  ContactList: React.FC<import('./components').IContactList>;
  ContactItem: React.FC<import('./components').IContactItem>;
};
export * from './types';
