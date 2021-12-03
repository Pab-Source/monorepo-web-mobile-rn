import React, { useEffect, useState } from 'react';
import { NavigationProp, RouteProp } from '@react-navigation/core';
import { RootStackParamList } from '../../types';
import { LoadingInitial, LoadingSuccess } from './components';

console.disableYellowBox = true;

export interface IAlert {
  navigation: NavigationProp<RootStackParamList>;
  route: RouteProp<RootStackParamList, 'Alert'>;
}

export const Alert: React.FC<IAlert> = ({ route }) => {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    setTimeout(() => {
      setLoading(false);
    }, 3000);
  }, []);

  if (loading) {
    return <LoadingInitial />;
  }

  return <LoadingSuccess data={route.params} />;
};
