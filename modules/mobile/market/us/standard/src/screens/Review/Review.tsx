import React from 'react';
import { View } from 'react-native';
import { Header, Container, Title, Button } from '../../components';
import { ContainerButtons, ContainerFields, Field, IField } from './components';
import { useTheme } from '../../context/hooks/useTheme';
import type { IReview } from './types';

export const Review = ({ route, navigation }: IReview) => {
  const fields: IField[] | any[] = Object.values({ ...route.params });
  const theme = useTheme();

  return (
    <Container>
      <View>
        <Header />
        <Title>Review</Title>
      </View>
      <ContainerFields>
        {fields?.map((field: IField) => (
          <Field
            key={JSON.stringify(field)}
            label={field.label}
            value={field.value}
          />
        ))}
      </ContainerFields>
      <ContainerButtons>
        <Button
          onPress={() => navigation.navigate('Alert', { ...route.params })}
        >
          Send payment
        </Button>
        <Button
          style={{
            marginTop: 10,
            backgroundColor: theme.backgroundColorCancel,
          }}
          styleText={{ color: theme.textColorCancel }}
          onPress={() => navigation.popToTop()}
        >
          Cancel
        </Button>
      </ContainerButtons>
    </Container>
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
