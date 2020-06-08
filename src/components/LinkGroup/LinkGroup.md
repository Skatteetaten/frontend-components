** Liste med navigasjonslenker med pil**

```js
import { LinkGroup } from '@skatteetaten/frontend-components';
import { Link as RRLink, BrowserRouter as Router } from 'react-router-dom';

const links = [
  {
    text: 'Dette er en link',
    path: '#linkgroup',
  },
  {
    text: 'En annen  link',
    path: '#linkgroup',
  },
];

<div>
  <LinkGroup links={links} />
</div>;
```

** Eksempel på egendefinert link-implementasjon vha. react-router **

```js
import { LinkGroup } from '@skatteetaten/frontend-components';
import { Link as RRLink, BrowserRouter as Router } from 'react-router-dom';

const links = [
  {
    text: 'Dette er en link',
    path: '#linkgroup',
  },
  {
    text: 'En annen  link',
    path: '#linkgroup',
  },
];

<div>
  <div>
    <Router>
      <LinkGroup
        links={links}
        renderContent={(path, text, classNames) => {
          return (
            <RRLink to={path} className={classNames}>
              {text}
            </RRLink>
          );
        }}
      />
    </Router>
  </div>
</div>;
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

```js noeditor beskrivelse
<h3>
  Samling av lenker til navigasjon
</h3>
<p>
  LinkGroup er en samling av lenker, og kan brukes til navigasjon når brukeren har flere mulig etterfølgende valg. Hvis du trenger enkeltstående lenker eller ikoner, bruker du <a href="#link">Link</a>{' '} i stedet.
</p>
<p>
  Standarden vi bruker i tekst er blå skrift og understrekning. Hvis bakgrunnen krever en annen farge enn blå, for å være leselig og for å oppfylle kontrastkravet, skal du bruke en annen farge. Et eksempel er hvit på svart bakgrunn som i innlogget header eller hvit på burgunder i footer.
</p>

<p>Se også {' '}
      <a href="https://www.skatteetaten.no/stilogtone/produkt/skatteetatenno/lenker/">
        Skatteetatens skriveregler
      </a>{' '}
      for hjelp til å lage gode lenketekster.
    </p>
    <p>
      Lenketeksten eller alternativ tekst, som grafisk lenke, skal tydeliggjøre hva som er målet til lenken.
    </p>

```
