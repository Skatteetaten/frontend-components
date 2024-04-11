**Fra @skatteetaten/frontend-components v5+ (designsystem-legacy) til Designsystemet v0.7.0**

## Endringer i funksjonalitet:

- escape resetter ikke søkefeltet lenger og onClear kalles ikke lenger ved esc.
- mulig å legge til ekstra beskrivelse på søkeresultatene
- Filtrering er ikke lenger bygget inn i komponenten. Man kan importere funksjonen searchInList eller lage egen funksjon
  og filtere lista før man sender den inn som prop

## Styling:

- de nye komponentene i designsystemet er avhengige av designtokens. Disse leveres nå som en separat pakke. <a class="brodtekst-link" href="#section-designtokens-deprecated">Se designtokens for detaljer.</a>
- Det er innført en ny variant 'extraLarge'

## Endringer i API

For full API-dokumentasjon, vennligst se på <a class="brodtekst-link" href="https://www.skatteetaten.no/stilogtone/designsystemet/komponenter/searchfield/">SearchField komponent</a> på dokumentasjonssiden til designsystemet.

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
<td>'ariaLabel'</td>
<td>'hideLabel'

Hvis det er behov for å ikke vise ledetekst, så brukes 'label' sammen med ny prop 'hideLabel' som skjuler
label-elementet visuelt men er fortsatt synlig for skjermleser. Hvis det finnes en tilleggstekst (og hjelpetekst)
så vil også dette bli visuelt skjult.

Før:

```javascript static
import { SearchField } from '@skatteetaten/frontend-components/SearchField';

<SearchField ariaLabel={'Navn'} />;
```

Nå:

```js static
import { SearchField } from '@skatteetaten/ds-forms';

<SearchField label={'Navn'} hideLabel />;

<SearchField
  label={'Navn'}
  descripton={'Skriv inn både for- og etternavn.'}
  hideLabel
/>;
```

</td>
</tr>
<tr>
<td>'border'</td>
<td>Faset ut.</td>
</tr>
<tr>
<td>'clearButtonProps'</td>
<td>Faset ut.</td>
</tr>
<tr>
<td>'disableAnimation'</td>
<td>Faset ut.</td>
</tr>
<tr>
<td>'keyboardShortcut'
'searchShortcutKeys'
</td>
<td>'accessKey'</td>
</tr>
<tr>
<td>'language'</td>
<td>Faset ut.
Bruk I18next for å endre språket på tekstene i Komponenten.

'lang' kan brukes for å sette lang-attributtet på komponenten.

</td>
</tr>
<tr>
<td>'limit'</td>
<td>Faset ut.</td>
</tr>
<tr>
<td>'onChanged'</td>
<td>Faset ut.</td>
</tr>
<tr>
<td>'onEscape'</td>
<td>Faset ut.</td>
</tr>
<tr>
<td>'onSearchIcon'</td>
<td>'onSearchClick'</td>
</tr>
<tr>
<td>'onSelected'</td>
<td>'onResultClick'</td>
</tr>
<tr>
<td>'options'</td>

<td>'results'

Før:

```javascript static
import { SearchField } from '@skatteetaten/frontend-components/SearchField';

const options = [
  { text: 'agurk', key: 'ag' },
  { text: 'artisjokk', key: 'as' },
  { text: 'mangold', key: 'mn' },
  { text: 'pastinakk', key: 'ps' },
];

const [searchTerm, setSearchTerm] = React.useState('');

<SearchField
  label={'Navn'}
  value={searchTerm}
  onChange={(ev, value) => setSearchTerm(value)}
  options={options}
/>;
```

Nå:

```js static
import { SearchField, searchInList } from '@skatteetaten/ds-forms';

const options = [
  {
    title: 'Agurk',
    description:
      'En forfriskende grønnsak som er flott i salater eller som en sunn snack.',
  },
  {
    title: 'Artisjokk',
    description:
      'Den spiselige bunnen av artisjokkblomsten, ofte tilberedt ved å koke eller dampe.',
  },
  {
    title: 'Jordskokk',
    description:
      'En rotgrønnsak med nøtteaktig smak, også kjent som "jordskollar" eller "topinambur".',
  },
  {
    title: 'Mangold',
    description:
      'En bladgrønnsak med røde eller gule stilker, ligner litt på bete.',
  },
  {
    title: 'Pastinakk',
    description: 'En søt og aromatisk rotgrønnsak, flott i supper og stuinger.',
  },
];

const [value, setValue] = useState < string > '';
const [simpleValue, setSimpleValue] = useState < string > '';
const results = useMemo(
  () => (value.length >= 3 ? searchInList(options, value) : undefined),
  [value, options]
);
<SearchField
  label={'Søk etter grønnsaker'}
  value={value}
  results={results}
  placeholder={'Eksempel: tomat'}
  onChange={(event) => {
    setValue(event.target.value);
  }}
  onSearch={() => alert('søk')}
  onSearchClick={() => alert('søk med knapp')}
  onClear={() => setValue('')}
  onResultClick={(result) => {
    alert(`${result.title}: ${result.description}`);
  }}
/>;
```

</td>
</tr>
<tr>
<td>'role'</td>
<td>Faset ut.</td>
</tr>
<tr>
<td>'searchFieldSize'</td>
<td>'variant'

Alternativer for 'variant': 'medium', 'large' og 'extraLarge'. 'medium' er default.

</td>
</tr>
<tr>
<td>'searchIconTitle'</td>
<td>'searchButtonTitle'</td>
</tr>
<tr>
<td>'styles'

'theme'

</td>
<td>Fluent-ui props som er faset ut. Bruk 'className' eller 'classNames' for å style komponenten.

Før:

```javascript static
import { SearchField } from '@skatteetaten/frontend-components/SearchField';

<SearchField
  label={'Navn'}
  inputClassName={'myInputCustomClassname'}
  style={{ fontSize: '24px', color: '#1362ae' }}
/>;
```

Nå:

```js static
import { SearchField } from '@skatteetaten/ds-forms';

<SearchField label={'Navn'} className={'myCustomClassname'} />;

// ELLER

<SearchField
  label={'Navn'}
  classNames={{
    label: 'myLabelClassname',
    container: 'myContainerClassname',
    searchContainer: 'mySearchContainerClassname',
  }}
/>;
```

</td>
</tr>
<tr>
<td>'help'

</td>
<td>'helpText', 'helpSvgPath', 'titleHelpSvg'

Før:

```javascript static
import { SearchField } from '@skatteetaten/frontend-components/SearchField';

<SearchField label={'Navn'} help={'Hva heter personen du leter etter?'} />;
```

Nå:

```js static
import { SearchField } from '@skatteetaten/ds-forms';

<SearchField label={'Navn'} helpText={'Hva heter personen du leter etter?'} />;
```

</td>
</tr>

<tr>
<td>'labelButtonAriaLabel'

'labelWithCalloutProps'

'labelText'

'onCalloutToggle'

'calloutFloating'

</td>
<td>Fases ut.</td>
</tr>

<tr>
<td>'iconProps'

'showIcon'

</td>
<td>Fluent-ui props som er faset ut. </td>
</tr>
</tbody>
</table>
</div>
