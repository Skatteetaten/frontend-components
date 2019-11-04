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

```js
import NavigationTile from '@skatteetaten/frontend-components/NavigationTile';

const contents = [
  {
    to: '#navigationtile',
    title: 'Lag KID-nummer',
    icon: 'ArrowForward',
    description:
      'Lag KID for forskuddsskatt, tilleggsforskudd, restskatt, kildeskatt på aksjeutbytte. '
  }
];

<NavigationTile
  type="left"
  alignIcon="right"
  alignTitle="left"
  alignDescription="left"
  contents={contents}
  renderContent={(to, content) => <a href={to}>{content}</a>}
/>;
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
