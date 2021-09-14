**ComboBox (Nedtrekksliste med skriving): nedtrekksliste hvor du kan skrive i feltet - nyttig hvis listen med valg er lang.**

Velge fra en fast liste (stor versjon):

```js
import { ComboBox } from '@skatteetaten/frontend-components/ComboBox';
import { Grid } from '@skatteetaten/frontend-components/Grid';

<div>
  <Grid>
    <Grid.Row>
      <Grid.Col lg={4}>
        <ComboBox
          label="Fylke"
          help="Dette feltet foreslår en verdi når du begynner å skrive. Du kan også bla gjennom listen og velge på den måten."
          placeholder="Velg eller begynn å skrive"
          inputSize="large"
          options={[
            { key: 'A', text: 'Agder', value: 'Agder' },
            { key: 'B', text: 'Innlandet', value: 'Innlandet' },
            { key: 'C', text: 'Møre og Romsdal', value: 'Møre og Romsdal' },
            { key: 'D', text: 'Nordland', value: 'Nordland' },
            { key: 'E', text: 'Oslo', value: 'Oslo' },
            { key: 'F', text: 'Rogaland', value: 'Rogaland' },
            { key: 'G', text: 'Troms og Finnmark', value: 'Troms og Finnmark' },
            { key: 'H', text: 'Trøndelag', value: 'Trøndelag' },
            {
              key: 'I',
              text: 'Vestfold og Telemark',
              value: 'Vestfold og Telemark',
            },
            { key: 'J', text: 'Vestland', value: 'Vestland' },
            { key: 'K', text: 'Viken', value: 'Viken' },
          ]}
          allowFreeform={false}
          ariaLabel="Eksempel ComboBox"
          useComboBoxAsMenuWidth
        />
      </Grid.Col>
    </Grid.Row>
  </Grid>
</div>;
```

Hvis brukeren skal kunne legge til egne elementer:

```js
import { ComboBox } from '@skatteetaten/frontend-components/ComboBox';
import { Grid } from '@skatteetaten/frontend-components/Grid';

<div>
  <Grid>
    <Grid.Row>
      <Grid.Col lg={4}>
        <ComboBox
          label="Bilmerke"
          help="Dette feltet foreslår en verdi når du begynner å skrive. Det er også mulig å legge til egne verdier."
          placeholder="Velg eller legg til"
          options={[
            { key: 'A', text: 'Audi', value: 'Audi' },
            { key: 'A', text: 'BMW', value: 'BMW' },
            { key: 'B', text: 'Hyundai', value: 'Hyundai' },
            { key: 'C', text: 'Mercedes-Benz', value: 'Mercedes-Benz' },
            { key: 'D', text: 'Nissan', value: 'Nissan' },
            { key: 'E', text: 'MG', value: 'MG' },
            { key: 'F', text: 'Mitsubishi', value: 'Rogaland' },
            { key: 'G', text: 'Tesla', value: 'Troms og Finnmark' },
            { key: 'H', text: 'Volkswagen', value: 'Trøndelag' },
            { key: 'I', text: 'Volvo', value: 'Volvo' },
          ]}
          allowFreeform={true}
          autoComplete={'on'}
          ariaLabel="Eksempel på ComboBox"
          useComboBoxAsMenuWidth
        />
      </Grid.Col>
    </Grid.Row>
  </Grid>
</div>;
```

Lesemodus:

```js
import { ComboBox } from '@skatteetaten/frontend-components/ComboBox';
import { Grid } from '@skatteetaten/frontend-components/Grid';

<div>
  <Grid>
    <Grid.Row>
      <Grid.Col lg={4}>
        <ComboBox
          readOnly
          label="Fylke"
          options={[
            { key: 'A', text: 'Agder', value: 'Agder' },
            { key: 'B', text: 'Innlandet', value: 'Innlandet' },
            { key: 'C', text: 'Møre og Romsdal', value: 'Møre og Romsdal' },
            { key: 'D', text: 'Nordland', value: 'Nordland' },
            { key: 'E', text: 'Oslo', value: 'Oslo' },
            { key: 'F', text: 'Rogaland', value: 'Rogaland' },
            { key: 'G', text: 'Troms og Finnmark', value: 'Troms og Finnmark' },
            { key: 'H', text: 'Trøndelag', value: 'Trøndelag' },
            {
              key: 'I',
              text: 'Vestfold og Telemark',
              value: 'Vestfold og Telemark',
            },
            { key: 'J', text: 'Vestland', value: 'Vestland' },
            { key: 'K', text: 'Viken', value: 'Viken' },
          ]}
          defaultSelectedKey="A"
          allowFreeform={false}
          ariaLabel="Eksempel med ComboBox i lesemodus"
        />
      </Grid.Col>
    </Grid.Row>
  </Grid>
</div>;
```

Med Feilmelding:

```js
import { ComboBox } from '@skatteetaten/frontend-components/ComboBox';
import { Grid } from '@skatteetaten/frontend-components/Grid';

let error = 'En feil';

<div>
  <Grid>
    <Grid.Row>
      <Grid.Col lg={4}>
        <ComboBox
          label="Fylke"
          help="Hjelpetekst"
          placeHolder="Velg"
          defaultSelectedKey="D"
          options={[
            { key: 'A', text: 'Agder', value: 'Agder' },
            { key: 'B', text: 'Innlandet', value: 'Innlandet' },
            { key: 'C', text: 'Møre og Romsdal', value: 'Møre og Romsdal' },
            { key: 'D', text: 'Nordland', value: 'Nordland' },
            { key: 'E', text: 'Oslo', value: 'Oslo' },
            { key: 'F', text: 'Rogaland', value: 'Rogaland' },
            { key: 'G', text: 'Troms og Finnmark', value: 'Troms og Finnmark' },
            { key: 'H', text: 'Trøndelag', value: 'Trøndelag' },
            {
              key: 'I',
              text: 'Vestfold og Telemark',
              value: 'Vestfold og Telemark',
            },
            { key: 'J', text: 'Vestland', value: 'Vestland' },
            { key: 'K', text: 'Viken', value: 'Viken' },
          ]}
          allowFreeform={false}
          ariaLabel="Eksempel ComboBox"
          useComboBoxAsMenuWidth
          errorMessage={
            'Du kan ikke legge til dette fylket siden personen har finnmarksfradrag.'
          }
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
