** NavigationContent brukes i NavigationTile **

```js
import NavigationContent from '@skatteetaten/frontend-components/NavigationTile/NavigationContent';
const content = {
  id: 'my-id-1',
  to: '#navigationtile',
  title: 'Skatt',
  description:
    'Skattekort, skattemelding (selvangivelse), skatteoppgjør, tema og fradrag som hjelper deg til få riktig skatt. ',
  icon: 'person'
};

<NavigationContent {...content} />;
```
