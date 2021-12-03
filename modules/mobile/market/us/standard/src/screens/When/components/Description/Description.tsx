import React from 'react';
import { Text } from 'react-native';
import { useTheme } from '../../../../context/hooks/useTheme';
import { makeStyles } from './styles';
import type { IDescription } from './types';

export const Description: React.FC<IDescription> = ({
  children,
  style,
  ...props
}) => {
  const theme = useTheme();

  const stylesDescription = makeStyles(theme);

  return (
    <Text style={[stylesDescription.text, style]} {...props}>
      {children}
    </Text>
  );
};
