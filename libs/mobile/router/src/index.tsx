import React from 'react';
import { View, Text } from 'react-native';

export interface IExampleComponent {}

export const ExampleComponent: React.FC<IExampleComponent> = () => {
  return (
    <View>
      <Text>Example component</Text>
    </View>
  );
};
