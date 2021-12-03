import React from 'react';
import { View } from 'react-native';
import { makeStyles } from './styles';

export const Box: React.FC = ({ children }) => {
  const boxStyles = makeStyles();

  return <View style={boxStyles.container}>{children}</View>;
};
