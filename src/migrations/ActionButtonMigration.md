**Fra @skatteetaten/frontend-components v5 (designsystem-legacy) til Designsystemet v0.1.0**

### Endringer i funksjonalitet:

- ...

### Styling:

- ...

### Endringer i API:

<!--For full API-dokumentasjon, vennligst se på [InlineButton komponent](https://breakdance.github.io/breakdance/) på dokumentasjonssiden til designsystemet.
( //TODO FRONT-917 Lenke til EPI dok)-->

<div className="migration-tabell">
<table>
<caption>Liste over endringer i komponent-api'et</caption>
<thead><tr><th>Tidligere Prop</th><th>Alternativ</th></tr></thead>
<tbody>
<tr>
<td>'uniqueId'</td>
<td>

'id'

</td>
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

Forsøk på Før / Etter med styling:

<div class='somethingrandom'>

```javascript static
import { ActionButton } from '@skatteetaten/frontend-components/ActionButton';

<div>
  <ActionButton icon="AddOutline">Legg til</ActionButton>
  <ActionButton icon="delete" color="red" iconAfter={true}>
    Slett
  </ActionButton>
</div>;
```

</div>

```js static
import React from 'react';
import { InlineButton } from '@skatteetaten/ds-buttons';
import { AddSVGpath } from '@skatteetaten/ds-icons';

<InlineButton svgPath={<AddSVGpath />}>Legg til</InlineButton>
// ELLER
<InlineButton svgPath={<path d='M12.5 11a2 2 0 1 0-.09 3.998A' />}>Legg til</InlineButton>
```

</td>
</tr>

<tr>
<td>'theme', 'styles', 'imageErrorAs', 'imageProps'</td>
<td>

Fluent-ui spesifikke props som er faset ut. Bruk className for å tilpasse komponenten.
Vi setter ikke stiler på komponenter ved hjelp av props. All definisjon av stil skal settes via className.
Dvs at denne koden ikke skal brukes lenger:

</td>
</tr>
</tbody>
</table>
</div>

**TODO FRONT-917 Skrive migration guide for ActionButton**
