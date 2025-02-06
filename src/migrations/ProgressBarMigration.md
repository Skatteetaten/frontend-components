**Fra @skatteetaten/frontend-components v15+ (designsystem-legacy) til Designsystemet v1.5.0**

## Endringer i funksjonalitet:

- ProgressBar blir ikke videreført i nytt designsystem. I stedet kan Spinner brukes.
- For prosesser som tar mindre enn ti sekunder kan man bruke Spinner direkte.
- For prosesser som tar mer enn ti sekunder kan man bruke spinner med prosentvisning som løpende oppdateres for å signalisere hvor lenge det er igjen av prosessen.

## Styling:

- de nye komponentene i designsystemet er avhengige av designtokens. Disse leveres nå som en separat pakke. <a class="brodtekst-link" href="#section-designtokens-deprecated">Se designtokens for detaljer.</a>

## Endringer i API:

For full API-dokumentasjon, vennligst se på <a class="brodtekst-link" href="https://www.skatteetaten.no/stilogtone/designsystemet/komponenter/spinner/">Spinner komponent</a> på dokumentasjonssiden til designsystemet.

<div class="migration-tabell">
<table>
<caption>Liste over endringer i komponent-api'et</caption>
<thead><tr><th>Tidligere Prop</th><th>Alternativ</th></tr></thead>
<tbody>
<tr>
<td>'label'

'description'

</td>
<td>
'children'

Før:

```javascript static
import { ProgressBar } from '@skatteetaten/frontend-components/ProgressBar';

<ProgressBar label={'Laster data'} />;
```

Nå:

```js static
import { Spinner } from '@skatteetaten/ds-progress';

<Spinner>{'Laster data'}</Spinner>;
```

</td>
</tr>
<tr>
<td>'ariaLabel'

'ariaValueText'

</td>
<td>Faset ut.

Bruk 'children' og 'hideTitle'</td>

</tr>
<tr>
<td>'onRenderProgress'

'progressHidden'

</td>
<td>Faset ut.

</td>
</tr>
<tr>
<td>'styles'

'theme'

'barHeight'

</td>
<td>Faset ut. Bruk 'className' for å style komponenten.

Nå:

```js static
import { Spinner } from '@skatteetaten/ds-progress';

<Spinner className={'customClassName'}>{'Laster data'}</Spinner>;
```

</td>
</tr>

<tr>
<td>
'percentComplete'
</td>
<td>

Før:

```javascript static
import { ProgressBar } from '@skatteetaten/frontend-components/ProgressBar';

<ProgressBar percentComplete={50} />;
```

Nå:

```js static
import { Spinner } from '@skatteetaten/ds-progress';

<Spinner percentComplete={50} />;
```

</td>
</tr>
</tbody>
</table>
</div>
