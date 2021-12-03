import React from 'react';
import { TouchableOpacity, View } from 'react-native';
import { ContactItem } from '../ContactItem/ContactItem';
import { makeStyles } from './styles';
import { IContactList } from './types';

export const ContactList: React.FC<IContactList> = ({ contacts, onChange }) => {
  const contactListStyle = makeStyles();

  return (
    <View style={contactListStyle.container}>
      {contacts?.map((contact) => (
        <TouchableOpacity
          key={JSON.stringify(contact)}
          onPress={() => onChange(contact)}
        >
          <ContactItem contact={contact} />
        </TouchableOpacity>
      ))}
    </View>
  );
};

export * from './types';
