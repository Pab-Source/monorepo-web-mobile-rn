const fs = require('fs');
const path = require('path');

const root = path.resolve(__dirname, '../../..');

const modulesPath = path.resolve(root, 'modules/mobile');

const modules = fs
  .readdirSync(modulesPath)
  .map(p => path.join(modulesPath, p))
  .filter(
    p =>
      fs.statSync(p).isDirectory() &&
      fs.existsSync(path.join(p, 'package.json')),
  );

module.exports = modules;
