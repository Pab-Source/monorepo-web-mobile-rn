'use strict';

Object.defineProperty(exports, '__esModule', {
  value: true,
});

var _InputSearch = require('./InputSearch/InputSearch');

Object.keys(_InputSearch).forEach(function (key) {
  if (key === 'default' || key === '__esModule') return;
  if (key in exports && exports[key] === _InputSearch[key]) return;
  Object.defineProperty(exports, key, {
    enumerable: true,
    get: function () {
      return _InputSearch[key];
    },
  });
});

var _ContactList = require('./ContactList/ContactList');

Object.keys(_ContactList).forEach(function (key) {
  if (key === 'default' || key === '__esModule') return;
  if (key in exports && exports[key] === _ContactList[key]) return;
  Object.defineProperty(exports, key, {
    enumerable: true,
    get: function () {
      return _ContactList[key];
    },
  });
});

var _ContactItem = require('./ContactItem/ContactItem');

Object.keys(_ContactItem).forEach(function (key) {
  if (key === 'default' || key === '__esModule') return;
  if (key in exports && exports[key] === _ContactItem[key]) return;
  Object.defineProperty(exports, key, {
    enumerable: true,
    get: function () {
      return _ContactItem[key];
    },
  });
});
//# sourceMappingURL=index.js.map
