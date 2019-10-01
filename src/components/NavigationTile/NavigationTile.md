** NavigationTile brukes på navigasjonssider for å sende brukeren videre ned i sidestrukturen **

```js
import NavigationTile from '@skatteetaten/frontend-components/NavigationTile';

const contents = [
  {
    id: 'my-id-1',
    to: '#navigationtile',
    title: 'Skatt',
    description:
      'Skattekort, skattemelding (selvangivelse), skatteoppgjør, tema og fradrag som hjelper deg til få riktig skatt. ',
    icon: 'person'
  },
  {
    id: 'my-id-2',
    to: '#navigationtile',
    title: 'Bedrift',
    description:
      'A-melding, særavgift og veiledere som hjelper å rapportere riktig. ',
    icon: 'Company'
  }
];
<NavigationTile contents={contents} />;
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

```js noeditor
import Accordion from '@skatteetaten/frontend-components/Accordion';
import AccordionItem from '@skatteetaten/frontend-components/Accordion/AccordionItem';
<Accordion>
  <AccordionItem
    isOpen
    toggleContent
    toggleButtonText={'Bruk'}
    stepId={'step-1-1'}
  >
    <p>
      NavigationTile brukes for eksempel på transportsider/navigasjonssider.
      Transportsider er landingssider med primær hensikt å sende brukeren videre
      nedover i sidestrukturen.
    </p>
    <p>
      Komponentene har alltid en tittel, men kan brukes uten ikon og beskrivende
      tekst.
    </p>
  </AccordionItem>
  <AccordionItem
    toggleContent
    toggleButtonText={'Universell utforming'}
    stepId={'step-1-2'}
  >
    <p>Dette seksjonen er foreløpig tom.</p>
  </AccordionItem>
  <AccordionItem
    toggleContent
    toggleButtonText={'Tekniske detaljer'}
    stepId={'step-1-3'}
  >
    <p>
      Ved bruk av renderContent er det mulig å legge til egen link-komponent
      rundt innholdet. Dette er nyttig ved bruk av f.eks React-Router.
    </p>
  </AccordionItem>
</Accordion>;
```
