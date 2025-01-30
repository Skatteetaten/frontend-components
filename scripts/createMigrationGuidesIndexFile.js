const fs = require('fs');
const os = require('os');
const path = require('path');

function createIndexFile() {
  try {
    const endOfLine = os.EOL;
    const migrationGuidesPath = path.join(__dirname, `../src/migrations/`);
    const files = fs.readdirSync(migrationGuidesPath);
    const writeStream = fs.createWriteStream(`${migrationGuidesPath}index.tsx`);
    writeStream.write(
      `/* NB! Dette er en autogenerert fil, vennligst ikke gjør manuelle endringer i den.${endOfLine}`
    );
    writeStream.write(
      `   Kjør kommandonavn generate:migrationGuidesIndexFile for å generere exports. */${endOfLine}`
    );
    let arrayForExport = endOfLine;
    files.forEach(function (file) {
      if (file.indexOf('.md') > -1) {
        const name = file.replace('.md', '');
        const importStatement = `import ${name} from './${file}';${endOfLine}`;
        arrayForExport = `${arrayForExport}  ${name},${endOfLine}`;
        writeStream.write(importStatement);
      }
    });

    writeStream.write(
      `${endOfLine}export const MigrationGuides = [${arrayForExport}];${endOfLine}`
    );

    writeStream.end();
  } catch (err) {
    console.error(`createIndexFile feilet: ${err}`);
    throw err;
  }
}
console.log(
  'NOTE: Hvis komponenten fortsatt ikke vises som deprecated etter at den er tagget i jsdoc så kan den hardkodes i ComponentsListRenderer.jsx.'
);

createIndexFile('SystemIcons');
createIndexFile('ThemeIcons');
