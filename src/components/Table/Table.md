** Tabeller brukes til å liste ut strukturerte data.**

```js
import Table from '@skatteetaten/frontend-components/Table';
import Grid from '@skatteetaten/frontend-components/Grid';
import TextField from '@skatteetaten/frontend-components/TextField';
import IconButton from '@skatteetaten/frontend-components/IconButton';

import moment from 'moment';

const wrapperStyle = {
  backgroundColor: '#f9ede2',
  padding: 12
};

const blockCenterStyle = {
  textAlign: 'center',
  marginTop: 20
};

const tableStyle = {
  background: 'red',
  marginTop: 20
};

const editableContent = (data, close, rowIndex) => (
  <div style={wrapperStyle}>
    <p>
      <strong>{data.Måned}</strong>
    </p>

    <Grid>
      <Grid.Row>
        <Grid.Col lg={3}>
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
        <Grid.Col lg={3}>
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
        <Grid.Col lg={3}>
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
        <Grid.Col lg={3}>
          <div style={blockCenterStyle}>
            <IconButton title="Lagre" circle icon="Check" />
            {'  '}
            <IconButton
              onClick={close}
              title="Angre"
              circle
              icon="Cancel"
            />{' '}
            <IconButton title="Slett" circle icon="Delete" />{' '}
          </div>
        </Grid.Col>
      </Grid.Row>
    </Grid>
  </div>
);

const sortMonths = (a, b) => moment(a, 'MMMM').diff(moment(b, 'MMMMM'));

const columns = [
  {
    name: 'Måned',
    fieldName: 'month',
    sortable: true,
    sortingFunction: sortMonths,
    autohideSorting: false
  },
  {
    name: 'Beløp',
    fieldName: 'amount',
    alignment: 'right',
    sortable: true,
    autohideSorting: false
  },
  {
    name: 'Dekningsgrad',
    fieldName: 'coverage',
    alignment: 'right'
  },
  {
    name: 'Avkastning',
    fieldName: 'revenue',
    alignment: 'right'
  }
];

const data = [
  {
    month: 'Januar',
    amount: 5426,
    coverage: '100%',
    revenue: '1000'
  },
  {
    month: 'Februar',
    amount: 5432,
    coverage: '50%',
    revenue: '500'
  },
  {
    month: 'Mars',
    amount: 4899,
    coverage: '20%',
    revenue: '2000'
  },
  {
    month: 'April',
    amount: 2344,
    coverage: '30%',
    revenue: '1055'
  }
];

<Table
  className="test"
  data={data}
  editableContent={editableContent}
  editableRows
  columns={columns}
/>;
```

** Man kan styre hvilke kolonner som skal vises på mobil med _hideOnMobile_-attributtet:**

```js
import Table from '@skatteetaten/frontend-components/Table';
import ActionButton from '@skatteetaten/frontend-components/ActionButton';

const columns = [
  {
    name: 'Navn',
    fieldName: 'navn'
  },
  {
    name: 'Tilgang gitt',
    fieldName: 'dato',
    alignment: 'right',
    hideOnMobile: true
  },
  {
    name: '',
    fieldName: 'kanSlettes'
  }
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
    )
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
    )
  }
];

<Table data={data} columns={columns} />;
```

Ekspanderbare rader

```js
import Table from '@skatteetaten/frontend-components/Table';
import ActionButton from '@skatteetaten/frontend-components/ActionButton';

const columns = [
  {
    name: 'Firma',
    fieldName: 'firma'
  },
  {
    name: 'Timestamp',
    fieldName: 'timestamp'
  },
  {
    name: 'Status',
    fieldName: 'status'
  },
  {
    name: 'Stopp',
    fieldName: 'stopp'
  },
  {
    name: 'Restart',
    fieldName: 'restart'
  },
  { name: 'ETA', fieldName: 'eta' }
];

const data = [
  {
    firma: 'Bluth Company',
    timestamp: '2020-08-04 11:31:57 UTC',
    status: 'RUNNING',
    eta: '01d 04h 23m 05s',
    ansatte: [
      {
        navn: 'Per Olsen',
        fnr: '01012020 99999',
        beskrivelse:
          'Her er det ganske enkel informasjon i den ekspanderbare raden.'
      }
    ]
  },
  {
    firma: 'Business Engros',
    timestamp: '2020-08-04 11:32:16 UTC',
    status: 'RUNNING',
    eta: '01d 04h 23m 05s',
    ansatte: [
      {
        navn: 'Bryce Navnesen',
        fnr: '02012020 99999',
        beskrivelse:
          'Her er det ganske enkel informasjon i den ekspanderbare raden.'
      },
      {
        navn: 'Alice Middleman',
        fnr: '03012020 99999',
        beskrivelse:
          'Her er det ganske enkel informasjon i den ekspanderbare raden.'
      }
    ]
  },
  {
    firma: 'Corwood Industries',
    timestamp: '2020-08-04 11:32:16 UTC',
    status: 'ERROR',
    eta: '00d 03h 05m 48s',
    ansatte: [
      {
        navn: 'Kai Mossige',
        fnr: '01012020 99999',
        beskrivelse:
          'Her er det ganske enkel informasjon i den ekspanderbare raden.'
      }
    ]
  },
  {
    firma: 'Limerick Partner',
    timestamp: '2020-08-04 11:32:47 UTC',
    status: 'FINISHED',
    eta: '00d 00h 00m 00s',
    ansatte: [
      {
        navn: 'Kari Saksbehandler',
        fnr: '01012020 99999',
        beskrivelse:
          'Her er det ganske enkel informasjon i den ekspanderbare raden.'
      },
      {
        navn: 'Bob Egil Hansen',
        fnr: '04012020 99999',
        beskrivelse:
          'Her er det ganske enkel informasjon i den ekspanderbare raden.'
      }
    ]
  }
];
const expandableContent = (data, close, rowIndex) => (
  <Table
    data={data.ansatte}
    columns={[
      { name: 'Ansatt', fieldName: 'navn' },
      { name: 'Fødselsnr', fieldName: 'fnr' },
      { name: 'Beskrivelse', fieldName: 'beskrivelse' }
    ]}
    fullWidth
  />
);

<Table
  data={data.map(d => ({
    ...d,
    stopp: (
      <ActionButton icon="Cancel" onClick={() => console.log('stopp')}>
        Stopp
      </ActionButton>
    ),
    restart: (
      <ActionButton icon="Update" onClick={() => console.log('restart')}>
        Restart
      </ActionButton>
    )
  }))}
  columns={columns}
  expandableRows
  expandableContent={expandableContent}
  expandIconPlacement={'before'}
/>;
```

```js noeditor uu
<h3>Tips</h3>
<ul>
<li>På små skjermer vil endre-ikon flyttes til venstre, og tabellen har horisontal scrolling ved behov.</li>
<li>Husk at th-tags skal brukes på kolonneoverskrifter. Det kan også være fornuftig å bruke dette på radoverskrifter for å gjøre navigering i tabellen med skjermleser mer forståelig. Husk å bruke scope=row og scope=col for spesifisering.</li>
<li>Tomme celler bør være td-tag.</li>
<li>Sjekk at du kan velge ulik sortering med tastatur.</li>
<li>Test med skjermleser at du hører hva som er sorterbart og at du ikke mister fokus når du velger en sortering.</li>
</ul>

<h3>Mest relevante WCAG-krav</h3>
<ul>
<li>1.3.1 A, Informasjon og relasjoner</li>
<li>4.1.2 A, Navn, rolle, verdi</li>
</ul>

<h3>WAI-ARIA</h3>
<ul>
<li>Aria-sort gir beskjed om noe er sorterbart og om det er sortert stigende eller synkende.</li>
<li>Aria-hidden brukes for skjule ikoner for skjermleser. </li>
</ul>
```

```js noeditor beskrivelse
  <h3>Enkel tabell</h3>
  <p>
    Table-komponenten kan med fordel brukes ved mindre datamengder. (Har du
    store mengder data og/eller behov for avansert funksjonalitet - vurderer
    DetailsList i stedet).
  </p>
  <h3>Vise eller redigere enkeltrad</h3>
  <p>
    Komponenten har to tilstander; visningtilstand som bare viser data, og
    redigering av enkeltrad. Man må fullføre redigering av raden før man kan
    redigere en annen.
  </p>
  <p>Det er også mulig å bruke komponenten uten redigering.</p>
```
