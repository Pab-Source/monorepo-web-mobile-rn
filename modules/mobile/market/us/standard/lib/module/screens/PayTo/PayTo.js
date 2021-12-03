import React, { useState } from 'react';
import { InputSearch, ContactList, ContactItem } from './components';
import { Header, Title, Container } from '../../components';
import { list } from './constants';
export const PayTo = (_ref) => {
  let { contactList = list, navigation } = _ref;
  const [contacts, setContacts] = useState(contactList);

  const handleChange = (value) => {
    const filtered = list.filter((contact) =>
      JSON.stringify(contact).toLowerCase().includes(value)
    );
    setContacts(filtered);
  };

  const handleSelect = (payTo) => {
    navigation.navigate('PayFrom', {
      payTo: {
        label: 'Pay to',
        value: `${payTo.name}, ${payTo.phone}`,
        name: payTo.name,
      },
    });
  };

  return /*#__PURE__*/ React.createElement(
    Container,
    {
      style: {
        flex: 1,
      },
    },
    /*#__PURE__*/ React.createElement(Header, null),
    /*#__PURE__*/ React.createElement(Title, null, 'Pay to'),
    /*#__PURE__*/ React.createElement(InputSearch, {
      onChange: handleChange,
    }),
    /*#__PURE__*/ React.createElement(ContactList, {
      contacts: contacts,
      onChange: handleSelect,
    })
  );
};
PayTo.Container = Container;
PayTo.Header = Header;
PayTo.Title = Title;
PayTo.InputSearch = InputSearch;
PayTo.ContactList = ContactList;
PayTo.ContactItem = ContactItem;
export * from './types';
//# sourceMappingURL=PayTo.js.map
