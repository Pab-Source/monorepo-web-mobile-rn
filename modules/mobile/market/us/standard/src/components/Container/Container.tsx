import React from 'react';
import { ScrollView, ViewStyle } from 'react-native';
import { makeStyles } from './styles';
import { useTheme } from '../../context/hooks/useTheme';

export const Container: React.FC<{ style?: ViewStyle }> = ({
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
