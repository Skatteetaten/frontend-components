**Fra @skatteetaten/frontend-components v5 (designsystem-legacy) til Designsystemet v0.1.0**

ButtonLink er blitt erstattet med MegaButton.

### Endringer i funksjonalitet

- det kan ikke sendes inn markup lengre
- før var komponenten et &lt;a&gt;-element mens den er nå et &lt;button&gt;-element som default. 'href' property styrer om det blir tegnet opp som et &lt;a&gt;- eller &lt;button&gt;-element
- viderefører ikke muligheten til å bestemme om en lenke skal kunne åpnes i nytt vindu

### Styling

- De nye komponentene i designsystemet er avhengige av designtokens. Disse leveres nå som en separat pakke. Se [designtokens](#section-designtokens-deprecated) for detaljer.
- har nå mulighet til å vise et "eksternt lenke"-ikon etter lenketeksten for å indikere at man åpner en ekstern tjeneste
- tekst er midtstilt dersom den går over flere linjer og er ikke venstrejustert lengre

### Endringer i API

<div className="migration-tabell">
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
