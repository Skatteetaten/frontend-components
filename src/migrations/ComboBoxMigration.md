**Fra @skatteetaten/frontend-components v5+ (designsystem-legacy) til Designsystemet v2.4.0**

ComboBox har blitt erstattet med Combobox.

## Endringer i funksjonalitet:

- konfigurerbar 'minSearchLength'
- støtte for asynkron lasting med 'isLoading' prop
- maksimalt antall valg kan begrenses i flervalg-modus med 'maxSelected'
- readonly er ikke videreført
- options har endret struktur til enklere format

## Styling:

- de nye komponentene i designsystemet er avhengige av designtokens. Disse leveres nå som en separat pakke. <a class="brodtekst-link" href="#section-designtokens-deprecated">Se designtokens for detaljer.</a>
- flervalg-modus viser valgte elementer som chips
- Lista med valg vises alltid under komponentens input-felt

## Endringer i API

For full API-dokumentasjon, vennligst se på <a class="brodtekst-link" href="https://www.skatteetaten.no/stilogtone/designsystemet/komponenter/combobox/">Combobox komponent</a> på dokumentasjonssiden til designsystemet.

<div class="migration-tabell">
<table>
<caption>Liste over endringer i komponent-api'et</caption>
<thead><tr><th>Tidligere Prop</th><th>Alternativ</th></tr></thead>
<tbody>
<tr>
<td>'componentRef'</td>
<td>'ref'

Alle komponentene våre bruker forwardRef. For Combobox sendes ref til input-elementet.

</td>
</tr>
<tr>
<td>'options'</td>
<td>'options'

Options har endret struktur fra Fluent UI format til enklere format.

Før:

```javascript static
import { ComboBox } from '@skatteetaten/frontend-components/ComboBox';

<ComboBox
  label={'Fruktsort'}
  options={[
    { key: 'A', text: 'Banan', value: 'banan' },
    { key: 'B', text: 'Eple', value: 'eple' },
  ]}
/>;
```

Nå:

```js static
import { Combobox } from '@skatteetaten/ds-forms';

<Combobox
  label={'Fruktsort'}
  options={[
    { value: 'A', label: 'Banan' },
    { value: 'B', label: 'Eple' },
  ]}
/>;
```

</td>
</tr>
<tr>
<td>'selectedKey'</td>
<td>
'value', 'onSelectionChange'

Før:

```javascript static
import { ComboBox } from '@skatteetaten/frontend-components/ComboBox';

const [selectedOption, setSelectedOption] = React.useState('B');

const handleChange = (e, option) => {
  setSelectedOption(option.key);
};

const options = [
  { key: 'A', text: 'Banan' },
  { key: 'B', text: 'Eple' },
];

<ComboBox
  label={'Fruktsort'}
  options={options}
  selectedKey={selectedOption}
  onChange={handleChange}
/>;
```

Nå:

```js static
import { Combobox } from '@skatteetaten/ds-forms';

const [selectedOption, setSelectedOption] = useState('B');

const handleSelectionChange = (option: ComboboxOption | null): void => {
  setSelectedOption(option?.value);
};

const options = [
  { value: 'A', label: 'Banan' },
  { value: 'B', label: 'Eple' },
];

<Combobox
  label={'Fruktsort'}
  options={options}
  value={selectedOption}
  onSelectionChange={handleSelectionChange}
/>;
```

</td>
</tr>
<tr>
<td>'text'</td>
<td>
'value'

Før:

```javascript static
import { ComboBox } from '@skatteetaten/frontend-components/ComboBox';

const options = [
  { key: 'A', text: 'Banan' },
  { key: 'B', text: 'Eple' },
];

<ComboBox label={'Fruktsort'} options={options} text={'eksempel'} />;
```

Nå:

```js static
import { Combobox } from '@skatteetaten/ds-forms';

const options = [
  { value: 'A', label: 'Banan' },
  { value: 'B', label: 'Eple' },
];

<Combobox label={'Fruktsort'} options={options} value={'eksempel'} />;
```

</td>
</tr>

<tr>
<td>'defaultSelectedKey'</td>
<td>Fases ut.</td>
</tr>
<tr>
<td>'multiSelect'</td>
<td>'multiple', 'onSelectionChange'

Flervalg aktiveres med 'multiple' prop. onSelectionChange mottar da en array av valgte options istedenfor enkelt option.

Før:

```javascript static
import { ComboBox } from '@skatteetaten/frontend-components/ComboBox';

<ComboBox
  label={'Fruktsort'}
  options={...}
  multiSelect
/>
```

Nå:

```js static
import { Combobox } from '@skatteetaten/ds-forms';

const handleSelectionChange = (options: ComboboxOption[]): void => {
  // Håndter flere valgte options
  console.log(options);
};

<Combobox
  label={'Fruktsort'}
  options={...}
  multiple
  onSelectionChange={handleSelectionChange}
/>
```

</td>
</tr>
<tr>
<td>'inputSize'</td>
<td>'variant'

Alternativer for 'variant': 'medium' og 'large'. 'medium' er default.
For flervalg-modus settes størrelsen automatisk til 'large'.

Før:

```javascript static
import { ComboBox } from '@skatteetaten/frontend-components/ComboBox';

<ComboBox
  label={'Fruktsort'}
  inputSize={'large'}
  options={...}
/>
```

Nå:

```js static
import { Combobox } from '@skatteetaten/ds-forms';

<Combobox
  label={'Fruktsort'}
  variant={'large'}
  options={...}
/>
```

</td>
</tr>
<tr>
<td>'requiredWithMark'
</td>
<td>Fases ut.

Les mer om mønstre for obligatoriske felt på <a class="brodtekst-link" href="https://www.skatteetaten.no/stilogtone/monster/interaksjon/obligatoriske-felt/">stil og tone</a>.

</td>
</tr>
<tr>
<td>'ariaLabel'</td>
<td>'hideLabel' 'label'

Hvis det er behov for å ikke vise ledetekst, så brukes 'label' sammen med ny prop 'hideLabel' som skjuler label-elementet visuelt men er fortsatt synlig for skjermleser. Hvis det finnes en tilleggstekst (og hjelpetekst) så vil også dette bli visuelt skjult.

Før:

```javascript static
import { ComboBox } from '@skatteetaten/frontend-components/ComboBox';

<ComboBox ariaLabel={'Fruktsort'} options={...} />
```

Nå:

```js static
import { Combobox } from '@skatteetaten/ds-forms';

<Combobox label={'Fruktsort'} hideLabel options={...} />
```

</td>
</tr>
<tr>
<td>'help'</td>
<td>'helpText', 'helpSvgPath', 'titleHelpSvg'

Før:

```javascript static
import { ComboBox } from '@skatteetaten/frontend-components/ComboBox';

<ComboBox
  label={'Fruktsort'}
  help={'Tekst som hjelper brukeren å forstå eller få til.'}
  options={...}
/>
```

Nå:

```js static
import { Combobox } from '@skatteetaten/ds-forms';
import { WarningSVGPath } from '@skatteetaten/ds-icons';

<Combobox
  label={'Fruktsort'}
  helpText={'Tekst som hjelper brukeren å forstå eller få til.'}
  options={...}
/>

// ELLER hvis du ønsker å bruke et valgfritt ikon istedenfor default ikon (spørsmåltegn)

<Combobox
  label={'Fruktsort'}
  helpText={'Tekst som hjelper brukeren å forstå eller få til.'}
  helpSvgPath={WarningSVGPath}
  options={...}
/>
```

</td>
</tr>

<tr>
<td>
'onInputValueChange'
</td>
<td>'onInputChange'</td>
</tr>
<tr>
<td>'onChange'</td>
<td>'onSelectionChange', 'onInputChange'

onChange er erstattet med to separate callbacks:

- 'onSelectionChange' kalles når et valg gjøres/fjernes
- 'onInputChange' kalles når søketeksten endres

Før:

```javascript static
import { ComboBox } from '@skatteetaten/frontend-components/ComboBox';

const handleChange = (e, option) => {
  console.log('Selected:', option);
};

<ComboBox
  label={'Fruktsort'}
  options={...}
  onChange={handleChange}
/>
```

Nå:

```js static
import { Combobox } from '@skatteetaten/ds-forms';

const handleSelectionChange = (option: ComboboxOption | null): void => {
  console.log('Selected:', option);
};

const handleInputChange = (searchTerm: string): void => {
  console.log('Search term:', searchTerm);
};

<Combobox
  label={'Fruktsort'}
  options={...}
  onSelectionChange={handleSelectionChange}
  onInputChange={handleInputChange}
/>
```

</td>
</tr>
<tr>
<td>'styles'

'theme'

'dropdownMaxWidth'

'dropdownWidth'

'comboBoxOptionStyles'

</td>
<td>'classNames'

'className'

Fluent-ui props som er faset ut. Bruk 'className' eller 'classNames' for å style komponenten.

Nå:

```js static
import { Combobox } from '@skatteetaten/ds-forms';

<Combobox label={'Fruktsort'} className={'myCustomClassname'} options={...} />

// ELLER

<Combobox
  label={'Fruktsort'}
  classNames={{
    container: 'myContainerClassname',
    input: 'myInputClassname',
    options: 'myOptionsClassname',
    chips: 'myChipsClassname',
    errorMessage: 'myErrorMessageClassname',
  }}
  options={...}
/>
```

</td>
</tr>
<tr>
<td>'isDisabled'</td>
<td>'disabled'</td>
</tr>
<tr>
<td>'readOnly'</td>
<td>Fases ut.</td>
</tr>

<tr>
<td>
'onCalloutToggle'
</td>
<td>
                    'onHelpToggle'
</td>
</tr>

<tr>
<td>'labelButtonAriaLabel'

'labelWithCalloutProps'

'calloutProps'

</td>
<td>Fases ut.</td>
</tr>
<tr>
<td>
'allowFreeform'

'ariaDescribedBy'

'autoComplete'

'autofill'

'buttonIconProps'

'caretDownButtonStyles'

'getClassNames'

'iconButtonProps'

'isButtonAriaHidden'

'keytipProps'

'multiSelectDelimiter'

'onDismiss'

'onItemClick'

'onMenuDismiss'

'onMenuOpen'

'onPendingValueChanged'

'onRenderCaretDown'

'onRenderContainer'

'onRenderItem'

'onRenderLabel'

'onRenderList'

'onRenderLowerContent'

'onRenderOption'

'onRenderUpperContent'

'onResolveOptions'

'onScrollToItem'

'openOnKeyboardFocus'

'panelProps'

'persistMenu'

'scrollSelectedToTop'

'shouldRestoreFocus'

'useComboBoxAsMenuWidth'

</td>
<td>Fases ut.</td>
</tr>
</tbody>
</table>
</div>
