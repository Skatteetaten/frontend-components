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
  }
];
const data = [
  {
    navn: 'Kaisa Lundquist',
    dato: '23.05.16'
  },
  {
    navn: 'Reidar Olsen',
    dato: '15.11.16'
  },
  {
    navn: 'Bob Egil Hansen',
    dato: '15.11.16'
  },
  {
    navn: 'Leif Kåre Lund',
    dato: '23.10.17'
  },
  {
    navn: 'Kai Mossige',
    dato: '25.11.19'
  },
  {
    navn: 'Bob Testman',
    dato: '01.01.20'
  },
  {
    navn: 'Alice Middleman',
    dato: '25.03.20'
  },
  {
    navn: 'Kari Saksbehandler',
    dato: '25.03.20'
  },
  {
    navn: 'Frank Johansen',
    dato: '26.03.20'
  },
  {
    navn: 'Tallulah Willis',
    dato: '01.05.20'
  }
];
const [displayedData, setDisplayedData] = React.useState(
  [...data].splice(0, 3)
);
const [index, setIndex] = React.useState(3);
const [currentPage, setCurrentPage] = React.useState(1);

<div style={{ width: '400px' }}>
  <Table data={displayedData} columns={columns} />
  <Pagination
    currentPage={currentPage}
    onPageChange={page => {
      const newIndex = (page - 1) * index;
      setDisplayedData([...data].splice(newIndex, 3));
      setIndex(newIndex);
      setCurrentPage(page);
    }}
    total={4}
    pageSize={3}
  />
</div>;
```
