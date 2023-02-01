**Fra @skatteetaten/frontend-components v5 (designsystem-legacy) til Designsystemet v0.1.0**

ActionButton er blitt erstattet med InlineButton.

## Endringer i funksjonalitet:

- det kan ikke sendes inn markup lengre
- har ikke lengre anker-funksjonalitet
- v6.0.2: knappen har igjen fått type="button" som default slik som i legacy designsystem. I tillegg er type gjeninnført som prop.

## Styling:

- De nye komponentene i designsystemet er avhengige av designtokens. Disse leveres nå som en separat pakke. Se [designtokens](#section-designtokens-deprecated) for detaljer.
- tilbys ikke i ulike farger lengre
- ikon tilbys ikke i forskjellig størrelser lengre
- har ikke lengre mulighet til valgfri underline. Underline kommer automatisk dersom ikon ikke er valgt

## Endringer i API:

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

'svgPath'

Forhåndsdefinert path kan importeres fra @skatteetaten/ds-icons pakke. Alternativt kan custom path sendes.

Før:

```javascript static
import { ActionButton } from '@skatteetaten/frontend-components/ActionButton';

<ActionButton icon="Add">Legg til</ActionButton>;
```

Nå:

```js static
import { InlineButton } from '@skatteetaten/ds-buttons';
import { AddSVGpath } from '@skatteetaten/ds-icons';

<InlineButton svgPath={AddSVGpath}>
    Legg til
</InlineButton>
// ELLER
<InlineButton svgPath={<path d='M12.5 11a2 2 0 1 0-.09 3.998A' />}>
    Legg til
</InlineButton>
```

</td>
</tr>
<tr>
<td>'iconAfter'</td>
<td>

'iconPosition'

Alternativer: 'left' | 'right'. 'left' er default.

Før:

```javascript static
import { ActionButton } from '@skatteetaten/frontend-components/ActionButton';

<ActionButton icon='Add'>Legg til</ActionButton>
 // ELLER
<ActionButton icon='Add' iconAfter={false}>Legg til</ActionButton>
// ELLER
<ActionButton icon='Add' iconAfter>Legg til</ActionButton>
```

Nå:

```js static
import { InlineButton } from '@skatteetaten/ds-buttons';
import { AddSVGpath } from '@skatteetaten/ds-icons';

<InlineButton svgPath={AddSVGpath}>
    Legg til
</InlineButton>
 // ELLER
<InlineButton iconPosition='left' svgPath={AddSVGpath}>
    Legg til
</InlineButton>
// ELLER
<InlineButton iconPosition='right' svgPath={AddSVGpath}>
    Legg til
</InlineButton>
```

</td>
</tr>
<tr>
<td>'ariaDesciption'</td>
<td>

'ariaDescribedby'

Den inneholder en eller flere id-er til HTML-elementer (som inneholder tekst hvor teksten blir lest opp av hjelpemidler etter at knappeteksten er lest opp).

Før:

```javascript static
import { ActionButton } from '@skatteetaten/frontend-components/ActionButton';

<ActionButton ariaDescription="idTilElementMedTekst">
  Send inn skjema
</ActionButton>;
```

Nå:

```js static
import { InlineButton } from '@skatteetaten/ds-buttons';

<InlineButton ariaDescribedby="idTilElementMedTekst">
  Send inn skjema
</InlineButton>;
```

</td>
</tr>
<tr>
<td>'ariaLabel'</td>
<td>

Faset ut. Knappeteksten skal være den samme for alle, også de som bruker hjelpemidler. Hvis behov for en tilleggstekst bruk 'ariaDescribedby'.

</td>
</tr>
<tr>
<td>'ariaHidden'</td>
<td>

Faset ut. Det skal ikke være mulig å skjule knappen for hjelpemidler fordi knappen skal være tilgjengelig for alle. Det er heller ikke ønskelig å bruke aria-hidden på et fokuserbart element.

</td>
</tr>
<tr>
<td>'iconSize'</td>
<td>

Faset ut. Tilbys ikke ulike størrelser på ikonet lengre.
Icon vises alltid med variant 'systemIcon'

</td>
</tr>
<tr>
<td>'color'</td>
<td>

Faset ut. Tilbys ikke i ulike farger lengre. Bruk 'className' for å gi InlineButton en annen farge.

Før:

```javascript static
import { ActionButton } from '@skatteetaten/frontend-components/ActionButton';

<ActionButton icon="delete" color="red" iconAfter={true}>
  Slett
</ActionButton>;
```

Nå:

```js static
import { InlineButton } from '@skatteetaten/ds-buttons';
import { DeleteSVGpath } from '@skatteetaten/ds-icons';

<InlineButton className='customColor' iconPosition='right' svgPath={DeleteSVGpath}>
    Slett
</InlineButton>

// Legg dette i css-filen
.customColor {
  --semantic-interactive-main: red;
}
```

</td>
</tr>
<tr>
<td>'border'</td>
<td>

Faset ut. Har ikke lengre mulighet til valgfri underline. Denne kommer automatisk dersom ikon ikke er valgt.

</td>
</tr>
<tr>
<td>'buttonSize'</td>
<td>

Faset ut. Erstattes ved bruk av egen css gjennom 'className'.

</td>
</tr>
<tr>
<td>'mobileFullWidth'</td>
<td>

Faset ut. Erstattes ved bruk av egen css gjennom 'className'.

Før:

```javascript static
import { InlineButton } from '@skatteetaten/frontend-components/Button ';

<InlineButton mobileFullWidth>Send inn skjema</InlineButton>;
```

Nå:

```js static
// css kode:
.myCustomClassname {
    width: var(--container-xs);

    // bruker du scss kan du bruke breakpoints variabler
    @media (min-width:$breakpoint-s) {
        width: auto;
    }
}

// js kode:
import { InlineButton } from '@skatteetaten/ds-buttons';

<InlineButton className='myCustomClassname'>
    Send inn skjema
</InlineButton>
```

</td>
</tr>
<tr>
<td>
'getClassName',

'theme',

'styles'

</td>
<td>

Fluent-ui spesifikke props som er faset ut. Bruk 'className' for å style komponenten.

Før:

```javascript static
import { ActionButton } from '@skatteetaten/frontend-components/ActionButton ';

<ActionButton style={{ fontSize: '24px', color: '#1362ae' }}>
  Legg til
</ActionButton>;
```

Nå:

```js static
import { InlineButton } from '@skatteetaten/ds-buttons';

<InlineButton className="myCustomClassName">Legg til</InlineButton>;
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

Fluent-ui prop som er faset ut. Bruk 'children' for å gi komponenten en tekst (accessible name). Det kan ikke sendes inn markup lengre.

Før:

```javascript static
import { ActionButton } from '@skatteetaten/frontend-components/ActionButton';

const content = (
  <span>
    Legg <span class="underline">til</span>
  </span>
);

<ActionButton text={content} />;
```

Nå:

```js static
import { InlineButton } from '@skatteetaten/ds-buttons';

const contentOnlyString = 'Legg til';

<InlineButton>{contentOnlyString}</InlineButton>;
```

</td>
</tr>
<tr>
<td>'iconProps'</td>
<td>

Fluent-ui props som er faset ut.

</td>
</tr>
<tr>
<td>'keytipProps'</td>
<td>

Fluent-ui props som er faset ut.

</td>
</tr>
<tr>
<td>'data'</td>
<td>

Fluent-ui props som er faset ut.

</td>
</tr>
<tr>
<td>'defaultRender'</td>
<td>

Fluent-ui props som er faset ut.

</td>
</tr>
<tr>
<td>
'menuAs',

'menuIconProps',

'menuProps',

'menuTriggerKeyCode',

'onAfterMenuDismiss',

'onMenuClick',

'persistMenu'

</td>
<td>

Fluent-ui props som er faset ut.

</td>
</tr>
<tr>
<td>'onRender'</td>
<td>

Fluent-ui props som er faset ut.

</td>
</tr>
</tbody>
</table>
</div>
