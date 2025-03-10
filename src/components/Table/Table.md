**Table (Tabell): brukes til å liste ut strukturerte data.**

```js
import { Button } from '@skatteetaten/frontend-components/Button';
import { Grid } from '@skatteetaten/frontend-components/Grid';
import { IconButton } from '@skatteetaten/frontend-components/IconButton';
import { LabelWithCallout } from '@skatteetaten/frontend-components/LabelWithCallout';
import { Table } from '@skatteetaten/frontend-components/Table';
import { TextField } from '@skatteetaten/frontend-components/TextField';
import { ActionButton } from '@skatteetaten/frontend-components/ActionButton';

const wrapperStyle = {
  backgroundColor: '#f9ede2',
  padding: 12,
};

const blockRightStyle = {
  textAlign: 'right',
  marginTop: 20,
};

const buttonPaddingStyle = {
  marginLeft: '8px',
};

const tableStyle = {
  background: 'red',
  marginTop: 20,
};

const caption = <LabelWithCallout label={'Månedsoversikt'} />;

const editableContent = (data, close, rowIndex) => (
  <div style={wrapperStyle}>
    <p>
      <strong>{data.Måned}</strong>
    </p>

    <Grid>
      <Grid.Row>
        <Grid.Col lg={4}>
          <TextField
            id={'textfield-1'}
            box
            calloutFloating={false}
            withLeadingIcon="search"
            label="Beløp"
            placeholder={''}
            help="Hjelpetekst som omhandler beløp."
          />
        </Grid.Col>
        <Grid.Col lg={4}>
          <TextField
            id={'textfield-2'}
            box
            calloutFloating={false}
            withLeadingIcon="search"
            label="Dekningsgrad"
            placeholder={''}
            help="Hjelpetekst som omhandler dekningsgrad"
          />
        </Grid.Col>
        <Grid.Col lg={4}>
          <TextField
            id={'textfield-3'}
            box
            calloutFloating={false}
            withLeadingIcon="search"
            label="Avkastning"
            placeholder={''}
            help="Hjelpetekst som omhandler avkastning"
          />
        </Grid.Col>
      </Grid.Row>
      <Grid.Row>
        <Grid.Col lg={5}></Grid.Col>
        <Grid.Col lg={7}>
          <div style={blockRightStyle}>
            <Button
              onClick={close}
              style={buttonPaddingStyle}
              buttonStyle="secondarySimple"
              icon="delete"
            >
              Slett
            </Button>
            <Button
              onClick={close}
              style={buttonPaddingStyle}
              buttonStyle="secondary"
            >
              Avbryt
            </Button>
            <Button
              onClick={close}
              style={buttonPaddingStyle}
              buttonStyle="primary"
            >
              Ok
            </Button>
          </div>
        </Grid.Col>
      </Grid.Row>
    </Grid>
  </div>
);

const columns = [
  {
    name: 'Måned',
    fieldName: 'month',
    sortable: true,
    autohideSorting: false,
  },
  {
    name: 'Beløp',
    fieldName: 'amount',
    alignment: 'right',
    sortable: true,
    autohideSorting: false,
  },
  {
    name: 'Dekningsgrad',
    fieldName: 'coverage',
    alignment: 'right',
  },
  {
    name: 'Avkastning',
    fieldName: 'revenue',
    alignment: 'right',
  },
];

const data = [
  {
    month: 'Januar',
    amount: 5426,
    coverage: '100 %',
    revenue: '1000',
  },
  {
    month: 'Februar',
    amount: 5432,
    coverage: '50 %',
    revenue: '500',
  },
  {
    month: 'Mars',
    amount: 4899,
    coverage: '20 %',
    revenue: '2000',
  },
  {
    month: 'April',
    amount: 2344,
    coverage: '30 %',
    revenue: '1055',
  },
];

<Table
  data={data}
  editableContent={editableContent}
  editableRows
  columns={columns}
  caption={caption}
  hideCaption
/>;
```

**Man kan styre hvilke kolonner som skal vises på mobil med _hideOnMobile_-attributtet:**

```js
import { ActionButton } from '@skatteetaten/frontend-components/ActionButton';
import { Table } from '@skatteetaten/frontend-components/Table';

const columns = [
  {
    name: 'Navn',
    fieldName: 'navn',
  },
  {
    name: 'Tilgang gitt',
    fieldName: 'dato',
    alignment: 'right',
    hideOnMobile: true,
  },
  {
    name: '',
    fieldName: 'kanSlettes',
  },
];

const data = [
  {
    navn: 'Sven Lundquist',
    dato: '23.10.19',
    kanSlettes: (
      <ActionButton
        icon="Delete"
        onClick={() => console.log('Do what you got to do')}
      >
        Slett tilgang
      </ActionButton>
    ),
  },
  {
    navn: 'Kai Mossige',
    dato: '25.11.19',
    kanSlettes: (
      <ActionButton
        icon="Delete"
        onClick={() => console.log('Do what you got to do')}
      >
        Slett tilgang
      </ActionButton>
    ),
  },
];

<Table
  data={data}
  columns={columns}
  caption="Oversikt over brukere"
  hideCaption
/>;
```

Ekspanderbare rader med høyre-pil og nested tabell:

```js
import { ActionButton } from '@skatteetaten/frontend-components/ActionButton';
import { IconButton } from '@skatteetaten/frontend-components/IconButton';
import { Grid } from '@skatteetaten/frontend-components/Grid';
import { Table } from '@skatteetaten/frontend-components/Table';
import { LabelWithCallout } from '@skatteetaten/frontend-components/LabelWithCallout';

const columns = [
  {
    name: 'Firma',
    fieldName: 'firma',
  },
  {
    name: 'Startet',
    fieldName: 'timestamp',
  },
  {
    name: 'Status',
    fieldName: 'status',
  },
  {
    name: (
      <span>
        <span>Forventet behandlet</span>
        <IconButton
          title={'Hjelp'}
          icon={'HelpOutline'}
          type="default"
        ></IconButton>
      </span>
    ),
    fieldName: 'eta',
  },
];

const marginTopStyle = {
  marginTop: '3rem',
};

const data = [
  {
    firma: 'Bluth Company',
    timestamp: '08.04.2020 11:31:57',
    status: 'Under behandling',
    eta: 'Mer enn 1 dag',
    ansatte: [
      {
        navn: 'Per Olsen',
        fnr: '01012020 99999',
        beskrivelse: 'Ingen flere opplysninger',
      },
    ],
  },
  {
    firma: 'Business Engros',
    timestamp: '08.04.2020 11:32:16',
    status: 'Under behandling',
    eta: '23 min',
    ansatte: [
      {
        navn: 'Bryce Navnesen',
        fnr: '02012020 99999',
        beskrivelse: 'Ingen flere opplysninger',
      },
      {
        navn: 'Alice Middleman',
        fnr: '03012020 99999',
        beskrivelse: 'Ingen flere opplysninger',
      },
    ],
  },
  {
    firma: 'Corwood Industries',
    timestamp: '08.04.2020 11:32:16',
    status: 'Ferdig',
    eta: '–',
    ansatte: [
      {
        navn: 'Kai Mossige',
        fnr: '01012020 99999',
        beskrivelse: 'Ingen flere opplysninger',
      },
    ],
  },
  {
    firma: 'Limerick Partner',
    timestamp: '08.04.2020 11:32:47',
    status: 'Ferdig',
    eta: '–',
    ansatte: [
      {
        navn: 'Kari Saksbehandler',
        fnr: '01012020 99999',
        beskrivelse: 'Ingen flere opplysninger',
      },
      {
        navn: 'Bob Egil Hansen',
        fnr: '04012020 99999',
        beskrivelse: 'Ingen flere opplysninger',
      },
    ],
  },
];

const dataWithHideExpand = [
  {
    hideExpand: true,
    firma: 'Bluth Company',
    timestamp: '08.04.2020 11:31:57',
    status: 'Under behandling',
    eta: 'Mer enn 1 dag',
    ansatte: [
      {
        navn: 'Per Olsen',
        fnr: '01012020 99999',
        beskrivelse: 'Ingen flere opplysninger',
      },
    ],
  },
  {
    hideExpand: false,
    firma: 'Business Engros',
    timestamp: '08.04.2020 11:32:16',
    status: 'Under behandling',
    eta: '23 min',
    ansatte: [
      {
        navn: 'Bryce Navnesen',
        fnr: '02012020 99999',
        beskrivelse: 'Ingen flere opplysninger',
      },
      {
        navn: 'Alice Middleman',
        fnr: '03012020 99999',
        beskrivelse: 'Ingen flere opplysninger',
      },
    ],
  },
];

const expandableContent = (data, close, rowIndex) => (
  <div>
    <Grid>
      <Grid.Row>
        <Grid.Col xl={12} sm={8}>
          <Table
            data={data.ansatte}
            showRowSeparators={false}
            columns={[
              { name: 'Ansatt', fieldName: 'navn' },
              { name: 'Fødselsnr', fieldName: 'fnr' },
              { name: 'Beskrivelse', fieldName: 'beskrivelse' },
            ]}
            fullWidth
            caption={'Oversikt over ansatte'}
          />
        </Grid.Col>
      </Grid.Row>
    </Grid>
  </div>
);

const expandableContentLabelWithCallout = (data, close, rowIndex) => (
  <div>
    <Grid>
      <Grid.Row>
        <Grid.Col xl={12} sm={4}>
          <p></p>
        </Grid.Col>
        <Grid.Col xl={12} sm={8}>
          <LabelWithCallout
            label={'Vil du vite mer?'}
            help={'Oversikt over ansatte i perioden.'}
          />
        </Grid.Col>
      </Grid.Row>
      <Grid.Row>
        <Grid.Col xl={12}>
          <Table
            data={data.ansatte}
            showRowSeparators={false}
            columns={[
              { name: 'Ansatt', fieldName: 'navn' },
              { name: 'Fødselsnr', fieldName: 'fnr' },
              { name: 'Beskrivelse', fieldName: 'beskrivelse' },
            ]}
            fullWidth
            caption={'Oversikt over ansatte'}
          />
        </Grid.Col>
      </Grid.Row>
    </Grid>
  </div>
);

<>
  <Table
    data={data.map((d) => ({
      ...d,
    }))}
    columns={columns}
    expandableContent={expandableContent}
    expandIconPlacement={'before'}
    caption="Firmaoversikt"
    hideCaption
    expandIconPlacement={'after'}
    expandableRows
  />
  <p style={marginTopStyle}>
    Ekspanderbare rader med venstre-pil og bred innhold med nested
    LabelWithCallout:
  </p>
  <Table
    data={data.map((d) => ({
      ...d,
    }))}
    columns={columns}
    expandableContent={expandableContentLabelWithCallout}
    expandIconPlacement={'before'}
    caption="Firmaoversikt"
    sum={{ text: 'sum', colspan: 4, total: '30 500' }}
    hideCaption
    expandableRows
    fullWidth
  />

  <p style={marginTopStyle}>
    Tabellen kan ha bare noen linjer som er ekspanderbare. Dette er styrt av
    felt på selve rad dataen. hideExpand vil gjemme pil-knappen.
  </p>
  <Table
    data={dataWithHideExpand.map((d) => ({
      ...d,
    }))}
    columns={columns}
    expandableContent={expandableContent}
    expandIconPlacement={'before'}
    caption="Firmaoversikt"
    hideCaption
    expandIconPlacement={'after'}
    expandableRows
  />
</>;
```

Hele rader kan gjøres klikkbare med _openEditableOnRowClick_-attributtet, og tabeller kan gjøres kompakte med _compactTable_-atributtet.

```js
import { Grid } from '@skatteetaten/frontend-components/Grid';
import { Button } from '@skatteetaten/frontend-components/Button';
import { Table } from '@skatteetaten/frontend-components/Table';
import { TextField } from '@skatteetaten/frontend-components/TextField';

const wrapperStyle = {
  backgroundColor: '#f9ede2',
  padding: 12,
};

const blockRightStyle = {
  textAlign: 'right',
  marginTop: 20,
};

const buttonPaddingStyle = {
  marginLeft: '8px',
};

const tableStyle = {
  background: 'red',
  marginTop: 20,
};

const editableContent = (data, close, rowIndex) => (
  <div style={wrapperStyle}>
    <p>
      <strong>{data.Måned}</strong>
    </p>

    <Grid>
      <Grid.Row>
        <Grid.Col lg={4}>
          <TextField
            id={'textfield-1'}
            box
            calloutFloating={false}
            withLeadingIcon="search"
            label="Beløp"
            placeholder={''}
            help="Hjelpetekst som omhandler beløp."
          />
        </Grid.Col>
        <Grid.Col lg={4}>
          <TextField
            id={'textfield-2'}
            box
            calloutFloating={false}
            withLeadingIcon="search"
            label="Dekningsgrad"
            placeholder={''}
            help="Hjelpetekst som omhandler dekningsgrad"
          />
        </Grid.Col>
        <Grid.Col lg={4}>
          <TextField
            id={'textfield-3'}
            box
            calloutFloating={false}
            withLeadingIcon="search"
            label="Avkastning"
            placeholder={''}
            help="Hjelpetekst som omhandler avkastning"
          />
        </Grid.Col>
      </Grid.Row>
      <Grid.Row>
        <Grid.Col lg={5}></Grid.Col>
        <Grid.Col lg={7}>
          <div style={blockRightStyle}>
            <Button
              onClick={close}
              style={buttonPaddingStyle}
              buttonStyle="secondarySimple"
              icon="delete"
            >
              Slett
            </Button>
            <Button
              onClick={close}
              style={buttonPaddingStyle}
              buttonStyle="secondary"
            >
              Avbryt
            </Button>
            <Button
              onClick={close}
              style={buttonPaddingStyle}
              buttonStyle="primary"
            >
              Ok
            </Button>
          </div>
        </Grid.Col>
      </Grid.Row>
    </Grid>
  </div>
);

const columns = [
  {
    name: 'Dekningsgrad',
    fieldName: 'coverage',
    sortable: true,
    autohideSorting: false,
  },
  {
    name: 'Beløp',
    fieldName: 'amount',
    alignment: 'right',
    sortable: true,
    autohideSorting: false,
  },
  {
    name: 'Måned',
    fieldName: 'month',
    alignment: 'right',
  },

  {
    name: 'Avkastning',
    fieldName: 'revenue',
    alignment: 'right',
  },
];

const data = [
  {
    month: 'Januar',
    amount: 5426,
    coverage: '100 %',
    revenue: '1000',
  },
  {
    month: 'Februar',
    amount: 5432,
    coverage: '50 %',
    revenue: '500',
  },
  {
    month: 'Mars',
    amount: 4899,
    coverage: '20 %',
    revenue: '2000',
  },
  {
    month: 'April',
    amount: 2344,
    coverage: '30 %',
    revenue: '1055',
  },
];

<Table
  data={data}
  editableContent={editableContent}
  editableRows
  columns={columns}
  openEditableOnRowClick
  compactTable={true}
  caption="Månedoversikt"
  hideCaption
  sum={{ text: 'sum', colspan: 3, total: '30 500' }}
/>;
```

Tabellen kan ha bare noen linjer som er editerbare. Den kan også ha underlinjer. Begge disse er styrt av felter på selve rad dataen.
hideEdit vil gjemme edit knappen. Underlinjer kan legges inn i children feltet. Underlinjer vil ikke vises i edit modus og har ikke egen edit knapp.

```js
import { Grid } from '@skatteetaten/frontend-components/Grid';
import { Button } from '@skatteetaten/frontend-components/Button';
import { LabelWithCallout } from '@skatteetaten/frontend-components/LabelWithCallout';
import { Table } from '@skatteetaten/frontend-components/Table';
import { TextField } from '@skatteetaten/frontend-components/TextField';

const wrapperStyle = {
  backgroundColor: '#f9ede2',
  padding: 12,
};

const blockRightStyle = {
  textAlign: 'right',
  marginTop: 20,
};

const buttonPaddingStyle = {
  marginLeft: '8px',
};

const tableStyle = {
  background: 'red',
  marginTop: 20,
};

const caption = 'Månedoversikt';

const editableContent = (data, close, rowIndex) => (
  <div style={wrapperStyle}>
    <p>
      <strong>{data.Måned}</strong>
    </p>

    <Grid>
      <Grid.Row>
        <Grid.Col lg={5}>
          <TextField
            id={'textfield-1'}
            box
            calloutFloating={false}
            withLeadingIcon="search"
            label="Grunnlag"
            placeholder={''}
            help="Hjelpetekst som omhandler grunnlag."
          />
        </Grid.Col>
        <Grid.Col lg={2}>
          <TextField
            id={'textfield-2'}
            box
            calloutFloating={false}
            withLeadingIcon="search"
            label="Sats"
            suffix="%"
            placeholder={''}
            help="Hjelpetekst som omhandler dekningsgrad"
          />
        </Grid.Col>
        <Grid.Col lg={5}>
          <TextField
            id={'textfield-3'}
            box
            calloutFloating={false}
            withLeadingIcon="search"
            label="Mva"
            placeholder={''}
            help="Hjelpetekst som omhandler mva"
          />
        </Grid.Col>
      </Grid.Row>
      <Grid.Row>
        <Grid.Col lg={5}></Grid.Col>
        <Grid.Col lg={7}>
          <div style={blockRightStyle}>
            <Button
              onClick={close}
              style={buttonPaddingStyle}
              buttonStyle="secondarySimple"
              icon="delete"
            >
              Slett
            </Button>
            <Button
              onClick={close}
              style={buttonPaddingStyle}
              buttonStyle="secondary"
            >
              Avbryt
            </Button>
            <Button
              onClick={close}
              style={buttonPaddingStyle}
              buttonStyle="primary"
            >
              Ok
            </Button>
          </div>
        </Grid.Col>
      </Grid.Row>
    </Grid>
  </div>
);

const sortMva = (a, b) => parseInt(a) - parseInt(b);

const columns = [
  {
    name: 'Mva-kode',
    fieldName: 'kode',
    sortable: true,
    sortingFunction: sortMva,
    autohideSorting: false,
  },
  {
    name: 'Beskrivelse',
    fieldName: 'beskrivelse',
  },
  {
    name: 'Grunnlag',
    fieldName: 'grunnlag',
    alignment: 'right',
  },
  {
    name: 'Sats',
    fieldName: 'sats',
    alignment: 'right',
  },
  {
    name: 'Mva',
    fieldName: 'mva',
    alignment: 'right',
  },
];

const data = [
  {
    kode: '3',
    beskrivelse: 'Kjøp',
    grunnlag: '10 000',
    sats: '25 %',
    mva: '2 500',
    children: [
      {
        beskrivelse: 'Fradrag',
        sats: '25 %',
        mva: '-2 500',
      },
    ],
  },
  {
    kode: '1',
    beskrivelse: 'Salg av varer',
    grunnlag: '60 000',
    sats: '25 %',
    mva: '15 000',
    hideEdit: true,
  },
  {
    kode: '2',
    beskrivelse: 'Salg av tjenester',
    sats: '25 %',
    mva: '15 500',
  },
];

<Table
  data={data}
  editableContent={editableContent}
  editableRows={[0, 2]}
  columns={columns}
  caption={'Eksempel med sammenslåtte rader'}
  hideCaption
  sum={{ text: 'sum', colspan: 4, total: '30 500' }}
/>;
```

Tabeller skal ha en _caption_, men det er valgfritt å skjule den:

```js
import { ActionButton } from '@skatteetaten/frontend-components/ActionButton';
import { LabelWithCallout } from '@skatteetaten/frontend-components/LabelWithCallout';
import { Table } from '@skatteetaten/frontend-components/Table';

const columns = [
  {
    name: 'Navn',
    fieldName: 'navn',
  },
  {
    name: 'Tilgang gitt',
    fieldName: 'dato',
    alignment: 'right',
  },
];

const data = [
  {
    navn: 'Sven Lundquist',
    dato: '23.10.19',
  },
  {
    navn: 'Kai Mossige',
    dato: '25.11.19',
  },
];

const caption = 'Personer med tilgang';

<Table data={data} columns={columns} caption={caption} />;
```

```js noeditor uu
<>
  <h3>Tips</h3>
  <ul>
    <li>
      På små skjermer vil endre-ikon flyttes til venstre, og tabellen har
      horisontal scrolling ved behov.
    </li>
    <li>
      Husk at th-tags skal brukes på kolonneoverskrifter. Det kan også være
      fornuftig å bruke dette på radoverskrifter for å gjøre navigering i
      tabellen med skjermleser mer forståelig. Husk å bruke scope="row" og
      scope="col" for spesifisering.
    </li>
    <li>Tomme celler bør være td-tag.</li>
    <li>Sjekk at du kan velge ulik sortering med tastatur.</li>
    <li>
      Test med skjermleser at du hører hva som er sorterbart og at du ikke
      mister fokus når du velger en sortering.
    </li>
    <li>
      Tabeller skal alltid ha et caption-element, men det er mulig å visuelt
      skjule den dersom visningen ikke passer inn på siden. En caption
      (overskrift) kan hjelpe brukere med å finne, forstå og navigere i
      tabeller. De fleste skjermlesere vil lese opp innholdet fra
      caption-elementet, og er derfor til hjelp når skjermleserbrukere skal
      avgjøre om de vil lese innholdet eller ikke.
    </li>
  </ul>

  <h3>Mest relevante WCAG-krav</h3>
  <ul>
    <li>1.3.1 A, Informasjon og relasjoner</li>
    <li>4.1.2 A, Navn, rolle, verdi</li>
  </ul>

  <h3>WAI-ARIA</h3>
  <ul>
    <li>
      Aria-sort gir beskjed om noe er sorterbart og om det er sortert stigende
      eller synkende.
    </li>
    <li>Aria-hidden brukes for å skjule ikoner for skjermleser. </li>
  </ul>
</>
```

```js noeditor beskrivelse
<>
  <h3>Enkel tabell</h3>
  <p>
    Table-komponenten fungerer godt når du har mindre datamengder. Har du
    derimot store mengder data og/eller behov for avansert funksjonalitet – bør
    du vurdere{' '}
    <a
      class="brodtekst-link"
      href="https://skatteetaten.github.io/frontend-components/#detailslist"
    >
      {' '}
      Detailslist (sammensatt tabell)
    </a>{' '}
    i stedet.
  </p>
  <h3>Vise eller redigere enkeltrad</h3>
  <p>Komponenten har to tilstander:</p>
  <ul>
    <li>Visningtilstand som bare viser data.</li>
    <li>
      Redigering av enkeltrad. Brukeren må fullføre redigering av en rad for å
      kunne redigere en annen.
    </li>
  </ul>
  <p>Du kan også sette opp komponenten uten mulighet for redigering.</p>
</>
```
