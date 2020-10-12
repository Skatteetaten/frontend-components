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
import SearchField from '@skatteetaten/frontend-components/SearchField';
const options = [
  { key: '1', text: 'Banan' },
  { key: '2', text: 'Ananas' },
  { key: '3', text: 'Eple' },
  { key: '4', text: 'Pære' },
  { key: '5', text: 'Appelsin' },
  { key: '6', text: 'Fersken' }
];

<div style={{ width: '300px' }}>
  <SearchField
    label={'Søk etter tilgjengelige frukter'}
    searchFieldSize="standard"
    border="slim"
    placeholder="Skriv søkeord her"
    ariaLabel="Søk"
    help="Tekst som hjelper brukeren å fylle ut feltet."
    options={options}
  />

  <p>
    {' '}
    For testing av overflow etc. Vet ikke helt om denne boksen her er sånn at
    man ikke kan overflowe utenfor uansett på grunn av at dette er et md
    dokument? Men det virker også litt rart. Uansett. Vi finner ut av det. Hvor
    vanskelig kan overflow være uansett?{' '}
  </p>
</div>;
```

```js noeditor beskrivelse
<>
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
  <h3>Tastatursnarvei</h3>
  <p>
    SearchField tillater tastatursnarvei for søk (ctrl+f eller command+f). For å
    slå dette på legg til prop keyboardShortcut=&#123;true&#125;
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
