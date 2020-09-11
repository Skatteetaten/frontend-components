** Sidevelger for å bla i lange tabeller eller søkeresultater **

```js
import { Table, Pagination } from '@skatteetaten/frontend-components';

const columns = [
  {
    name: 'Navn',
    fieldName: 'navn',
  },
  {
    name: 'Tilgang gitt',
    fieldName: 'dato',
  },
  {
    name: 'Type',
    fieldName: 'type',
  },
];
const data = [
  {
    navn: 'Kaisa Lundquist',
    dato: '23.05.16',
    type: 'Bruker',
  },
  {
    navn: 'Reidar Olsen',
    dato: '15.11.16',
    type: 'Bruker',
  },
  {
    navn: 'Bob Egil Hansen',
    dato: '15.11.16',
    type: 'Bruker',
  },
  {
    navn: 'Leif Kåre Lund',
    dato: '23.10.17',
    type: 'Admin',
  },
  {
    navn: 'Kai Mossige',
    dato: '25.11.19',
    type: 'Bruker',
  },
  {
    navn: 'Bob Testman',
    dato: '01.01.20',
    type: 'Bruker',
  },
  {
    navn: 'Alice Middleman',
    dato: '25.03.20',
    type: 'Admin',
  },
  {
    navn: 'Kari Saksbehandler',
    dato: '25.03.20',
    type: 'Admin',
  },
  {
    navn: 'Frank Johansen',
    dato: '26.03.20',
    type: 'Bruker',
  },
  {
    navn: 'Tallulah Willis',
    dato: '01.05.20',
    type: 'Admin',
  },
  {
    navn: 'Kaisa Lundquist',
    dato: '23.05.16',
    type: 'Bruker',
  },
  {
    navn: 'Reidar Olsen',
    dato: '15.11.16',
    type: 'Bruker',
  },
  {
    navn: 'Bob Egil Hansen',
    dato: '15.11.16',
    type: 'Bruker',
  },
  {
    navn: 'Leif Kåre Lund',
    dato: '23.10.17',
    type: 'Admin',
  },
  {
    navn: 'Kai Mossige',
    dato: '25.11.19',
    type: 'Bruker',
  },
  {
    navn: 'Bob Testman',
    dato: '01.01.20',
    type: 'Bruker',
  },
  {
    navn: 'Alice Middleman',
    dato: '25.03.20',
    type: 'Admin',
  },
  {
    navn: 'Kari Saksbehandler',
    dato: '25.03.20',
    type: 'Admin',
  },
  {
    navn: 'Frank Johansen',
    dato: '26.03.20',
    type: 'Bruker',
  },
  {
    navn: 'Tallulah Willis',
    dato: '01.05.20',
    type: 'Admin',
  },
];
const pageSize = 8;
const [displayedData, setDisplayedData] = React.useState(
  [...data].splice(0, pageSize)
);
const [currentPage, setCurrentPage] = React.useState(1);

<div>
  <Table fullWidth data={displayedData} columns={columns} />
  <Pagination
    currentPage={currentPage}
    onPageChange={(page) => {
      const index = (page - 1) * pageSize;
      setDisplayedData([...data].splice(index, pageSize));
      setCurrentPage(page);
    }}
    total={data.length}
    pageSize={pageSize}
  />
</div>;
```

```js noeditor beskrivelse
<>
  <h3>Henger under tabell eller søkeresultat</h3>
  <p>
    Sidevelgeren hører alltid sammen med en annen komponent, som regel tabell
    eller et søkeresultat. Den skal som hovedregel henge under og være like bred
    den tilhørende komponenten.
  </p>

  <h3>Antall sider som vises</h3>
  <p>
    Det er mulig å stille inn hvor mange sider som vises i tallrekken. Hva som
    er anbefalt kommer an på hvor mye data som vises og for sannsynlig det er at
    brukeren vil bla i opplysningene. På mobil er det imidlertid ikke anbefalt å
    ha flere enn tre tall, på grunn av plassen.
  </p>
</>
```

```js noeditor uu
<>
  <p>Denne seksjonen er foreløpig tom.</p>
</>
```
