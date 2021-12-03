const path = require('path');
const modules = require('./modules');
const libs = require('./libs');
const shared = require('./shared');

const root = path.resolve(__dirname, '../../..');

const mergedModules = [...modules, ...libs, ...shared]
  .sort()
  .filter(
    (m, i, self) => self.lastIndexOf(m) === i && !String(m).startsWith(''),
  );

const extraNodeModules = mergedModules.reduce((acc, name) => {
  acc[name] = path.join(root, 'node_modules', JSON.stringify(name));
  return acc;
}, {});

module.exports = {
  extraNodeModules,
};
