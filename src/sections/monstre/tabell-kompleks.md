```js noeditor
import Table from '@skatteetaten/frontend-components/Table';
import Grid from '@skatteetaten/frontend-components/Grid';
import TextField from '@skatteetaten/frontend-components/TextField';
import IconButton from '@skatteetaten/frontend-components/IconButton';
//import Dropdown from '@skatteetaten/frontend-components/Dropdown';
import { Dropdown } from 'office-ui-fabric-react/lib/Dropdown';

import Accordion from '@skatteetaten/frontend-components/Accordion';
import AccordionItem from '@skatteetaten/frontend-components/Accordion/AccordionItem';
import Card from '@skatteetaten/frontend-components/Card';

import moment from 'moment';

const sortMonths = (a, b) => moment(a, 'MMMM').diff(moment(b, 'MMMMM'));

const mockColumns = [
  {
    name: 'Gruppe',
    fieldName: 'grp',
    sortable: true,
    sortingFunction: sortMonths,
    autohideSorting: false
  },
  {
    name: 'Januar',
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

const mockData = [
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
const dropdownItems = colums => {
  let items = [];

  colums &&
    colums.forEach(item => {
      items.push({ key: item.fieldName, text: item.name });
    });

  return items;
};

const [selectedColums, setSelectedColums] = React.useState(
  mockColumns.map(item => item.fieldName)
);

function getDropdownItems(colums) {
  let items = [];

  colums.forEach(item => {
    items.push({ key: item.fieldName, text: item.name });
  });

  return items;
}

function onChange(item) {
  if (item) {
    setSelectedColums(
      item.selected
        ? [...selectedColums, item.key]
        : selectedColums.filter(key => key !== item.key)
    );
  }
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
      Tabeller er gode når man skal sammenligne opplysninger, men kan bli
      uoversiktlige med mye informasjon. Vurder derfor om noe kan fjernes eller
      vises et annet sted. Dersom du allikevel må bruke stor tabell, anbefaler
      vi følgende mønstre:
    </p>
    <ul>
      <li>
        Plasser de mest sentrale opplysningene til venstre. De vil leses først
        og kuttes/skjules sist.
      </li>
      <li>
        Vis kun kolonner som er nødvendige. For større fleksibilitet kan du la
        brukeren vise/skjule kolonner selv.
      </li>
      <li>
        Horisontal skroll er ok i tabeller som er for brede på mobil. Unngå
        horisontal skroll på stor skjerm.
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
        For store tabeller på små skjermer, kan du benytte horisontal skroll:
      </p>
      <div style={{ maxWidth: '500px', overflowX: 'visible' }}>
        <Table
          data={mockData}
          columns={mockColumns}
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
      <p>Store tabeller på små skjermer kan alternativt vises vertikalt:</p>
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
        Funksjonalitet for å vise/skjule kolonner kan være nyttig for brede
        tabeller:
      </p>
      <div style={{ display: 'flex', justifyContent: 'space-between' }}>
        <h3>Månedoversikt</h3>

        <Dropdown
          label="Vis/skjul kolonner"
          options={dropdownItems(mockColumns)}
          defaultSelectedKeys={selectedColums}
          multiSelect
          onChange={(event, item) => onChange(item)}
          style={{ maxWidth: '200px' }}
          caption="Månedsoversikt"
        />
      </div>

      <Table
        data={mockData}
        columns={mockColumns.filter(item =>
          selectedColums.includes(item.fieldName)
        )}
        openEditableOnRowClick
        compactTable={true}
        caption="Månedsoversikt"
        hideCaption={true}
      />
    </AccordionItem>
  </Accordion>
</>;
```
