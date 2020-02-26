** Lenke til filer eller nettsider **

```js
import Link from '@skatteetaten/frontend-components/Link';
import { Link as RRLink, BrowserRouter as Router } from 'react-router-dom';

<div className="ExampleSpacing8">
  <Link
    path={'#link'}
    text={'Last ned dokumentene'}
    icon={'Download'}
    placement="before"
  />

  <Link
    path={'#link'}
    text={'Gå til oversikt'}
    icon={'ArrowForward'}
    placement="before"
  />
  <Link
    path={'#link'}
    text={'Åpne i nytt vindu'}
    icon={'OpenInNew'}
    openInNew={true}
    placement="after"
  />

  <br />
  <br />
  <p>
    Det er også mulig å bruke en
    <Link path={'#link'} text={'link'} /> inni et avsnitt med tekst.
  </p>
</div>;
```

```js noeditor beskrivelse
<h3>Velge link eller knapp</h3>
   <p>Link brukes til å lenke til filer eller nettsider. Når brukeren klikker på lenken hentes enten filen eller nettsiden frem.</p>
   <p>Har du derimot en handling som påvirker siden du er på, for eksempel «Lagre» eller «Send inn», bør du normalt bruke en knapp i stedet.</p>

    <p>
      Se også {' '}
      <a href="https://www.skatteetaten.no/stilogtone/produkt/skatteetatenno/lenker/">
        Skatteetatens skriveregler
      </a>{' '}
      for hjelp til å lage gode lenketekster.
    </p>
<h3>Åpne i nytt vindu eller fane</h3>
<p>Når man velger å åpne i nytt vindu/fane legges det til to egenskaper til lenken. Den første (target) åpner i nytt vindu, og den andre (rel) er en sikkerhetsfunksjon som bryter koblingen mellom kallende vindu og nytt vindu: dersom den åpnede fanen inneholder ondsinnet kode, kan den uten denne funksjonen få tilgang til vinduet lenken klikket fra. Dette er spesielt viktig  å ta hensyn til dersom vi lenker til eksterne sider eller sider med innhold som er brukergenerert.</p>

```

```js noeditor uu
  <h3>Tips</h3>

  <ul>
  <li>En lenke skal minst 2 ulike visuelle "hint" for å skille det fra vanlig tekst. Her er det blå farge og understreking.</li>
  <li>Tenk på kontrast hvis bakgrunnsfargen bak lenken endrer seg, for eksempel svart bakgrunn = hvit skrift</li>
  <li>Lenketeksten eller alternativ tekst (grafisk lenke) skal tydeliggjøre hva som er målet til lenken</li>
  </ul>

  <h3>Mest relevante WCAG-krav</h3>

  <ul>
  <li>1.4.1 A, Bruk av farge</li>
  <li>1.4.3 AA, Kontrast (minimum)</li>
  <li>2.4.4 A, Formål med lenke (i kontekst)</li>
  </ul>

  <h3>WAI-ARIA</h3>

  <ul>
  <li>Aria-hidden="true" brukes for skjule ikonet for skjermleser.</li>
  </ul>
```
