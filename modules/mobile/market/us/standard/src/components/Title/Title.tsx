import React from 'react';
import { Text, TextStyle } from 'react-native';
import { useTheme } from '../../context/hooks/useTheme';
import { makeStyles } from './styles';

export interface ITitle {
  style?: TextStyle;
}

export const Title: React.FC<ITitle> = ({ children, style, ...props }) => {
  const theme = useTheme();

  const titleStyles = makeStyles(theme);

  return (
    <Text {...props} style={[titleStyles.text, style]}>
      {children}
    </Text>
  );
};
