import React from 'react';
import { View } from 'react-native';
import { Header, Container, Title, Button } from '../../components';
import { ContainerButtons, ContainerFields, Field } from './components';
import { useTheme } from '../../context/hooks/useTheme';
export const Review = (_ref) => {
  let { route, navigation } = _ref;
  const fields = Object.values({ ...route.params });
  const theme = useTheme();
  return /*#__PURE__*/ React.createElement(
    Container,
    null,
    /*#__PURE__*/ React.createElement(
      View,
      null,
      /*#__PURE__*/ React.createElement(Header, null),
      /*#__PURE__*/ React.createElement(Title, null, 'Review')
    ),
    /*#__PURE__*/ React.createElement(
      ContainerFields,
      null,
      fields === null || fields === void 0
        ? void 0
        : fields.map((field) =>
            /*#__PURE__*/ React.createElement(Field, {
              key: JSON.stringify(field),
              label: field.label,
              value: field.value,
            })
          )
    ),
    /*#__PURE__*/ React.createElement(
      ContainerButtons,
      null,
      /*#__PURE__*/ React.createElement(
        Button,
        {
          onPress: () => navigation.navigate('Alert', { ...route.params }),
        },
        'Send payment'
      ),
      /*#__PURE__*/ React.createElement(
        Button,
        {
          style: {
            marginTop: 10,
            backgroundColor: theme.backgroundColorCancel,
          },
          styleText: {
            color: theme.textColorCancel,
          },
          onPress: () => navigation.popToTop(),
        },
        'Cancel'
      )
    )
  );
};
Review.Container = Container;
Review.Header = Header;
Review.Title = Title;
Review.ContainerFields = ContainerFields;
Review.Field = Field;
Review.ContainerButtons = ContainerButtons;
Review.Button = Button;
export * from './types';
//# sourceMappingURL=Review.js.map
