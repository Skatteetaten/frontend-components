#!/usr/bin/env node

const fs = require('fs');
const fetch = require('node-fetch');
const { v4: uuidv4 } = require('uuid');
const dataDev = require('./importmap.json');
const dataProd = require('./importmap-prod.json');
const dataInternalDev = require('./importmap-internal.json');
const dataInternalProd = require('./importmap-internal-prod.json');
const destDir = process.argv[2] ?? 'build';
const packageJsonPath = process.argv[3] ?? require.resolve('../../../package.json');
const packageJson = require(packageJsonPath);

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

const findOwnVersion = () => {
  const base = process.env.REACT_APP_BUILD_VERSION
    ? process.env.REACT_APP_BUILD_VERSION
    : packageJson.version;
  const hash = uuidv4();

  return base.includes('SNAPSHOT') ? `${base}-${hash}` : base;
}

const ownVersion = findOwnVersion();

const replaceImportVersions = (importMap) => {
  Object.keys(importMap).forEach((external) => {
    if (external === '@skatteetaten/frontend-components') {
      importMap[external] = importMap[external].replace(
        '<replace>',
        ownVersion)
    } else {
      importMap[external] = importMap[external].replace(
        '<replace>',
        findDependencyVersion(external)
      );
    }
  });
};

const writeDependencies = async (data, path) => {
  for (const [key, value] of Object.entries(data.imports)) {
    if (!value.includes('frontend-components')) {
      const basePath = `${destDir}/umd/${path}`;
      const itemPath = `${basePath}/${key}/${
        value
          .split('@')[1]
      }`;
      const makePath = itemPath.substring(0, itemPath.lastIndexOf('/'));

      writeDependencyFromUrl(makePath, itemPath, value);
    } else {
      if (value.includes('development')) {
        writeDependencyFromFile(`${destDir}${dataInternalDev.imports[key]}`, 'development');
      } else {
        writeDependencyFromFile(`${destDir}${dataInternalProd.imports[key]}`, 'production');
      }
    }
  }
};

const writeDependencyFromUrl = async (makePath, itemPath, value) => {
  if (!fs.existsSync(makePath)) fs.mkdirSync(makePath, { recursive: true });

  try {
    const file = fs.createWriteStream(itemPath);
    const data = await fetch(value);

    data.body.pipe(file);
  } catch (error) {
    console.log(error);
    return error;
  }
}

const writeDependencyFromFile = async (itemPath, sub) => {
  const makePath = itemPath.substring(0, itemPath.lastIndexOf('/'));

  if (!fs.existsSync(makePath)) fs.mkdirSync(makePath, { recursive: true });

  fs.copyFileSync(`${destDir}/umd/index.${sub}.js`, itemPath);
}

const writeImportmap = (mapsPath, data, path) => {
  const dataAsString = JSON.stringify(data, null, 2);

  fs.writeFile(
    `${mapsPath}/${path}.json`,
    dataAsString,
    { flag: 'w' },
    (err) => {
      if (err) return console.log(err);
    }
  );
};

const writeImportmaps = () => {
  const importMapsPath = `${destDir}/umd/importmaps/frontend-components`;

  if (!fs.existsSync(importMapsPath)) fs.mkdirSync(importMapsPath, { recursive: true });

  writeImportmap(importMapsPath, dataDev, 'importmap.json');
  writeImportmap(importMapsPath, dataProd, 'importmap-prod.json');
  writeImportmap(importMapsPath, dataInternalDev, 'importmap-internal.json');
  writeImportmap(importMapsPath, dataInternalProd, 'importmap-internal-prod.json');
};

const write = async () => {
  fs.rmSync(`${destDir}/umd/deps`, { recursive: true, force: true });
  fs.rmSync(`${destDir}/umd/importmaps`, { recursive: true, force: true });

  replaceImportVersions(dataDev.imports);
  replaceImportVersions(dataProd.imports);
  replaceImportVersions(dataInternalDev.imports);
  replaceImportVersions(dataInternalProd.imports);

  writeImportmaps();

  await writeDependencies(dataDev, 'deps/dev');
  await writeDependencies(dataProd, 'deps');
};

write().catch((error) => {
  console.error(error);
}).then(() => {
  console.log('Import maps complete!');
});
