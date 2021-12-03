import React from 'react';
export declare const LoadingInitial: {
  (): JSX.Element;
  Container: React.FC<{
    style?: import('react-native').ViewStyle | undefined;
  }>;
  Box: ({ children, style }: import('..').IBox) => JSX.Element;
  Loading: React.FC<{}>;
  Description: ({ children, style }: import('..').IDescription) => JSX.Element;
  InfoImage: ({ image }: import('..').IInfoImage) => JSX.Element;
};
