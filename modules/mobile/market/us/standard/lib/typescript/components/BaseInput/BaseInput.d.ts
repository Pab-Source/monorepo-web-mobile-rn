import { FC } from 'react';
import { ViewStyle } from 'react-native';
export interface IBaseInput {
  onChange: (param: string) => void;
  style?: ViewStyle;
  placeholder?: string;
  bottomLabel?: string;
}
export declare const BaseInput: FC<IBaseInput>;
