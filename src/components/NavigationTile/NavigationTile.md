** NavigationTile brukes på navigasjonssider for å sende brukeren videre ned i sidestrukturen **

```js
import NavigationTile from '@skatteetaten/frontend-components/NavigationTile';
import NavigationContent from '@skatteetaten/frontend-components/NavigationTile/NavigationContent';

<NavigationTile>
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
import NavigationTile from '@skatteetaten/frontend-components/NavigationTile';
import NavigationContent from '@skatteetaten/frontend-components/NavigationTile/NavigationContent';

<NavigationTile
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
import NavigationTile from '@skatteetaten/frontend-components/NavigationTile';

const contents = [
  {
    to: '#navigationtile',
    heading: 'Lag kontonummer',
    icon: 'ArrowForward'
  },
  {
    to: '#navigationtile',
    heading: 'Lag KID-nummer',
    icon: 'ArrowForward'
  }
];

<NavigationTile
  type="left"
  alignTitle="left"
  alignIcon="right"
  contents={contents}
  headingLevel={4}
/>;
```

Eksempel med bruk av JSON-format på dataene:

```js
import NavigationTile from '@skatteetaten/frontend-components/NavigationTile';
import NavigationContent from '@skatteetaten/frontend-components/NavigationTile/NavigationContent';
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
    }
  },
  {
    to: '#navigationtile2',
    heading: 'Lag KID-nummer',
    icon: 'Calculator',
    description:
      'Lag KID for forskuddsskatt, tilleggsforskudd, restskatt, kildeskatt på aksjeutbytte.'
  }
];

<BrowserRouter>
  <NavigationTile contents={contents} />
</BrowserRouter>;
```

```js noeditor beskrivelse
<h3>Bruker på navigasjonssider</h3>
  <p>
    NavigationTile brukes for eksempel på transportsider/navigasjonssider.
    Transportsider er landingssider med primær hensikt å sende brukeren videre
    nedover i sidestrukturen.
  </p>
  <h3>Kan ha varierende innhold</h3>
  <p>
    Komponentene har alltid en tittel, men kan brukes uten ikon og beskrivende
    tekst. I tillegg kan innholdet midtstilles eller høyre og venstrejusteres.
  </p>
```
```js noeditor uu
<h3>Tips</h3>

  <ul>
  <li>En lenke skal minst 2 ulike visuelle "hint" for å skille det fra vanlig tekst. Her er det blå farge og understreking.</li>
  <li>Tenk på kontrast hvis bakgrunnsfargen bak lenken endrer seg, for eksempel svart bakgrunn = hvit skrift</li>
  <li>Lenketeksten eller alternativ tekst (grafisk lenke) skal tydeliggjøre hva som er målet til lenken</li>
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
```
