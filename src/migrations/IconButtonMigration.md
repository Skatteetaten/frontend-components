**Fra @skatteetaten/frontend-components v5 (designsystem-legacy) til Designsystemet v0.1.0**

## Endringer i funksjonalitet:

- Icon er nå svg-basert og ikke font-basert
- ikonet kan ikke endres på gjennom iconProps
- ikonet har alltid en tooltip
- v6.0.2: knappen har igjen fått type="button" som default slik som i legacy designsystem. I tillegg er type gjeninnført som prop.

## Styling:

- De nye komponentene i designsystemet er avhengige av designtokens. Disse leveres nå som en separat pakke. <a class="brodtekst-link" href="#section-designtokens-deprecated">Se designtokens for detaljer.</a>
- størrelse på selve ikonet og luft er endret og default verdier er justert
  (se migrering under API → "buttonSize" / "size")
- knappens ramme er tynnere (1px/2px nå vs 3px før)

## Endringer i API

For full API-dokumentasjon, vennligst se på [IconButton komponent](https://www.skatteetaten.no/stilogtone/designsystemet/komponenter/iconbutton/) på dokumentasjonssiden til designsystemet.

<div className="migration-tabell">
<table>
<caption>Liste over endringer i komponent-api'et</caption>
<thead><tr><th>Tidligere Prop</th><th>Alternativ</th></tr></thead>
<tbody>
<tr>
<td>'uniqueId'</td>
<td>'id'
</td>
</tr>
<tr>
<td>'componentRef'</td>
<td>

'ref'

Alle komponentene våre bruker forwardRef. For komponent sendes 'ref' til &lt;button&gt;-elementet.

</td>
</tr>
<tr>
<td>'icon'</td>
<td>

'svgPath'

Forhåndsdefinert path kan importeres fra @skatteetaten/ds-icons pakke. Alternativt kan custom path sendes.

Før:

```javascript static
import { IconButton } from '@skatteetaten/frontend-components/IconButton';

<IconButton icon="Add" />;
```

Nå:

```js static
import { IconButton } from '@skatteetaten/ds-buttons';
import { AddSVGpath } from '@skatteetaten/ds-icons';

<IconButton svgPath={AddSVGpath} title='Legg til' />
// ELLER
<IconButton svgPath={<path d='M19 13h-6v6h-2v-6H5v-2h6V5h2v6h6v2Z' />} title='Legg til' />
```

</td>
</tr>
<tr>
<td>'circle'</td>
<td>

'isOutlined'

Legger en border rundt knappen. Default er false.

Før:

```javascript static
import { IconButton } from '@skatteetaten/frontend-components/IconButton';

<IconButton icon="Add" circle />;
```

Nå:

```js static
import { IconButton } from '@skatteetaten/ds-buttons';
import { AddSVGpath } from '@skatteetaten/ds-icons';

<IconButton svgPath={AddSVGpath} title="Legg til" isOutlined />;
```

</td>
</tr>
<tr>
<td>'buttonSize'</td>
<td>

'size'

Alternativer: 'extraSmall' | 'small' | 'medium' | 'large'. 'medium' er default.

- tidligere "xSmall" (knapp 26px, ikon 20px) heter nå "extraSmall" (knapp 22px, ikon 16px).
- "small" (knapp 35px, ikon 29px) er nå 26px stor (ikon 16px).
- "medium" (knapp 40px, ikon 34px) er nå 32px stor (ikon 20px).
- "large" (knapp 50px, ikon 44px) er nå 44px stor (ikon 24px).
- "xLarge" (knapp 60px, ikon 54px) er faset ut.

Før:

```javascript static
import { IconButton } from '@skatteetaten/frontend-components/IconButton';

<IconButton buttonSize="medium" icon="Add" />;
```

Nå:

```js static
import { IconButton } from '@skatteetaten/ds-buttons';
import { AddSVGpath } from '@skatteetaten/ds-icons';

<IconButton size={'large'} svgPath={AddSVGpath} title="Legg til" />;
```

</td>
</tr>
<tr>
<td>'ariaLabel'

'aria-label'</td>

<td>

'title'

En knapp med kun et ikon må ha et accessible name slik at hjelpemidler kan lese opp hva handlingen til knappen er. Tidligere så kunne 'title' og/eller 'ariaLabel'/'aria-label' brukes, men nå er det kun den påkrevde propen 'title' som skal brukes fordi IconButton skal alltid ha en tooltip.

Før:

```javascript static
import { IconButton } from '@skatteetaten/frontend-components/IconButton';

<IconButton icon="Add" ariaLabel="Skriv ut" />;
```

Nå:

```js static
import { IconButton } from '@skatteetaten/ds-buttons';
import { AddSVGpath } from '@skatteetaten/ds-icons';

<IconButton svgPath={AddSVGpath} title={'Skriv ut'} />;
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
import { IconButton } from '@skatteetaten/frontend-components/IconButton';

<IconButton icon="Add" ariaDescription="idTilElementMedTekst" />;
```

Nå:

```js static
import { IconButton } from '@skatteetaten/ds-buttons';
import { AddSVGpath } from '@skatteetaten/ds-icons';

<IconButton
  svgPath={AddSVGpath}
  ariaDescribedby={'idTilElementMedTekst'}
  title="Legg til"
/>;
```

</td>
</tr>
<tr>
<td>'ariaHidden'</td>
<td>

Faset ut. Det skal ikke være mulig å skjule knappen for hjelpemidler fordi knappen skal være tilgjengelig for alle. Det er heller ikke ønskelig å bruke aria-hidden på et fokuserbart element.

</td>
</tr>
<tr>
<td>'mobileFullWidth'</td>
<td>

Faset ut. Erstattes ved bruk av egen css gjennom 'className'.

</td>
</tr>
<tr>
<td>'getClassNames'

'styles'

'theme'</td>

<td>

Fluent-UI spesifikke props som er faset ut. Bruk 'className' for å style komponenten. All definisjon av stil skal settes via 'className'.

Før:

```javascript static
import { IconButton } from '@skatteetaten/frontend-components/IconButton';

<IconButton style={{ fontSize: '24px', color: '#1362ae' }} icon="Add" />;
```

Nå:

```js static
import { IconButton } from '@skatteetaten/ds-buttons';
import { AddSVGpath } from '@skatteetaten/ds-icons';

<IconButton
  className="myCustomClassname"
  svgPath={AddSVGpath}
  title="Legg til"
/>;
```

</td>
</tr>
<tr>
<td>'href'</td>
<td>

Fluent-ui prop som er faset ut. Dersom det er behov for 'href', se MegaButton eller Link.

</td>
</tr>
<tr>
<td>'text'</td>
<td>

Fluent-ui prop som er faset ut.
Ønsker man å gi et accessible name slik at hjelpemidler kan lese opp hva handlingen til knappen er bruk heller 'title'.

</td>
</tr>
<tr>
<td>'iconProps'</td>
<td>

Fluent-ui prop som er faset ut.
Propsene til Icon komponent er forhåndsdefinert i knappen og kan ikke endres på annet enn 'svgPath' som er eksponert.

</td>
</tr>
<tr>
<td>'keytipProps'</td>
<td>

Fluent-ui prop som er faset ut.

</td>
</tr>
<tr>
<td>'data'</td>
<td>

Fluent-ui prop som er faset ut.

</td>
</tr>
<tr>
<td>'defaultRender'</td>
<td>

Fluent-ui prop som er faset ut.

</td>
</tr>
<tr>
<td>'menuAs'

'menuIconProps'

'menuProps'

'menuTriggerKeyCode'

'onAfterMenuDismiss'

'onMenuClick',

'persistMenu'</td>

<td>

Fluent-ui prop som er faset ut.

</td>
</tr>
<tr>
<td>'onRender'</td>
<td>

Fluent-ui prop som er faset ut.

</td>
</tr>
</tbody>
</table>
</div>
