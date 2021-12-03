import { NavigationProp, RouteProp } from '@react-navigation/core';
import { RootStackParamList, Screens } from '../../types';
export interface IWhen {
  navigation: NavigationProp<RootStackParamList>;
  route: RouteProp<RootStackParamList, 'When'>;
  goTo: Screens;
}
