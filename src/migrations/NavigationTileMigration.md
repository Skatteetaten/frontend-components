**Fra @skatteetaten/frontend-components v13+ (designsystem-legacy) til Designsystemet v0.8.0**

NavigationContent er deprecated i sin helhet og er ikke tilgjengelig som en egen komponent i det nye designsystemet. Innholdet i en NavigationTile settes nå via 'description' prop. Se migrasjonsguiden til <a class="brodtekst-link" href="https://skatteetaten.github.io/frontend-components/#navigationtile">NavigationTile</a>.

For full API-dokumentasjon, vennligst se på <a class="brodtekst-link" href="https://www.skatteetaten.no/stilogtone/designsystemet/komponenter/navigationtile">dokumentasjonssiden til det nye designsystemet</a>.

Før:

```javascript static
import { NavigationTile } from '@skatteetaten/frontend-components/NavigationTile';
import { NavigationContent } from '@skatteetaten/frontend-components/NavigationTile/NavigationContent';

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

Nå:

```js static
import { NavigationTile } from '@skatteetaten/ds-navigation';

<nav aria-label="Velge person eller bedrift">
  <NavigationTile
    title={'Bedrift'}
    description={
      'A-melding, særavgift og veiledere som hjelper å rapportere riktig.'
    }
    href={'#'}
    size={'extraLarge'}
    svgPath={AccountEnkSVGpath}
  />
  <NavigationTile
    title={'Person'}
    description={
      'Skattekort, skattemelding (selvangivelse), skatteoppgjør, tema og fradrag som hjelper deg til få riktig skatt.'
    }
    href={'#'}
    size={'extraLarge'}
    svgPath={AccountEnkSVGpath}
  />
</nav>;
```
