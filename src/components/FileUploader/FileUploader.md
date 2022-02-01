**FileUploader (Filopplaster): felt for å laste opp filer**

```js
import { useState } from 'react';
import { UseScreen } from '../utils/ScreenPlugin';
import {
  FileUploader,
  FileFormatTypes,
} from '@skatteetaten/frontend-components/FileUploader';
const [files, setFiles] = useState([]);
const [spinner, setSpinner] = useState(false);
const size = UseScreen();

const styles = {
  container: {
    width: size.lt.md ? '100%' : '300px',
  },
};
<div style={styles.container}>
  <FileUploader
    addFileString={'Last opp fil'}
    label={'Last opp vedlegg'}
    help="Tekst som hjelper brukeren å fylle ut feltet."
    acceptedFileFormats={[
      FileFormatTypes.doc,
      FileFormatTypes.docx,
      FileFormatTypes.txt,
    ]}
    files={files}
    uploadFile={(file) => {
      setSpinner(true);
      setTimeout(() => {
        const newList = [...files];
        newList.push(file);
        setFiles(newList);
        setSpinner(false);
      }, 2000);
    }}
    deleteFile={(file) => {
      const newList = files.filter((fileInList) => fileInList !== file);
      setFiles(newList);
    }}
    loading={spinner}
    labelWithCalloutProps={{
      calloutProps: { autoDismiss: true },
    }}
  />
</div>;
```

Mulighet til å laste opp flere filer samtidig:

```js
import { useState } from 'react';
import { UseScreen } from '@skatteetaten/frontend-components/utils/ScreenPlugin';
import {
  FileUploader,
  FileFormatTypes,
} from '@skatteetaten/frontend-components/FileUploader';

const [files, setFiles] = useState([]);
const [spinner, setSpinner] = useState(false);
const size = UseScreen();
const styles = {
  container: {
    width: size.lt.lg ? '100%' : '420px',
  },
};

<div style={styles.container}>
  <FileUploader
    id={'fileupload2'}
    label={'Last opp bilde'}
    acceptedFileFormats={[FileFormatTypes.png, FileFormatTypes.jpg]}
    files={files}
    multipleFiles={true}
    uploadFile={(file) => {
      files.push(file);
      setFiles([...files]);
    }}
    deleteFile={(file) => {
      const newList = files.filter((fileInList) => fileInList !== file);
      setFiles(newList);
    }}
    info={
      'Husk å fjerne sensitive personopplysninger før du laster opp dokumentet ditt.'
    }
  />
</div>;
```

```js noeditor uu
<>
  <h3>Tips</h3>
  <ul>
    <li>Feilmeldinger skal tilfredsstille kontrastkrav (minst 4.5)</li>
    <li>
      Sjekk at meldinger (opplastet dokument/feilmeldinger) leses med
      skjermleser.
    </li>
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
    <li>
      Role=alert og aria-atomic brukes på meldinger som skal leses av
      skjermleser.
    </li>
    <li>
      Aria-describedby brukes på input for at skjermlesere skal lese suffix der
      det brukes.
    </li>
    <li>Aria-expanded brukes på hjelp/infoknapper som utvides/minimeres.</li>
    <li>Aria-hidden brukes for å skjule ikoner for skjermleser.</li>
  </ul>
</>
```

```js noeditor beskrivelse
<>
  <h3>Felt for å laste opp vedlegg</h3>
  <p>
    Flopplaster lar brukeren laste opp ett eller flere vedlegg – det kan være
    bilder eller andre typer filer. Vær nøye med å forklare i hjelpeteksten
    hvilke typer filer brukeren kan laste opp.
  </p>
  <h3>To varianter:</h3>
  <ul>
    <li>Felt der brukeren kan laste opp én fil.</li>
    <li>Felt der brukeren kan laste opp flere filer. </li>
  </ul>
</>
```
