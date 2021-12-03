import React, { FC } from 'react';
import { NavigationProp, useNavigation } from '@react-navigation/native';
import { useTheme } from '../../../../context/hooks/useTheme';
import { Image, Text, TouchableOpacity } from 'react-native';
import { makeStyles } from './styles';
import type { RootStackParamList } from '../../../../types';
import type { IPaySomeone } from './types';

export const PaySomeone: FC<IPaySomeone> = ({
  children,
  styleContainer = {},
  styleText = {},
  onPress,
  ...props
}) => {
  const theme = useTheme();

  const styles = makeStyles(theme);

  const navigation = useNavigation<NavigationProp<RootStackParamList>>();

  const validatePress = onPress ? onPress : () => navigation.navigate('PayTo');

  return (
    <TouchableOpacity
      onPress={validatePress}
      style={[styles.container, styleContainer]}
      {...props}
    >
      <Text style={[styles.text, styleText]}>
        <Image
          style={styles.arrow}
          source={require('../../../../assets/arrowRight.png')}
        />{' '}
        {children}
      </Text>
    </TouchableOpacity>
  );
};
