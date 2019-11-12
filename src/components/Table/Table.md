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
    sortingFunction: sortMonths
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
    dato: '23.11.19',
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

```js noeditor
import Accordion from '@skatteetaten/frontend-components/Accordion';
import AccordionItem from '@skatteetaten/frontend-components/Accordion/AccordionItem';

<Accordion>
  <AccordionItem
    isOpen
    toggleContent
    toggleButtonText={'Bruk'}
    stepId={'step-1-1'}
  >
    <p>
      Table-komponenten kan med fordel brukes ved mindre datamengder. (Har du
      store mengder data og/eller behov for avansert funksjonalitet - vurderer
      DetailsList i stedet).
    </p>
    <p>
      Komponenten har to tilstander; visningtilstand som bare viser data, og
      redigering av enkeltrad. Man må fullføre redigering av raden før man kan
      redigere en annen.
    </p>
    <p>Det er også mulig å bruke komponenten uten redigering.</p>
  </AccordionItem>
  <AccordionItem
    toggleContent
    toggleButtonText={'Universell utforming'}
    stepId={'step-1-2'}
  >
    <p>
      På små skjermer vil endre-ikon flyttes til venstre, og tabellen har
      horisontal skrolling ved behov.
    </p>
  </AccordionItem>
  <AccordionItem
    toggleContent
    toggleButtonText={'Tekniske detaljer'}
    stepId={'step-1-3'}
  >
    <p>
      Dette er en egenutviklet komponent, så det finnes ingen flere props
      tilgjengelig. Komponenten vil rendres som standard table-element (html).
    </p>
  </AccordionItem>
</Accordion>;
```
