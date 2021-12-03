import { NavigationProp, RouteProp } from '@react-navigation/core';
import { RootStackParamList } from '../../types';
export interface IAmount {
    navigation: NavigationProp<RootStackParamList>;
    route: RouteProp<RootStackParamList, 'Amount'>;
}
