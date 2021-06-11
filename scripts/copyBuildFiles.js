const { resolve, basename } = require('path');
var {
  existsSync,
  readFileSync,
  copyFileSync,
  writeFileSync,
  mkdirSync,
} = require('fs');

const libPath = resolve(__dirname, '../lib/');

if (!existsSync(libPath)) {
  mkdirSync(libPath);
}

const files = ['README.md', 'LICENSE'];

files.forEach((file) => {
  const filePath = resolve(libPath, basename(file));
  copyFileSync(file, filePath);
  console.log(`Copied ${file} to ${filePath}`);
});

const myArgs = process.argv.slice(2);
const isExternal = myArgs[0] === 'EXTERNAL';

if (isExternal) {
  const npmrcPath = resolve(libPath, '.npmrc');
  writeFileSync(npmrcPath, '//registry.npmjs.org/:_authToken=${NPM_TOKEN}');
  console.log(`Created .npmrc in ${npmrcPath}`);
}

const pkgjson = readFileSync(resolve(__dirname, '../package.json'), 'utf8');
const {
  name,
  groupId,
  author,
  version,
  publishConfig,
  description,
  keywords,
  repository,
  license,
  bugs,
  homepage,
  peerDependencies,
  dependencies,
  types,
  main,
} = JSON.parse(pkgjson);

const minimalPackage = {
  name,
  groupId,
  author,
  version,
  publishConfig: isExternal ? undefined : publishConfig,
  description,
  main,
  types,
  keywords,
  repository,
  license,
  bugs,
  homepage,
  peerDependencies,
  dependencies,
};

const pkgJsonPath = resolve(libPath, 'package.json');
const data = JSON.stringify(minimalPackage, undefined, 2);
writeFileSync(pkgJsonPath, data);
console.log(`Created package.json in ${pkgJsonPath}`);
