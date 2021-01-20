** Brukes til å vise en label og tilhørende hjelpetekst **

```js
import LabelWithCallout from '@skatteetaten/frontend-components/LabelWithCallout';
import Button from '@skatteetaten/frontend-components/Button';

<div style={{ width: '350px' }}>
  <LabelWithCallout
    label={'Omregistreringsavgift'}
    help={'Avgiften du må betale for å registrere kjøretøyet på en ny person.'}
    warning={
      state.warning && 'Du ser ut til å være fritatt for omregistreringsavgift.'
    }
  />
  <Button onClick={() => setState({ warning: !state.warning })}>
    {state.warning ? 'Vis med hjelpetekst' : 'Vis med varsel'}
  </Button>
</div>;
```

Brukt i kombinasjon med annen komponent.

```js
import LabelWithCallout from '@skatteetaten/frontend-components/LabelWithCallout';
import SearchField from '@skatteetaten/frontend-components/SearchField';
<div style={{ width: '350px' }}>
  <LabelWithCallout
    label={'Søk'}
    help={'Her kan du søke etter personer og virksomheter'}
  />
  <SearchField
    searchFieldSize="standard"
    border="slim"
    placeholder="Skriv søkeord her"
    ariaLabel="Søkefelt"
  />
</div>;
```

Flere komponeter har LabelWithCallout innebygd. Her med autoDismiss:

```js
import TextField from '@skatteetaten/frontend-components/TextField';

<>
  <div style={{ width: '300px' }}>
    <TextField
      label="Fullt navn"
      labelWithCalloutAutoDismiss={true}
      value={state.value1}
      onChange={(e, value) => setState({ value1: value })}
      help="Vi trenger å vite navnet ditt dersom vi skal kontakte deg senere."
    />
  </div>
</>;
```

```js noeditor beskrivelse
<>
  <h3>Hjelpekomponent</h3>
  <p>
    Dette er i hovedsak en hjelpekomponent som brukes av input-komponentene. Det
    er for eksempel denne som brukes til å vise label og hjelpetekst og i toppen
    av TextField og DatePicker.
  </p>
  <p>
    Bruk denne komponenten i tilfeller hvor det er ønskelig samme med utseende
    og funksjonalitet på label og hjelpetekst som for de øvrige
    inputkomponentene, for eksempel seksjoner eller knapperader.
  </p>
</>
```

```js noeditor uu
<>
  <h3>Tips</h3>
  <ul>
    <li>
      Merk at flytende Callout (Calloutfloating=true) kun kan brukes i interne
      løsninger.
    </li>
  </ul>

  <h3>Mest relevante WCAG-krav</h3>
  <ul>
    <li>1.3.1 A, Informasjon og relasjoner</li>
    <li>4.1.2 A, Navn, rolle, verdi</li>
  </ul>

  <h3>WAI-ARIA</h3>
  <ul>
    <li>Aria-expanded brukes på knappene som utvides/minimeres.</li>
    <li>Aria-label brukes for å navngi lukk-ikon i dialogen.</li>
    <li>Aria-hidden brukes for skjule ikoner for skjermleser. </li>
  </ul>
</>
```
