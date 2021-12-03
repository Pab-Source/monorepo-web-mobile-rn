import React from 'react';
import { View } from 'react-native';
import { makeStyles } from './styles';
import type { IBox } from './types';

export const Box = ({ children, style }: IBox) => {
  const boxStyles = makeStyles();

  return <View style={[boxStyles.container, style]}>{children}</View>;
};

export * from './types';
