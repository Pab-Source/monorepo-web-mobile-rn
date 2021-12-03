import React from 'react';
import type { IWhen } from './types';
export declare const When: {
  ({ navigation, route, goTo }: IWhen): JSX.Element;
  Container: React.FC<{
    style?: import('react-native').ViewStyle | undefined;
  }>;
  Header: React.FC<import('../../components').IHeader>;
  Title: React.FC<import('../../components').ITitle>;
  Description: React.FC<import('./components/Description/types').IDescription>;
  Calendar: React.FC<import('./components').ICalendar>;
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
