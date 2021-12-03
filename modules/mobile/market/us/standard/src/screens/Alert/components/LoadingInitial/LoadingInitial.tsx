import React from 'react';
import { Description, InfoImage, Box, Loading } from '..';
import { Container } from '../../../../components';

export const LoadingInitial = () => {
  return (
    <Container style={{ justifyContent: 'center' }}>
      <Box>
        <Loading />
        <Description>One second, we are sending your payment...</Description>
      </Box>
      <Box style={{ marginTop: 74 }}>
        <InfoImage image={require('../../../../assets/one-second.png')} />
      </Box>
    </Container>
  );
};

LoadingInitial.Container = Container;
LoadingInitial.Box = Box;
LoadingInitial.Loading = Loading;
LoadingInitial.Description = Description;
LoadingInitial.InfoImage = InfoImage;
