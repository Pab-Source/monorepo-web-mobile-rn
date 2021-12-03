import React from 'react';
import { Box, Description, InfoImage } from '..';
import { Button, Header, Container } from '../../../../components';
import { useNavigation } from '@react-navigation/native';
import { DescriptionTwo } from './components/DescriptionTwo/DescriptionTwo';
export const LoadingSuccess = _ref => {
  let {
    data
  } = _ref;
  const navigation = useNavigation();

  const handleNavigate = () => navigation.popToTop();

  return /*#__PURE__*/React.createElement(Container, {
    style: {
      justifyContent: 'space-between'
    }
  }, /*#__PURE__*/React.createElement(Header, {
    close: true,
    onPress: handleNavigate
  }), /*#__PURE__*/React.createElement(Box, null, /*#__PURE__*/React.createElement(Description, null, "Ok, we sent ", data.amount.value, " to ", '\n', data.payTo.name), /*#__PURE__*/React.createElement(DescriptionTwo, null, "You\u2019ll receive an email when the recipient accepts your payment.")), /*#__PURE__*/React.createElement(Box, null, /*#__PURE__*/React.createElement(InfoImage, {
    image: require('../../../../assets/success.png')
  })), /*#__PURE__*/React.createElement(Button, {
    style: {
      marginTop: 40
    },
    onPress: handleNavigate
  }, "Back to payments"));
};
export * from './types';
//# sourceMappingURL=LoadingSuccess.js.map