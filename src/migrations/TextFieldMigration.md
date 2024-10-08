**Fra @skatteetaten/frontend-components v5+ (designsystem-legacy) til Designsystemet v0.4.0**

## Endringer i funksjonalitet:

- prefix og suffix er ikke videreført
- formatering med mask-props er ikke videreført men tilbyr tusenskille-formatering og det skal planlegges mer i forhold til formatering
- veksle mellom skrive og lesemodus med blyant-knapp er ikke videreført
- visning av påkrevd felt har endret logikk
- tilleggstekst vises etter selve ledeteksten eller etter hjelpeteksten hvis den finnes
- hjelpe- og advarseltekst er slått sammen til en prop og det er mulig å ha et valgfritt ikon istedenfor default spørsmålstegn-ikon
- html attributtet type er hardkodet med verdien 'text' og andre verdier tilbys ikke fordi det finnes egne komponenter med noen av disse verdiene

## Styling:

- de nye komponentene i designsystemet er avhengige av designtokens. Disse leveres nå som en separat pakke. <a class="brodtekst-link" href="#section-designtokens-deprecated">Se designtokens for detaljer.</a>
- stor variant har endret noe på utseende og blitt tonet ned

## Endringer i API

For full API-dokumentasjon, vennligst se på <a class="brodtekst-link" href="https://www.skatteetaten.no/stilogtone/designsystemet/komponenter/textfield/">TextField komponent</a> på dokumentasjonssiden til designsystemet.

<div class="migration-tabell">
<table>
<caption>Liste over endringer i komponent-api'et</caption>
<thead><tr><th>Tidligere Prop</th><th>Alternativ</th></tr></thead>
<tbody>
<tr>
<td>'componentRef'</td>
<td>'ref'

Alle komponentene våre bruker forwardRef. For komponent sendes ref til div-elementet.

</td>
</tr>
<tr>
<td>'multiline'</td>
<td>'as'

Alternativer: 'input' og 'textarea'. Default er 'input'.

Før:

```javascript static
import { TextField } from '@skatteetaten/frontend-components/TextField';

<TextField label={'Navn'} multiline />;
```

Nå:

```js static
import { TextField } from '@skatteetaten/ds-forms';

<TextField label={'Navn'} as={'textarea'} />;
```

</td>
</tr>
<tr>
<td>'requiredWithMark'
</td>
<td>'showRequiredMark'

Forutsetter at prop 'required' er tatt i bruk.

Før:

```javascript static
import { TextField } from '@skatteetaten/frontend-components/TextField';

<TextField label={'Navn'} requiredWithMark />;
```

Nå:

```js static
import { TextField } from '@skatteetaten/ds-forms';

<TextField label={'Navn'} required showRequiredMark />;
```

</td>
</tr>
<tr>
<td>'autoAdjustHeight'</td>
<td>'autosize'

Før:

```javascript static
import { TextField } from '@skatteetaten/frontend-components/TextField';

<TextField label={'Navn'} multiline autoAdjustHeight />;
```

Nå:

```js static
import { TextField } from '@skatteetaten/ds-forms';

<TextField label={'Navn'} as={'textarea'} autosize />;
```

</td>
</tr>
<tr>
<td>'onGetErrorMessage'</td>
<td>'errorMessage', 'onFocus', 'onBlur'

'errorMessage' må brukes sammen med ny prop 'hasError' som styrer om feilmeldingen skal vises eller ikke.

Før:

```javascript static
import { TextField } from '@skatteetaten/frontend-components/TextField';

const [userInput, setUserInput] = React.useState('');

<TextField
  label={'Navn'}
  value={userInput}
  required
  onChange={(e, value) => setUserInput(value)}
  onGetErrorMessage={(value) => {
    if (!value || value.trim().length === 0) {
      return 'Navn er påkrevd';
    }
    return undefined;
  }}
/>;
```

Nå:

```js static
import { TextField } from '@skatteetaten/ds-forms';

const [userInput, setUserInput] = React.useState('');
const [error, setError] = React.useState(false);

<TextField
  label={'Navn'}
  value={userInput}
  hasError={error}
  errorMessage={'Navn er påkrevd.'}
  required
  onChange={(e: React.ChangeEvent<HTMLInputElement>): void => {
    if (error && !e.target.validity.valueMissing) {
      setError(false);
    }
    setUserInput(e.target.value);
  }}
  onBlur={(e: React.ChangeEvent<HTMLInputElement>): void => {
    if (e.target.validity.valueMissing) {
      setError(true);
    }
  }}
/>;
```

</td>
</tr>
<tr>
<td>'ariaLabel'</td>
<td>'hideLabel'

Hvis det er behov for å ikke vise ledetekst, så brukes 'label' sammen med ny prop 'hideLabel' som skjuler
label-elementet visuelt men er fortsatt synlig for skjermleser. Hvis det finnes en tilleggstekst (og hjelpetekst)
så vil også dette bli visuelt skjult.

Før:

```javascript static
import { TextField } from '@skatteetaten/frontend-components/TextField';

<TextField ariaLabel={'Navn'} />;
```

Nå:

```js static
import { TextField } from '@skatteetaten/ds-forms';

<TextField label={'Navn'} hideLabel />;

<TextField
  label={'Navn'}
  descripton={'Skriv inn både for- og etternavn.'}
  hideLabel
/>;
```

</td>
</tr>
<tr>
<td>'inputSize'</td>
<td>'variant'

Alternativer for 'variant': 'medium' og 'large'. 'medium' er default.

Før:

```javascript static
import { TextField } from '@skatteetaten/frontend-components/TextField';

<TextField label={'Navn'} inputSize={'large'} />;
```

Nå:

```js static
import { TextField } from '@skatteetaten/ds-forms';

<TextField label={'Navn'} variant={'large'} />;
```

</td>
</tr>
<tr>
<td>'styles'

'theme'

'borderless'

'underline'

'inputClassName'

</td>
<td>Fluent-ui props som er faset ut. Bruk 'className' eller 'classNames' for å style komponenten.

Før:

```javascript static
import { TextField } from '@skatteetaten/frontend-components/TextField';

<TextField
  label={'Navn'}
  inputClassName={'myInputCustomClassname'}
  style={{ fontSize: '24px', color: '#1362ae' }}
/>;
```

Nå:

```js static
import { TextField } from '@skatteetaten/ds-forms';

<TextField label={'Navn'} className={'myCustomClassname'} />;

// ELLER

<TextField
  label={'Navn'}
  classNames={{
    container: 'myContainerClassname',
    label: 'myLabelClassname',
    textbox: 'myTextboxClassname',
    errorMessage: 'myErrorMessageClassname',
  }}
/>;
```

</td>
</tr>
<tr>
<td>'help'

'warning'

</td>
<td>'helpText', 'helpSvgPath', 'titleHelpSvg'

Før:

```javascript static
import { TextField } from '@skatteetaten/frontend-components/TextField';

<TextField
  label={'Navn'}
  help={'Vi trenger å vite navnet ditt dersom vi skal kontakte deg senere.'}
/>;

// ELLER

<TextField
  label={'Antall barn'}
  warning={'Er du sikker på at antall barn er riktig?'}
/>;
```

Nå:

```js static
import { TextField } from '@skatteetaten/ds-forms';
import { WarningSVGPath } from '@skatteetaten/ds-icons';

<TextField
  label={'Navn'}
  helpText={'Vi trenger å vite navnet ditt dersom vi skal kontakte deg senere.'}
/>;

// ELLER

<TextField
  label={'Antall barn'}
  helpText={'Er du sikker på at antall barn er riktig?'}
  helpSvgPath={WarningSVGPath}
/>;
```

</td>
</tr>
<tr>
<td>'mask'

'maskChar'

'maskFormat'</td>

<td>Fluent-ui props som er faset ut. Det skal planlegges mer i forhold til formatering som skal tilbys.

Bruk ny prop 'thousandSeparator' for å formatere heltall med tusenskille. (Komma brukes som adskiller for engelsk mens mellomrom for andre språk.)

Andre muligheter er å bruke 'pattern', 'maxLength' og 'minLenght'.

Før:

```javascript static
import { TextField } from '@skatteetaten/frontend-components/TextField';

const [userInput, setUserInput] = React.useState('');
const [error, setError] = React.useState(false);
const [errorMessage, setErrorMessage] = React.useState('');

<TextField
  label={'Fødselsår'}
  value={userInput}
  mask={'9999'}
  maskChar={''}
  errorMessage={errorMessage}
  onChange={(e) => {
    setError(false);
    setErrorMessage('');
    if (e.target.value.length > 0 && isNaN(Number(e.target.value))) {
      setError(true);
      setErrorMessage('Fødselsår kan kun inneholde tall.');
    }
    setUserInput(e.target.value);
  }}
  onBlur={(e) => {
    if (e.target.value.length < 5) {
      setError(true);
      setErrorMessage('Fødselsår må inneholde fire tall.');
    }
  }}
/>;
/>;
```

Nå:

```js static
import { TextField } from '@skatteetaten/ds-forms';

const [userInput, setUserInput] = React.useState('');
const [error, setError] = React.useState(false);
const [errorMessage, setErrorMessage] = React.useState('');

<TextField
  label={'Fødselsår'}
  value={userInput}
  maxLength={4}
  pattern={'\\d{4}'}
  errorMessage={errorMessage}
  onChange={(e: React.ChangeEvent<HTMLInputElement>): void => {
    setError(false);
    setErrorMessage('');
    if (e.target.value.length > 0 && isNaN(Number(e.target.value))) {
      setError(true);
      setErrorMessage('Fødselsår kan kun inneholde tall.');
    }
    setUserInput(e.target.value);
  }}
  onBlur={(e: React.ChangeEvent<HTMLInputElement>): void => {
    if (e.target.validity.patternMismatch) {
      setError(true);
      setErrorMessage('Fødselsår må inneholde fire tall.');
    }
  }}
/>;
```

Nå:

```js static
import { TextField } from '@skatteetaten/ds-forms';

<TextField label={'Beløp'} thousandSeparator />;
```

</td>
</tr>
<tr>
<td>'editable'

'editableWhenEmpty'

'boldText'

</td>
<td>Fases ut.</td>
</tr>
<tr>
<td>'labelButtonAriaLabel'

'labelWithCalloutProps'

'labelSize'

'onCalloutToggle'

'calloutFloating'

</td>
<td>Fases ut.</td>
</tr>
<tr>
<td>'resizable'</td>
<td>Fluent-ui prop som er faset ut.

Når prop 'as' er lik 'textarea'

- uten 'autosize' følges default browser oppførsel
- med 'autosize' er resizing disabled

</td>
</tr>
<tr>
<td>'invalid'</td>
<td>Fluent-ui prop som er faset ut.

Hvis ny prop 'hasError' er true, så blir aria-invalid satt automatisk.</td>

</tr>
<tr>
<td>'prefix'

'suffix'

'onRenderPrefix'

'onRenderSuffix'

</td>
<td>Fluent-ui props som er faset ut.</td>
</tr>
<tr>
<td>'iconProps'

'elementRef'

'onRenderLabel'

'canRevealPassword'

'revealPasswordAriaLabel'

'deferredValidationTime'

'validateOnFocusIn'

'validateOnFocusOut'

'validateOnLoad'

'onNotifyValidationResult'

'onRenderDescription'

'onRenderInput'

</td>
<td>Fluent-ui props som er faset ut. </td>
</tr>
</tbody>
</table>
</div>
