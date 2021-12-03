import React, { useState } from 'react';
import { Header, Title, Button, Container } from '../../components';
import { InputMask, Box, FirstElement } from './components';
export const Amount = (_ref) => {
  let { navigation, route } = _ref;
  const [actualAmount, setActualAmount] = useState('');

  const handleChange = (value) => setActualAmount(value);

  const handleNavigate = () => {
    navigation.navigate('When', {
      ...route.params,
      amount: {
        label: 'Amount',
        value: `$${actualAmount}`,
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
    /*#__PURE__*/ React.createElement(
      Box,
      null,
      /*#__PURE__*/ React.createElement(
        FirstElement,
        null,
        /*#__PURE__*/ React.createElement(Title, null, 'Amount'),
        /*#__PURE__*/ React.createElement(InputMask, {
          onChange: handleChange,
        })
      ),
      /*#__PURE__*/ React.createElement(
        Button,
        {
          disabled: !actualAmount,
          onPress: handleNavigate,
        },
        'Continue'
      )
    )
  );
};
Amount.Container = Container;
Amount.Header = Header;
Amount.Box = Box;
Amount.FirstElement = FirstElement;
Amount.Title = Title;
Amount.InputMask = InputMask;
Amount.Button = Button;
export * from './types';
//# sourceMappingURL=Amount.js.map
