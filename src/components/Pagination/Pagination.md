**Pagination (Sidevelger): for å bla i lange tabeller eller søkeresultater**

```js
import { Pagination } from '@skatteetaten/frontend-components/Pagination';
import { Table } from '@skatteetaten/frontend-components/Table';

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
  <Table
    fullWidth
    data={displayedData}
    columns={columns}
    caption={'Oversikt over brukere'}
    hideCaption={true}
  />
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
  <h3>Pagination lar brukeren bla i lister og tabeller</h3>
  <p>
    Sidevelgeren legger til rette for at brukeren kan bla i stedet for å måtte
    skrolle nedover i lange lister og tabeller med opplysninger. Komponenten
    hører alltid sammen med en annen komponent – som regel tabell eller
    søkeresultat.
  </p>

  <h3>Slik bruker du sidevelgeren:</h3>

  <ul>
    <li>
      Komponenten skal henge under og være like bred som den tilhørende
      komponenten (tabell eller søkeresultat).
    </li>
    <li>
      Når du stiller inn tallet på sider i tallrekken der brukeren blar fra,
      skal du ta hensyn til hvor mye data som vises og sannsynligheten for at
      brukeren vil bla i opplysningene
    </li>
    <li>
      På mobil anbefaler vi å ikke ha flere enn tre tall synlig i tallrekken på
      grunn av plassen på skjermen.
    </li>
  </ul>
</>
```

```js noeditor uu
<>
  <h3>Tips</h3>
  <ul>
    <li>
      Pass på at tastatur- og skjermleserfokus beholdes på sidevalget ved bytte
      av side (med tastatur).
    </li>
    <li>Sjekk at valget du står på er inaktivt.</li>
  </ul>

  <h3>Mest relevante WCAG-krav</h3>

  <ul>
    <li>4.1.2 A, Navn, rolle, verdi</li>
  </ul>

  <h3>WAI-ARIA</h3>

  <ul>
    <li>Aria-hidden="true" brukes på ikon for skjule det for skjermleser.</li>
    <li>Aria-label brukes for å navngi nav-tag og tydeliggjøre sidevalg.</li>
    <li>Aria-current="true/false" brukes for å annonsere gjeldende valg.</li>
    <li>Aria-disabled="true/false" brukes for inaktive/aktive funksjoner.</li>
    <li>Role="link" brukes fordi sidetallene visuelt ser ut som en lenker.</li>
  </ul>
</>
```
