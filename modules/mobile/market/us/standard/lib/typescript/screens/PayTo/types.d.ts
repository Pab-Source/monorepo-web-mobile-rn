import { NativeStackNavigationProp } from '@react-navigation/native-stack';
import { RootStackParamList } from '../../types';
export interface IPayTo {
    contactList: {
        name: string;
        phone: string;
    }[];
    navigation: NativeStackNavigationProp<RootStackParamList, 'PayTo'>;
}
