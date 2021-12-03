const path = require('path');
const root = path.resolve(__dirname, '../..');
const {extraNodeModules} = require('./configMetro');

module.exports = {
  projectRoot: root,
  watchFolders: [root],
  transformer: {
    getTransformOptions: async () => ({
      transform: {
        experimentalImportSupport: false,
        inlineRequires: false,
      },
    }),
  },
  resolver: {
    extraNodeModules,
    useWatchman: true,
  },
};
