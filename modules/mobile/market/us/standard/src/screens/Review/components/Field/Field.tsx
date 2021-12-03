import React from 'react';
import { View, Text } from 'react-native';
import { useTheme } from '../../../../context/hooks/useTheme';
import { makeStyles } from './styles';
import type { IField } from './types';

export const Field: React.FC<IField> = ({ label, value }) => {
  const theme = useTheme();

  const stylesField = makeStyles(theme);

  return (
    <View style={stylesField.container}>
      <Text style={stylesField.label}>{label}</Text>
      <Text style={stylesField.value}>{value}</Text>
    </View>
  );
};

export * from './types';
