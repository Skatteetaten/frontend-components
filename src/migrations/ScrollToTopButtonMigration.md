**Fra @skatteetaten/frontend-components v5+ (designsystem-legacy) til Designsystemet v0.2.0**

## Endringer i funksjonalitet:

- Standardtekst kommer nå med oversettelser på bokmål, nynorsk, engelsk og samisk.
- Fokus settes nå automatisk til main når knappen klikkes.

## Styling:

- De nye komponentene i designsystemet er avhengige av designtokens. Disse leveres nå som en separat pakke. <a class="brodtekst-link" href="#section-designtokens-deprecated">Se designtokens for detaljer.</a>

## Endringer i API:

For full API-dokumentasjon, vennligst se på <a class="brodtekst-link" href="https://www.skatteetaten.no/stilogtone/designsystemet/komponenter/scrolltotopbutton/">ScrollToTopButton komponent</a> på dokumentasjonssiden til designsystemet.

<div class="migration-tabell">
<table>
<caption>Liste over endringer i komponent-api'et</caption>
<thead><tr><th>Tidligere Prop</th><th>Alternativ</th></tr></thead>
<tbody>
<tr>
<td>'containerMaxWidth'</td>
<td>
Bruk 'classNames' til å overstyre plasseringen til knappen.

Før:

```javascript static
import { ScrollToTopButton } from '@skatteetaten/frontend-components/ScrolToTopButton ';

<ScrollToTopButton containerMaxWidth={'100px'} />;
```

Nå:

```js static
import { ScrollToTopButton } from '@skatteetaten/ds-buttons';

<ScrollToTopButton classNames={{ button: 'myCustomClassname' }} />;
```

</td>
</tr>

<tr>
<td>
'customClassNames'
</td>
<td>

'className' og 'classNames'

Før:

```javascript static
import { ScrollToTopButton } from '@skatteetaten/frontend-components/ScrolToTopButton ';

<ScrollToTopButton
  customClassNames={{
    topContainer: 'myTopContainer',
    container: 'customContainer',
    box: 'boxClassName',
  }}
/>;
```

Nå:

```js static
import { ScrollToTopButton } from '@skatteetaten/ds-buttons';

<ScrollToTopButton className="myCustomClassname" />;

// Eller

<ScrollToTopButton
  classNames={{
    container: 'myContainer',
    button: 'myButton',
    iconContainer: 'myIconContainer',
    icon: 'myIcon',
    label: 'myLabel',
  }}
/>;
```

</td>
</tr>

<tr>
<td>'label'</td>
<td>

'children'

Før:

```javascript static
import { ScrollToTopButton } from '@skatteetaten/frontend-components/ScrollToTopButton';

<ScrollToTopButton label={'custom label'} />;
```

Nå:

```js static
<ScrollToTopButton>{'custom label'}</ScrollToTopButton>
```

</td>
</tr>

</tbody>
</table>
</div>
