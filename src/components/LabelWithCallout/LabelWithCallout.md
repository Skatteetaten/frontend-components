**LabelWithCallout (Merkelapp med utropsboks): Brukes til å vise en merkelapp og tilhørende hjelpetekst**

```js
import { Button } from '@skatteetaten/frontend-components/Button';
import { LabelWithCallout } from '@skatteetaten/frontend-components/LabelWithCallout';

const [state, setState] = React.useState({ warning: false });

<div>
  <LabelWithCallout
    id={'lwc1'}
    label={'Omregistreringsavgift'}
    help={'Avgiften du må betale for å registrere kjøretøyet på en ny person.'}
    warning={
      state.warning && 'Du ser ut til å være fritatt for omregistreringsavgift.'
    }
    calloutProps={{ border: true }}
  />
  <br />
  <Button onClick={() => setState({ warning: !state.warning })}>
    {state.warning ? 'Vis med hjelpetekst' : 'Vis med varsel'}
  </Button>
</div>;
```

Brukt i kombinasjon med annen komponent, og veldig mye tekst.

```js
import { LabelWithCallout } from '@skatteetaten/frontend-components/LabelWithCallout';
import { SearchField } from '@skatteetaten/frontend-components/SearchField';

<div style={{ maxWidth: '400px' }}>
  <LabelWithCallout
    id={'lwc2'}
    label={'Søk'}
    help={
      'Her kan du søke etter personer og virksomheter. Dette søkefeltet er spesielt tilpasset for søk i befolkningen, og tar derfor hensyn til personvern. Det betyr at vi ikke kan vise noen resultater før du har bekreftet søket med enter, eller trykket på søkeikonet i feltet. Alle søk logges.'
    }
  />
  <SearchField
    searchFieldSize="standard"
    border="slim"
    placeholder="Skriv søkeord her"
    ariaLabel="Søkefelt"
  />
</div>;
```

Flytende, automatisk lukking og mye tekst:

```js
import { LabelWithCallout } from '@skatteetaten/frontend-components/LabelWithCallout';
import { SearchField } from '@skatteetaten/frontend-components/SearchField';

<div>
  <LabelWithCallout
    id={'lwc4'}
    label={'Søk'}
    help={
      <p style={{ width: '350px' }}>
        'Her kan du søke etter personer og virksomheter. Dette søkefeltet er
        spesielt tilpasset for søk i befolkningen, og tar derfor hensyn til
        personvern. Det betyr at vi ikke kan vise noen resultater før du har
        bekreftet søket med enter, eller trykket på søkeikonet i feltet. Alle
        søk logges. Her kan du IGJEN søke etter personer og virksomheter. Dette
        søkefeltet er spesielt tilpasset for søk i befolkningen, og tar derfor
        hensyn til personvern. Det betyr at vi ikke kan vise noen resultater før
        du har bekreftet søket med enter, eller trykket på søkeikonet i feltet.
        Alle søk logges.'
      </p>
    }
    calloutProps={{ autoDismiss: true }}
    calloutFloating
  />
</div>;
```

LabelWithCallout brukt i tekstfelt med automatisk lukking av utropsboksen:

```js
import { TextField } from '@skatteetaten/frontend-components/TextField';

const [state, setState] = React.useState({ value1: '' });

<>
  <div style={{ maxWidth: '400px' }}>
    <TextField
      label="Fullt navn"
      value={state.value1}
      onChange={(e, value) => setState({ value1: value })}
      help="Vi trenger å vite navnet ditt dersom vi skal kontakte deg senere."
      labelWithCalloutProps={{
        calloutProps: { autoDismiss: true },
      }}
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
  <p>
    Flytende utropsboks brukes som hovedregel i interne løsninger og i tabeller.
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
    <li>Aria-hidden brukes for å skjule ikoner for skjermleser. </li>
  </ul>
</>
```
