import React from 'react';
import type { IAmount } from './types';
export declare const Amount: {
  ({ navigation, route }: IAmount): JSX.Element;
  Container: React.FC<{
    style?: import('react-native').ViewStyle | undefined;
  }>;
  Header: React.FC<import('../../components').IHeader>;
  Box: React.FC<{}>;
  FirstElement: React.FC<{}>;
  Title: React.FC<import('../../components').ITitle>;
  InputMask: React.FC<import('./components/InputMask/types').IInputMask>;
  Button: ({
    children,
    disabled,
    onPress,
    style,
    styleText,
    ...props
  }: import('../../components').IButton) => JSX.Element;
};
export * from './types';
