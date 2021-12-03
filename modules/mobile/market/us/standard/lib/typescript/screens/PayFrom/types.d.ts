import { NavigationProp, RouteProp } from '@react-navigation/core';
import { RootStackParamList } from '../../types';
export declare type TlistAccounts = {
    accountCode: string;
    accountType: string;
    accountAmount: string;
};
export interface IPayFrom {
    navigation: NavigationProp<RootStackParamList>;
    route: RouteProp<RootStackParamList, 'PayFrom'>;
}
