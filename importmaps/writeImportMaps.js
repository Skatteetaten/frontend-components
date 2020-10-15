const fs = require('fs');
const util = require('util');
const debugLogger = util.debuglog('importmaps');
const dataDev = require('./importmap.json');
const dataProd = require('./importmap-prod.json');
const packageJson = require('../package.json');

const findDependencyVersion = (dependency) => {
  if (packageJson.dependencies[dependency]) {
    return packageJson.dependencies[dependency];
  } else if (packageJson.devDependencies[dependency]) {
    return packageJson.devDependencies[dependency];
  } else if (packageJson.peerDependencies[dependency]) {
    return packageJson.peerDependencies[dependency];
  } else {
    throw Error(`No dependency by name: ${dependency}!`);
  }
};

const findOwnVersion = () =>
  process.env.version
    ? process.env.REACT_APP_BUILD_VERSION
    : packageJson.version;

const replaceImportVersions = (importMap) => {
  Object.keys(importMap).forEach((external) => {
    if (external === '@skatteetaten/frontend-components') {
      importMap[external] = importMap[external].replace(
        '<replace>',
        findOwnVersion()
      );
    } else {
      importMap[external] = importMap[external].replace(
        '<replace>',
        findDependencyVersion(external)
      );
    }
  });
};

const write = () => {
  replaceImportVersions(dataDev.imports);
  replaceImportVersions(dataProd.imports);

  const devPath = 'lib/umd';
  const prodPath = 'lib/umd';
  const devMapAsString = JSON.stringify(dataDev, null, 2);
  const prodMapAsString = JSON.stringify(dataProd, null, 2);

  if (!fs.existsSync(devPath)) fs.mkdirSync(devPath, { recursive: true });
  if (!fs.existsSync(prodPath)) fs.mkdirSync(prodPath, { recursive: true });

  fs.writeFile(
    `${devPath}/importmap.json`,
    devMapAsString,
    { flag: 'w' },
    (err) => {
      if (err) return console.log(err);

      debugLogger(`Wrote dev importmap: ${devMapAsString}`);
    }
  );
  fs.writeFile(
    `${prodPath}/importmap-prod.json`,
    prodMapAsString,
    { flag: 'w' },
    (err) => {
      if (err) return console.log(err);

      debugLogger(`Wrote prod importmap: ${prodMapAsString}`);
    }
  );
};

write();
