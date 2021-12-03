import { RouteProp } from '@react-navigation/core';
import { NativeStackNavigationProp } from '@react-navigation/native-stack';
import { RootStackParamList } from '../../types';
export interface IReview {
    navigation: NativeStackNavigationProp<RootStackParamList>;
    route: RouteProp<RootStackParamList, 'Review'>;
}
