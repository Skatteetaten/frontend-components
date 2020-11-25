Tabeller med mye data kan fort bli uoversiktlige. Det første vi anbefaler er derfor å stille spørsmål til om du er _helt sikker_ på at du trenger å vise alle opplysningene; vurder om det er noen opplysninger du kan fjerne eller like gjerne kan vises et annet sted. Men i de tilfellene hvor tabellene er og blir store, er det noen mønstre som kan være nyttige.

Tabell med rullefelt

```js
import Table from '@skatteetaten/frontend-components/Table';
import Grid from '@skatteetaten/frontend-components/Grid';
import TextField from '@skatteetaten/frontend-components/TextField';
import IconButton from '@skatteetaten/frontend-components/IconButton';
import Dropdown from '@skatteetaten/frontend-components/Dropdown';

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

const data = [
  {
    grp: 'Fastlønn',
    jan: '64 793',
    feb: '48 251',
    mar: '48 251',
    apr: '48 251',
    mai: '48 251',
    jun: '48 251',
    jul: '48 251',
    aug: '48 251',
    sep: '48 251',
    okt: '48 251',
    nov: '48 251',
    des: '48 251'
  },
  {
    grp: 'Kontantytelse',
    jan: '1 793',
    feb: '251',
    mar: '7 382',
    apr: '0',
    mai: '40',
    jun: '99',
    jul: '390',
    aug: '16 933',
    sep: '0',
    okt: '0',
    nov: '0',
    des: '0'
  }
];

<div style={{ maxWidth: '500px', overflowY: 'scroll' }}>
  <Table
    data={data}
    columns={columns}
    openEditableOnRowClick
    compactTable={true}
  />
</div>;
```

Tabell med valgbare kolonner

```js
import Table from '@skatteetaten/frontend-components/Table';
import Grid from '@skatteetaten/frontend-components/Grid';
import TextField from '@skatteetaten/frontend-components/TextField';
import IconButton from '@skatteetaten/frontend-components/IconButton';
import Dropdown from '@skatteetaten/frontend-components/Dropdown';

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

const dropdownItems = getDropdownItems(columns);
console.log(dropdownItems);

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

const data = [
  {
    grp: 'Fastlønn',
    jan: '64 793',
    feb: '48 251',
    mar: '48 251',
    apr: '48 251',
    mai: '48 251',
    jun: '48 251',
    jul: '48 251',
    aug: '48 251',
    sep: '48 251',
    okt: '48 251',
    nov: '48 251',
    des: '48 251'
  },
  {
    grp: 'Kontantytelse',
    jan: '1 793',
    feb: '251',
    mar: '7 382',
    apr: '0',
    mai: '40',
    jun: '99',
    jul: '390',
    aug: '16 933',
    sep: '0',
    okt: '0',
    nov: '0',
    des: '0'
  }
];

function refreshTableColumns() {}

<>
  <div style={{ display: 'flex', justifyContent: 'space-between' }}>
    <h3>Månedoversikt</h3>

    <Dropdown
      label="Vis/skjul"
      help="Viser eller skjuler kolonner i tabellen"
      options={dropdownItems}
      defaultSelectedKeys={selectedColums}
      multiSelect
      onChange={console.log}
      style={{ maxWidth: '200px' }}
    />
  </div>
  <Table
    data={data}
    columns={columns}
    openEditableOnRowClick
    compactTable={true}
  />
</>;
```
