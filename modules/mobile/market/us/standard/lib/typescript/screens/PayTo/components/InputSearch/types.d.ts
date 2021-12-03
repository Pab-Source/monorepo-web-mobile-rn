import {
  ImageProps,
  ImageStyle,
  TextInputProps,
  ViewStyle,
} from 'react-native';
export interface IInputSearch {
  containerStyle?: ViewStyle;
  inputStyle?: ViewStyle;
  inputProps?: TextInputProps;
  iconProps?: ImageProps;
  iconStyle?: ImageStyle;
  onChange: (param: string) => void;
}
