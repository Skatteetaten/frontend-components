**Fra @skatteetaten/frontend-components v5+ (designsystem-legacy) til Designsystemet v0.4.0**

LabelWithCallout er deprecated i sin helhet og er ikke tilgjengelig som en egen komponent i det nye designsystemet siden <strong>label- og legend-element må brukes i kombinasjon med skjemaelementer</strong> og ikke alene.

Alle våre nye form-elementer som bruker label eller legend har hjelp-funksjonalitet innebygd. I tillegg har vi fått en ny komponent Fieldset som må brukes dersom skjemaelementer hører til en gruppe som deler samme ledetekst, se eksempel 2 under "Som et legend-element".

Dersom du trenger en hjelp-funksjonalitet som ikke er knyttet til skjemaelementer, så kan legacy Callout-komponent brukes inntil videre. 

For full API-dokumentasjon over Fieldset-komponenten og form-komponentene, vennligst se på <a class="brodtekst-link" href="https://www.skatteetaten.no/stilogtone/designsystemet/komponenter/">dokumentasjonssiden til det nye designsystemet</a>.

## Som et label-element

Før:

```javascript static
import { TextField } from '@skatteetaten/frontend-components/TextField';

<TextField
  value={state.value1}
  onChange={(e, value) => setState({ value1: value })}
  help='Vi trenger å vite navnet ditt dersom vi skal kontakte deg senere.'
  labelWithCalloutProps={{
    label: 'Fullt navn',
    calloutProps: { autoDismiss: true },
  }}
/>;
```

Nå:

```js static
import { TextField } from '@skatteetaten/ds-forms';

<TextField
  label={'Fullt navn'}
  value={state.value1}
  onChange={(e, value) => setState({ value1: value })}
  helpText={'Vi trenger å vite navnet ditt dersom vi skal kontakte deg senere.'}
/>;
```

## Som et legend-element

Før:

```javascript static
import { CheckBox } from '@skatteetaten/frontend-components/CheckBox';
import { DatePicker } from '@skatteetaten/frontend-components/DatePicker';
import { LabelWithCallout } from '@skatteetaten/frontend-components/LabelWithCallout';

// Eksempel 1
<fieldset>
  <LabelWithCallout
    inFieldset
    label='Velg det som gjelder deg'
    help='Du kan få fradrag for enkelte ting om helse og familie. Velg deg som gjelder for deg.'
  />
  <CheckBox boxSide={'start'} label='Har barn under 12 år' />
  <CheckBox
    boxSide={'start'}
    label='Har barn som er 12 år eller eldre og som har særskilt omsorgsbehov'
  />
  <CheckBox boxSide={'start'} label='Er enslig forsørger' />
</fieldset>;

// Eksempel 2
<fieldset>
  <LabelWithCallout
    inFieldset
    label='Hvilken periode trenger du bekreftelse for?'
    help='Legg inn hvilke datoer du trenger bekreftelse for.'
  />
  <DatePicker
    label={'Fra dato (dd.mm.åååå)'}
    ...
  />
  <DatePicker
    label={'Til dato (dd.mm.åååå)'}
    ...
  />
</fieldset>;

```

Nå:

```js static
import { DatePicker } from '@skatteetaten/frontend-components/DatePicker';
import { CheckboxGroup, Fieldset } from '@skatteetaten/ds-forms';

// Eksempel 1 - fieldset er innebygd i komponenten
<CheckboxGroup legend={'Velg det som gjelder deg'}>
  <CheckboxGroup.Checkbox>{'Har barn under 12 år'}</CheckboxGroup.Checkbox>
  <CheckboxGroup.Checkbox>
    {'Har barn som er 12 år eller eldre og som har særskilt omsorgsbehov'}
  </CheckboxGroup.Checkbox>
  <CheckboxGroup.Checkbox>{'Er enslig forsørger'}</CheckboxGroup.Checkbox>
</CheckboxGroup>;

// Eksempel 2
<Fieldset
  legend={'Hvilken periode trenger du bekreftelse for?'}
  helpText={'Legg inn hvilke datoer du trenger bekreftelse for.'}
>
  // På nåværende tidspunkt er ikke DatePicker blitt erstatt med ny komponent
  <DatePicker
    label={'Fra dato (dd.mm.åååå)'}
    ...
  />
  <DatePicker
    label={'Til dato (dd.mm.åååå)'}
    ...
  />
</Fieldset>;
```
