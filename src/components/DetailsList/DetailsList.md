** Detailjliste brukes til å vise store mengder informasjon som skal kunne sorteres, grupperes og filtreres **

Kolonner som kan sorteres

```js
import DetailsList from '@skatteetaten/frontend-components/DetailsList';

const initialState = {
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
      }
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
      }
    },
    {
      key: 'column3',
      name: 'Avgiftsgruppe',
      fieldName: 'avgiftsgruppe',
      minWidth: 50,
      maxWidth: 150,
      isResizable: true
    },
    {
      key: 'column4',
      name: 'Beløp',
      fieldName: 'beloep',
      minWidth: 100,
      maxWidth: 200,
      isResizable: true
    },
    {
      key: 'column5',
      name: 'Fritak',
      fieldName: 'fritak',
      minWidth: 50,
      maxWidth: 150,
      isResizable: true
    },
    {
      key: 'column6',
      name: 'Status',
      fieldName: 'status',
      minWidth: 100,
      maxWidth: 200,
      isResizable: true
    }
  ],
  items: [
    {
      fastsatt: '31.01.2018',
      avgiftstype: 'OR',
      avgiftsgruppe: '525',
      beloep: '6045.00',
      fritak: '',
      status: 'Iverksatt',
      kravgrunnlag: null,
      links: null
    },
    {
      fastsatt: '31.05.2018',
      avgiftstype: 'BR',
      avgiftsgruppe: '525',
      beloep: '6033.00',
      fritak: '',
      status: 'Iverksatt',
      kravgrunnlag: null,
      links: null
    },
    {
      fastsatt: '02.03.2018',
      avgiftstype: 'AR',
      avgiftsgruppe: '525',
      beloep: '100.00',
      fritak: '',
      status: 'Under arbeid',
      kravgrunnlag: null,
      links: null
    },
    {
      fastsatt: '03.03.2018',
      avgiftstype: 'DR',
      avgiftsgruppe: '525',
      beloep: '6064.00',
      fritak: '',
      status: 'Under arbeid',
      kravgrunnlag: null,
      links: null
    },
    {
      fastsatt: '04.01.2018',
      avgiftstype: 'BR',
      avgiftsgruppe: '525',
      beloep: '6064.00',
      fritak: '',
      status: 'Under arbeid',
      kravgrunnlag: null,
      links: null
    },
    {
      fastsatt: '31.01.2018',
      avgiftstype: 'IR',
      avgiftsgruppe: '525',
      beloep: '6064.00',
      fritak: '',
      status: 'Iverksatt',
      kravgrunnlag: null,
      links: null
    },
    {
      fastsatt: '31.01.2018',
      avgiftstype: 'OR',
      avgiftsgruppe: '525',
      beloep: '6064.00',
      fritak: '',
      status: 'Påbegynt',
      kravgrunnlag: null,
      links: null
    },
    {
      fastsatt: '31.01.2018',
      avgiftstype: 'OR',
      avgiftsgruppe: '525',
      beloep: '6064.00',
      fritak: '',
      status: 'Påbegynt',
      kravgrunnlag: null,
      links: null
    },
    {
      fastsatt: '31.01.2018',
      avgiftstype: 'OR',
      avgiftsgruppe: '525',
      beloep: '6064.00',
      fritak: '',
      status: 'Påbeynt',
      kravgrunnlag: null,
      links: null
    },
    {
      fastsatt: '31.01.2018',
      avgiftstype: 'QR',
      avgiftsgruppe: '525',
      beloep: '6064.00',
      fritak: '',
      status: 'Ny',
      kravgrunnlag: null,
      links: null
    },
    {
      fastsatt: '31.01.2018',
      avgiftstype: 'OR',
      avgiftsgruppe: '525',
      beloep: '6064.00',
      fritak: '',
      status: 'Iverksatt',
      kravgrunnlag: null,
      links: null
    },
    {
      fastsatt: '31.01.2018',
      avgiftstype: 'OR',
      avgiftsgruppe: '525',
      beloep: '6064.00',
      fritak: '',
      status: 'Ny',
      kravgrunnlag: null,
      links: null
    },
    {
      fastsatt: '31.01.2018',
      avgiftstype: 'OR',
      avgiftsgruppe: '525',
      beloep: '6064.00',
      fritak: '',
      status: 'Iverksatt',
      kravgrunnlag: null,
      links: null
    }
  ]
};
<DetailsList
  columns={state.columns}
  items={state.items}
  constrainMode={DetailsList.ConstrainMode.horizontalConstrained}
  onSortUpdate={({ items, columns }) => setState({ items, columns })}
/>;
```

Brukeren kan velge en eller flere rader vha av sjekkbokser.

```js
import DetailsList from '@skatteetaten/frontend-components/DetailsList';

const initialState = {
  columns: [
    {
      key: 'column1',
      name: 'Fastsatt',
      fieldName: 'fastsatt',
      minWidth: 50,
      maxWidth: 200,
      isResizable: true
    },
    {
      key: 'column2',
      name: 'Avgiftstype',
      fieldName: 'avgiftstype',
      minWidth: 50,
      maxWidth: 150,
      isResizable: true
    },
    {
      key: 'column3',
      name: 'Avgiftsgruppe',
      fieldName: 'avgiftsgruppe',
      minWidth: 50,
      maxWidth: 150,
      isResizable: true
    },
    {
      key: 'column4',
      name: 'Beløp',
      fieldName: 'beloep',
      minWidth: 100,
      maxWidth: 200,
      isResizable: true
    },
    {
      key: 'column5',
      name: 'Fritak',
      fieldName: 'fritak',
      minWidth: 50,
      maxWidth: 150,
      isResizable: true
    },
    {
      key: 'column6',
      name: 'Status',
      fieldName: 'status',
      minWidth: 100,
      maxWidth: 200,
      isResizable: true
    }
  ],
  items: [
    {
      fastsatt: '31.01.2018',
      avgiftstype: 'OR',
      avgiftsgruppe: '525',
      beloep: '6064.00',
      fritak: '',
      status: 'Iverksatt',
      kravgrunnlag: null,
      links: null,
      checkboxVisibility: true
    },
    {
      fastsatt: '31.01.2018',
      avgiftstype: 'OR',
      avgiftsgruppe: '525',
      beloep: '6064.00',
      fritak: '',
      status: 'Iverksatt',
      kravgrunnlag: null,
      links: null
    },
    {
      fastsatt: '31.01.2018',
      avgiftstype: 'OR',
      avgiftsgruppe: '525',
      beloep: '6064.00',
      fritak: '',
      status: 'Under arbeid',
      kravgrunnlag: null,
      links: null
    },
    {
      fastsatt: '31.01.2018',
      avgiftstype: 'OR',
      avgiftsgruppe: '525',
      beloep: '6064.00',
      fritak: '',
      status: 'Under arbeid',
      kravgrunnlag: null,
      links: null
    },
    {
      fastsatt: '31.01.2018',
      avgiftstype: 'OR',
      avgiftsgruppe: '525',
      beloep: '6064.00',
      fritak: '',
      status: 'Under arbeid',
      kravgrunnlag: null,
      links: null
    },
    {
      fastsatt: '31.01.2018',
      avgiftstype: 'OR',
      avgiftsgruppe: '525',
      beloep: '6064.00',
      fritak: '',
      status: 'Iverksatt',
      kravgrunnlag: null,
      links: null
    }
  ]
};

function chooseRow() {
  console.log('chooseRow');
}

<DetailsList
  marqueeSelection
  columns={state.columns}
  items={state.items}
  selectionMode={DetailsList.SelectionMode.multiple}
  checkboxVisibility={DetailsList.CheckBoxVisibility.always}
/>;
```

```js noeditor uu
<ul>
  <li>Ikke bruk listen til å vise kommandoer eller innstillinger.</li>
  <li>Ikke ha for mye data slik at brukeren på scrolle horisontalt.</li>
  <li>
    Listen bør ha en vilkårlig størrelse slik at informasjonen ikke blir trykt
    sammen og uoversiktelig.
  </li>
  <li>
    Sørg for at listen har fokusmarkering slik at brukere med skjermleser kan
    tabbe seg igjennom listen.
  </li>
</ul>
```

```js noeditor beskrivelse
  <p>
    DetailsList brukes når du har liste av mange repterende rader, og samtidig
    har behov for:
  </p>
  <ul>
    <li>Gruppere rader</li>
    <li>Velge/markere en eller flere rader</li>
    <li>Sortere kolonner</li>
  </ul>
  <p>
    Sørg for å ha den viktigste kolonnen først til venstre, og at det
    tilstrekkelig kolonnebredde til å vise innholdet. Dersom innholdet er tar
    mye plass - vurder å bruke variabel høyde på radene.
  </p>
```
