import React from 'react';
import { Image } from 'react-native';
import { makeStyles } from './styles';
export const Arrow = (_ref) => {
  let { direction } = _ref;
  const styles = makeStyles();
  return direction === 'right'
    ? /*#__PURE__*/ React.createElement(Image, {
        source: require('../../../../../assets/Vector.png'),
        style: styles.icon,
      })
    : /*#__PURE__*/ React.createElement(Image, {
        source: require('../../../../../assets/Vector.png'),
      });
};
//# sourceMappingURL=Arrow.js.map
