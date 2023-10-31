**Fra @skatteetaten/frontend-components v5+ (designsystem-legacy) til Designsystemet v0.4.0**

Dropdown er blitt erstattet med Select.

## Endringer i funksjonalitet:

- bruker nå select- og option-elementer
- placeholder er kodet som et option-element med default tekst "Velg"
- default er at placeholder vises
- readonly er ikke videreført
- visning av påkrevd felt har endret logikk
- ikke mulig å disable enkeltvis option

## Styling:

- de nye komponentene i designsystemet er avhengige av designtokens. Disse leveres nå som en separat pakke. <a class="brodtekst-link" href="#section-designtokens-deprecated">Se designtokens for detaljer.</a>
- stor variant har endret noe på utseende og blitt tonet ned

## Endringer i API

<!-- For full API-dokumentasjon, vennligst se på <a class="brodtekst-link" href="https://www.skatteetaten.no/stilogtone/designsystemet/komponenter/dropdown/">Dropdown komponent</a> på dokumentasjonssiden til designsystemet.
// TODO FRONT-1210 EPI-dokumentasjon -->

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
<td>'options'</td>
<td>'children', 'hidePlaceholder'

Før:

```javascript static
import { Dropdown } from '@skatteetaten/frontend-components/Dropdown';

// Med placeholder option
<Dropdown
  label={'Fruktsort'}
  placeholder="Velg"
  options={[
    { key: '', text: 'Ingen' },
    { key: 'A', text: 'Banan' },
    { key: 'B', text: 'Eple' },
  ]}
/>;

// Uten placeholder option
<Dropdown
  label={'Fruktsort'}
  options={[
    { key: 'A', text: 'Banan' },
    { key: 'B', text: 'Eple' },
  ]}
/>;
```

Nå:

```js static
import { Select } from '@skatteetaten/ds-forms';

// Med placeholder option
<Select label={'Fruktsort'}>
  <Select.Option value={'A'}>{'Banan'}</Select.Option>
  <Select.Option value={'B'}>{'Eple'}</Select.Option>
</Select>;

// Uten placeholder option
<Select label={'Fruktsort'} hidePlaceholder>
  <Select.Option value={'A'}>{'Banan'}</Select.Option>
  <Select.Option value={'B'}>{'Eple'}</Select.Option>
</Select>;
```

</td>
</tr>
<tr>
<td>'placeholder'

'placeHolder'

</td>
<td>'placeholder'

Default vises en placeholder med teksten Velg. Default placeholder-tekst overskrives med 'placeholder'.
Ingen placeholder-tekst bruk 'hidePlaceholder', se kodeeksempel for 'options',

Før:

```javascript static
import { Dropdown } from '@skatteetaten/frontend-components/Dropdown';

const options = [
  { key: '', text: 'Velg' },
  { key: 'A', text: 'Banan' },
  { key: 'B', text: 'Eple' },
];

<Dropdown label={'Fruktsort'} options={options} placeholder="Velg" />;
```

Nå:

```js static
import { Select } from '@skatteetaten/ds-forms';

// Default placeholder-tekst Velg (ingen prop må settes)
<Select label={'Fruktsort'}>
  <Select.Option value={'A'}>
    {'Banan'}
  </Select.Option>
  <Select.Option value={'B'}>
    {'Eple'}
  </Select.Option>
</Select>

// Egendefinert placeholder-tekst
<Select label={'Fruktsort'} placeholder={'Velg en fruktsort'}>
  <Select.Option value={'A'}>
    {'Banan'}
  </Select.Option>
  <Select.Option value={'B'}>
    {'Eple'}
  </Select.Option>
</Select>
```

</td>
</tr>
<tr>
<td>'selectedKey'</td>
<td>'value'

Før:

```javascript static
import { Dropdown } from '@skatteetaten/frontend-components/Dropdown';

const [selectedOption, setSelectedOption] = React.useState('B');

const handleChange = (e, item) => {
  setSelectedOption(item.key);
};

const options = [
  { key: 'A', text: 'Banan' },
  { key: 'B', text: 'Eple' },
];

<Dropdown
  label={'Fruktsort'}
  options={options}
  selectedKey={selectedOption}
  onChange={handleChange}
/>;
```

Nå:

```js static
import { Select } from '@skatteetaten/ds-forms';
const [selectedOption, setSelectedOption] = useState('B');

const handleChange = (e: ChangeEvent<HTMLSelectElement>): void => {
  setSelectedOption(e.target.value);
};

<Select label={'Fruktsort'} value={selectedOption} onChange={handleChange}>
  <Select.Option value={'A'}>{'Banan'}</Select.Option>
  <Select.Option value={'B'}>{'Eple'}</Select.Option>
</Select>;
```

</td>
</tr>

<tr>
<td>'defaultSelectedKey'</td>
<td>'defaultValue'

Før:

```javascript static
import { Dropdown } from '@skatteetaten/frontend-components/Dropdown';

const options = [
  { key: 'A', text: 'Banan' },
  { key: 'B', text: 'Eple' },
];

<Dropdown label={'Fruktsort'} defaultSelectedKey={'B'} options={options} />;
```

Nå:

```js static
import { Select } from '@skatteetaten/ds-forms';
import { WarningSVGPath } from '@skatteetaten/ds-icons';

<Select label={'Fruktsort'} defaultValue={'B'}>
  <Select.Option value={'A'}>{'Banan'}</Select.Option>
  <Select.Option value={'B'}>{'Eple'}</Select.Option>
</Select>;
```

</td>
</tr>
<tr>
<td>'inputSize'</td>
<td>'variant'

Alternativer for 'variant': 'medium' og 'large'. 'medium' er default.

Før:

```javascript static
import { Dropdown } from '@skatteetaten/frontend-components/Dropdown';

<Dropdown
  label={'Fruktsort'}
  inputSize={'large'}
  options={...}
/>
```

Nå:

```js static
import { Select } from '@skatteetaten/ds-forms';
import { WarningSVGPath } from '@skatteetaten/ds-icons';

<Select label={'Fruktsort'} variant={'large'}>
  ...
</Select>;
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
import { Dropdown } from '@skatteetaten/frontend-components/Dropdown';

<Dropdown
  label={'Fruktsort'}
  options={...}
  requiredWithMark
/>
```

Nå:

```js static
import { Select } from '@skatteetaten/ds-forms';
import { WarningSVGPath } from '@skatteetaten/ds-icons';

<Select label={'Fruktsort'} required showRequiredMark>
  ...
</Select>;
```

</td>
</tr>
<tr>
<td>'ariaLabel</td>
<td>'hideLabel'

Hvis det er behov for å ikke vise ledetekst, så brukes 'label' sammen med ny prop 'hideLabel' som skjuler label-elementet visuelt men er fortsatt synlig for skjermleser. Hvis det finnes en tilleggstekst (og hjelpetekst) så vil også dette bli visuelt skjult.

Før:

```javascript static
import { Dropdown } from '@skatteetaten/frontend-components/Dropdown';

<Dropdown ariaLabel={'Fruktsort'} options={...} />
```

Nå:

```js static
import { Select } from '@skatteetaten/ds-forms';

<Select label={'Fruktsort'} hideLabel>
  ...
</Select>;
```

</td>
</tr>
<tr>
<td>'help'</td>
<td>'helpText', 'helpSvgPath', 'titleHelpSvg'

Før:

```javascript static
import { Dropdown } from '@skatteetaten/frontend-components/Dropdown';

<Dropdown
  label={'Fruktsort'}
  help={'Tekst som hjelper brukeren å forstå eller få til.'}
  options={...}
/>
```

Nå:

```js static
import { Select } from '@skatteetaten/ds-forms';
import { WarningSVGPath } from '@skatteetaten/ds-icons';

<Select
  label={'Fruktsort'}
  helpText={'Tekst som hjelper brukeren å forstå eller få til.'}
>
  ...
</Select>

// ELLER hvis du ønsker å bruke et valgfritt ikon istedenfor default ikon (spørsmåltegn)

<Select
  label={'Fruktsort'}
  helpText={'Tekst som hjelper brukeren å forstå eller få til.'}
  helpSvgPath={WarningSVGPath}
>
  ...
</Select>
```

</td>
</tr>
<tr>
<td>'styles'

'theme'

'dropdownWidth'

</td>
<td>Fluent-ui props som er faset ut. Bruk 'className' eller 'classNames' for å style komponenten.

Nå:

```js static
import { Select } from '@skatteetaten/ds-forms';

<Select label={'Fruktsort'} className={'myCustomClassname'} />;

// ELLER

<Select
  label={'Fruktsort'}
  classNames={{
    container: 'myContainerClassname',
    label: 'myLabelClassname',
    selectContainer: 'mySelectContainerClassname',
    select: 'mySelectClassname',
    errorMessage: 'myErrorMessageClassname',
  }}
>
  ...
</Select>;
```

</td>
</tr>
<tr>
<td>'isDisabled'</td>
<td>'disabled'</td>
</tr>
<tr>
<td>'onChanged'</td>
<td>'onChange'</td>
</tr>
<tr>
<td>'readOnly'</td>
<td>Fases ut.</td>
</tr>
<tr>
<td>'labelButtonAriaLabel'

'labelWithCalloutProps'

'panelProps'

'calloutProps'

'responsiveMode'

</td>
<td>Fases ut.</td>
</tr>
<tr>
<td>
'notifyOnReselect'

'onCalloutToggle'

'onRenderCaretDown'

'onRenderContainer'

'onRenderItem'

'onRenderLabel'

'onRenderList’

'onRenderOption'

'onRenderPlaceHolder'

'onRenderTitle'

'openOnKeyboardFocus'

'onDismiss'

</td>
<td>Fases ut.</td>
</tr>
</tbody>
</table>
</div>
