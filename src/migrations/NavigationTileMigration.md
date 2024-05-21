**Fra @skatteetaten/frontend-components v13+ (designsystem-legacy) til Designsystemet v0.8.0**

## Endringer i funksjonalitet:

- NavigationTile og NavigationContent er slått sammen til èn komponent.
- èn eller flere NavigationTile-komponenter legges nå som children til et nav-element med beskrivende aria-label.

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
import { AccountEnkSVGpath, PersonSVGpath } from '@skatteetaten/ds-icons';
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
    svgPath={PersonSVGpath}
  />
</nav>;
```

## Styling:

- de nye komponentene i designsystemet er avhengige av designtokens. Disse leveres nå som en separat pakke. <a class="brodtekst-link" href="#section-designtokens-deprecated">Se designtokens for detaljer.</a>
- kommer nå i 3 ulike størrelser ('medium', 'large', 'extraLarge'). 'medium' og 'large' har venstrestilt tekst, mens 'extraLarge' er sentrert.

## Endringer i API

For full API-dokumentasjon, vennligst se på <a class="brodtekst-link" href="https://www.skatteetaten.no/stilogtone/designsystemet/komponenter/navigationtile/">NavigationTile komponent</a> på dokumentasjonssiden til designsystemet.

### Endringer fra NavigationTile

<div class="migration-tabell">
<table>
<caption>Liste over endringer i komponent-api'et</caption>
<thead><tr><th>Tidligere Prop</th><th>Alternativ</th></tr></thead>
<tbody>
<tr>
<td>'alignDescription'</td>
<td>
Faset ut.
</td>
</tr>
<tr>
<td>'alignIcon'</td>
<td>
Faset ut.
</td>
</tr>
<tr>
<td>'alignTitle'</td>
<td>
Faset ut.
</td>
</tr>
<tr>
<td>'contents'</td>
<td>
Faset ut.  
</td>
</tr>
<tr>
<td>'headingLevel'</td>
<td>
Erstattet av 'titleAs'.
</td>
</tr>
<tr>
<td>'type'</td>
<td>
Faset ut. I ny komponent er size = 'extraLarge' sentrert, mens 'large' og 'medium' er venstrestilt.
</td>
</tr>
<tr>
<td>'useButtons'</td>
<td>
Faset ut.
</td>
</tr>
</tbody>
</table>
</div>

### Endringer fra NavigationContent

<div class="migration-tabell">
<table>
<caption>Liste over endringer i komponent-api'et</caption>
<thead><tr><th>Tidligere Prop</th><th>Alternativ</th></tr></thead>
<tbody>
<tr>
<td>'heading'</td>
<td>
Erstattet av 'title'.
</td>
</tr>
<tr>
<td>'headingLevel'</td>
<td>
Erstattet av 'titleAs'.
</td>
</tr>
<tr>

<td>'icon'</td>
<td>
Erstattet av 'svgPath'. 
</td>
</tr>
<tr>
<td>'to'</td>
<td>
Erstattet av 'href'.
</td>
</tr>
<tr>
<td>'renderContent'</td>
<td>
Faset ut.  
</td>
</tr>
<tr>
<td>'useButtons'</td>
<td>
Faset ut.
</td>
</tr>
</tbody>
</table>
</div>
