import React, { useState } from 'react';
import { Header, Title, Button, Container } from '../../components';
import { InputMask, Box, FirstElement } from './components';
import type { IAmount } from './types';

export const Amount = ({ navigation, route }: IAmount) => {
  const [actualAmount, setActualAmount] = useState<string>('');

  const handleChange = (value: string) => setActualAmount(value);

  const handleNavigate = () => {
    navigation.navigate('When', {
      ...route.params,
      amount: { label: 'Amount', value: `$${actualAmount}` },
    });
  };

  return (
    <Container style={{ flex: 1 }}>
      <Header />
      <Box>
        <FirstElement>
          <Title>Amount</Title>
          <InputMask onChange={handleChange} />
        </FirstElement>
        <Button disabled={!actualAmount} onPress={handleNavigate}>
          Continue
        </Button>
      </Box>
    </Container>
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
