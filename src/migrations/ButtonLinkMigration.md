**Fra @skatteetaten/frontend-components v5 (designsystem-legacy) til Designsystemet v0.1.0**

ButtonLink er blitt erstattet med MegaButton.

## Endringer i funksjonalitet

- det kan ikke sendes inn markup lengre
- før var komponenten et &lt;a&gt;-element mens den er nå et &lt;button&gt;-element som default. 'href' property styrer om det blir tegnet opp som et &lt;a&gt;- eller &lt;button&gt;-element
- viderefører ikke muligheten til å bestemme om en lenke skal kunne åpnes i nytt vindu
- v6.0.2: Når komponenten tegnes opp som et &lt;button&gt;-element så har den igjen fått type="button" som default slik som i legacy designsystem. I tillegg er type gjeninnført som prop.

## Styling

- De nye komponentene i designsystemet er avhengige av designtokens. Disse leveres nå som en separat pakke. <a class="brodtekst-link" href="#section-designtokens-deprecated">Se designtokens for detaljer.</a>
- har nå mulighet til å vise et "eksternt lenke"-ikon etter lenketeksten for å indikere at man åpner en ekstern tjeneste
- tekst er midtstilt dersom den går over flere linjer og er ikke venstrejustert lengre

## Endringer i API

For full API-dokumentasjon, vennligst se på <a class="brodtekst-link" href="https://www.skatteetaten.no/stilogtone/designsystemet/komponenter/megabutton/">MegaButton komponent</a> på dokumentasjonssiden til designsystemet.

<div class="migration-tabell">
<table>
<caption>Liste over endringer i komponent-api'et</caption>
<thead><tr><th>Tidligere Prop</th><th>Alternativ</th></tr></thead>
<tbody>
<tr>
<td>'path'</td>
<td>
Bruk 'href' hvis komponenten skal være en lenke.
Før:

```javascript static
import { ButtonLink } from '@skatteetaten/frontend-components/ButtonLink';

<ButtonLink path={'#'} />;
```

Nå:

```js static
import { MegaButton } from '@skatteetaten/ds-buttons';

<MegaButton href="#">Se og endre skattekort</MegaButton>;
```

</td>
</tr>

<tr>
<td>'text'</td>
<td>
Fluent-ui prop som er faset ut. Bruk 'children' for å gi komponenten en tekst (accessible name). Det kan ikke sendes inn markup lengre.

Før:

```javascript static
import { ButtonLink } from '@skatteetaten/frontend-components/ButtonLink';

const content = (
  <span>
    Se og endre <span class="underline">skattekort</span>
  </span>
);

<ButtonLink text={content} />;
```

Nå:

```js static
import { MegaButton } from '@skatteetaten/ds-buttons';

const contentOnlyString = 'Se og endre skattekort';

<MegaButton>{contentOnlyString}</MegaButton>;
```

</td>
</tr>

<tr>
<td>'openInNew'</td>
<td>
Faset ut.
</td>
</tr>

<tr>
<td>'target',

'hrefLang',

'media',

'ping',

'rel',

'type',

'referrerPolicy'</td>

<td>
Alle tidligere html-anchor attributer er faset ut og sendes dermed ikke videre til &lt;a&gt;-elementet.
</td>
</tr>
</tbody>
</table>
</div>
