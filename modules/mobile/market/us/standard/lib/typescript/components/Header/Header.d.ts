import React from 'react';
import { ImageProps, ViewStyle } from 'react-native';
export interface IHeader {
  styleContainer?: ViewStyle;
  buttonProps?: ViewStyle;
  iconProps?: ImageProps;
  close?: boolean;
  onPress?: () => void;
}
export declare const Header: React.FC<IHeader>;
