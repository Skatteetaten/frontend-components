**NavigationTile brukes på navigasjonssider for å sende brukeren videre ned i sidestrukturen**

```js
import {
  NavigationTile,
  NavigationContent,
} from '@skatteetaten/frontend-components';

<NavigationTile ariaLabel="Velge person eller bedrift">
  <NavigationContent
    to={'#navigationtile'}
    heading={'Bedrift'}
    icon={'Company'}
  >
    A-melding, særavgift og veiledere som hjelper å rapportere riktig.
  </NavigationContent>
  <NavigationContent to={'#navigationtile'} heading={'Person'} icon={'Person'}>
    Skattekort, skattemelding (selvangivelse), skatteoppgjør, tema og fradrag
    som hjelper deg til få riktig skatt.
  </NavigationContent>
</NavigationTile>;
```

Uten beskrivende tekst:

```js
import {
  NavigationTile,
  NavigationContent,
} from '@skatteetaten/frontend-components';

<NavigationTile
  ariaLabel="Velge person eller bedrift"
  alignTitle={'left'}
  alignDescription={'left'}
  alignIcon={'right'}
>
  <NavigationContent
    to={'#navigationtile'}
    icon={'arrowForward'}
    heading={'Bedrift'}
  />
  <NavigationContent
    to={'#navigationtile'}
    heading={'Person'}
    icon={'arrowForward'}
  />
</NavigationTile>;
```

<h4>Overskriftsnivå inni NavigationTile</h4>
By default får tittelen som gis i hver navigation tile en <h2\>-tag.
<br>Om dette ikke passer inn i din sidestruktur kan det overskrives. Eksempelvis gir _headingLevel_ 4 en <h4\>-tag.

```js
import { NavigationTile } from '@skatteetaten/frontend-components';

const contents = [
  {
    to: '#navigationtile',
    heading: 'Lag kontonummer',
    icon: 'ArrowForward',
  },
  {
    to: '#navigationtile',
    heading: 'Lag KID-nummer',
    icon: 'ArrowForward',
  },
];

<NavigationTile
  ariaLabel="Lage kid- eller kontonummer"
  type="left"
  alignTitle="left"
  alignIcon="right"
  contents={contents}
  headingLevel={4}
/>;
```

Eksempel med bruk av JSON-format på dataene:

```js
import {
  NavigationTile,
  NavigationContent,
} from '@skatteetaten/frontend-components';
import { BrowserRouter, Link as RRLink } from 'react-router-dom';

const contents = [
  {
    heading: 'Person',
    to: '#navigationtile1',
    icon: 'Person',
    description:
      'Skattekort, skattemelding (selvangivelse), skatteoppgjør, tema og fradrag som hjelper deg til få riktig skatt.',
    renderContent: (to, children) => {
      return <RRLink to={to}>{children}</RRLink>;
    },
  },
  {
    to: '#navigationtile2',
    heading: 'Lag KID-nummer',
    icon: 'Calculator',
    description:
      'Lag KID for forskuddsskatt, tilleggsforskudd, restskatt, kildeskatt på aksjeutbytte.',
  },
];

<BrowserRouter>
  <NavigationTile
    contents={contents}
    ariaLabel="Velge person eller kid-nummer"
  />
</BrowserRouter>;
```

```js noeditor beskrivelse
<>
  <h3>Forsideknapp for å gå videre i et spor i sidestrukturen</h3>
  <p>
    NavigationTile bruker du for å veilede brukeren til å velge et spor i
    sidestrukturen for å komme videre. Knappen er vanlig å bruke på
    landings-sider. Et eksempel er{' '}
    <a href="https://www.skatteetaten.no/person">skatteetaten.no/person</a> hvor
    brukeren velger mellom skatt, avgifter, folkeregister, utenlandsk og så
    videre.
  </p>
  <h3>Knappen har alltid tittel og kan også ha ikon og beskrivende tekst</h3>
  <p>
    Du kan velge mellom å midtstille, høyre- eller venstre-justere innholdet på
    knappen. For å stille opp innholdet på denne forsideknappen må du bruke{' '}
    <a href="#navigationcontent">NavigationContent</a>.
  </p>
  <p>
    Det er viktig at tekst og symbol på NavigationTile gjør målet med knappen
    tydelig for brukeren.
  </p>
</>
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
    <li>Pass på at overskriften i en tile har riktig nivå</li>
  </ul>

  <h3>Mest relevante WCAG-krav</h3>

  <ul>
    <li>1.4.1 A, Bruk av farge</li>
    <li>1.4.3 AA, Kontrast (minimum)</li>
    <li>2.4.4 A, Formål med lenke (i kontekst)</li>
  </ul>

  <h3>WAI-ARIA</h3>

  <ul>
    <li>Aria-hidden="true" brukes for skjule ikoner for skjermleser.</li>
    <li>Aria-label="xxx" brukes for å navngi nav-tag.</li>
  </ul>
</>
```
