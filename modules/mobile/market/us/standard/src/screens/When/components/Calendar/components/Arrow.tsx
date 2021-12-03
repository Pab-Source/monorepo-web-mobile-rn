import React from 'react';
import { Image } from 'react-native';
import { makeStyles } from './styles';

export interface IArrow {
  direction: 'right' | 'left';
}

export const Arrow: React.FC<IArrow> = ({ direction }) => {
  const styles = makeStyles();

  return direction === 'right' ? (
    <Image
      source={require('../../../../../assets/Vector.png')}
      style={styles.icon}
    />
  ) : (
    <Image source={require('../../../../../assets/Vector.png')} />
  );
};
