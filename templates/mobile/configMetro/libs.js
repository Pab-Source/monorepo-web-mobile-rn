const fs = require('fs');
const path = require('path');

const root = path.resolve(__dirname, '../../..');

const libsPath = path.resolve(root, 'libs/mobile');

const libs = fs
  .readdirSync(libsPath)
  .map(p => {
    return path.join(libsPath, p);
  })
  .filter(
    p =>
      fs.statSync(p).isDirectory() &&
      fs.existsSync(path.join(p, 'package.json')),
  );

module.exports = libs;
