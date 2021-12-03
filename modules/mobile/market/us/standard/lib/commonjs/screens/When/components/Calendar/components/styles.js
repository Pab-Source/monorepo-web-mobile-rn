'use strict';

Object.defineProperty(exports, '__esModule', {
  value: true,
});
exports.makeStyles = void 0;

var _reactNative = require('react-native');

const makeStyles = () =>
  _reactNative.StyleSheet.create({
    icon: {
      transform: [
        {
          rotateZ: '180deg',
        },
      ],
    },
  });

exports.makeStyles = makeStyles;
//# sourceMappingURL=styles.js.map
