import React from 'react';
import { ViewStyle, View } from 'react-native';
import { makeStyles } from './styles';

export const ContainerFields: React.FC<{ style?: ViewStyle }> = ({
  children,
  style,
}) => {
  const stylesContainerFields = makeStyles();

  return (
    <View style={[stylesContainerFields.container, style]}>{children}</View>
  );
};
