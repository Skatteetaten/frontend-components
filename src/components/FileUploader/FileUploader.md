** FileUploader **

```js
import FileUploader, {
  FileFormatTypes
} from '@skatteetaten/frontend-components/FileUploader';

<div style={{ width: '300px' }}>
  <FileUploader
    label={'Last opp vedlegg'}
    help="Tekst som hjelper brukeren å fylle ut feltet."
    acceptedFileFormats={[
      FileFormatTypes.doc,
      FileFormatTypes.docx,
      FileFormatTypes.pdf
    ]}
    uploadFile={file => {
      console.log(file);
    }}
  />
</div>;
```
