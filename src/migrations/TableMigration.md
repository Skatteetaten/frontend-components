**Fra @skatteetaten/frontend-components v5+ (designsystem-legacy) til Designsystemet v0.3.0**

## Endringer i funksjonalitet:

- Table har blitt splittet opp i flere komponenter. I stedet for å sende inn json for å definere tabellene brukes komponentene til å bygge den opp. Dette betyr at det kan kreve noe mer kode å lage tabeller, men gir samtidig mye større fleksibilitet enn legacy Table.
- Vi vurderer å gjeninnføre funksjonalitet til å definere tabellene med json i en framtidig versjon.
- 'caption' tillater ikke markup lenger, kun string.

### Styling:

- de nye komponentene i designsystemet er avhengige av designtokens. Disse leveres nå som en separat pakke. Se [designtokens](#section-designtokens-deprecated) for detaljer.

### Endringer i API:

For full API-dokumentasjon, vennligst se på [Table komponent](https://www.skatteetaten.no/stilogtone/designsystemet/komponenter/table/) på dokumentasjonssiden til designsystemet.

<div class="migration-tabell">
<table>
<caption>Liste over endringer i komponent-api'et</caption>
<thead><tr><th>Tidligere Prop</th><th>Alternativ</th></tr></thead>
<tbody>
<tr>
<td>'data', 'columns'</td>
<td>
'children'

Før:

```javascript static
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

Nå:

```js static
import { Table } from '@skatteetaten/ds-table';

<Table caption="Personer med tilgang">
  <Table.Header>
    <Table.HeaderCell>Navn</Table.HeaderCell>
    <Table.HeaderCell>Tilgang gitt</Table.HeaderCell>
  </Table.Header>
  <Table.Body>
    <Table.Row>
      <Table.DataCell>Sven Lundquist</Table.DataCell>
      <Table.DataCell>23.10.19</Table.DataCell>
    </Table.Row>
    <Table.Row>
      <Table.DataCell>Kai Mossige</Table.DataCell>
      <Table.DataCell>25.11.19</Table.DataCell>
    </Table.Row>
  </Table.Body>
</Table>;
```

</td>
</tr>
<tr>
<td>columns.hideOnMobile</td>
<td>Faset ut. Bruk 'className' til å skjule kolonner, celler eller rader.

Før:

```javascript static
import { Table } from '@skatteetaten/frontend-components/Table';

const columns = [
  {
    name: 'Navn',
    fieldName: 'navn',
    hideOnMobile: true,
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

Nå:

```js static
import { Table } from '@skatteetaten/ds-table';


//innhold i scss-fil
@import '~@skatteetaten/ds-core-designtokens/designtokens/breakpoints.scss';
.hideOnMobile {
  display: none;
@media (min-width: $breakpoint-s) {
    display: table-cell;
  }
}

<Table  caption='Oversikt over brukere'>
  <Table.Header>
  <Table.HeaderCell className={styles.hideOnMobile}>Navn</Table.HeaderCell>
<Table.HeaderCell>Tilgang gitt</Table.HeaderCell>
</Table.Header>
<Table.Body>
  <Table.Row>
    <Table.DataCell className={styles.hideOnMobile}>Sven Lundquist</Table.DataCell>
    <Table.DataCell>23.10.19</Table.DataCell>
  </Table.Row>
  <Table.Row>
    <Table.DataCell className={styles.hideOnMobile}>Kai Mossige</Table.DataCell>
    <Table.DataCell>25.11.19</Table.DataCell>
  </Table.Row>
</Table.Body>
</Table>


```

</td>
</tr>
<tr>
<td>'compactTable'</td>
<td>'variant'. Alternativer er 'standard' og 'compact'. Default er 'standard'.</td>
</tr>
<tr>
<td>'customClassNames'</td>
<td>Faset ut. Angi 'className' direkte på Table, Table.Row, Table.DataCell osv.</td>
</tr>
<tr>
<td>'editableContent'</td>
<td>Flyttet fra &lt;Table&gt; til &lt;Table.EditableRow&gt;.</td>
</tr>
<tr>
<td>'editableRows'</td>
<td>Faset ut. Hvilke rader som er redigerbare styres ved å sende inn &lt;Table.EditableRow&gt; som children.

Før:

```javascript static
import { Table } from '@skatteetaten/frontend-components/Table';

const caption = <LabelWithCallout label={'Månedsoversikt'} />;

const editableContent = (data, close, rowIndex) => (
  <div style={wrapperStyle}>...</div>
);

const columns = [
  {
    name: 'Måned',
    fieldName: 'month',
    autohideSorting: false,
  },
  {
    name: 'Beløp',
    fieldName: 'amount',
    alignment: 'right',
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

Nå:

```js static
import { Table } from '@skatteetaten/ds-table';

const data = [
  {
    month: 'Januar',
    amount: 5426,
    coverage: '100 %',
    revenue: '1000',
    id: '9f78',
  },
  {
    month: 'Februar',
    amount: 5432,
    coverage: '50 %',
    revenue: '500',
    id: '6925',
  },
  {
    month: 'Mars',
    amount: 4899,
    coverage: '20 %',
    revenue: '2000',
    id: 'fc9d',
  },
  {
    month: 'April',
    amount: 2344,
    coverage: '30 %',
    revenue: '1055',
    id: '1d15',
  },
];

return (
  <Table caption={'Månedoversikt'}>
    <Table.Header>
      <Table.Row>
        <Table.HeaderCell as={'td'} />
        <Table.HeaderCell alignment={'right'} scope={'col'}>
          {'Måned'}
        </Table.HeaderCell>
        <Table.HeaderCell scope={'col'}>{'Beløp'}</Table.HeaderCell>
        <Table.HeaderCell scope={'col'}>{'Dekningsgrad'}</Table.HeaderCell>
        <Table.HeaderCell alignment={'right'} scope={'col'}>
          {'Avkastning'}
        </Table.HeaderCell>
      </Table.Row>
    </Table.Header>
    <Table.Body>
      {data.map((row) => {
        return (
          <Table.EditableRow
            key={row.id}
            editableContent={(closeEditing) => (
              <div className={'emptyExpandedTableRow'}>
                <span className={'srOnly'}>{'rediger data'}</span>

                <Button
                  onClick={() => {
                    closeEditing();
                  }}
                >
                  {'Lukk'}
                </Button>
              </div>
            )}
            editButtonAriaDescribedby={row.id}
            onEdit={() => {
              console.log('redigerrer rad');
            }}
          >
            <Table.DataCell id={row.id} alignment={'right'}>
              {row.month}
            </Table.DataCell>
            <Table.DataCell alignment={'right'}>{row.amount}</Table.DataCell>
            <Table.DataCell>{row.coverage}</Table.DataCell>
            <Table.DataCell alignment={'right'}>{row.revenue}</Table.DataCell>
          </Table.EditableRow>
        );
      })}
    </Table.Body>
  </Table>
);
```

</td>
</tr>
<tr>
<td>'expandIconPlacement'</td>
<td>Bruk 'expandButtonPosition' på &lt;Table.Row&gt;.</td>
</tr>
<tr>
<td>'expandableContent'</td>
<td>Flyttet til &lt;Table.Row&gt;.</td>
</tr>
<tr>
<td>'expandableRows'</td>
<td>Bruk 'isExpandable' på &lt;Table.Row&gt; for å styre hvilke rader som kan ekspanderes.</td>
</tr>
<tr>
<td>'fullWidth'</td>
<td>'hasFullWidth'</td>
</tr>
<tr>
<td>'hideCaption'</td>
<td>Faset ut. Caption er nå skjult (men leses fortsatt av skjermleser) som standard. Bruk 'showCaption' dersom caption skal være synlig.</td>
</tr>
<tr>
<td>'language'</td>
<td>Faset ut.
Bruk I18next for å endre språket på tekstene i Komponenten.

'lang' kan brukes for å sette lang-attributtet på table-elementet.

Før:

```javascript static
import { Table } from '@skatteetaten/frontend-components/Table';

<Table language={'en'} data={data} columns={columns} caption={caption} />;
```

Nå:

```js static
import { Table } from '@skatteetaten/ds-table';
import { dsI18n, Languages } from '@skatteetaten/ds-core-utils';

//for å bytte språk
dsI18n.changeLanguage(lang);
//setter riktig lang dersom den er forskjellig fra resten av siden.
<Table caption={caption} lang={'en'}>
  ...
</Table>;
```

</td>
</tr>
<tr>
<td>'openEditableOnRowClick'</td>
<td>Faset ut.</td>
</tr>
<tr>
<td>'openEditableRowIndex'</td>
<td>Faset ut.</td>
</tr>
<tr>
<td>'openExpandableRowIndex'</td>
<td>Faset ut.</td>
</tr>
<tr>
<td>'setOpenEditableRowIndex'</td>
<td>Faset ut. &lt;Table.EditableRow&gt; komponenten holder selv styr på om den er i redigeringsmodus.</td>
</tr>
<tr>
<td>'setOpenExpandableRowIndex'</td>
<td>Faset ut. Bruk 'isExpanded', 'onExpand' og 'onClose' på &lt;Table.Row&gt; om du ønsker å styre tilstanden på expanderbar rad.</td>
</tr>

<tr>
<td>'showRowSeparators'</td>
<td>Faset ut. Bruk 'className' på rader eller celler for å overstyre borders.</td>
</tr>
<tr>
<td>'sum'</td>
<td>Faset ut. Bruk &lt;Table.Sum&gt;.</td>
</tr>
</tbody>
</table>
</div>
