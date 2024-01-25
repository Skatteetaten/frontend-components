**Fra @skatteetaten/frontend-components v11+ (designsystem-legacy) til Designsystemet v0.6.0**

## Endringer i funksjonalitet:

Det er fortsatt bevegelse i bruk og navngiving av props på ny FileUploader. Se Storybook for tilgjengelige props og eksemplene nederst på denne siden.

- Ny FileUploader håndterer ikke HTTP-kall og har ikke avhengiget til axios. 'onFileChange' kan brukes til å fange opp
  filer som ble lagt til av bruker og til å håndtere HTTP-kall for opplastning.
- Fordi ny komponent legger opp til at HTTP-kall håndteres utenfor komponenten har den ikke lenger intern tilstandshåndtering av filer og feilmeldinger.
  Det vil si at man får full kontrol til å håndtere tilstanden selv. Alternativt kan man benytte hook useFileUploader som eksporterer metoder som kan brukes til tilstandshåndtering.

## Styling:

- de nye komponentene i designsystemet er avhengige av designtokens. Disse leveres nå som en separat pakke. <a class="brodtekst-link" href="#section-designtokens-deprecated">Se designtokens for detaljer.</a>

## Endringer i API

For full API-dokumentasjon, vennligst se på <a class="brodtekst-link" href="https://www.skatteetaten.no/stilogtone/designsystemet/under-arbeid/fileuploader/">FileUploader komponent</a> på dokumentasjonssiden til designsystemet.

<div class="migration-tabell">
<table>
<caption>Liste over endringer i komponent-api'et</caption>
<thead><tr><th>Tidligere Prop</th><th>Alternativ</th></tr></thead>
<tbody>
<tr>
<td>'acceptedFileFormatsLabel'</td>
<td>
'acceptedFileFormatsDescription'

</td>
</tr>
<tr>
<td>'addFileString'</td>
<td>
'children'
</td>
</tr>
<tr>
<td>'afterUpload'</td>
<td>
Faset ut.
</td>
</tr>
<tr>
<td>'ariaLabel'</td>
<td>
Faset ut.
</td>
</tr>
<tr>
<td>'axiosPath'</td>
<td>
Faset ut.
</td>
</tr>
<tr>
<td>'deleteAllFiles'</td>
<td>
Faset ut.
</td>
</tr>
<tr>
<td>'deleteButtonAriaLabel'</td>
<td>
Faset ut.
</td>
</tr>
<tr>
<td>'deleteFile'</td>
<td>
'onFileDelete'
</td>
</tr>
<tr>
<td>'downloadFile'</td>
<td>
Faset ut.
</td>
</tr>
<tr>
<td>'exceedFileSizeLimitErrorMessage'</td>
<td>
Faset ut.
</td>
</tr>
<tr>
<td>'fileSizeLimit'</td>
<td>
Faset ut.
</td>
</tr>
<tr>
<td>'files'</td>
<td>
'uploadedFiles'
</td>
</tr>
<tr>
<td>'forsinkelse'</td>
<td>
Faset ut.
</td>
</tr>
<tr>
<td>'help'</td>
<td>
'helpText'
</td>
</tr>

<tr>
<td>'info'</td>
<td>
'description'
</td>
</tr>

<tr>
<td>'isLoading'</td>
<td>
'isUploading'
</td>
</tr>
<tr>
<td>'labelButtonAriaLabel'</td>
<td>
Faset ut.
</td>
</tr>
<tr>
<td>'labelWithCalloutProps'</td>
<td>
Faset ut.
</td>
</tr>
<tr>
<td>'language'</td>
<td>
Faset ut.
</td>
</tr>
<tr>
<td>'loading'</td>
<td>
Faset ut.
</td>
</tr>
<tr>
<td>'multipleFiles'</td>
<td>
'multiple'
</td>
</tr>
<tr>
<td>'normalizeFileName'</td>
<td>'shouldNormalizeFileName'</td>
</tr>
<tr>
<td>'onCalloutToggle'</td>
<td>
Faset ut.
</td>
</tr>
<tr>
<td>'onError'</td>
<td>
Faset ut.
</td>
</tr>
<tr>
<td>'queryParams'</td>
<td>
Faset ut.
</td>
</tr>
<tr>
<td>'required'</td>
<td>
'showRequiredMark'
</td>
</tr>
<tr>
<td>'uploadFile'</td>
<td>
Faset ut.
</td>
</tr>
<tr>
<td>'usesWebSealCompatibleDelete'</td>
<td>
Faset ut.
</td>
</tr>
</tbody>
</table>
</div>

Før:

```javascript static
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

Nå:

```javascript static
import { useState } from 'react';
import { FileUploader } from '@skatteetaten/ds-forms';


const [fileUploaderState, setSuccess, setLoading, setFailure, remove] =
  FileUploader.useFileUploader();

const [error, setError] = useState<string>();
const uploadUrl = 'http://localhost:9090/test';

return (
    <FileUploader
      label={'Dokumentasjon og grunnlag'}
      helpText={'Trenger du hjelp?'}
      acceptedFileFormats={['.pdf', '.jpeg', '.png']}
      invalidCharacterRegexp={/e/g}
      shouldNormalizeFileName
      {...fileUploaderState}
      errorMessage={error ?? ''}
      hasError={!!error}
      multiple
      onFileDelete={(file: string): boolean => {
        let deleteStatus = true;

        fetch(uploadUrl, {
        method: 'DELETE',
      }).then((response) => {
        if (!response.ok) {
        deleteStatus = false;
      } else {
        remove(file);
      }
      });
        return deleteStatus;
      }}
      onFileChange={async (files: File[]): Promise<void> => {
        setLoading();
        setError('');
        if (files.some((file) => file.size > 900_000)) {
        setError('Filen er for stor eller noe');
        return;
      }

        const succeeded: Array<{ name: string; href?: string }> = [];
        const failed: Array<{ name: string; reason: string }> = [];

        let uploadPromises: Promise<{ name: string; href?: string }>[] = [];

        uploadPromises = files.map((file) =>
        fetch(uploadUrl, {
        method: 'POST',
        body: file,
      }).then((response) => {
        if (!response.ok) {
        return Promise.reject(response);
      }
        return response.json();
      })
        );

        const results = await Promise.allSettled(uploadPromises);

        results.forEach((result, index) => {
        if (result.status === 'fulfilled') {
        succeeded.push({
        name: files[index].name,
        href: result.value.href,
      });
      } else if (result.status === 'rejected') {
        failed.push({
        name: files[index].name,
        reason: result.reason.statusText,
      });
      }
      });

        if (failed.length) {
        const error = `${failed.length} av ${files.length} filer ble ikke lastet Opp`;
        setFailure(
        failed.map(({ name, reason }) => ({
        name,
        errorMessage: reason,
      })),
        [{ error, files: failed.map((file) => file.name) }],
        succeeded
        );
      } else {
        setSuccess(succeeded);
      }
      }}
    ></FileUploader>
);


);
```
