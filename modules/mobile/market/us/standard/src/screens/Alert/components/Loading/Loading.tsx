import React from 'react';
import { ActivityIndicator } from 'react-native';
import { useTheme } from '../../../../context/hooks/useTheme';

export const Loading: React.FC = (): JSX.Element => {
  const theme = useTheme();

  return <ActivityIndicator color={theme.loadingColor} size="large" />;
};
