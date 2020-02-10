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
  <h3>Farge og understrekning</h3>
  <p>
    Alle lenker skal ha minst 2 ulike markeringer for å vise at det er lenke. Lenkene i Designsystemet har derfor både blå farge og understrekning.
  </p>
  <h3>Lesekontrast</h3>
  <p>
    Standarden vi bruker i tekst er blå skrift og understrekning. Hvis
    bakgrunnen krever en annen farge enn blå for å være leselig og oppfylle
    kontrastkravet, brukes en annen farge; for eksempel hvit på svart bakgrunn
    som i innlogget header eller hvit på burgunder i footer.
  </p>

```
