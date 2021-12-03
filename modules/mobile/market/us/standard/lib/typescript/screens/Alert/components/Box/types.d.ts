import { ReactNode } from 'react';
import { ViewStyle } from 'react-native';
export interface IBox {
    style?: ViewStyle;
    children: ReactNode;
}
