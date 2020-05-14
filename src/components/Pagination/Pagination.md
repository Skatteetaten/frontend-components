** Pagination **

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
    fieldName: 'dato',
    alignment: 'right'
  },
  {
    name: 'Type',
    fieldName: 'type',
    alignment: 'right'
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
  }
];
const [displayedData, setDisplayedData] = React.useState(
  [...data].splice(0, 3)
);
const [currentPage, setCurrentPage] = React.useState(1);
const pageSize = 3;

<div>
  <Table data={displayedData} columns={columns} />
  <Pagination
    currentPage={currentPage}
    onPageChange={page => {
      const index = (page - 1) * pageSize;
      setDisplayedData([...data].splice(index, 3));
      setCurrentPage(page);
    }}
    total={data.length}
    pageSize={pageSize}
  />
</div>;
```
