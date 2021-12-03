import React from 'react';
import { ScrollView } from 'react-native';
import { useTheme } from '../../../../context/hooks/useTheme';
import { makeStyles } from './styles';
import type { IContainer } from './types';

export const Container: React.FC<IContainer> = ({
  children,
  style,
  ...props
}) => {
  const theme = useTheme();

  const containerStyles = makeStyles(theme);

  return (
    <ScrollView
      contentContainerStyle={[containerStyles.container, style]}
      {...props}
    >
      {children}
    </ScrollView>
  );
};
