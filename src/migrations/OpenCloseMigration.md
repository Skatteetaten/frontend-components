**Fra @skatteetaten/frontend-components v5+ (designsystem-legacy) til Designsystemet v0.3.0**

## Endringer i funksjonalitet:

- onClick kalles nå både ved åpne og lukke. isOnClickOnlyFiredOnOpen er default "false" og må settes til "true" dersom man ønsker at onClick bare skal kalles ved åpning.

## Styling:

- de nye komponentene i designsystemet er avhengige av designtokens. Disse leveres nå som en separat pakke. <a class="brodtekst-link" href="#section-designtokens-deprecated">Se designtokens for detaljer.</a>
- justert utseende på underline og fokus pga. av konsistens med andre komponenter.

## Endringer i API

<div className="migration-tabell">
<table>
<caption>Liste over endringer i komponent-api'et</caption>
<thead><tr><th>Tidligere Prop</th><th>Alternativ</th></tr></thead>
<tbody>
<tr>
<td>'compact'</td>
<td>
Erstattet av 'variant'. Alternativer er 'standard' og 'compact'. Default er 'standard'.

Før:

```javascript static
import { OpenClose } from '@skatteetaten/frontend-components/OpenClose';

<OpenClose title={'Åpne lukke'} compact>
  {'Innhold'}
</OpenClose>;
```

Nå:

```js static
import { OpenClose } from '@skatteetaten/ds-collections';

<OpenClose title={'Åpne lukke'} variant={'compact'}>
  {'Innhold'}
</OpenClose>;
```

</td>
</tr>
<tr>
<td>'customClassNames'</td>
<td>
Faset ut. Bruk 'className' for å style komponenten. All definisjon av stil skal settes via 'className'
</td>
</tr>
<tr>
<td>'headingLevel'</td>
<td>
Erstattet av 'titleAs'. Alterativer: 'h1', 'h2', 'h3', 'h4', 'h5' og 'h6'. Default er ingen headingnivå.

Før:

```javascript static
import { OpenClose } from '@skatteetaten/frontend-components/OpenClose';

<OpenClose headingLevel={1} title={'Åpne lukke'}>
  {'Innhold'}
</OpenClose>;
```

Nå:

```js static
import { OpenClose } from '@skatteetaten/ds-collections';

<OpenClose titleAs={'h1'} title={'Åpne lukke'}>
  {'Innhold'}
</OpenClose>;
```

</td>
</tr>
<tr>
<td>'iconRight'</td>
<td>
Erstattet av 'iconPosition'. Alternativer: 'right' og 'left'. Default er 'left'.

Før:

```javascript static
import { OpenClose } from '@skatteetaten/frontend-components/OpenClose';

<OpenClose title={'Åpne lukke'} iconRight>
  {'Innhold'}
</OpenClose>;
```

Nå:

```js static
import { OpenClose } from '@skatteetaten/ds-collections';

<OpenClose title={'Åpne lukke'} iconPosition={'right'}>
  {'Innhold'}
</OpenClose>;
```

</td>
</tr>
<tr>
<td>'isOpen'</td>
<td>
Erstattet av 'isExpanded'. Default er 'false'.

Før:

```javascript static
import { OpenClose } from '@skatteetaten/frontend-components/OpenClose';

<OpenClose title={'Åpne lukke'} isOpen>
  {'Innhold'}
</OpenClose>;
```

Nå:

```js static
import { OpenClose } from '@skatteetaten/ds-collections';

<OpenClose title={'Åpne lukke'} isExpanded>
  {'Innhold'}
</OpenClose>;
```

</td>
</tr>
<tr>
<td>'underline'</td>
<td>
Erstattet av 'showUnderline'. Default er 'false'.

Før:

```javascript static
import { OpenClose } from '@skatteetaten/frontend-components/OpenClose';

<OpenClose title={'Åpne lukke'} underline>
  {'Innhold'}
</OpenClose>;
```

Nå:

```js static
import { OpenClose } from '@skatteetaten/ds-collections';

<OpenClose title={'Åpne lukke'} showUnderline>
  {'Innhold'}
</OpenClose>;
```

</td>
</tr>
</tbody>
</table>
</div>
