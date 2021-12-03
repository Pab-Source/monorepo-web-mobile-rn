import React, { useState } from 'react';
import { View } from 'react-native';
import { Calendar, Description } from './components';
import { Header, Title, Button, Container } from '../../components';
import type { IWhen } from './types';

export const When = ({ navigation, route, goTo = 'Review' }: IWhen) => {
  const [actualDate, setActualDate] = useState('');

  const handleNavigate = () => {
    navigation.navigate(goTo, {
      ...route.params,
      when: { label: 'When', value: actualDate },
    });
  };

  return (
    <Container style={{ flex: 1, justifyContent: 'space-between' }}>
      <View>
        <Header />
        <Title>When</Title>
        <Description>Choose date</Description>
      </View>
      <Calendar onChange={(date) => setActualDate(date)} />
      <Button
        disabled={!actualDate}
        onPress={handleNavigate}
        style={{ marginTop: 40 }}
      >
        Continue
      </Button>
    </Container>
  );
};

When.Container = Container;
When.Header = Header;
When.Title = Title;
When.Description = Description;
When.Calendar = Calendar;
When.Button = Button;

export * from './types';
