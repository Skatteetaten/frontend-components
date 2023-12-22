**Fra @skatteetaten/frontend-components v11+ (designsystem-legacy) til Designsystemet v0.6.0**

## Endringer i funksjonalitet:

Det er fortsatt bevegelse i bruk og navngiving av props på ny FileUploader. Se Storybook for tilgjengelige props og eksemplene nederst på denne siden.

## Styling:

- de nye komponentene i designsystemet er avhengige av designtokens. Disse leveres nå som en separat pakke. <a class="brodtekst-link" href="#section-designtokens-deprecated">Se designtokens for detaljer.</a>

## Endringer i API

For full API-dokumentasjon, vennligst se på <a class="brodtekst-link" href="https://www.skatteetaten.no/stilogtone/designsystemet/under-arbeid/fileuploader/">TopBannerExternal komponent</a> på dokumentasjonssiden til designsystemet.

<div class="migration-tabell">
<table>
<caption>Liste over endringer i komponent-api'et</caption>
<thead><tr><th>Tidligere Prop</th><th>Alternativ</th></tr></thead>
<tbody>
<tr>
<td>'acceptedFileFormats'</td>
<td>
Faset ut.
</td>
</tr>
<tr>
<td>'acceptedFileFormatsLabel'</td>
<td>
Faset ut.
</td>
</tr>
<tr>
<td>'addFileString'</td>
<td>
Faset ut.
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
<td>'className'</td>
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
Faset ut.
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
Faset ut.
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
Faset ut.
</td>
</tr>
<tr>
<td>'id'</td>
<td>
Faset ut.
</td>
</tr>
<tr>
<td>'info'</td>
<td>
Faset ut.
</td>
</tr>
<tr>
<td>'invalidCharacterRegexp'</td>
<td>
Faset ut.
</td>
</tr>
<tr>
<td>'isLoading'</td>
<td>
Faset ut.
</td>
</tr>
<tr>
<td>'label'</td>
<td>
Faset ut.
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
Faset ut.
</td>
</tr>
<tr>
<td>'normalizeFileName'</td>
<td>
Faset ut.
</td>
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
Faset ut.
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

Enkelt eksempel:

```javascript static
import { FileUploader } from '@skatteetaten/ds-forms';

<FileUploader
  acceptedFileFormats={['.pdf', '.jpeg']}
  helpProps={{
    children: 'Ledetekst',
    helpText: 'Hjelpetekst',
  }}
  onFileChange={function noRefCheck() {}}
  onFileDelete={function noRefCheck() {}}
  uploadedFiles={[
    {
      errorMessage:
        'Filen ble ikke lastet opp på grunn av sikkerhet. Last opp opplysningene i annet format.',
      name: 'feil.png',
    },
    {
      href: 'https://i.imgur.com/guZeGcr.png',
      name: 'test.pdf',
    },
    {
      name: 'test.jpg',
    },
    {
      name: 'loading.jpg',
    },
    {
      errorMessage:
        'Får ikke lastet opp filnavn1.txt, fordi filen er ikke i riktig format.',
      href: 'http://localhost:4400/designsystem_illustrasjon.png',
      name: 'test.png',
    },
  ]}
/>;
```

Avansert eksempel:

```javascript static
import { Checkbox, FileUploader } from '@skatteetaten/ds-forms';

() => {
  //TODO
  //eslint-disable-next-line @typescript-eslint/no-explicit-any
  const createMockPromises = (amount: number): Promise<any>[] => {
    //TODO
    //eslint-disable-next-line @typescript-eslint/no-explicit-any
    const promises: Promise<any>[] = [];
    for (let i = 0; i < amount; i++) {
      const promise = new Promise((resolve, reject) => {
        if (Math.random() < 0.5) {
          resolve({
            href: 'https://skatteetaten.github.io/designsystemet/'
          });
        } else {
          reject('Promise rejected');
        }
      });
      promises.push(promise);
    }
    return promises;
  };
  const [fileUploaderState, setSuccess, setLoading, setFailure, remove] = FileUploader.useFileUploader();
  const [error, setError] = useState<string>();
  const [shouldMockUpload, setShouldMockUpload] = useState<boolean>(true);
  const uploadUrl = 'http://localhost:9090/test';
  return <>
      <Checkbox checked={shouldMockUpload} onChange={() => setShouldMockUpload(!shouldMockUpload)}>
        {'Bruk mockUpload'}
      </Checkbox>
      <FileUploader helpProps={{
      children: 'Dokumentasjon og grunnlag',
      helpText: 'Trenger du hjelp?'
    }} acceptedFileFormats={['.pdf', '.jpeg', '.png']} invalidCharacterRegexp={/e/g} {...fileUploaderState} errorMessage={error ?? ''} hasError={!!error} multiple onFileDelete={(file: string): boolean => {
      //TODO eksempel med HTTP DELETE kall her
      remove(file);
      return true;
    }} onFileChange={async (files: File[]): Promise<void> => {
      setLoading();
      setError('');
      if (files.some(file => file.size > 900_000)) {
        setError('Filen er for stor eller noe');
        return;
      }
      const succeeded: Array<{
        name: string;
        href?: string;
      }> = [];
      const failed: Array<{
        name: string;
        reason: string;
      }> = [];

      //TODO
      //eslint-disable-next-line @typescript-eslint/no-explicit-any
      let uploadPromises: Promise<any>[] = [];
      if (shouldMockUpload) {
        uploadPromises = createMockPromises(files.length);
      } else {
        uploadPromises = files.map(file => fetch(uploadUrl, {
          method: 'POST',
          body: file
        }).then(response => {
          console.log(response);
          if (!response.ok) {
            return Promise.reject(response);
          }
          return response.json();
        }));
      }
      const results = await Promise.allSettled(uploadPromises);
      results.forEach((result, index) => {
        if (result.status === 'fulfilled') {
          console.log('FULLLFILLED', result);
          succeeded.push({
            name: files[index].name,
            href: result.value.href
          });
        } else if (result.status === 'rejected') {
          console.log('REJECT', result);
          failed.push({
            name: files[index].name,
            reason: result.reason.statusText
          });
        }
      });
      if (failed.length) {
        const error = `${failed.length} av ${files.length} filer ble ikke lastet Opp`;
        setFailure(failed.map(({
          name,
          reason
        }) => ({
          name,
          errorMessage: reason
        })), [{
          error,
          files: failed.map(file => file.name)
        }], succeeded);
      } else {
        setSuccess(succeeded);
      }
    }}></FileUploader>
    </>;
}
```
