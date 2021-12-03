import React from 'react';
import { Box, Description, InfoImage } from '..';
import { Button, Header, Container } from '../../../../components';
import { useNavigation } from '@react-navigation/native';
import { DescriptionTwo } from './components/DescriptionTwo/DescriptionTwo';
import { NativeStackNavigationProp } from '@react-navigation/native-stack';
import { RootStackParamList } from '../../../../types';
import type { ILoadingSuccess } from './types';

export const LoadingSuccess = ({ data }: ILoadingSuccess) => {
  const navigation =
    useNavigation<NativeStackNavigationProp<RootStackParamList>>();

  const handleNavigate = () => navigation.popToTop();

  return (
    <Container style={{ justifyContent: 'space-between' }}>
      <Header close onPress={handleNavigate} />
      <Box>
        <Description>
          Ok, we sent {data.amount.value} to {'\n'}
          {data.payTo.name}
        </Description>
        <DescriptionTwo>
          You’ll receive an email when the recipient accepts your payment.
        </DescriptionTwo>
      </Box>
      <Box>
        <InfoImage image={require('../../../../assets/success.png')} />
      </Box>
      <Button style={{ marginTop: 40 }} onPress={handleNavigate}>
        Back to payments
      </Button>
    </Container>
  );
};

export * from './types';
