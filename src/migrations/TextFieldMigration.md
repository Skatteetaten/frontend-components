**Fra @skatteetaten/frontend-components v5+ (designsystem-legacy) til Designsystemet v0.4.0**

## Endringer i funksjonalitet:

- det er ikke mulig med hjelpetekst i denne versjonen av komponenten
- feilmelding og påkrevd felter har endret logikk
- prefix og suffix er ikke videreført
- veksle mellom skrive og lesemodus med blyant-knapp er ikke videreført
- TODO si noe om bare type=text og ikke annet....

## Styling:

- de nye komponentene i designsystemet er avhengige av designtokens. Disse leveres nå som en separat pakke. <a class="brodtekst-link" href="#section-designtokens-deprecated">Se designtokens for detaljer.</a>

## Endringer i API

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
<td>'variant'

Alternativer: 'normal' og 'multiline'. Default er 'normal'.

Før:

```javascript static
import { TextField } from '@skatteetaten/frontend-components/TextField';

<TextField multiline label={'Navn'} />;
```

Nå:

```js static
import { TextField } from '@skatteetaten/ds-forms';

<TextField variant={'multiline'} label={'Navn'} />;
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
  onChange={(e): void => {
    if (error && !e.target.validity.valueMissing) {
      setError(false);
    }
    setUserInput(e.target.value);
  }}
  onBlur={(e): void => {
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
label-elementet visuelt men er fortsatt synlig for skjermleser.

Før:

```javascript static
import { TextField } from '@skatteetaten/frontend-components/TextField';

<TextField ariaLabel={'Navn'} />;
```

Nå:

```js static
import { TextField } from '@skatteetaten/ds-forms';

<TextField label={'Navn'} hideLabel />;
```

</td>
</tr>
<tr>
<td>'help'</td>
<td>Faset ut. Komponenten vil bli utvidet med mulighet for hjelpetekst på et senere tidspunkt.</td>
</tr>
<tr>
<td>'warning'</td>
<td>Fases ut.</td>
</tr>
<tr>
<td>'inputClassName'

'styles'

</td>
<td>Fluent-UI spesifikke props som er faset ut. Bruk 'className' for å style komponenten.

Før:

```javascript static
import { TextField } from '@skatteetaten/frontend-components/TextField';

<TextField
  inputClassName={'myCustomClassname'}
  style={{ fontSize: '24px', color: '#1362ae' }}
  label={'Navn'}
/>;
```

Nå:

```js static
import { TextField } from '@skatteetaten/ds-forms';

<TextField className={'myCustomClassname'} label={'Navn'} />;
```

</td>
</tr>
<tr>
<td>'mask'

'maskChar'

'maskFormat'</td>

<td>Fases ut. 
Erstattes vel med pattern...
TODO - eksempel
</td>
</tr>
<tr>
<td>'invalid'</td>
<td>Fases ut.

Hvis ny prop 'hasError' er true, så blir aria-invalid satt automatisk.</td>

</tr>
<tr>
<td>'editable' 
'editableWhenEmpty'
'boldText'
</td>
<td>Fases ut.</td>
</tr>
<tr>
<td>'prefix'

'suffix'

'onRenderPrefix'

'onRenderSuffix'

</td>
<td>Fases ut.</td>
</tr>
<tr>
<td>'labelButtonAriaLabel'</td>
<td>Fases ut.</td>
</tr>
<tr>
<td>'labelWithCalloutProps'</td>
<td>Fases ut.</td>
</tr>
<tr>
<td>'onCalloutToggle'</td>
<td>Fases ut.</td>
</tr>
<tr>
<td>'autoAdjustHeight'</td>
<td>Fases ut.</td>
</tr>
<tr>
<td>'calloutFloating'</td>
<td></td>
</tr>
<tr>
<td>'iconProps'</td>
<td>Fluent-ui prop som er faset ut. </td>
</tr>
<tr>
<td>'canRevealPassword'
'revealPasswordAriaLabel'
</td>
<td>Fases ut.</td>
</tr>
<tr>
<td>'deferredValidationTime'</td>
<td>Fases ut.</td>
</tr>
<tr>
<td>'elementRef'</td>
<td>Fases ut.</td>
</tr>
<tr>
<td>'resizable'</td>
<td>???</td>
</tr>
<tr>
<td>'validateOnFocusIn'
'validateOnFocusOut'
'validateOnLoad'
</td>
<td>Fases ut.</td>
</tr>
</tbody>
</table>
</div>
