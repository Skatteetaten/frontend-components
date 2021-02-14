** Sidevelger for å bla i lange tabeller eller søkeresultater **

```js
import Table from '@skatteetaten/frontend-components/Table';
import Pagination from '@skatteetaten/frontend-components/Pagination';
const columns = [
  {
    name: 'Navn',
    fieldName: 'navn'
  },
  {
    name: 'Tilgang gitt',
    fieldName: 'dato'
  },
  {
    name: 'Type',
    fieldName: 'type'
  }
];
const data = [
  {
    navn: 'Kaisa Lundquist',
    dato: '23.05.16',
    type: 'Bruker'
  },
  {
    navn: 'Reidar Olsen',
    dato: '15.11.16',
    type: 'Bruker'
  },
  {
    navn: 'Bob Egil Hansen',
    dato: '15.11.16',
    type: 'Bruker'
  },
  {
    navn: 'Leif Kåre Lund',
    dato: '23.10.17',
    type: 'Admin'
  },
  {
    navn: 'Kai Mossige',
    dato: '25.11.19',
    type: 'Bruker'
  },
  {
    navn: 'Bob Testman',
    dato: '01.01.20',
    type: 'Bruker'
  },
  {
    navn: 'Alice Middleman',
    dato: '25.03.20',
    type: 'Admin'
  },
  {
    navn: 'Kari Saksbehandler',
    dato: '25.03.20',
    type: 'Admin'
  },
  {
    navn: 'Frank Johansen',
    dato: '26.03.20',
    type: 'Bruker'
  },
  {
    navn: 'Tallulah Willis',
    dato: '01.05.20',
    type: 'Admin'
  },
  {
    navn: 'Kaisa Lundquist',
    dato: '23.05.16',
    type: 'Bruker'
  },
  {
    navn: 'Reidar Olsen',
    dato: '15.11.16',
    type: 'Bruker'
  },
  {
    navn: 'Bob Egil Hansen',
    dato: '15.11.16',
    type: 'Bruker'
  },
  {
    navn: 'Leif Kåre Lund',
    dato: '23.10.17',
    type: 'Admin'
  },
  {
    navn: 'Kai Mossige',
    dato: '25.11.19',
    type: 'Bruker'
  },
  {
    navn: 'Bob Testman',
    dato: '01.01.20',
    type: 'Bruker'
  },
  {
    navn: 'Alice Middleman',
    dato: '25.03.20',
    type: 'Admin'
  },
  {
    navn: 'Kari Saksbehandler',
    dato: '25.03.20',
    type: 'Admin'
  },
  {
    navn: 'Frank Johansen',
    dato: '26.03.20',
    type: 'Bruker'
  },
  {
    navn: 'Tallulah Willis',
    dato: '01.05.20',
    type: 'Admin'
  }
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
    onPageChange={page => {
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
  <h3>Komponent som gjør at brukeren kan bla i lister og tabeller</h3>
  <p>
   Sidevelgeren hører alltid til annen komponent og har som funksjon at brukeren skal kunne bla frem og tilbake i stedet for å måtte skrolle nedover i lange lister og tabeller med opplysninger. 
Komponenten skal som hovedregel henge under og være like bred som den tilhørende komponenten.
  </p>

  <h3>Hvor mange sider skal vises i sidevelgeren? </h3>
  <p>
    Du kan stille inn antallet sider i tallrekken der brukeren blar fra. 
  </p>
   <ul>
    <li>Ta hensyn til hvor mye data som vises og sannsynligheten for at brukeren vil bla i opplysningene.</li>
<li>På mobil anbefaler vi maksimum tre tall i tallrekken på grunn av plassen på skjermen.</li>
</ul>
  
</>
```

```js noeditor uu
<>
  <p>Denne seksjonen er foreløpig tom.</p>
</>
```
