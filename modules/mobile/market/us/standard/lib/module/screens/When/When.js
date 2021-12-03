import React, { useState } from 'react';
import { View } from 'react-native';
import { Calendar, Description } from './components';
import { Header, Title, Button, Container } from '../../components';
export const When = _ref => {
  let {
    navigation,
    route,
    goTo = 'Review'
  } = _ref;
  const [actualDate, setActualDate] = useState('');

  const handleNavigate = () => {
    navigation.navigate(goTo, { ...route.params,
      when: {
        label: 'When',
        value: actualDate
      }
    });
  };

  return /*#__PURE__*/React.createElement(Container, {
    style: {
      flex: 1,
      justifyContent: 'space-between'
    }
  }, /*#__PURE__*/React.createElement(View, null, /*#__PURE__*/React.createElement(Header, null), /*#__PURE__*/React.createElement(Title, null, "When"), /*#__PURE__*/React.createElement(Description, null, "Choose date")), /*#__PURE__*/React.createElement(Calendar, {
    onChange: date => setActualDate(date)
  }), /*#__PURE__*/React.createElement(Button, {
    disabled: !actualDate,
    onPress: handleNavigate,
    style: {
      marginTop: 40
    }
  }, "Continue"));
};
When.Container = Container;
When.Header = Header;
When.Title = Title;
When.Description = Description;
When.Calendar = Calendar;
When.Button = Button;
export * from './types';
//# sourceMappingURL=When.js.map