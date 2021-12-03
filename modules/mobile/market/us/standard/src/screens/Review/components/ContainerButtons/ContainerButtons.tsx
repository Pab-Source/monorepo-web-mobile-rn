import React from 'react';
import { View } from 'react-native';
import { makeStyles } from './styles';
import type { IContainerButtons } from './types';

export const ContainerButtons = ({ children, style }: IContainerButtons) => {
  const containerButtonsStyle = makeStyles();

  return (
    <View style={[containerButtonsStyle.container, style]}>{children}</View>
  );
};

export * from './types';
