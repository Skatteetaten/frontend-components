**DetailsList (Sammensatt tabell): brukes til å vise store mengder informasjon som skal kunne sorteres, grupperes og filtreres**

Kolonner som kan sorteres

```js
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
    {
      fastsatt: '31.01.2018',
      avgiftstype: 'IR',
      avgiftsgruppe: '525',
      beloep: '6064',
      fritak: '',
      status: 'Iverksatt',
      kravgrunnlag: null,
      links: null,
    },
    {
      fastsatt: '31.01.2018',
      avgiftstype: 'OR',
      avgiftsgruppe: '525',
      beloep: '6064',
      fritak: '',
      status: 'Påbegynt',
      kravgrunnlag: null,
      links: null,
    },
    {
      fastsatt: '31.01.2018',
      avgiftstype: 'OR',
      avgiftsgruppe: '525',
      beloep: '6064',
      fritak: '',
      status: 'Påbegynt',
      kravgrunnlag: null,
      links: null,
    },
    {
      fastsatt: '31.01.2018',
      avgiftstype: 'OR',
      avgiftsgruppe: '525',
      beloep: '6064',
      fritak: '',
      status: 'Påbeynt',
      kravgrunnlag: null,
      links: null,
    },
    {
      fastsatt: '31.01.2018',
      avgiftstype: 'QR',
      avgiftsgruppe: '525',
      beloep: '6064',
      fritak: '',
      status: 'Ny',
      kravgrunnlag: null,
      links: null,
    },
    {
      fastsatt: '31.01.2018',
      avgiftstype: 'OR',
      avgiftsgruppe: '525',
      beloep: '6064',
      fritak: '',
      status: 'Iverksatt',
      kravgrunnlag: null,
      links: null,
    },
    {
      fastsatt: '31.01.2018',
      avgiftstype: 'OR',
      avgiftsgruppe: '525',
      beloep: '6064',
      fritak: '',
      status: 'Ny',
      kravgrunnlag: null,
      links: null,
    },
    {
      fastsatt: '31.01.2018',
      avgiftstype: 'OR',
      avgiftsgruppe: '525',
      beloep: '6064',
      fritak: '',
      status: 'Iverksatt',
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

Brukeren kan velge en eller flere rader vha av sjekkbokser.

```js
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
    },
    {
      key: 'column2',
      name: 'Avgiftstype',
      fieldName: 'avgiftstype',
      minWidth: 50,
      maxWidth: 150,
      isResizable: true,
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
      beloep: '6064',
      fritak: '',
      status: 'Iverksatt',
      kravgrunnlag: null,
      links: null,
      checkboxVisibility: true,
    },
    {
      fastsatt: '31.01.2018',
      avgiftstype: 'OR',
      avgiftsgruppe: '525',
      beloep: '6064',
      fritak: '',
      status: 'Iverksatt',
      kravgrunnlag: null,
      links: null,
    },
    {
      fastsatt: '31.01.2018',
      avgiftstype: 'OR',
      avgiftsgruppe: '525',
      beloep: '6064',
      fritak: '',
      status: 'Under arbeid',
      kravgrunnlag: null,
      links: null,
    },
    {
      fastsatt: '31.01.2018',
      avgiftstype: 'OR',
      avgiftsgruppe: '525',
      beloep: '6064',
      fritak: '',
      status: 'Under arbeid',
      kravgrunnlag: null,
      links: null,
    },
    {
      fastsatt: '31.01.2018',
      avgiftstype: 'OR',
      avgiftsgruppe: '525',
      beloep: '6064',
      fritak: '',
      status: 'Under arbeid',
      kravgrunnlag: null,
      links: null,
    },
    {
      fastsatt: '31.01.2018',
      avgiftstype: 'OR',
      avgiftsgruppe: '525',
      beloep: '6064',
      fritak: '',
      status: 'Iverksatt',
      kravgrunnlag: null,
      links: null,
    },
  ],
});

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
<>
  <h3>Tips</h3>
  <ul>
    <li>Ikke bruk listen til å vise kommandoer eller innstillinger.</li>
    <li>Ikke ha for mye data slik at brukeren på scrolle horisontalt.</li>
    <li>
      Listen bør ha en vilkårlig størrelse slik at informasjonen ikke blir trykt
      sammen og uoversiktlig.
    </li>
    <li>
      Sørg for at listen har fokusmarkering slik at brukere kan pile seg gjennom
      listen
    </li>
    <li>
      Listen skal kun ha ett tabstopp (2 inkludert sorterbare
      kolonneoverskrifter) der det ikke er ekstra skjemafelt.
    </li>
    <li>
      Sjekk at du kan navigere med piltaster i tabellen og velge ulik sortering
      med tastatur.
    </li>
    <li>
      Test med skjermleser at du hører hva som er sorterbart og at du ikke
      mister fokus når du velger en sortering.
    </li>
  </ul>

  <h3>Mest relevante WCAG-krav</h3>
  <ul>
    <li>1.3.1 A, Informasjon og relasjoner</li>
    <li>4.1.2 A, Navn, rolle, verdi</li>
  </ul>

  <h3>WAI-ARIA</h3>
  <ul>
    <li>
      Role="grid" med aria-rowcount og aria-colcount brukes for å gi beskjed til
      skjermleser at listen vises som en tabell.
    </li>
    <li>Role="row" brukes for å indikere tabellrad.</li>
    <li>
      Role="columnheader", og role="gridcell" brukes for å indikere
      kolonneoverskrifter og celler.
    </li>
    <li>
      Aria-colindex og aria-rowindex gir beskjed om plasseringen av en celle i
      raden/kolonnen.
    </li>
    <li>
      Aria-sort gir beskjed om noe er sorterbart og om det er sortert stigende
      eller synkende.
    </li>
    <li>Role=presentation brukes for å skjule blokker for skjermleser.</li>
  </ul>
</>
```

```js noeditor beskrivelse
<>
  <h3>Avansert tabell</h3>
  <p>
    DetailsList er nyttig for å vise store mengder informasjon der brukeren skal
    kunne sortere, gruppere og filtrere.
  </p>
  <p>
    Denne komponenten bruker vi på lister med mange repeterende rader, hvor
    brukeren samtidig har behov for å:
  </p>
  <ul>
    <li>Gruppere rader</li>
    <li>Velge eller markere en eller flere rader</li>
    <li>Sortere kolonner</li>
  </ul>
  <p>
    Sørg for å ha den viktigste kolonnen først til venstre, og at det er
    tilstrekkelig kolonne-bredde til å vise innholdet. Dersom innholdet tar mye
    plass, kan du vurdere å bruke variabel høyde på radene.
  </p>
</>
```
