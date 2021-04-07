const fs = require('fs');
const path = require('path');
const https = require('https');
const util = require('util');
const debugLogger = util.debuglog('importmaps');
const dataDev = require('./importmap.json');
const dataProd = require('./importmap-prod.json');
const dataInternalDev = require('./importmap-internal.json');
const dataInternalProd = require('./importmap-internal-prod.json');
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
  process.env.REACT_APP_BUILD_VERSION
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

const writeDependencies = (data, path) => {
  for (const [key, value] of Object.entries(data.imports)) {
    if (!value.includes('frontend-components')) {
      const basePath = `lib/umd/${path}`;
      const itemPath = `${basePath}/${key}/${value.split('@')[1].split(/\/(.+)/)[1]}`
      const makePath = itemPath.substring(0, itemPath.lastIndexOf("\/"));

      if (!fs.existsSync(makePath)) fs.mkdirSync(makePath, { recursive: true });

      const file = fs.createWriteStream(itemPath);
      const request = https.get(value, function(response) {
        response.pipe(file);
      });
    }
  };
};

const write = () => {
  replaceImportVersions(dataDev.imports);
  replaceImportVersions(dataProd.imports);

  process.env["NODE_TLS_REJECT_UNAUTHORIZED"] = 0;

  writeDependencies(dataDev, 'deps/dev');
  writeDependencies(dataProd, 'deps');

  process.env["NODE_TLS_REJECT_UNAUTHORIZED"] = 1;

  const devPath = 'lib/umd';
  const prodPath = 'lib/umd';
  const devInternalPath = 'lib/umd';
  const prodInternalPath = 'lib/umd';
  const devMapAsString = JSON.stringify(dataDev, null, 2);
  const prodMapAsString = JSON.stringify(dataProd, null, 2);
  const devInternalMapAsString = JSON.stringify(dataInternalDev, null, 2);
  const prodInternalMapAsString = JSON.stringify(dataInternalProd, null, 2);

  if (!fs.existsSync(devPath)) fs.mkdirSync(devPath, { recursive: true });
  if (!fs.existsSync(prodPath)) fs.mkdirSync(prodPath, { recursive: true });
  if (!fs.existsSync(devInternalPath)) fs.mkdirSync(devInternalPath, { recursive: true });
  if (!fs.existsSync(prodInternalPath)) fs.mkdirSync(prodInternalPath, { recursive: true });

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
  fs.writeFile(
    `${devPath}/importmap-internal.json`,
    devInternalMapAsString,
    { flag: 'w' },
    (err) => {
      if (err) return console.log(err);

      debugLogger(`Wrote dev-internal importmap: ${devMapAsString}`);
    }
  );
  fs.writeFile(
    `${prodPath}/importmap-internal-prod.json`,
    prodInternalMapAsString,
    { flag: 'w' },
    (err) => {
      if (err) return console.log(err);

      debugLogger(`Wrote prod-internal importmap: ${prodMapAsString}`);
    }
  );
};

write();
