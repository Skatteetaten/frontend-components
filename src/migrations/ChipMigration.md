**Fra @skatteetaten/frontend-components v5+ (designsystem-legacy) til Designsystemet v0.7.0**

## Endringer i funksjonalitet

- Endret navn til 'Tag'
- Bruk av ikon sammen med chip gjøres nå via egen prop (svgPath).

## Styling

- De nye komponentene i designsystemet er avhengige av designtokens. Disse leveres nå som en separat pakke. <a class="brodtekst-link" href="#section-designtokens-deprecated">Se designtokens for detaljer.</a>
- nye størrelser - medium og small.

## Endringer i API

For full API-dokumentasjon, vennligst se på <a class="brodtekst-link" href="https://www.skatteetaten.no/stilogtone/designsystemet/komponenter/chip/">Chip komponent</a> på dokumentasjonssiden til designsystemet.

<div class="migration-tabell">
<table>
<caption>Liste over endringer i komponent-api'et</caption>
<thead><tr><th>Tidligere Prop</th><th>Alternativ</th></tr></thead>
<tbody>
<tr>
<td>'componentRef'</td>
<td>
'ref'

Alle komponentene våre bruker forwardRef.

</td>

</tr>

<tr>
<td>
'ariaLabel'

'aria-label'

</td>

<td>
Faset ut.

</td>
</tr>

<tr>
<td>'type'</td>
<td>
Erstattet av 'color'.

Alternativer for 'color': 'ochre', 'forest', 'burgundy', 'graphite'. 'ochre' er default.

Før:

```javascript static
import { Chip } from '@skatteetaten/frontend-components/Chip';

<Chip type={Chip.OK} size="standard">
  Godkjent
</Chip>;
```

Nå:

```js static
import { Tag } from '@skatteetaten/ds-status';

<Tag color={'forest'}>Godkjent</Tag>;
```

</td>
</tr>
<tr>
<td>'size'</td>
<td>
'standard' og 'large' erstattet av 'medium' og 'small'. 'medium' er default.

Før:

```javascript static
import { Chip } from '@skatteetaten/frontend-components/Chip';

<Chip size="standard">Godkjent</Chip>;
```

Nå:

```js static
import { Tag } from '@skatteetaten/ds-status';

<Tag size={'small'}>Godkjent</Tag>;
```

</td>
</tr>
<tr>
<td>'children'</td>
<td>

Children aksepterer nå kun string. Valgfritt ikon settes via ny prop 'svgPath'.

Før:

```javascript static
import { Chip } from '@skatteetaten/frontend-components/Chip';
import { Icon } from '@skatteetaten/frontend-components/Icon';
  <Chip type={Chip.OK} size="standard">
    <Icon iconName="Check" /> Godkjent
  </Chip>
</div>;
```

Nå:

```js static
import { Tag } from '@skatteetaten/ds-status';
import { CheckSVGpath } from '@skatteetaten/ds-icons';

<Tag color={'forest'} svgPath={CheckSVGpath}>
  {'Godkjent'}
</Tag>;
```

</td>
</tr>
</tbody>
</table>
</div>
