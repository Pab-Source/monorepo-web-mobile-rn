import React from 'react';
import { NavigationProp, RouteProp } from '@react-navigation/core';
import { RootStackParamList } from '../../types';
export interface IAlert {
    navigation: NavigationProp<RootStackParamList>;
    route: RouteProp<RootStackParamList, 'Alert'>;
}
export declare const Alert: React.FC<IAlert>;
