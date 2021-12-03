import React from 'react';
import { PaySomeone } from './components';
import { Title, Container } from '../../components';
export const Home = () => {
  return /*#__PURE__*/ React.createElement(
    Container,
    {
      style: {
        flex: 1,
      },
    },
    /*#__PURE__*/ React.createElement(
      Title,
      {
        style: {
          marginTop: 37,
        },
      },
      'Payments'
    ),
    /*#__PURE__*/ React.createElement(PaySomeone, null, 'Pay someone')
  );
};
Home.Container = Container;
Home.Title = Title;
Home.PaySomeone = PaySomeone;
//# sourceMappingURL=Home.js.map
