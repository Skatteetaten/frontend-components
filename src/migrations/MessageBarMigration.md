**Fra @skatteetaten/frontend-components v5+ (designsystem-legacy) til Designsystemet v0.3.0**

MessageBar er blitt erstattet med Alert.

## Endringer i funksjonalitet:

- 'type' er erstattet av 'variant', se tabellen for migrering.
- 'variant' har ingen default verdi og er dermed påkrevd.
- 'duration' er faset ut, lukkekryss skal brukes istedet (UU).
- 'size' utgår og Alert tilbys i kun én størrelse.

## Styling:

- de nye komponentene i designsystemet er avhengige av designtokens. Disse leveres nå som en separat pakke. <a class="brodtekst-link" href="#section-designtokens-deprecated">Se designtokens for detaljer.</a>

## Endringer i API

For full API-dokumentasjon, vennligst se på <a class="brodtekst-link" href="https://www.skatteetaten.no/stilogtone/designsystemet/komponenter/messagebar/">Alert komponent</a> på dokumentasjonssiden til designsystemet.

<div class="migration-tabell">
<table>
<caption>Liste over endringer i komponent-api'et</caption>
<thead><tr><th>Tidligere Prop</th><th>Alternativ</th></tr></thead>
<tbody>
<tr>
<td>'actions'</td>
<td>
Fluent-ui prop som er faset ut.
</td>
</tr>
<tr>
<td>'ariaLabel'</td>
<td>
Fluent-ui prop som er faset ut.
</td>
</tr>
<tr>
<td>'componentRef'</td>
<td>

'ref'

Alle komponentene våre bruker forwardRef. For denne komponenten sendes 'ref' til div-elementet.

</td>
</tr>
<tr>
<td>'delayedRender'</td>
<td>
Fluent-ui prop som er faset ut.
</td>
</tr>
<tr>
<td>'dismissButtonAriaLabel'</td>
<td>
Fluent-ui prop som er faset ut.
</td>
</tr>
<tr>
<td>'dismissIconProps'</td>
<td>
Fluent-ui prop som er faset ut.
</td>
</tr>
<tr>
<td>'duration'</td>
<td>
Faset ut.
</td>
</tr>
<tr>
<td>'expandButtonProps'</td>
<td>
Fluent-ui prop som er faset ut.
</td>
</tr>
<tr>
<td>'isMultiline'</td>
<td>
Fluent-ui prop som er faset ut.
</td>
</tr>
<tr>
<td>'messageBarIconProps'</td>
<td>
Fluent-ui prop som er faset ut.
</td>
</tr>
<tr>
<td>'messageBarType'</td>
<td>
Fluent-ui prop som er faset ut.
</td>
</tr>
<tr>
<td>'onClick'</td>
<td>
Faset ut.
</td>
</tr>
<tr>
<td>'onRenderAfterDuration'</td>
<td>
Faset ut.
</td>
</tr>
<tr>
<td>'overflowButtonAriaLabel'</td>
<td>
Fluent-ui prop som er faset ut.
</td>
</tr>
<tr>
<td>'role'</td>
<td>
'ariaLive'

'ariaLive' blir satt til 'polite' for variantene success, neutral og warning (som tilsvar role=status).

'ariaLive' blir satt til 'assertive' for varianten danger (som tilsvarer role=alert).

Før:

```javascript static
import { MessageBar } from '@skatteetaten/frontend-components/MessageBar';

<MessageBar role="none" type={MessageBar.Type.info}>
  Infomelding
</MessageBar>;
```

Nå:

```js static
import { Alert } from '@skatteetaten/ds-status';

<Alert ariaLive="off" variant="neutral">
  Infomelding
</Alert>;
```

</td>
</tr>
<tr>
<td>'size'</td>
<td>
Faset ut.
</td>
</tr>
<tr>
<td>
'styles'

'theme'</td>

<td>

Fluent-UI spesifikke props som er faset ut. Bruk 'className' for å style komponenten. All definisjon av stil skal settes via 'className'.

Før:

```javascript static
import { MessageBar } from '@skatteetaten/frontend-components/MessageBar';

<MessageBar type={MessageBar.Type.success}>Filen ble lastet opp.</MessageBar>;
```

Nå:

```js static
import { Alert } from '@skatteetaten/ds-status';

<Alert className="myCustomClassname" variant="success">
  Filen ble lastet opp.
</Alert>;
```

</td>
</tr>
<tr>
<td>'truncated'</td>
<td>
Fluent-ui prop som er faset ut.
</td>
</tr>
<tr>
<td>'type'</td>
<td>
'variant'

MessageBar.Type.success -> 'success'

MessageBar.Type.warning -> 'warning'

MessageBar.Type.info -> 'neutral'

MessageBar.Type.severeWarning -> 'danger'

Før:

```javascript static
import { MessageBar } from '@skatteetaten/frontend-components/MessageBar';

<MessageBar type={MessageBar.Type.success}>Filen ble lastet opp.</MessageBar>;
```

Nå:

```js static
import { Alert } from '@skatteetaten/ds-status';

<Alert variant="success">Filen ble lastet opp.</Alert>;
```

MessageBar.Type.blocked:

```js static
import { Alert } from '@skatteetaten/ds-status';
import { LockSVGpath } from '@skatteetaten/ds-icons';

<Alert variant="neutral" svgPath={LockSVGpath}>
  Disse feltene er låst.
</Alert>;
```

MessageBar.Type.error:

```js static
import { Alert } from '@skatteetaten/ds-status';
import { ErrorOutlineSVGpath } from '@skatteetaten/ds-icons';

<Alert variant="warning" svgPath={ErrorOutlineSVGpath}>
  Det finnes en feil.
</Alert>;
```

</td>
</tr>
</tbody>
</table>
</div>
