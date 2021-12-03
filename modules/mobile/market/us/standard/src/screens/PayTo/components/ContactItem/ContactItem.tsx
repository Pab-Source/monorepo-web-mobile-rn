import React from 'react';
import { Text, View } from 'react-native';
import { useTheme } from '../../../../context/hooks/useTheme';
import { makeStyles } from './styles';
import { IContactItem } from './types';

export const ContactItem: React.FC<IContactItem> = ({ contact }) => {
  const theme = useTheme();

  const contactItemStyle = makeStyles(theme);

  const { name, phone } = contact;

  const initials = name
    .split(' ')
    .reduce((acc: string, [firstLetter]: string) => acc + firstLetter, '');

  return (
    <View style={contactItemStyle.container}>
      <View style={contactItemStyle.badgeInitials}>
        <Text style={contactItemStyle.textInitials}>{initials}</Text>
      </View>
      <View style={contactItemStyle.contactBody}>
        <Text style={contactItemStyle.name}>{name}</Text>
        <Text style={contactItemStyle.phone}>Tel. {phone}</Text>
      </View>
    </View>
  );
};

export * from './types';
