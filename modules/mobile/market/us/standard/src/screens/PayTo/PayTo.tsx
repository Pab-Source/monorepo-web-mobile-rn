import React, { useState } from 'react';
import { InputSearch, ContactList, ContactItem } from './components';
import { Header, Title, Container } from '../../components';
import { list } from './constants';
import type { IPayTo } from './types';

export const PayTo = ({ contactList = list, navigation }: IPayTo) => {
  const [contacts, setContacts] = useState(contactList);

  const handleChange = (value: string) => {
    const filtered = list.filter((contact) =>
      JSON.stringify(contact).toLowerCase().includes(value)
    );

    setContacts(filtered);
  };

  const handleSelect = (payTo: { name: string; phone: string }) => {
    navigation.navigate('PayFrom', {
      payTo: {
        label: 'Pay to',
        value: `${payTo.name}, ${payTo.phone}`,
        name: payTo.name,
      },
    });
  };

  return (
    <Container style={{ flex: 1 }}>
      <Header />
      <Title>Pay to</Title>
      <InputSearch onChange={handleChange} />
      <ContactList contacts={contacts} onChange={handleSelect} />
    </Container>
  );
};

PayTo.Container = Container;
PayTo.Header = Header;
PayTo.Title = Title;
PayTo.InputSearch = InputSearch;
PayTo.ContactList = ContactList;
PayTo.ContactItem = ContactItem;

export * from './types';
