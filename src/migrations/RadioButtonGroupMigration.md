**Fra @skatteetaten/frontend-components v5+ (designsystem-legacy) til Designsystemet v0.3.0**

## Endringer i funksjonalitet:

- RadioButtonGroup har endret navn til RadioGroup
- det er ikke mulig med hjelpetekst i denne versjonen av komponenten
- feilmelding og påkrevd felter har endret logikk
- beskrivelse til en ledetekst er blitt en egen prop 'description', se eksempel for prop 'options' i tabell over endringer i komponent-API'et.

## Styling:

- de nye komponentene i designsystemet er avhengige av designtokens. Disse leveres nå som en separat pakke. <a class="brodtekst-link" href="#section-designtokens-deprecated">Se designtokens for detaljer.</a>
- focus og visning av feil har fått ny styling

## Endringer i API

For full API-dokumentasjon, vennligst se på <a class="brodtekst-link" href="https://www.skatteetaten.no/stilogtone/designsystemet/komponenter/radiogroup/">RadioGroup komponent</a> på dokumentasjonssiden til designsystemet.

<div class="migration-tabell">
<table>
<caption>Liste over endringer i komponent-api'et</caption>
<thead><tr><th>Tidligere Prop</th><th>Alternativ</th></tr></thead>
<tbody>
<tr>
<td>'componentRef'</td>
<td>'ref'

Alle komponentene våre bruker forwardRef. For komponent sendes ref til fieldset-elementet.

</td>
</tr>
<tr>
<td>'options'</td>
<td>'children'

Før:

```javascript static
import { RadioButtonGroup } from '@skatteetaten/frontend-components/RadioButtonGroup';

const options = [
  {
    key: 'foretak',
    text: 'Enkeltpersonsforetak',
    description: 'Dette er egentlig bare en brukskonto, med et annet navn.',
  },
  {
    key: 'selskap',
    text: 'Aksjeselskap',
  },
  {
    key: 'annet',
    text: 'Annet',
  },
];

<RadioButtonGroup options={options} label={'Type virksomhet'} />;
```

Nå:

```js static
import { RadioGroup } from '@skatteetaten/ds-forms';

<RadioGroup legend={'Type virksomhet'}>
  <RadioGroup.Radio
    value={'foretak'}
    description={'Dette er egentlig bare en brukskonto, med et annet navn.'}
  >
    {' '}
    {'Enkeltpersonsforetak'}
  </RadioGroup.Radio>
  <RadioGroup.Radio value={'selskap'}>{'Aksjeselskap'}</RadioGroup.Radio>
  <RadioGroup.Radio value={'annet'}>{'Annet'}</RadioGroup.Radio>
</RadioGroup>;
```

</td>
</tr>
<tr>
<td>'horizontal'</td>
<td>'variant'

Alternativer: 'standard' og 'horizontal'. 'standard' er default.

Før:

```javascript static
import { RadioButtonGroup } from '@skatteetaten/frontend-components/RadioButtonGroup';

<RadioButtonGroup
  horizontal
  label={'Type virksomhet'}
  options={...}
/>;
```

Nå:

```js static
import { RadioGroup } from '@skatteetaten/ds-forms';

<RadioGroup variant={'horizontal'} legend={'Type virksomhet'}>
  ...
</RadioGroup>;
```

</td>
</tr>
<tr>
<td>'label'</td>
<td>'legend'

Før:

```javascript static
import { RadioButtonGroup } from '@skatteetaten/frontend-components/RadioButtonGroup';

<RadioButtonGroup
  label={'Type virksomhet'}
  options={...}
/>;
```

Nå:

```js static
import { RadioGroup } from '@skatteetaten/ds-forms';

<RadioGroup legend={'Type virksomhet'}>...</RadioGroup>;
```

</td>
</tr>
<tr>
<td>'labelSize'</td>
<td>
Faset ut.
</td>
</tr>
<tr>
<td>'requiredWithMark'
</td>
<td>'showRequiredMark'

Forutsetter at prop 'required' er tatt i bruk.

Før:

```javascript static
import { RadioButtonGroup } from '@skatteetaten/frontend-components/RadioButtonGroup';

<RadioButtonGroup
  label={'Type virksomhet'}
  options={...}
  requiredWithMark
/>;
```

Nå:

```js static
import { RadioGroup } from '@skatteetaten/ds-forms';

<RadioGroup legend={'Type virksomhet'} required showRequiredMark>
  ...
</RadioGroup>;
```

</td>
</tr>
<tr>
<td>'selectedKey'</td>
<td>'selectedValue'

Før:

```javascript static
import { RadioButtonGroup } from '@skatteetaten/frontend-components/RadioButtonGroup';

const options = [
  {
    key: 'foretak',
    text: 'Enkeltpersonsforetak',
  },
  {
    key: 'selskap',
    text: 'Aksjeselskap',
  },
  {
    key: 'annet',
    text: 'Annet',
  },
];

<RadioButtonGroup
  selectedKey={'annet'}
  options={options}
  label={'Type virksomhet'}
/>;
```

Nå:

```js static
import { RadioGroup } from '@skatteetaten/ds-forms';

<RadioGroup selectedValue={'annet'} legend={'Type virksomhet'}>
  <RadioGroup.Radio value={'foretak'}>
    {'Enkeltpersonsforetak'}
  </RadioGroup.Radio>
  <RadioGroup.Radio value={'selskap'}>{'Aksjeselskap'}</RadioGroup.Radio>
  <RadioGroup.Radio value={'annet'}>{'Annet'}</RadioGroup.Radio>
</RadioGroup>;
```

</td>
</tr>
<tr>
<td>'errorMessage'</td>
<td>'errorMessage' må brukes sammen med ny prop 'hasError' som styrer om feilmeldingen skal vises eller ikke.

Før:

```javascript static
import { RadioButtonGroup } from '@skatteetaten/frontend-components/RadioButtonGroup';

<RadioButtonGroup
  errorMessage={'Type virksomhet er påkrevd.'}
  label={'Type virksomhet'}
  options={...}
/>;
```

Nå:

```js static
import { RadioGroup } from '@skatteetaten/ds-forms';

<RadioGroup
  hasError
  errorMessage={'Type virksomhet er påkrevd.'}
  legend={'Type virksomhet'}
>
  ...
</RadioGroup>;
```

</td>
</tr>
<tr>
<td>'defaultSelectedKey'</td>
<td>'defaultValue'

Før:

```javascript static
import { RadioButtonGroup } from '@skatteetaten/frontend-components/RadioButtonGroup';

const options = [
  {
    key: 'foretak',
    text: 'Enkeltpersonsforetak',
  },
  {
    key: 'selskap',
    text: 'Aksjeselskap',
  },
  {
    key: 'annet',
    text: 'Annet',
  },
];

<RadioButtonGroup
  defaultSelectedKey={'annet'}
  options={options}
  label={'Type virksomhet'}
/>;
```

Nå:

```js static
import { RadioGroup } from '@skatteetaten/ds-forms';

<RadioGroup defaultValue={'annet'} legend={'Type virksomhet'}>
  <RadioGroup.Radio value={'foretak'}>
    {'Enkeltpersonsforetak'}
  </RadioGroup.Radio>
  <RadioGroup.Radio value={'selskap'}>{'Aksjeselskap'}</RadioGroup.Radio>
  <RadioGroup.Radio value={'annet'}>{'Annet'}</RadioGroup.Radio>
</RadioGroup>;
```

</td>
</tr>
<tr>
<td>'styles'

'theme'

</td>
<td>
Fluent-UI spesifikke props som er faset ut. Bruk 'className' for å style komponenten. All definisjon av stil skal settes via 'className'.

Før:

```javascript static
import { RadioButtonGroup } from '@skatteetaten/frontend-components/RadioButtonGroup';

<RadioButtonGroup
  style={{ fontSize: '24px', color: '#1362ae' }}
  options={...}
  label={'Type virksomhet'} />;
```

Nå:

```js static
import { RadioGroup } from '@skatteetaten/ds-forms';

<RadioGroup className="myCustomClassname" legend={'Type virksomhet'}>
  ...
</RadioGroup>;
```

</td>
</tr>
<tr>
<td>'ariaLabelledBy'</td>
<td>Faset ut.</td>
</tr>
<tr>
<td>'calloutFloating'

'help'

'labelButtonAriaLabel'

'labelWithCalloutProps'

'onCalloutToggle'

'warning'

</td>
<td>Faset ut. Komponenten vil bli utvidet med mulighet for hjelpetekst på et senere tidspunkt. </td>
</tr>
</table>
</div>
