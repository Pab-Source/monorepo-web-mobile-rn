import React from 'react';
import { TouchableOpacity, View } from 'react-native';
import { ContactItem } from '../ContactItem/ContactItem';
import { makeStyles } from './styles';
export const ContactList = _ref => {
  let {
    contacts,
    onChange
  } = _ref;
  const contactListStyle = makeStyles();
  return /*#__PURE__*/React.createElement(View, {
    style: contactListStyle.container
  }, contacts === null || contacts === void 0 ? void 0 : contacts.map(contact => /*#__PURE__*/React.createElement(TouchableOpacity, {
    key: JSON.stringify(contact),
    onPress: () => onChange(contact)
  }, /*#__PURE__*/React.createElement(ContactItem, {
    contact: contact
  }))));
};
export * from './types';
//# sourceMappingURL=ContactList.js.map