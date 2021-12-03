import React from 'react';
import { Description } from '../../../../../../components';
import { useTheme } from '../../../../../../context/hooks/useTheme';
export const DescriptionTwo = _ref => {
  let {
    children
  } = _ref;
  const theme = useTheme();
  return /*#__PURE__*/React.createElement(Description, {
    style: {
      color: theme.loadingSecondaryDescriptionColor,
      fontSize: 16,
      fontWeight: 'normal'
    }
  }, children);
};
//# sourceMappingURL=DescriptionTwo.js.map