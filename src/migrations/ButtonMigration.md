**Fra @skatteetaten/frontend-components v5 (designsystem-legacy) til Designsystemet v0.1.0**

### Endringer i funksjonalitet:

- det kan ikke sendes inn markup lengre
- v6.0.2: knappen har igjen fått type="button" som default slik som i legacy designsystem. I tillegg er type gjeninnført som prop.

### Styling:

- De nye komponentene i designsystemet er avhengige av designtokens. Disse leveres nå som en separat pakke. Se [designtokens](#section-designtokens-deprecated) for detaljer.
- hovedhandlings-knappen ("call to action") er ikke videre ført. Dersom du ønsker et tilsvarende utseende se MegaButton.

### Endringer i API:

<!--For full API-dokumentasjon, vennligst se på [button komponent](https://breakdance.github.io/breakdance/) på dokumentasjonssiden til designsystemet.
( //TODO FRONT-917 Lenke til EPI dok)-->

<div className="migration-tabell">
<table>
<caption>Liste over endringer i komponent-api'et</caption>
<thead><tr><th>Tidligere Prop</th><th>Alternativ</th></tr></thead>
<tbody>
<tr>
<td>'uniqueId'</td>
<td>'id'</td>
</tr>
<tr>
<td>'componentRef'</td>
<td>

'ref'

Alle komponentene våre bruker forwardRef. For komponent sendes ref til &lt;button&gt;-elementet

</td>
</tr>
<tr>
<td>'icon'</td>
<td>
'svgPath'

Forhåndsdefinert path kan importeres fra @skatteetaten/ds-icons pakke. Alternativt kan custom path sendes.

Før:

```javascript static
import { Button } from '@skatteetaten/frontend-components/Button';
<Button icon="Send">Send inn skattemeldingen</Button>;
```

Nå:

```js static
import { Button } from '@skatteetaten/ds-buttons';
import { SendSVGpath } from '@skatteetaten/ds-icons';

<Button svgPath={SendSVGpath}>
Send inn skattemeldingen
</Button>
// ELLER
<Button svgPath={<path d='M19 13h-6v6h-2v-6H5v-2h6V5h2v6h6v2Z' />}>
Send inn skattemeldingen
</Button>
```

</td>
</tr>
<tr>
<td>'buttonStyle'</td>
<td>'variant'

Alternativer: 'primary' | 'secondary' | 'tertiary' | 'danger'. 'primary' er default.

Før:

```javascript static
import { Button } from '@skatteetaten/frontend-components/Button';

<Button buttonStyle='primary'>
    Send inn skjema
</Button>
<Button buttonStyle='secondary'>
    Avbryt
</Button>
<Button buttonStyle='warning'>
    Slett
</Button>
```

Nå:

```js static
import { Button } from '@skatteetaten/ds-buttons';

<Button variant='primary'>
    Send inn skjema
</Button>
<Button variant='secondary'>
    Avbryt
</Button>
<Button variant='tertiary'>
    Avbryt
</Button>
<Button variant='danger'>
    Slett
</Button>
```

</td>
</tr>
<tr>
<td>'ariaDescription'</td>
<td>
'ariaDescribedby'

Den inneholder en eller flere id-er til HTML-elementer (som inneholder tekst hvor teksten blir lest opp av hjelpemidler etter at knappeteksten er lest opp).
Før:

```javascript static
import { Button } from '@skatteetaten/frontend-components/Button';

<Button ariaDescription="idTilElementMedTekst">Send inn skjema</Button>;
```

Nå:

```js static
import { Button } from '@skatteetaten/ds-buttons';

<Button ariaDescribedby="idTilElementMedTekst">Send inn skjema</Button>;
```

</td>
</tr>
<tr>
<td>'ariaLabel'</td>
<td>Faset ut. Knappeteksten skal være den samme for alle, også de som bruker hjelpemidler. Hvis behov for en tilleggstekst bruk 'ariaDescribedby'.</td>
</tr>
<tr>
<td>'ariaHidden'</td>
<td>Faset ut. Det skal ikke være mulig å skjule knappen for hjelpemidler fordi knappen skal være tilgjengelig for alle. Det er heller ikke ønskelig å bruke aria-hidden på et fokuserbart element.</td>
</tr>
<tr>
<td>'mobileFullWidth'</td>
<td>
Faset ut. Erstattes ved bruk av egen css gjennom 'className'.

Før:

```javascript static
import { Button } from '@skatteetaten/frontend-components/Button ';

<Button mobileFullWidth>Send inn skjema</Button>;
```

Nå:

```js static
// css kode:
.myCustomClassname {
    width: var(--container-xs);

    // bruker du scss kan du bruke breakpoints variabler
    @media (min-width:$breakpoint-s) {
        width: auto;
    }
}

// js kode:
import { Button } from '@skatteetaten/ds-buttons';

<Button className='myCustomClassname'>
    Send inn skjema
</Button>
```

</td>
</tr>
<tr>
<td>'getClassNames'

'styles'

'theme'

'label'

</td>
<td>

Fluent-UI spesifikke props som er faset ut. Bruk 'className' for å style komponenten.
Før:

```javascript static
import { Button } from '@skatteetaten/frontend-components/Button ';

<Button style={{ fontSize: '24px', color: '#1362ae' }}>
  Send inn skattemeldingen
</Button>;
```

Nå:

```js static
import { Button } from '@skatteetaten/ds-buttons';

<Button className="myCustomClassname">Send inn skattemeldingen</Button>;
```

</td>
</tr>
<tr>
<td>'href'</td>
<td>Fluent-ui prop som er faset ut. Dersom det er behov for 'href' se MegaButton eller Link. </td>
</tr>
<tr>
<td>'text'</td>
<td>
Fluent-ui prop som er faset ut. Bruk 'children' for å gi komponenten en tekst (accessible name). Det kan ikke sendes inn markup lengre.
Før:

```javascript static
import { Button } from '@skatteetaten/frontend-components/Button';

const content = (
  <span>
    Send inn <span class="underline">skattemeldingen</span>
  </span>
);

<Button text={content} />;
```

Nå:

```js static
import { Button } from '@skatteetaten/ds-buttons';

const contentOnlyString = 'Send inn skattemeldingen';

<Button>{contentOnlyString}</Button>;
```

</td>
</tr>
<tr>
<td>'iconProps'</td>
<td>
Fluent-ui prop som er faset ut. Bruk 'svgPath' i steden for.

Før:

```javascript static
import { Button } from '@skatteetaten/frontend-components/Button';

<Button iconProps={{ iconName: 'Send' }}>Send inn skattemeldingen</Button>;
```

Nå:

```js static
import { Button } from '@skatteetaten/ds-buttons';
import { SendSVGpath } from '@skatteetaten/ds-icons';

<Button svgPath={SendSVGpath}>Send inn skattemeldingen</Button>;
```

</td>
</tr>
<tr>
<td>'keytipProps'</td>
<td>Fluent-ui props som er faset ut.</td>
</tr>
<tr>
<td>'data'</td>
<td>Fluent-ui props som er faset ut.</td>
</tr>
<tr>
<td>'defaultRender'</td>
<td>Fluent-ui props som er faset ut.</td>
</tr>
<tr>
<td>'menuAs'

'menuIconProps'

'menuProps'

'menuTriggerKeyCode'

'onAfterMenuDismiss'

'onMenuClick'

'persistMenu'</td>

<td>Fluent-ui props som er faset ut.</td>
</tr>
<tr>
<td>'onRender*'</td>
<td>Fluent-ui props som er faset ut.</td>
</tr>
<tr>
<td>onMouseEnter</td>
<td>Fluent-ui props som er faset ut.</td>
</tr>
</tbody>
</table>
</div>
