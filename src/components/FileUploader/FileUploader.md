** FileUploader **

```js
import React from 'react';
import FileUploader, {
  FileFormatTypes
} from '@skatteetaten/frontend-components/FileUploader';
const [files, setFiles] = React.useState([]);

<div style={{ width: '300px' }}>
  <FileUploader
    label={'Last opp vedlegg'}
    help="Tekst som hjelper brukeren å fylle ut feltet."
    acceptedFileFormats={[
      FileFormatTypes.doc,
      FileFormatTypes.docx,
      FileFormatTypes.pdf
    ]}
    files={files}
    uploadFile={file => {
      const newList = [...files];
      newList.push(file);
      setFiles(newList);
    }}
    deleteFile={file => {
      const newList = files.filter(fileInList => fileInList !== file);
      setFiles(newList);
    }}
  />
</div>;
```
