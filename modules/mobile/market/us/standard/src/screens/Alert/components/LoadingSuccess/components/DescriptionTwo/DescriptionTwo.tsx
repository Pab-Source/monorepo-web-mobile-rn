import React from 'react';
import { Description } from '../../../../../../components';
import { useTheme } from '../../../../../../context/hooks/useTheme';

export const DescriptionTwo: React.FC = ({ children }) => {
  const theme = useTheme();
  return (
    <Description
      style={{
        color: theme.loadingSecondaryDescriptionColor,
        fontSize: 16,
        fontWeight: 'normal',
      }}
    >
      {children}
    </Description>
  );
};
