import React, { useEffect, useState } from 'react';
import { LoadingInitial, LoadingSuccess } from './components';
console.disableYellowBox = true;
export const Alert = (_ref) => {
  let { route } = _ref;
  const [loading, setLoading] = useState(true);
  useEffect(() => {
    setTimeout(() => {
      setLoading(false);
    }, 3000);
  }, []);

  if (loading) {
    return /*#__PURE__*/ React.createElement(LoadingInitial, null);
  }

  return /*#__PURE__*/ React.createElement(LoadingSuccess, {
    data: route.params,
  });
};
//# sourceMappingURL=Alert.js.map
