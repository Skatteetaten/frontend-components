**Fra @skatteetaten/frontend-components v5+ (designsystem-legacy) til Designsystemet v0.3.0**

## Endringer i funksjonalitet:

- Checkbox skrives med liten 'b'
- checkboksen vises alltid foran labelen
- kan legge til beskrivelse 'description' under labelen
- kan legge til stjerne bak labelen 'showRequiredMark' for å vise at checkboksen er obligatorisk
- bruk CheckboxGroup ved en gruppe checkbokser og bruk 'legend' for å erstatte LabelWithCallOut (se nederst i tabellen)

## Styling:

- de nye komponentene i designsystemet er avhengige av designtokens. Disse leveres nå som en separat pakke. <a class="brodtekst-link" href="#section-designtokens-deprecated">Se designtokens for detaljer.</a>
- checkboksen har fått styling ved hover og fokus
- 'error' har endret utseende

## Endringer i API

For full API-dokumentasjon, vennligst se på [CheckBox komponent](https://www.skatteetaten.no/stilogtone/designsystemet/komponenter/checkbox/) på dokumentasjonssiden til designsystemet.

<div class="migration-tabell">
<table>
<caption>Liste over endringer i komponent-api'et</caption>
<thead><tr><th>Tidligere Prop</th><th>Alternativ</th></tr></thead>
<tbody>
<tr>
<td>
'ariaLabel'

'ariaLabelledBy'

</td>
<td>
Faset ut.
</td>
</tr>
<tr>
<td>
'ariaPositionInSet'

'ariaSetSize'

</td>
<td>
Fluent-UI spesifikke props som er faset ut.
</td>
</tr>
<tr>
<td>'boxSide'</td>
<td>
Fluent-UI prop som er faset ut. Checkbox vises kun foran labelen.

Før:

```javascript static
import { CheckBox } from '@skatteetaten/frontend-components/CheckBox';

<CheckBox boxSide="start" label="Jeg bekrefter at opplysningene stemmer" />;
```

Nå:

```js static
import { Checkbox } from '@skatteetaten/ds-forms';

<Checkbox>{'Jeg bekrefter at opplysningene stemmer'}</Checkbox>;
```

</td>
</tr>
<tr>
<td>'checkmarkIconProps'</td>
<td>
Fluent-UI prop som er faset ut.
</td>
</tr>
<tr>
<td>'componentRef'</td>
<td>
'ref'

Alle komponentene våre bruker forwardRef. For komponent sendes 'ref' til &lt;input&gt;-elementet.

</td>
</tr>
<tr>
<td>'error'</td>
<td>
'hasError'

'hasError' styrer om feilmelding skal vises eller ikke og må brukes sammen med ny prop 'errorMessage' som beskriver feilen.

```js static
import { Checkbox } from '@skatteetaten/ds-forms';

<Checkbox
  errorMessage={'Du må lese og forstå innholdet for å gå videre'}
  hasError
>
  {'Jeg bekrefter at opplysningene stemmer'}
</Checkbox>;
```

</td>
</tr>
<tr>
<td>'inputProps'</td>
<td>
Fluent-UI prop som er faset ut.
</td>
</tr>
<tr>
<td>'label'</td>
<td>
'children'
</td>
</tr>
<tr>
<td>'onRenderLabel'
</td>
<td>
Fluent-UI prop som er faset ut.
</td>
</tr>
<tr>
<td>
'styles'

'theme'

</td>
<td>
Fluent-UI prop som er faset ut. Bruk 'className' for å style komponenten. All definisjon av stil skal settes via 'className'.

Før:

```javascript static
import { CheckBox } from '@skatteetaten/frontend-components/CheckBox';

<CheckBox
  style={{ fontSize: '24px', color: '#1362ae' }}
  label="Jeg bekrefter at opplysningene stemmer"
/>;
```

Nå:

```js static
import { Checkbox } from '@skatteetaten/ds-forms';

<Checkbox className="myCustomClassname">
  {'Jeg bekrefter at opplysningene stemmer'}
</Checkbox>;
```

</td>
</tr>
<tr>
<td>'title'</td>
<td>
Faset ut.
</td>
</tr>
<tr>
<td>CheckboxGroup</td>
<td>
<strong>CheckboxGroup</strong>
Før:

```javascript static
import { CheckBox } from '@skatteetaten/frontend-components/CheckBox';
import { LabelWithCallout } from '@skatteetaten/frontend-components/LabelWithCallout';

<div style={{ maxWidth: '500px' }}>
  <fieldset style={{ border: 'none', margin: '0', padding: '0' }}>
    <LabelWithCallout
      inFieldset
      label="Velg det som gjelder deg"
      help="Du kan få fradrag for enkelte ting om helse og familie. Velg deg som gjelder for deg."
    />
    <div style={{ height: '8px' }} />
    <CheckBox boxSide={'start'} label="Har barn under 12 år" />
    <CheckBox
      boxSide={'start'}
      label="Får ekstra reisevei til jobb på grunn av levering til barnehage eller skolefritidsordning"
    />
    <CheckBox
      boxSide={'start'}
      label="Har barn som er 12 år eller eldre og som har særskilt omsorgsbehov"
    />
    <CheckBox boxSide={'start'} label="Er enslig forsørger" />
  </fieldset>
</div>;
```

Nå:

```js static
import { CheckboxGroup } from '@skatteetaten/ds-forms';

<CheckboxGroup legend={'Velg det som gjelder deg'}>
  <CheckboxGroup.Checkbox>{'Har barn under 12 år'}</CheckboxGroup.Checkbox>
  <CheckboxGroup.Checkbox>
    {
      'Får ekstra reisevei til jobb på grunn av levering til barnehage eller skolefritidsordning'
    }
  </CheckboxGroup.Checkbox>
  <CheckboxGroup.Checkbox>
    {'Har barn som er 12 år eller eldre og som har særskilt omsorgsbehov'}
  </CheckboxGroup.Checkbox>
  <CheckboxGroup.Checkbox>{'Er enslig forsørger'}</CheckboxGroup.Checkbox>
</CheckboxGroup>;
```

</td>
</tr>
</tbody>
</table>
</div>
