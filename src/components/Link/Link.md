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
    placement="after"
  />
  <div>
    <Router>
      <Link
        icon={'OpenInNew'}
        placement="after"
        renderContent={classNames => {
          return (
            <RRLink to="/" className={classNames}>
              Egendefinert lenkeimplementasjon. Eksempel gitt ved bruk av
              react-router
            </RRLink>
          );
        }}
      />
    </Router>
  </div>
</div>;
```

```js noeditor beskrivelse
   <p>Link kan brukes til å lenke til filer eller nettsider.</p>
    <p>
      Standarden vi bruker i tekst er blå skrift og understrekning. Hvis
      bakgrunnen krever en annen farge enn blå for å være leselig og oppfylle
      kontrastkravet, brukes en annen farge; for eksempel hvit på svart bakgrunn
      som i innlogget header eller hvit på burgunder i footer.
    </p>

    <p>
      Se{' '}
      <a href="https://www.skatteetaten.no/stilogtone/produkt/skatteetatenno/lenker/">
        Skatteetatens skriveregler
      </a>{' '}
      for hjelp til å lage gode lenker.
    </p>
```

```js noeditor uu
<ul>
  <li>
    Alle lenker skal ha minst 2 ulike markeringer for å vise at det er lenke.
  </li>
</ul>
```
