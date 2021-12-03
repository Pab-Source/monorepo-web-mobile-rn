import React from 'react';
import { NavigationProp, useNavigation } from '@react-navigation/core';
import {
  Image,
  ImageProps,
  TouchableOpacity,
  View,
  ViewStyle,
} from 'react-native';

import { makeStyles } from './styles';
import type { RootStackParamList } from '../../types';

export interface IHeader {
  styleContainer?: ViewStyle;
  buttonProps?: ViewStyle;
  iconProps?: ImageProps;
  close?: boolean;
  onPress?: () => void;
}

export const Header: React.FC<IHeader> = ({
  styleContainer = {},
  buttonProps = {},
  iconProps = {},
  onPress,
  close = false,
  ...props
}): JSX.Element => {
  const navigation = useNavigation<NavigationProp<RootStackParamList>>();

  const headerStyles = makeStyles();

  return (
    <View
      {...props}
      style={[
        headerStyles.container,
        styleContainer,
        close ? { alignItems: 'flex-end' } : {},
      ]}
    >
      {close ? (
        <TouchableOpacity
          onPress={onPress ? onPress : () => navigation.goBack()}
        >
          <Image {...iconProps} source={require('../../assets/close.png')} />
        </TouchableOpacity>
      ) : (
        <TouchableOpacity
          onPress={onPress ? onPress : () => navigation.goBack()}
          {...buttonProps}
        >
          <Image {...iconProps} source={require('../../assets/Vector.png')} />
        </TouchableOpacity>
      )}
    </View>
  );
};
