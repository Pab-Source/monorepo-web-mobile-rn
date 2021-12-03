const fs = require('fs');
const path = require('path');

const root = path.resolve(__dirname, '../../..');

const sharedPath = path.resolve(root, 'libs/shared');

const shared = fs
  .readdirSync(sharedPath)
  .map(p => path.join(sharedPath, p))
  .filter(
    p =>
      fs.statSync(p).isDirectory() &&
      fs.existsSync(path.join(p, 'package.json')),
  );

module.exports = shared;
