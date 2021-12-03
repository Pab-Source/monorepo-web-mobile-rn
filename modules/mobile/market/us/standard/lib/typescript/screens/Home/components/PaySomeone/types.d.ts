import { TextStyle } from 'react-native';
import { ViewStyle } from 'react-native';
export interface IPaySomeone {
    styleContainer?: ViewStyle;
    styleText?: TextStyle;
    onPress?: () => void;
}
