import React from 'react';
import { Image } from 'react-native';
import type { IInfoImage } from './types';

export const InfoImage = ({ image }: IInfoImage) => <Image source={image} />;

export * from './types';
