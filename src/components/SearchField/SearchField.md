** SearchField er et tekstfelt som brukes når man søker gjennom innhold i en nettløsning. **

```js
import SearchField from '@skatteetaten/frontend-components/SearchField';

<div style={{ width: '300px' }}>
  <SearchField
    searchFieldSize="standard"
    border="slim"
    placeholder="Skriv søkeord her"
    ariaLabel="Søk"
    keyboardShortcut={true}
    onSearchIcon={() => alert('Du trykket på søkeikonet')}
    searchIconTitle="Start søk"
  />
  <br />
  <SearchField
    searchFieldSize="large"
    placeholder="Skriv søkeord her"
    ariaLabel="Søk"
  />
</div>;
```

Søkefelt med resultat i dropdown:

```js
import React from 'react';
import SearchField from '@skatteetaten/frontend-components/SearchField';
const options = [
  { key: '1', text: 'Banan' },
  { key: '2', text: 'Ananas' },
  { key: '3', text: 'Eple' },
  { key: '4', text: 'Pære' },
  { key: '5', text: 'Appelsin' },
  { key: '6', text: 'Fersken' }
];
const [list, setList] = React.useState([]);
const [searchTerm, setSearchTerm] = React.useState('');

<div style={{ width: '300px' }}>
  <SearchField
    label={'Søk etter tilgjengelige frukter'}
    searchFieldSize="standard"
    border="slim"
    placeholder="Skriv søkeord her"
    help="Tekst som hjelper brukeren å fylle ut feltet."
    options={options}
    value={searchTerm}
    onChange={(ev, value) => setSearchTerm(value)}
    onSelected={item => {
      setSearchTerm('');
      setList([...list, item]);
    }}
  />
  <ul>
    {list.map((item, index) => (
      <li key={item.key.concat('_', index)}>{item.text}</li>
    ))}
  </ul>
</div>;
```

```js noeditor beskrivelse
<>
  <h3>Tekstfelt for å søke i nettløsningen</h3>
  <p>
    Søkefeltet lar brukeren søke i nettløsningen. Feltet skal alltid være
    markert med et søkeikon eller en knapp med ordet «Søk».
  </p>
  <h3>Plassering og bredde på søkefelt</h3>
  <p>
    Søkefeltet skal kun oppta en del av bredden på skjermen eller området for
    tekst. Hvis feltet blir for stort, oppfatter brukeren det som et banner.
  </p>
  <p>
    Søkefeltet kan legges inni en egen container, og størrelsen kan endres
    deretter.
  </p>
  <p>
    Du kan legge søkefeltet inni en egen ramme og du kan så endre størrelsen
    deretter.
  </p>
  <h3>Legg til rette for tastatursnarvei i søkefeltet</h3>
  <p>
    Komponenten SearchField tillater at brukeren kan søke med tastatursnarvei
    «ctrl+f» eller «command+f». For å slå dette på må du legge til prop
    keyboardShortcut=&#123;true&#125;.
  </p>
</>
```

```js noeditor uu
<>
  <h3>Tips</h3>
  <ul>
    <li>
      Vanlige søkefelt skal ha tabstopp på søkeknapp (forstørrelsesglasset).
      Unntaket er søkefelt med forslag i dropdown.
    </li>
    <li>
      For søkefelt med synlig ledetekst, brukes input med label for-attributt.
      Søkefelt uten synlig ledetekst kan bruke aria-label på input.
    </li>
    <li>
      Kun placeholder-attributt er ikke tilstrekkelig for å bestå WCAG.
      Ledetekst (label/aria-label) og placeholder bør ikke være identiske.
      Placeholder-tekst er ment for å gi et hint om det som skal skrives i
      feltet.
    </li>
  </ul>

  <h3>Mest relevante WCAG-krav</h3>
  <ul>
    <li>1.3.1 A, Informasjon og relasjoner </li>
    <li>3.3.2 A, Ledetekster eller instruksjoner</li>
    <li>4.1.2 A, Navn, Rolle, verdi</li>
  </ul>

  <h3>WAI-ARIA</h3>
  <ul>
    <li>Aria-label brukes på søkeknapp for å navngi den for skjermlesere.</li>
  </ul>
</>
```
