**En ComboBox ser ut og fungerer i hovedsak som en som nedtrekksliste - men har den forskjellen brukeren kan skrive i feltet. Det er spesielt nyttig hvis listen over valg er lang.**

```js
import { ComboBox, Grid } from '@skatteetaten/frontend-components';

const [state, setState] = React.useState({
  options: [
    { key: 'A', text: 'alfa', value: 'Alfa' },
    { key: 'B', text: 'beta', value: 'Beta' },
    { key: 'C', text: 'gamma', value: 'Gamma' },
    { key: 'D', text: 'delta', value: 'Delta' },
    { key: 'E', text: 'echo', value: 'Echo' },
  ],
});

<div>
  <Grid>
    <Grid.Row>
      <Grid.Col lg={4}>
        <ComboBox
          label="Nedtrekksliste"
          help="Tekst som hjelper brukeren til å fylle ut feltet."
          placeHolder="Velg"
          options={state.options}
          allowFreeform={false}
          ariaLabel="Eksempel ComboBox"
          useComboBoxAsMenuWidth
          calloutFloating={false}
        />
      </Grid.Col>
      <Grid.Col lg={4}>
        <ComboBox
          label="Med autoutfylling"
          help="Feltet foreslår en verdi når du begynner å skrive."
          options={state.options}
          allowFreeform={true}
          autoComplete={'on'}
          ariaLabel="Eksempel ComboBox"
          useComboBoxAsMenuWidth
          calloutFloating={false}
        />
      </Grid.Col>
    </Grid.Row>
  </Grid>
</div>;
```

Stor versjon:

```js
import { ComboBox, Grid } from '@skatteetaten/frontend-components';

const [state, setState] = React.useState({
  options: [
    { key: 'A', text: 'alfa', value: 'Alfa' },
    { key: 'B', text: 'beta', value: 'Alfa' },
    { key: 'C', text: 'gamma', value: 'Alfa' },
    { key: 'D', text: 'delta', value: 'Alfa' },
    { key: 'E', text: 'echo', value: 'Alfa' },
  ],
});

<div>
  <Grid>
    <Grid.Row>
      <Grid.Col lg={4}>
        <ComboBox
          label="Nedtrekksliste"
          help="Tekst som hjelper brukeren til å fylle ut feltet."
          inputSize="large"
          placeHolder="Velg"
          options={state.options}
          allowFreeform={false}
          ariaLabel="Eksempel ComboBox"
          useComboBoxAsMenuWidth
          calloutFloating={false}
        />
      </Grid.Col>
    </Grid.Row>
  </Grid>
</div>;
```

Lesemodus:

```js
import ComboBox from '@skatteetaten/frontend-components/ComboBox';
import Grid from '@skatteetaten/frontend-components/Grid';

<div>
  <Grid>
    <Grid.Row>
      <Grid.Col lg={4}>
        <ComboBox
          readOnly
          label="Lesemodus:"
          placeHolder="Velg"
          options={[
            { key: 'A', text: 'Alfa', value: 'Alfa' },
            { key: 'B', text: 'Beta', value: 'Beta' },
            { key: 'C', text: 'Gamma', value: 'Gamma' },
            { key: 'D', text: 'Delta', value: 'Delta' },
            { key: 'E', text: 'Echo', value: 'Echo' },
          ]}
          defaultSelectedKey="D"
          allowFreeform={false}
          ariaLabel="Eksempel ComboBox"
          useComboBoxAsMenuWidth
        />
      </Grid.Col>
    </Grid.Row>
  </Grid>
</div>;
```

Med Feilmelding:

```js
import { ComboBox, Grid } from '@skatteetaten/frontend-components';

const [state, setState] = React.useState({
  options: [
    { key: 'A', text: 'alfa', value: 'Alfa' },
    { key: 'B', text: 'beta', value: 'Alfa' },
    { key: 'C', text: 'gamma', value: 'Alfa' },
    { key: 'D', text: 'delta', value: 'Alfa' },
    { key: 'E', text: 'echo', value: 'Alfa' },
  ],
});
let error = 'En feil';

<div>
  <Grid>
    <Grid.Row>
      <Grid.Col lg={4}>
        <ComboBox
          label="Nedtrekksliste"
          help="Hjelpetekst"
          placeHolder="Velg"
          options={state.options}
          allowFreeform={false}
          ariaLabel="Eksempel ComboBox"
          useComboBoxAsMenuWidth
          errorMessage={'Vis med feil'}
        />
      </Grid.Col>
    </Grid.Row>
  </Grid>
</div>;
```

```js noeditor uu
<div>
  <h3>Tips</h3>
  <ul>
    <li>All funksjonalitet skal kunne brukes med kun tastatur</li>
    <li>
      Verdiene skal kunnes leses korrekt med skjermleser enten du piler ned/opp
      eller bruker forbokstav for å navigere i listen
    </li>
  </ul>

  <h3>Mest relevante WCAG-krav</h3>
  <ul>
    <li>1.3.1 A, Informasjon og relasjoner </li>
    <li>3.3.2 A, Ledetekster eller instruksjoner</li>
    <li>4.1.2 A, Navn, rolle, verdi</li>
  </ul>

  <h3>WAI-ARIA</h3>
  <ul>
    <li>Aria-expanded brukes på hjelp/info knapp som utvides/minimeres.</li>
    <li>Aria-hidden brukes for å skjule hjelpeikon for skjermleser.</li>
    <li>
      Aria-expanded, role=combobox og aria-owns brukes på &lt;div&gt;. Dette
      brukes for at skjermleser skal få beskjed om at det er en combobox med en
      tilhørende liste som utvides/minimeres.
    </li>
    <li>
      Aria-live=polite, aria-atomic=true brukes for å gi beskjed om
      feilmeldinger.
    </li>
  </ul>
</div>
```

```js noeditor beskrivelse
<>
  <h3>Fleksibel nedtrekksliste med mulighet for å skrive</h3>
  <p>
    En nedtrekksliste med skriving skiller seg fra en vanlig{' '}
    <a href="https://skatteetaten.github.io/frontend-components/#dropdown">
      nedtrekksliste (Dropdown)
    </a>{' '}
    ved at brukeren kan skrive i hovedfeltet. Det er mulig å skrive inn nye ord
    eller bare de første bokstavene, slik at det automatisk kommer opp et ord
    fra listen. Hvis listen over valg er lang er denne nedtrekkslisten spesielt
    nyttig.
  </p>

  <h3>Tilpass listen etter situasjonen</h3>
  <p>ComboBoxen er fleksibel og du kan tilpasse den til ulike sitasjoner.</p>

  <p>Du kan velge å la brukeren</p>
  <p>
    <ul>
      <li>velge blant et sett med verdier, eller skrive inn nye</li>
      <li>kun å velge fra listen av gyldige verdier</li>
      <li>bare velge fra nedtrekkslisten</li>
      <li>få opp menyen fra listen automatisk når feltet blir klikket på</li>
    </ul>
  </p>
</>
```
