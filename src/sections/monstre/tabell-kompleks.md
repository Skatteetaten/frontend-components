```js noeditor
import Table from '@skatteetaten/frontend-components/Table';
import Grid from '@skatteetaten/frontend-components/Grid';
import TextField from '@skatteetaten/frontend-components/TextField';
import IconButton from '@skatteetaten/frontend-components/IconButton';
import Dropdown from '@skatteetaten/frontend-components/Dropdown';
import Accordion from '@skatteetaten/frontend-components/Accordion';
import AccordionItem from '@skatteetaten/frontend-components/Accordion/AccordionItem';
import Card from '@skatteetaten/frontend-components/Card';

import moment from 'moment';

const sortMonths = (a, b) => moment(a, 'MMMM').diff(moment(b, 'MMMMM'));

const selectedColums = [
  'grp',
  'jan',
  'feb',
  'mar',
  'mai',
  'apr',
  'mai',
  'jun',
  'jul',
  'aug',
  'sep',
  'okt',
  'nov',
  'des'
];

const columns = [
  {
    name: 'Gruppe',
    fieldName: 'grp',
    sortable: true,
    sortingFunction: sortMonths,
    autohideSorting: false
  },
  {
    name: 'Januer',
    fieldName: 'jan',
    alignment: 'right',
    sortable: false,
    autohideSorting: true
  },
  {
    name: 'Februar',
    fieldName: 'feb',
    alignment: 'right',
    sortable: false,
    autohideSorting: true
  },
  {
    name: 'Mars',
    fieldName: 'mar',
    alignment: 'right',
    sortable: false,
    autohideSorting: true
  },
  {
    name: 'April',
    fieldName: 'apr',
    alignment: 'right',
    sortable: false,
    autohideSorting: true
  },
  {
    name: 'Mai',
    fieldName: 'mai',
    alignment: 'right',
    sortable: false,
    autohideSorting: true
  },
  {
    name: 'Juni',
    fieldName: 'jun',
    alignment: 'right',
    sortable: false,
    autohideSorting: true
  },
  {
    name: 'Juli',
    fieldName: 'jul',
    alignment: 'right',
    sortable: false,
    autohideSorting: true
  },
  {
    name: 'August',
    fieldName: 'aug',
    alignment: 'right',
    sortable: false,
    autohideSorting: true
  },
  {
    name: 'September',
    fieldName: 'sep',
    alignment: 'right',
    sortable: false,
    autohideSorting: true
  },
  {
    name: 'Oktober',
    fieldName: 'okt',
    alignment: 'right',
    sortable: false,
    autohideSorting: true
  },
  {
    name: 'November',
    fieldName: 'nov',
    alignment: 'right',
    sortable: false,
    autohideSorting: true
  },
  {
    name: 'Desember',
    fieldName: 'des',
    alignment: 'right',
    sortable: false,
    autohideSorting: true
  }
];

function formatNumber(count) {
  return `${new Intl.NumberFormat('no-NB').format(count)}`;
}

const data = [
  {
    grp: 'Fastlønn',
    jan: formatNumber(64793),
    feb: formatNumber(48251),
    mar: formatNumber(48251),
    apr: formatNumber(48251),
    mai: formatNumber(48251),
    jun: formatNumber(48251),
    jul: formatNumber(48251),
    aug: formatNumber(48251),
    sep: formatNumber(48251),
    okt: formatNumber(48251),
    nov: formatNumber(48251),
    des: formatNumber(48251)
  },
  {
    grp: 'Kontantytelse',
    jan: formatNumber(1793),
    feb: formatNumber(251),
    mar: formatNumber(7382),
    apr: formatNumber(0),
    mai: formatNumber(40),
    jun: formatNumber(99),
    jul: formatNumber(390),
    aug: formatNumber(16933),
    sep: formatNumber(0),
    okt: formatNumber(0),
    nov: formatNumber(0),
    des: formatNumber(0)
  }
];
const dropdownItems = getDropdownItems(columns);

function getDropdownItems(colums) {
  let items = [];

  colums.forEach(item => {
    items.push({ key: item.fieldName, text: item.name });
  });

  return items;
}

function isSelected(selectItems, key) {
  return selectItems.includes(key);
}

<>
  <Card
    title="Hovedregler for store tabeller"
    color={Card.Color.WHITE}
    border={Card.Border.YELLOW_BORDER}
    titlesize="x-large"
    margin="large"
  >
    <p>
      Tabeller er gode når man skal sammenligne opplysninger, men hvis det blir
      for mye informasjon i dem kan de fort bli uoversiktlige. Det første vi
      anbefaler er derfor å stille spørsmål til om du er <em>helt sikker</em> på
      at du trenger å vise alle opplysningene; vurder om det er noe du kan
      fjerne eller like gjerne kan vise et annet sted. Men i de tilfellene hvor
      tabellene er og blir store, er det noen mønstre som kan være nyttige.
    </p>
    <ul>
      <li>
        Legg de mest sentrale opplysningene i tabellen til venstre slik at de
        leses først og kuttes sist.
      </li>
      <li>
        Skjul eller fjern kolonner som ikke er nødvendige. Hvis behovet varierer
        kan du la brukeren vise/skjule kolonner selv.
      </li>
      <li>
        Det er ok å bruke horisontal skroll på en tabell som er for bred for
        mobil. Unngå horisontal skrolling på store skjermer.
      </li>
    </ul>
  </Card>

  <h2>Se veiledning og eksempler på store tabeller:</h2>

  <Accordion>
    <AccordionItem
      toggleContent
      toggleButtonText={'Horisontal skroll på liten skjerm'}
      headingLevel="3"
      stepId={'step-1'}
    >
      <p>
        Dersom en tabell blir for stor på små skjermer kan vi bruke horisontal
        skrolling.
      </p>
      <div style={{ maxWidth: '500px', overflowX: 'visible' }}>
        <Table
          data={data}
          columns={columns}
          openEditableOnRowClick
          compactTable={false}
          caption="Månedsoversikt"
        />
      </div>
    </AccordionItem>
    <AccordionItem
      toggleContent
      toggleButtonText={'Vertikal visning på liten skjerm'}
      headingLevel="3"
      stepId={'step-2'}
    >
      <p>
        Dersom en tabell blir for stor på liten skjerm kan vi presentere
        opplysningene vertikalt i stedet.
      </p>
      <div style={{ maxWidth: '500px', overflowX: 'visible' }}>
        <h3>Månedoversikt</h3>

        <Card title="Januar" titlesize="medium" marginBottom="2px">
          <p style={{ margin: '0px' }}>Fastlønn: 64 793</p>
          <p style={{ margin: '0px' }}>Kontantytelse: 1 793</p>
        </Card>
        <Card title="Februar" titlesize="medium" marginBottom="2px">
          <p style={{ margin: '0px' }}>Fastlønn: 48 251</p>
          <p style={{ margin: '0px' }}>Kontantytelse: 251</p>
        </Card>
        <Card title="Mars" titlesize="medium" marginBottom="2px">
          <p style={{ margin: '0px' }}>Fastlønn: 48 251</p>
          <p style={{ margin: '0px' }}>Kontantytelse: 7 382</p>
        </Card>
        <Card title="April" titlesize="medium" marginBottom="2px">
          <p style={{ margin: '0px' }}>Fastlønn: 48 251</p>
          <p style={{ margin: '0px' }}>Kontantytelse: 0</p>
        </Card>
        <p>Fortsetter...</p>
      </div>
    </AccordionItem>
    <AccordionItem
      toggleContent
      toggleButtonText={'Vis/skjul kolonner'}
      headingLevel="3"
      stepId={'step-3'}
    >
      <p>
        Dersom en tabell er for bred kan vi la brukeren selv vise/skjule
        kolonner.
      </p>
      <div style={{ display: 'flex', justifyContent: 'space-between' }}>
        <h3>Månedoversikt</h3>

        <Dropdown
          label="Vis/skjul kolonner"
          options={dropdownItems}
          defaultSelectedKeys={selectedColums}
          multiSelect
          onChange={console.log}
          style={{ maxWidth: '200px' }}
          caption="Månedsoversikt"
        />
      </div>

      <Table
        data={data}
        columns={columns}
        openEditableOnRowClick
        compactTable={true}
        caption="Månedsoversikt"
        hideCaption={true}
      />
    </AccordionItem>
  </Accordion>
</>;
```
