/// <reference types="react" />
import { TextStyle, ViewStyle } from 'react-native';
export interface IButton {
  disabled?: boolean;
  onPress: () => void;
  style?: ViewStyle;
  styleText?: TextStyle;
  children?: any;
}
export declare const Button: ({
  children,
  disabled,
  onPress,
  style,
  styleText,
  ...props
}: IButton) => JSX.Element;
