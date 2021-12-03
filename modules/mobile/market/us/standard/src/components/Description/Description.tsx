import React from 'react';
import { Text, TextStyle } from 'react-native';
import { useTheme } from '../../context/hooks/useTheme';
import { makeStyles } from './styles';

export interface IDescription {
  style?: TextStyle;
}

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
