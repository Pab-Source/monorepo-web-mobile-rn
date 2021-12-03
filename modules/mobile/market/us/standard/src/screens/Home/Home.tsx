import React from 'react';
import { PaySomeone } from './components';
import { Title, Container } from '../../components';

export const Home = (): JSX.Element => {
  return (
    <Container style={{ flex: 1 }}>
      <Title style={{ marginTop: 37 }}>Payments</Title>
      <PaySomeone>Pay someone</PaySomeone>
    </Container>
  );
};

Home.Container = Container;
Home.Title = Title;
Home.PaySomeone = PaySomeone;
