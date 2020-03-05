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
