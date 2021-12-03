import React from 'react';
import { Text, View } from 'react-native';
import { useTheme } from '../../../../context/hooks/useTheme';
import { makeStyles } from './styles';
export const ContactItem = (_ref) => {
  let { contact } = _ref;
  const theme = useTheme();
  const contactItemStyle = makeStyles(theme);
  const { name, phone } = contact;
  const initials = name.split(' ').reduce((acc, _ref2) => {
    let [firstLetter] = _ref2;
    return acc + firstLetter;
  }, '');
  return /*#__PURE__*/ React.createElement(
    View,
    {
      style: contactItemStyle.container,
    },
    /*#__PURE__*/ React.createElement(
      View,
      {
        style: contactItemStyle.badgeInitials,
      },
      /*#__PURE__*/ React.createElement(
        Text,
        {
          style: contactItemStyle.textInitials,
        },
        initials
      )
    ),
    /*#__PURE__*/ React.createElement(
      View,
      {
        style: contactItemStyle.contactBody,
      },
      /*#__PURE__*/ React.createElement(
        Text,
        {
          style: contactItemStyle.name,
        },
        name
      ),
      /*#__PURE__*/ React.createElement(
        Text,
        {
          style: contactItemStyle.phone,
        },
        'Tel. ',
        phone
      )
    )
  );
};
export * from './types';
//# sourceMappingURL=ContactItem.js.map
