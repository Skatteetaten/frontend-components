**Fra @skatteetaten/frontend-components v5+ (designsystem-legacy) til Designsystemet v0.3.0**

## Endringer i funksjonalitet:

- deler av Card er blitt gjort om til en ny komponent Panel uten åpne/lukke-funksjonalitet
- du kan fortsatt bruke Card hvis du trenger åpne/lukke-funksjonalitet til det kommer ny komponent for dette
- overskrift er kodet som heading element

## Styling:

- de nye komponentene i designsystemet er avhengige av designtokens. Disse leveres nå som en separat pakke. <a class="brodtekst-link" href="#section-designtokens-deprecated">Se designtokens for detaljer.</a>
- ikke mulig å kombinere ulike farger på rammen og bakgrunn til Panel

## Endringer i API

For full API-dokumentasjon, vennligst se på [Panel komponent](https://www.skatteetaten.no/stilogtone/designsystemet/komponenter/panel/) på dokumentasjonssiden til designsystemet.

<div class="migration-tabell">
<table>
<caption>Liste over endringer i komponent-api'et</caption>
<thead><tr><th>Tidligere Prop</th><th>Alternativ</th></tr></thead>
<tbody>
<tr>
<td>'componentRef'</td>
<td>'ref'

Alle komponentene våre bruker forwardRef. For komponent sendes ref til div-elementet.

</td>
</tr>
<tr>
<td>'border'</td>
<td>'variant' og 'color'

Alternativer for 'variant': 'outline' og 'filled'. 'outline' er default.

Alternativer for 'color': 'ochre', 'forest', 'burgundy', 'denim', 'graphite'. 'ochre' er default.

Før:

```javascript static
import { Card } from '@skatteetaten/frontend-components/Card';

<Card border={Card.Border.GREEN_BORDER}>{'Innhold'}</Card>;
```

Nå:

```js static
import { Panel } from '@skatteetaten/ds-content';

<Panel color={'forest'}>{'Innhold'}</Panel>;
// ELLER
<Panel variant={'outline'} color={'forest'}>
  {'Innhold'}
</Panel>;
```

</td>
</tr>
<tr>
<td>'color'</td>
<td>''variant' og 'color'

Alternativer for 'variant': 'outline' og 'filled'. 'outline' er default.

Alternativer for 'color': 'ochre', 'forest', 'burgundy', 'denim', 'graphite'. 'ochre' er default.

Før:

```javascript static
import { Card } from '@skatteetaten/frontend-components/Card';

<Card color={Card.Border.GREEN_BORDER}>{'Innhold'}</Card>;
```

Nå:

```js static
import { Panel } from '@skatteetaten/ds-content';

<Panel variant={'filled'} color={'forest'}>
  {'Innhold'}
</Panel>;
```

</td>
</tr>
<tr>
<td>'titleTagName'</td>
<td>'titleAs'

Alternativer: 'h1', 'h2', 'h3', 'h4', 'h5' og 'h6'. Default er 'h3'.

Før:

```javascript static
import { Card } from '@skatteetaten/frontend-components/Card';

<Card titleTagName={'h3'} title={'Skatteoppgjør'}>
  {'Innhold'}
</Card>;
```

Nå:

```js static
import { Panel } from '@skatteetaten/ds-content';

<Panel tilteAs={'h3'} title={'Skatteoppgjør'}>
  {'Innhold'}
</Panel>;
// ELLER
<Panel title={'Skatteoppgjør'}>{'Innhold'}</Panel>;
```

</td>
</tr>
<tr>
<td>'titlesize'</td>
<td>Faset ut.

'title' vil alltid ha en fast størrelse uavhengig av verdien til 'tilteAs'.

</td>
</tr>
<tr>
<td>'marginbottom'</td>
<td>'spacing'

Alternativer: 'xxs', 'xs', 's', 'm', 'l', 'xl', 'xxl' og 'mega'. Default er 'xxs'.

Før:

```javascript static
import { Card } from '@skatteetaten/frontend-components/Card';

<Card marginbottom={'64px'}>{'Innhold'}</Card>;
```

Nå:

```js static
import { Panel } from '@skatteetaten/ds-content';

<Panel spacing={'mega'}>{'Innhold'}</Panel>;
```

</td>
</tr>
<tr>
<td>'margin'</td>
<td>'padding'

Alternativer: 's', 'm', 'l', 'xl', 'xxl' og 'mega'. Default er 'xl'. Verdiene samsvarer ikke med tidligere verdier.

Alternativ 'none' er ikke videreført og kan erstattes med å bruke 'className'.

Før:

```javascript static
import { Card } from '@skatteetaten/frontend-components/Card';

<Card margin={'large'}>{'Innhold'}</Card>;
// ELLER
<Card margin={'none'}>{'Innhold'}</Card>;
```

Nå:

```js static
import { Panel } from '@skatteetaten/ds-content';

<Panel padding={'xl'}>
  {'Innhold'}
</Panel>;
// ELLER
<Panel className={'none'}>
  {'Innhold'}
</Panel>;

  // Legg dette i css-filen
.none {
  padding: 0;
}
```

</td>
</tr>
<tr>
<td>'expand'

'isExpanded'

'buttonType'

'ariaLabel'

'onClick'

'onChange'

</td>
<td>Blir ikke brukt i Panel.</td>
</tr>
</tbody>
</table>
</div>
