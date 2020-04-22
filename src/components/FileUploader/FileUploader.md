** FileUploader **

Komponenten er basert på at du sender inn sti til API. Dersom ikke dette skulle passe er det mulighet for å bruke uploadFile og kjøre en egendefinert funksjon.

```js
import React from 'react';
import FileUploader, {
  FileFormatTypes
} from '@skatteetaten/frontend-components/FileUploader';
const [files, setFiles] = React.useState([]);
const [spinner, setSpinner] = React.useState(false);

<div style={{ width: '300px' }}>
  <FileUploader
    addFileString={'Last opp fil'}
    label={'Last opp vedlegg'}
    help="Tekst som hjelper brukeren å fylle ut feltet."
    acceptedFileFormats={[
      FileFormatTypes.doc,
      FileFormatTypes.docx,
      FileFormatTypes.txt
    ]}
    files={files}
    uploadFile={file => {
      setSpinner(true);
      setTimeout(() => {
        const newList = [...files];
        newList.push(file);
        setFiles(newList);
        setSpinner(false);
      }, 2000);
    }}
    deleteFile={file => {
      const newList = files.filter(fileInList => fileInList !== file);
      setFiles(newList);
    }}
    loading={spinner}
  />
</div>;
```

Mulighet til å laste opp flere filer samtidig:

```js
import React from 'react';
import FileUploader, {
  FileFormatTypes
} from '@skatteetaten/frontend-components/FileUploader';
const files = [];
const [filesToComponent, setFilesToComponent] = React.useState(files);

<div style={{ width: '300px' }}>
  <FileUploader
    label={'Last opp bilde'}
    acceptedFileFormats={[FileFormatTypes.png, FileFormatTypes.jpg]}
    files={filesToComponent}
    multipleFiles={true}
    uploadFile={file => {
      files.push(file);
      setFilesToComponent([...files]);
    }}
    deleteFile={file => {
      const newList = files.filter(fileInList => fileInList !== file);
      setFiles(newList);
    }}
  />
</div>;
```

```js noeditor uu
<h3>Tips</h3>
<ul>
<li>Feilmeldinger skal tilfredsstille kontrastkrav (minst 4.5)</li>
<li>Sjekk at meldinger (opplastet dokument/feilmeldinger) leses med skjermleser.</li>
</ul>

<h3>Mest relevante WCAG-krav</h3>
<ul>
<li>1.3.1 A, Informasjon og relasjoner</li>
<li>1.4.3 AA, Kontrast (minimum)</li>
<li>3.3.1 A, Identifikasjon av feil</li>
<li>3.3.2 A, Ledetekster eller instruksjoner</li>
<li>4.1.2 A, Navn, rolle, verdi</li>
</ul>

<h3>WAI-ARIA</h3>
<ul>
<li>Role=alert og aria-atomic brukes på meldinger som skal leses av skjermleser.</li>
<li>Aria-describedby brukes på input for at skjermlesere skal lese suffix der det brukes.</li>
<li>Aria-expanded brukes på hjelp/infoknapper som utvides/minimeres.</li>
<li>Aria-hidden brukes for å skjule ikoner for skjermleser.</li>
</ul>
```
