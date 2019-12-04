** NavigationTile brukes på navigasjonssider for å sende brukeren videre ned i sidestrukturen **

```js
import NavigationTile from '@skatteetaten/frontend-components/NavigationTile';
import NavigationContent from '@skatteetaten/frontend-components/NavigationTile/NavigationContent';

<NavigationTile>
  <NavigationContent to={'#navigationtile'} title={'Bedrift'} icon={'Company'}>
    A-melding, særavgift og veiledere som hjelper å rapportere riktig.
  </NavigationContent>
  <NavigationContent to={'#navigationtile'} title={'Person'} icon={'Person'}>
    Skattekort, skattemelding (selvangivelse), skatteoppgjør, tema og fradrag
    som hjelper deg til få riktig skatt.
  </NavigationContent>
</NavigationTile>;
```

** Eksempel på egendefinert lenke-implmentasjon ved bruk av react-router **

```js
import NavigationTile from '@skatteetaten/frontend-components/NavigationTile';
import NavigationContent from '@skatteetaten/frontend-components/NavigationTile/NavigationContent';
import { BrowserRouter, Link as RRLink } from 'react-router-dom';

<BrowserRouter>
  <NavigationTile>
    <NavigationContent
      to="/link-one"
      title={'Bedrift'}
      icon={'Company'}
      renderContent={(to, children) => {
        return <RRLink to={to}>{children}</RRLink>;
      }}
    >
      A-melding, særavgift og veiledere som hjelper å rapportere riktig.
    </NavigationContent>
    <NavigationContent
      to="/linkTo"
      title={'Person'}
      icon={'Person'}
      renderContent={(to, children) => {
        return <RRLink to={to}>{children}</RRLink>;
      }}
    >
      Skattekort, skattemelding (selvangivelse), skatteoppgjør, tema og fradrag
      som hjelper deg til få riktig skatt.
    </NavigationContent>
  </NavigationTile>
</BrowserRouter>;
```

** Eksempel på NavigationTile definert via JSON-struktur **

```js
import NavigationTile from '@skatteetaten/frontend-components/NavigationTile';
import NavigationContent from '@skatteetaten/frontend-components/NavigationTile/NavigationContent';
import { BrowserRouter, Link as RRLink } from 'react-router-dom';

const contents = [
  {
    title: 'Person',
    to: '#navigationtile1',
    icon: 'ArrowForward',
    description:
      'Skattekort, skattemelding (selvangivelse), skatteoppgjør, tema og fradrag som hjelper deg til få riktig skatt.',
    renderContent: (to, children) => {
      return <RRLink to={to}>{children}</RRLink>;
    }
  },
  {
    to: '#navigationtile2',
    title: 'Lag KID-nummer',
    icon: 'ArrowForward',
    description:
      'Lag KID for forskuddsskatt, tilleggsforskudd, restskatt, kildeskatt på aksjeutbytte.'
  }
];

<BrowserRouter>
  <NavigationTile contents={contents} />
</BrowserRouter>;
```

```js noeditor beskrivelse
  <p>
    NavigationTile brukes for eksempel på transportsider/navigasjonssider.
    Transportsider er landingssider med primær hensikt å sende brukeren videre
    nedover i sidestrukturen.
  </p>
  <p>
    Komponentene har alltid en tittel, men kan brukes uten ikon og beskrivende
    tekst.
  </p>
```
