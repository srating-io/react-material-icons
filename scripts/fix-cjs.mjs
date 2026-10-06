import fs from 'node:fs';
import path from 'node:path';

const distCjs = path.resolve('dist/cjs');

if (!fs.existsSync(distCjs)) {
  fs.mkdirSync(distCjs, { recursive: true });
}

// Ensure CJS package.json exists
fs.writeFileSync(path.join(distCjs, 'package.json'), JSON.stringify({ type: 'commonjs' }) + '\n');

// Read manifest to get all component names
const manifest = JSON.parse(fs.readFileSync('src/utils/manifest.json', 'utf8'));
const allNames = [...new Set(Object.values(manifest).flat())];

// Write lazy CJS barrel
const cjsIndexLines = [
  '"use strict";',
  'Object.defineProperty(exports, "__esModule", { value: true });',
  'const { createIcon } = require("./utils/Icon.js");',
  'exports.createIcon = createIcon;',
  ...allNames.map(
    (name) =>
      `Object.defineProperty(exports, "${name}", { enumerable: true, configurable: true, get: () => require("./${name}.js").${name} });`
  ),
  '',
];

fs.writeFileSync(path.join(distCjs, 'index.js'), cjsIndexLines.join('\n'), 'utf8');
console.log(`Generated lazy CJS index with ${allNames.length} getters in dist/cjs/index.js`);
