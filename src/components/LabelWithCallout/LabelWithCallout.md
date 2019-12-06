** Brukes til å vise en label og tilhørende hjelpetekst **

```js
import LabelWithCallout from '@skatteetaten/frontend-components/LabelWithCallout';
<>
  <LabelWithCallout
    label={'Omregistreringsavgift'}
    help={'Avgiften du må betale for å registrere kjøretøyet på en ny person.'}
  />
  <br />
  <LabelWithCallout
    label={'Omregistreringsavgift'}
    warning={'Du ser ut til å være fritatt for omregistreringsavgift.'}
  />
</>;
```

Kan endre visning ut ifra tilstand:

```js
import LabelWithCallout from '@skatteetaten/frontend-components/LabelWithCallout';
import Button from '@skatteetaten/frontend-components/Button';

<>
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
</>;
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

```js noeditor beskrivelse
<p>Dette er i hovedsak en hjelpekomponent som brukes av input-komponentene. Det er for eksempel denne som brukes til å vise label og hjelpetekst og i toppen av TextField og DatePicker.</p>
<p>Bruk denne komponenten i tilfeller hvor det er ønskelig samme med utseende og funksjonalitet på label og hjelpetekst som for de øvrige inputkomponentene, for eksempel seksjoner eller knapperader.</p>
```

```js noeditor uu
<p>
  Merk at flytende Callout (Calloutfloating=true) kun kan brukes i interne
  løsninger.
</p>
```
