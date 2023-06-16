**Fra @skatteetaten/frontend-components v5+ (designsystem-legacy) til Designsystemet v0.4.0**

## Endringer i funksjonalitet:

- det er ikke mulig med hjelpetekst i denne versjonen av komponenten
- feilmelding og påkrevd felter har endret logikk
- prefix og suffix er ikke videreført

## Styling:

- de nye komponentene i designsystemet er avhengige av designtokens. Disse leveres nå som en separat pakke. <a class="brodtekst-link" href="#section-designtokens-deprecated">Se designtokens for detaljer.</a>

## Endringer i API

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
<td>'errorMessage'

'invalid'

</td>
<td>'errorMessage' må brukes sammen med ny prop 'hasError' som styrer om feilmeldingen skal vises eller ikke.

Før:

```javascript static
import { TextField } from '@skatteetaten/frontend-components/TextField';

<TextField errorMessage={'Type virksomhet er påkrevd.'} xxxx />;
```

Nå:

```js static
import { TextField } from '@skatteetaten/ds-forms';

<TextField hasError errorMessage={'Type virksomhet er påkrevd.'} xxx>
  ...
</TextField>;
```

</tr>
<tr>
<td>'onGetErrorMessage'</td>
<td></td>
</tr>
<tr>
<td>'ariaLabel'</td>
<td></td>
</tr>
<tr>
<td>'autoAdjustHeight'</td>
<td></td>
</tr>
<tr>
<td>'autoComplete'</td>
<td></td>
</tr>
<tr>
<td>'boldText'</td>
<td></td>
</tr>
<tr>
<td>'calloutFloating'</td>
<td></td>
</tr>
<tr>
<td>'canRevealPassword'</td>
<td></td>
</tr>
<tr>
<td>'deferredValidationTime'</td>
<td></td>
</tr>
<tr>
<td>'editableWhenEmpty'</td>
<td></td>
</tr>
<tr>
<td>'help'</td>
<td>Faset ut. Komponenten vil bli utvidet med mulighet for hjelpetekst på et senere tidspunkt</td>
</tr>
<tr>
<td>'iconProps'</td>
<td>Fluent-ui prop som er faset ut. </td>
</tr>
<tr>
<td>'inputClassName'</td>
<td>??? Fluent-UI spesifikke props som er faset ut. Bruk 'className' for å style komponenten.</td>
</tr>
<tr>
<td>'prefix'

'suffix'

'onRenderPrefix'

'onRenderSuffix'

</td>
<td>Fases ut.</td>
</tr>
<tr>
<td>'placeholder'</td>
<td></td>
</tr>
<tr>
<td>'labelButtonAriaLabel'</td>
<td></td>
</tr>
<tr>
<td>'labelWithCalloutProps'</td>
<td></td>
</tr>
<tr>
<td>'onCalloutToggle'</td>
<td></td>
</tr>
<tr>
<td>''</td>
<td></td>
</tr>
<tr>
<td>''</td>
<td></td>
</tr>
<tr>
<td>''</td>
<td></td>
</tr>

</tbody>
</table>
</div>
