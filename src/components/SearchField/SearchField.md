** SearchField er et tekstfelt som brukes når man søker gjennom innhold i en nettløsning. **

```js
import SearchField from '@skatteetaten/frontend-components/SearchField';

<div style={{ width: '300px' }}>
  <SearchField
    searchFieldSize="standard"
    border="slim"
    placeholder="Skriv søkeord her"
    ariaLabel="Søkefelt"
  />
  <br />
  <SearchField
    searchFieldSize="large"
    placeholder="Skriv søkeord her"
    ariaLabel="Søkefelt"
  />
</div>;
```

```js noeditor beskrivelse
  <h3>Markeres med ikon eller tekst</h3>
  <p>
    Et søkefelt skal alltid ha en markering i form av et søkeikon eller
    alternativt en knapp med «Søk».
  </p>
  <h3>Plassering og bredde</h3>
  <p>
    Søkefeltet skal kun ta en del av bredden på skjermen eller området for
    tekst. Hvis feltet blir for stort, oppfatter brukeren det som en banner.
  </p>
  <p>
    Søkefeltet kan legges inni en egen container, og størrelsen kan endres
    deretter.
  </p>
```
```js noeditor uu
<p>
Ingen informasjon
</p>
```
