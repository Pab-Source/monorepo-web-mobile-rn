import React from 'react';
import { IField } from './components';
import type { IReview } from './types';
export declare const Review: {
    ({ route, navigation }: IReview): JSX.Element;
    Container: React.FC<{
        style?: import("react-native").ViewStyle | undefined;
    }>;
    Header: React.FC<import("../../components").IHeader>;
    Title: React.FC<import("../../components").ITitle>;
    ContainerFields: React.FC<{
        style?: import("react-native").ViewStyle | undefined;
    }>;
    Field: React.FC<IField>;
    ContainerButtons: ({ children, style }: import("./components").IContainerButtons) => JSX.Element;
    Button: ({ children, disabled, onPress, style, styleText, ...props }: import("../../components").IButton) => JSX.Element;
};
export * from './types';
