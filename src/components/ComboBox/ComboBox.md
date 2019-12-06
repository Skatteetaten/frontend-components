** En ComboBox ser ut og fungerer i hovedsak som en som nedtrekksliste - men har den forskjellen brukeren kan skrive i feltet. Det er spesielt nyttig hvis listen over valg er lang. **

```js
import ComboBox from '@skatteetaten/frontend-components/ComboBox';
import Grid from '@skatteetaten/frontend-components/Grid';

const initialState = {
  options: [
    { key: 'A', text: 'alfa', value: 'Alfa' },
    { key: 'B', text: 'beta', value: 'Alfa' },
    { key: 'C', text: 'gamma', value: 'Alfa' },
    { key: 'D', text: 'delta', value: 'Alfa' },
    { key: 'E', text: 'echo', value: 'Alfa' }
  ]
};

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
import ComboBox from '@skatteetaten/frontend-components/ComboBox';
import Grid from '@skatteetaten/frontend-components/Grid';

const initialState = {
  options: [
    { key: 'A', text: 'alfa', value: 'Alfa' },
    { key: 'B', text: 'beta', value: 'Alfa' },
    { key: 'C', text: 'gamma', value: 'Alfa' },
    { key: 'D', text: 'delta', value: 'Alfa' },
    { key: 'E', text: 'echo', value: 'Alfa' }
  ]
};

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

Med Feilmelding:

```js
import ComboBox from '@skatteetaten/frontend-components/ComboBox';
import Grid from '@skatteetaten/frontend-components/Grid';

const initialState = {
  options: [
    { key: 'A', text: 'alfa', value: 'Alfa' },
    { key: 'B', text: 'beta', value: 'Alfa' },
    { key: 'C', text: 'gamma', value: 'Alfa' },
    { key: 'D', text: 'delta', value: 'Alfa' },
    { key: 'E', text: 'echo', value: 'Alfa' }
  ]
};
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
<ul>
  <li>Sjekk at alle funksjoner kan nås ved hjelp av tastaturet. </li>
  <li>
    Vær spesielt oppmerksom dersom man bruker <b>autoExpand</b>. Brukere av
    skjermleser forventer å aktivt aktivere elementene på skjermen, og dersom de
    åpnes automatisk kan det være vanskelig å orientere seg.
  </li>
</ul>
```

```js noeditor beskrivelse
  <p>
    ComboBoxen er en fleksibel nedtrekksliste som kan tilpasses til ulike
    sitasjoner:
  </p>
  <ul>
    <li>Kun velge eller skrive fra et sett gyldige verdier.</li>
    <li>
      Velge eller skrive blant et sett med verdier, eller skrive inn nye
    </li>
    <li>Som en nedtrekksliste, uten mulighet til å skrive</li>
    <li>Automatisk vise meny når feltet får fokus.</li>
  </ul>
```
