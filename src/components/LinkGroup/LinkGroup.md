**LinkGroup (Lenkegruppe): liste med navigasjonslenker med pil**

```js
import { LinkGroup } from '@skatteetaten/frontend-components/LinkGroup';
import { Link as RRLink, BrowserRouter as Router } from 'react-router-dom';

const links = [
  {
    text: 'Rettledning til RF-1167 Næringsoppgave 2 for 2020 (PDF)',
    path: '#linkgroup',
  },
  {
    text: 'Rettledning til RF-1167 Næringsoppgave 2 for 2020 (Word)',
    path: '#linkgroup',
  },
];

<div>
  <LinkGroup links={links} />
</div>;
```

**Eksempel på egendefinert link-implementasjon vha. react-router**

```js
import { LinkGroup } from '@skatteetaten/frontend-components/LinkGroup';
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
<>
  <h3>Tips</h3>

  <ul>
    <li>
      En lenke skal minst 2 ulike visuelle "hint" for å skille det fra vanlig
      tekst. Her er det blå farge og understreking.
    </li>
    <li>
      Tenk på kontrast hvis bakgrunnsfargen bak lenken endrer seg, for eksempel
      svart bakgrunn = hvit skrift
    </li>
    <li>
      Lenketeksten eller alternativ tekst (grafisk lenke) skal tydeliggjøre hva
      som er målet til lenken
    </li>
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
</>
```

```js noeditor beskrivelse
<>
  <h3>Liste med lenker for å navigere</h3>
  <p>
    Når brukeren har flere mulige etterfølgende valg på en nettside, kan du
    benytte en lenkegruppe, for å gjøre det lettere for brukeren å navigere
    videre. Hvis du trenger enkeltstående lenke eller ikon, bruker du{' '}
    <a href="#link">Link</a> i stedet.
  </p>
  <h3>Blå tekst og understreking er standard</h3>
  <p>
    Vi bruker blå skrift og understrekning. Unntak er hvis bakgrunnen er farget
    og gjør teksten dårlig leselig slik at den ikke oppfyller kontrastkravet –
    da skal du bruke en bedre egnet farge. Et eksempel er hvit på svart bakgrunn
    som i innlogget header eller hvit på burgunder i footer.
  </p>

  <h3>Lenketeksten skal beskrive målet</h3>
  <p>
    Lenketeksten skal tydeliggjøre hva som er målet til lenken. Se også{' '}
    <a href="https://www.skatteetaten.no/stilogtone/produkt/skatteetatenno/lenker/">
      Skatteetatens skriveregler
    </a>{' '}
    for hjelp til å lage gode lenketekster.
  </p>
</>
```
