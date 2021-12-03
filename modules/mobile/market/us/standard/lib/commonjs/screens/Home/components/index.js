'use strict';

Object.defineProperty(exports, '__esModule', {
  value: true,
});

var _PaySomeone = require('./PaySomeone/PaySomeone');

Object.keys(_PaySomeone).forEach(function (key) {
  if (key === 'default' || key === '__esModule') return;
  if (key in exports && exports[key] === _PaySomeone[key]) return;
  Object.defineProperty(exports, key, {
    enumerable: true,
    get: function () {
      return _PaySomeone[key];
    },
  });
});
//# sourceMappingURL=index.js.map
