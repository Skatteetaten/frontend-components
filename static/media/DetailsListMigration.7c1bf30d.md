**Fra @skatteetaten/frontend-components v15+ (designsystem-legacy) til Designsystemet v1.5.0**

## Endringer i funksjonalitet:

- DetailsList har blitt erstattet av Table fra @skatteetaten/ds-table.

### Styling:

- de nye komponentene i designsystemet er avhengige av designtokens. Disse leveres nå som en separat pakke. <a class="brodtekst-link" href="#section-designtokens-deprecated">Se designtokens for detaljer.</a>

### Endringer i API:

For full API-dokumentasjon, vennligst se på <a class="brodtekst-link" href="https://www.skatteetaten.no/stilogtone/designsystemet/komponenter/table/">Table komponent</a> på dokumentasjonssiden til designsystemet.

<div class="migration-tabell">
<table>
<caption>Liste over endringer i komponent-api'et</caption>
<thead><tr><th>Tidligere Prop</th><th>Alternativ</th></tr></thead>
<tbody>
<tr>
<td>'componentRef'</td>
<td>

'ref'

Alle komponentene våre bruker forwardRef.

</td>
</tr>
<tr>
<td>
'Items'

'columns'

</td>
<td>

Faset ut.
Komplekse tabeller kan nå bygges opp med Table komponenten.

Før:

```javascript static
import { DetailsList } from '@skatteetaten/frontend-components/DetailsList';

const [state, setState] = React.useState({
  columns: [
    {
      key: 'column1',
      name: 'Fastsatt',
      fieldName: 'fastsatt',
      minWidth: 50,
      maxWidth: 200,
      isResizable: true,
      isSorted: true,
      isSortedDescending: false,
      sortItems: ({ isDescending, fieldName, items }) => {
        if (isDescending) {
          return items.sort((a, b) => a[fieldName].localeCompare(b[fieldName]));
        } else {
          return items.sort((a, b) => b[fieldName].localeCompare(a[fieldName]));
        }
      },
    },
    {
      key: 'column2',
      name: 'Avgiftstype',
      fieldName: 'avgiftstype',
      minWidth: 50,
      maxWidth: 150,
      isResizable: true,
      isSortable: true,
      isSorted: false,
      isSortedDescending: false,
      headerClassName: 'is-sortable',
      sortItems: ({ isDescending, fieldName, items }) => {
        if (isDescending) {
          return items.sort((a, b) => a[fieldName].localeCompare(b[fieldName]));
        } else {
          return items.sort((a, b) => b[fieldName].localeCompare(a[fieldName]));
        }
      },
    },
    {
      key: 'column3',
      name: 'Avgiftsgruppe',
      fieldName: 'avgiftsgruppe',
      minWidth: 50,
      maxWidth: 150,
      isResizable: true,
    },
    {
      key: 'column4',
      name: 'Beløp',
      fieldName: 'beloep',
      minWidth: 100,
      maxWidth: 200,
      isResizable: true,
    },
    {
      key: 'column5',
      name: 'Fritak',
      fieldName: 'fritak',
      minWidth: 50,
      maxWidth: 150,
      isResizable: true,
    },
    {
      key: 'column6',
      name: 'Status',
      fieldName: 'status',
      minWidth: 100,
      maxWidth: 200,
      isResizable: true,
    },
  ],
  items: [
    {
      fastsatt: '31.01.2018',
      avgiftstype: 'OR',
      avgiftsgruppe: '525',
      beloep: '6045',
      fritak: '',
      status: 'Iverksatt',
      kravgrunnlag: null,
      links: null,
    },
    {
      fastsatt: '31.05.2018',
      avgiftstype: 'BR',
      avgiftsgruppe: '525',
      beloep: '6033',
      fritak: '',
      status: 'Iverksatt',
      kravgrunnlag: null,
      links: null,
    },
    {
      fastsatt: '02.03.2018',
      avgiftstype: 'AR',
      avgiftsgruppe: '525',
      beloep: '6064',
      fritak: '',
      status: 'Under arbeid',
      kravgrunnlag: null,
      links: null,
    },
    {
      fastsatt: '03.03.2018',
      avgiftstype: 'DR',
      avgiftsgruppe: '525',
      beloep: '6064',
      fritak: '',
      status: 'Under arbeid',
      kravgrunnlag: null,
      links: null,
    },
    {
      fastsatt: '04.01.2018',
      avgiftstype: 'BR',
      avgiftsgruppe: '525',
      beloep: '6064',
      fritak: '',
      status: 'Under arbeid',
      kravgrunnlag: null,
      links: null,
    },
  ],
});
<DetailsList
  columns={state.columns}
  items={state.items}
  constrainMode={DetailsList.ConstrainMode.horizontalConstrained}
  onSortUpdate={({ items, columns }) => setState({ items, columns })}
/>;
```

Nå:

```js static
const items = [
  {
    fastsatt: '31.01.2018',
    avgiftstype: 'OR',
    avgiftsgruppe: '525',
    beloep: '6045',
    status: 'Iverksatt',
    id: '1',
  },
  {
    fastsatt: '31.05.2018',
    avgiftstype: 'BR',
    avgiftsgruppe: '525',
    beloep: '6033',
    status: 'Iverksatt',
    id: '2',
  },
  {
    fastsatt: '02.03.2018',
    avgiftstype: 'AR',
    avgiftsgruppe: '525',
    beloep: '6064',
    status: 'Under arbeid',
    id: '3',
  },
  {
    fastsatt: '03.03.2018',
    avgiftstype: 'DR',
    avgiftsgruppe: '525',
    beloep: '6064',
    status: 'Under arbeid',
    id: '4',
  },
  {
    fastsatt: '04.01.2018',
    avgiftstype: 'BR',
    avgiftsgruppe: '525',
    beloep: '6064',
    status: 'Under arbeid',
    id: '5',
  },
];

<Table caption={'avgiftsstatus'}>
  <Table.Header>
    <Table.Row>
      <Table.HeaderCell>{'Fastsatt'}</Table.HeaderCell>
      <Table.HeaderCell>{'avgiftstype'}</Table.HeaderCell>
      <Table.HeaderCell>{'avgiftsgruppe'}</Table.HeaderCell>
      <Table.HeaderCell>{'Beløp'}</Table.HeaderCell>
      <Table.HeaderCell>{'Status'}</Table.HeaderCell>
    </Table.Row>
  </Table.Header>
  <Table.Body>
    {items.map((item, index) => (
      <Table.Row key={item.id}>
        <Table.DataCell>{item.fastsatt}</Table.DataCell>
        <Table.DataCell>{item.avgiftstype}</Table.DataCell>
        <Table.DataCell>{item.avgiftsgruppe}</Table.DataCell>
        <Table.DataCell>{item.beloep}</Table.DataCell>
        <Table.DataCell>{item.status}</Table.DataCell>
      </Table.Row>
    ))}
  </Table.Body>
</Table>;
```

</td>
</tr>
<tr>
<td>
'selection'

'selectionMode'

'selectionPreservedOnEmptyClick'

'selectionZoneProps'

'checkboxVisibility'

</td>
<td>
Funksjonalitet for å velge rader er ikke videreført i Table-komponenten, men kan gjenskapes med
Checkbox - komponenten.

Før

```javascript static
import { DetailsList } from '@skatteetaten/frontend-components/DetailsList';

const [state, setState] = React.useState({
  columns: [
    {
      key: 'column1',
      name: 'Fastsatt',
      fieldName: 'fastsatt',
      minWidth: 50,
      maxWidth: 200,
      isResizable: true,
      isSorted: true,
      isSortedDescending: false,
      sortItems: ({ isDescending, fieldName, items }) => {
        if (isDescending) {
          return items.sort((a, b) => a[fieldName].localeCompare(b[fieldName]));
        } else {
          return items.sort((a, b) => b[fieldName].localeCompare(a[fieldName]));
        }
      },
    },
    {
      key: 'column2',
      name: 'Avgiftstype',
      fieldName: 'avgiftstype',
      minWidth: 50,
      maxWidth: 150,
      isResizable: true,
      isSortable: true,
      isSorted: false,
      isSortedDescending: false,
      headerClassName: 'is-sortable',
      sortItems: ({ isDescending, fieldName, items }) => {
        if (isDescending) {
          return items.sort((a, b) => a[fieldName].localeCompare(b[fieldName]));
        } else {
          return items.sort((a, b) => b[fieldName].localeCompare(a[fieldName]));
        }
      },
    },
    {
      key: 'column3',
      name: 'Avgiftsgruppe',
      fieldName: 'avgiftsgruppe',
      minWidth: 50,
      maxWidth: 150,
      isResizable: true,
    },
    {
      key: 'column4',
      name: 'Beløp',
      fieldName: 'beloep',
      minWidth: 100,
      maxWidth: 200,
      isResizable: true,
    },
    {
      key: 'column5',
      name: 'Fritak',
      fieldName: 'fritak',
      minWidth: 50,
      maxWidth: 150,
      isResizable: true,
    },
    {
      key: 'column6',
      name: 'Status',
      fieldName: 'status',
      minWidth: 100,
      maxWidth: 200,
      isResizable: true,
    },
  ],
  items: [
    {
      fastsatt: '31.01.2018',
      avgiftstype: 'OR',
      avgiftsgruppe: '525',
      beloep: '6045',
      fritak: '',
      status: 'Iverksatt',
      kravgrunnlag: null,
      links: null,
    },
    {
      fastsatt: '31.05.2018',
      avgiftstype: 'BR',
      avgiftsgruppe: '525',
      beloep: '6033',
      fritak: '',
      status: 'Iverksatt',
      kravgrunnlag: null,
      links: null,
    },
    {
      fastsatt: '02.03.2018',
      avgiftstype: 'AR',
      avgiftsgruppe: '525',
      beloep: '6064',
      fritak: '',
      status: 'Under arbeid',
      kravgrunnlag: null,
      links: null,
    },
    {
      fastsatt: '03.03.2018',
      avgiftstype: 'DR',
      avgiftsgruppe: '525',
      beloep: '6064',
      fritak: '',
      status: 'Under arbeid',
      kravgrunnlag: null,
      links: null,
    },
    {
      fastsatt: '04.01.2018',
      avgiftstype: 'BR',
      avgiftsgruppe: '525',
      beloep: '6064',
      fritak: '',
      status: 'Under arbeid',
      kravgrunnlag: null,
      links: null,
    },
  ],
});

<DetailsList
  marqueeSelection
  columns={state.columns}
  items={state.items}
  selectionMode={DetailsList.SelectionMode.multiple}
  checkboxVisibility={DetailsList.CheckBoxVisibility.always}
/>;
```

Nå:

```js static
import { Checkbox } from '@skatteetaten/ds-forms';
import { Table } from '@skatteetaten/ds-table';

const [checkedState, setCheckedState] = useState < Array < number >> [];
const [isAllChecked, setIsAllChecked] = useState < boolean > false;

const items = [
  {
    fastsatt: '31.01.2018',
    avgiftstype: 'OR',
    avgiftsgruppe: '525',
    beloep: '6045',
    status: 'Iverksatt',
    id: '1',
  },
  {
    fastsatt: '31.05.2018',
    avgiftstype: 'BR',
    avgiftsgruppe: '525',
    beloep: '6033',
    status: 'Iverksatt',
    id: '2',
  },
  {
    fastsatt: '02.03.2018',
    avgiftstype: 'AR',
    avgiftsgruppe: '525',
    beloep: '6064',
    status: 'Under arbeid',
    id: '3',
  },
  {
    fastsatt: '03.03.2018',
    avgiftstype: 'DR',
    avgiftsgruppe: '525',
    beloep: '6064',
    status: 'Under arbeid',
    id: '4',
  },
  {
    fastsatt: '04.01.2018',
    avgiftstype: 'BR',
    avgiftsgruppe: '525',
    beloep: '6064',
    status: 'Under arbeid',
    id: '5',
  },
];

<Table caption={'avgiftsstatus'}>
  <Table.Header>
    <Table.Row>
      <Table.HeaderCell>
        <Checkbox
          checked={isAllChecked}
          hideLabel
          onChange={() => {
            if (isAllChecked) {
              setCheckedState([]);
            }

            setIsAllChecked(!isAllChecked);
          }}
        >
          {'velg alle rader'}
        </Checkbox>
      </Table.HeaderCell>
      <Table.HeaderCell>{'Fastsatt'}</Table.HeaderCell>
      <Table.HeaderCell>{'avgiftstype'}</Table.HeaderCell>
      <Table.HeaderCell>{'avgiftsgruppe'}</Table.HeaderCell>
      <Table.HeaderCell>{'Beløp'}</Table.HeaderCell>
      <Table.HeaderCell>{'Status'}</Table.HeaderCell>
    </Table.Row>
  </Table.Header>
  <Table.Body>
    {items.map((item, index) => (
      <Table.Row key={item.id}>
        <Table.DataCell>
          <Checkbox
            checked={isAllChecked || checkedState.some((it) => it === index)}
            hideLabel
            onChange={(event) => {
              if (isAllChecked) {
                setCheckedState(
                  Array.from(Array(items.length).keys()).filter(
                    (it) => it !== index
                  )
                );
                setIsAllChecked(false);
              } else if (event.target.checked) {
                setCheckedState([index, ...checkedState]);
              } else {
                setCheckedState(checkedState.filter((it) => it !== index));
              }
            }}
          >{`Velg ${item.fastsatt}`}</Checkbox>
        </Table.DataCell>
        <Table.DataCell as={'th'} scope={'row'} id={`${item.id}-fastsatt`}>
          {item.fastsatt}
        </Table.DataCell>
        <Table.DataCell>{item.avgiftstype}</Table.DataCell>
        <Table.DataCell>{item.avgiftsgruppe}</Table.DataCell>
        <Table.DataCell>{item.beloep}</Table.DataCell>
        <Table.DataCell>{item.status}</Table.DataCell>
      </Table.Row>
    ))}
  </Table.Body>
</Table>;
```

</td>
</tr>
<tr>
<td>
'ariaLabel'

'ariaLabelForGrid'

'ariaLabelForListHeader'

'ariaLabelForSelectAllCheckbox'

'ariaLabelForSelectionColumn'

'checkButtonAriaLabel',

'checkButtonGroupAriaLabel'

</td>
<td>Faset ut.</td>
</tr>
<tr>
<td>'compact'</td>
<td>'variant'. Alternativer er 'standard' og 'compact'. Default er 'standard'.</td>
</tr>
<tr>
<td>'styles'

'theme'

'checkboxCellClassName'

'cellStyleProps'

'flexMargin'

</td>
<td>
Faset ut. Bruk 'className' for å style komponenten.
</td>
</tr>
<tr>
<td>
'columnReorderOptions'

'constrainMode'

'delayFirstMeasure'

'disableResizeObserver'

'disableSelectionZone'

'dragDropEvents'

'enableUpdateAnimations'

'enterModalSelectionOnTouch'

'focusZoneProps'

'getCellValueKey'

'getGroupHeight'

'getKey'

'getRowAriaDescribedBy'

'getRowAriaLabel'

'groupProps'

'groups'

'indentWidth'

'initialFocusedIndex'

'isHeaderVisible'

'isPlaceholderData'

'isSelectedOnFocus'

'layoutMode'

'listProps'

'minimumPixelsForDrag'

'onActiveItemChanged'

'onColumnHeaderClick'

'onColumnHeaderContextMenu'

'onColumnResize'

'onDidUpdate'

'onItemContextMenu'

'onItemInvoked'

'onRenderCheckbox'

'onRenderDetailsFooter'

'onRenderDetailsHeader'

'onRenderField'

'onRenderItemColum'

'onRenderMissingItem'

'onRenderRow'

'onRowDidMount'

'onRowWillUnmount'

'onShouldVirtualize'

'role'

'rowElementEventMap'

'setKey'

'shouldApplyApplicationRole'

'skipViewportMeasures'

'useFastIcons'

'usePageCache'

'useReducedRowRenderer'

'viewport'

</td>
<td>
Faset ut.
</td>
</tr>
</tbody>
</table>
</div>
