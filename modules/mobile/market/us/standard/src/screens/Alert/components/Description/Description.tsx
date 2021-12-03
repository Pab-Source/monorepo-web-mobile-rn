import React from 'react';
import { Text } from 'react-native';
import { useTheme } from '../../../../context/hooks/useTheme';
import { makeStyles } from './styles';
import type { IDescription } from './types';

export const Description = ({ children, style }: IDescription) => {
  const theme = useTheme();

  const descriptionStyles = makeStyles(theme);

  return <Text style={[descriptionStyles.text, style]}>{children}</Text>;
};

export * from './types';
