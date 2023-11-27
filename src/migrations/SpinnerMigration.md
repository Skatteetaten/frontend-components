**Fra @skatteetaten/frontend-components v5+ (designsystem-legacy) til Designsystemet v0.5.0**

## Styling:

- de nye komponentene i designsystemet er avhengige av designtokens. Disse leveres nå som en separat pakke. <a class="brodtekst-link" href="#section-designtokens-deprecated">Se designtokens for detaljer.</a>

## Endringer i API:

<!-- For full API-dokumentasjon, vennligst se på <a class="brodtekst-link" href="https://www.skatteetaten.no/stilogtone/designsystemet/komponenter/spinner/">Spinner komponent</a> på dokumentasjonssiden til designsystemet. -->

<div class="migration-tabell">
<table>
<caption>Liste over endringer i komponent-api'et</caption>
<thead><tr><th>Tidligere Prop</th><th>Alternativ</th></tr></thead>
<tbody>
<tr>
<td>'label'</td>
<td>
'children'

Før:

```javascript static
import { Spinner } from '@skatteetaten/frontend-components/Spinner';

<Spinner label={'Laster data'} />;
```

Nå:

```js static
import { Spinner } from '@skatteetaten/ds-progress';

<Spinner>{'Laster data'}</Spinner>;
```

</td>
</tr>
<tr>
<td>'labelPosition'</td>
<td>
'titlePosition'

Alternativer: 'right' | 'bottom'. 'bottom' er default.

</td>
</tr>
<tr>
<td>'ariaLabel'</td>
<td>Faset ut.

Bruk 'children' og 'hideTitle'</td>

</tr>
<tr>
<td>'ariaLive'</td>
<td>Faset ut. </td>
</tr>
<tr>
<td>'componentRef'</td>
<td>'ref'</td>
</tr>

<tr>
<td>'spinnerColor'</td>
<td>

'color'

Alternativer: 'black', 'white', 'blue'
'black' er default

</td>
</tr>

<tr>
<td>'styles'

'theme'

</td>
<td>Fluent-ui props som er faset ut. Bruk 'className' for å style komponenten.

Nå:

```js static
import { Spinner } from '@skatteetaten/ds-progress';

<Spinner className={'customClassName'}>{'Laster data'}</Spinner>;
```

</td>
</tr>

<tr>
<td>'type'

</td>
<td>Fluent-ui prop som er faset ut. Bruk 'size' for å endre størrelse på spinneren.
</td>
</tr>

</tbody>
</table>
</div>
