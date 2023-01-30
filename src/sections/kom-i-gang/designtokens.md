```js noeditor
import { Icon } from '@skatteetaten/frontend-components/Icon';

<span className="deprecatedLabel">
  <Icon iconName="Error" />
  <span>Deprecated</span>
</span>;
```

Designtokens er ikke lenger eksponert som en del av denne pakken.
Vennligst bruk @skatteetaten/ds-core-designtokens

Designtokens leveres ferdig transpilert i .css og .json.
Man kan velge å importere alle ressursene ved å legge en css import statement til index, eller ved å importere de ulike css ressursene hver for seg.

<!-- Vennligst se på [ds-core-designtokens dokumentasjon](https://breakdance.github.io/breakdance/) for import og anbefalinger.
( //TODO FRONT-917 Lenke til EPI dok) -->

## Endringer i funksjonalitet:

- Container er ny funksjonalitet. Det er et sett med css custom properties som distribueres gjennom containers.css (også tilgjengelig i json: containers.json)
  containers er automatisk en del av hoved-importen som er den anbefalte måten å konsumere tokens på: (se eksempel under)

- Sizes er ny funksjonalitet. Det er et sett med css custom properties som distribueres gjennom sizes.css (også tilgjengelig i json: sizes.json)
  Sizes er automatisk en del av hoved-importen som er den anbefalte måten å konsumere tokens på:

```js static
// Eksempel på import av alle ressursene. Man får reset stylesheet, alle designtokens, og SKE theme som default.
// Dette gjøres bare én gang i hoved index.tsx
import '@skatteetaten/ds-core-designtokens/index.css';

// Alternativt kan importeres slik
import '@skatteetaten/ds-core-designtokens/designtokens/containers.css';
import '@skatteetaten/ds-core-designtokens/designtokens/sizes.css';
```

Ved import av alle css-ressurser fra designtoken i nytt designsystem i kombinasjon med bruk av legacy designsystem så kan det oppstå uønsket overskriving av css-verdier på root-nivå. Dette gjelder bla line-heigh som nå blir satt til 1.5. En mulig løsning for å hindre at ny line-height verdi blir satt er å bruke følgende kodesnutt:

```js static
import '@skatteetaten/ds-core-designtokens/index.css';
import './_reset-default.css';
```

I filen `_reset-default.css` legger man inn følgende kode:

```css
:root,
:host {
  line-height: normal;
}
```

## Endringer i API:

<div className="migration-tabell">
<table>
<caption>Liste over endringer i komponent-api'et</caption>
<thead><tr><th>Tidligere designtoken</th><th>Alternativ</th></tr></thead>
<tbody>
<tr>
<td>Breakpoints</td>
<td>

Før:

```javascript static
import designtokenBreakpoints from '/utils/designtokens/_breakpoints.json';
```

Nå:

```js static
// I .scss fil
@import '@skatteetaten/ds-core-designtokens/designtokens/breakpoints.scss';
// Eller - med json loader
import designtokenBreakpoints from '@skatteetaten/ds-core-designtokens/_breakpoints.json';
```

**Mapping av nye navn:**

- $ske-breakpoint-sm → $breakpoint-xs
- $ske-breakpoint-md → $breakpoint-s
- $ske-breakpoint-lg → $breakpoint-m
- $ske-breakpoint-xl → $breakpoint-l
- $ske-breakpoint-xxl → $breakpoint-xl

</td>
</tr>
<tr><td> Font </td>
<td>

Før:

```javascript static
import designtokenFontSizes from '/utils/designtokens/_fontSizes.json';
```

Nå:

```js static
// Eksempel på import av alle ressursene. Man får reset stylesheet, alle designtokens, og SKE theme som default.
// Dette gjøres bare én gang i hoved index.tsx
import '@skatteetaten/ds-core-designtokens/index.css';

// Alternativt kan importeres slik
import '@skatteetaten/ds-core-designtokens/designtokens/font.css';
```

**Mapping av nye navn:**

- font-size:

  - $ske-font-size-base → --font-size-reference
  - $ske-font-size-xxs → --font-size-xxs
  - $ske-font-size-xs → --font-size-xs
  - $ske-font-size-s → --font-size-s
  - $ske-font-size-m → --font-size-m
  - $ske-font-size-l → --font-size-l
  - $ske-font-size-xl → --font-size-xl
  - $ske-font-size-xxl → --font-size-xxl
  - $ske-font-size-xxxl → --font-size-mega
  - $ske-font-size-mega → faset ut

- line-height:

  - $ske-line-height-xxs → faset ut
  - $ske-line-height-s → faset ut
  - $ske-line-height-m h3 → --semantic-line-height-heading3
  - $ske-line-height-m input → --semantic-line-height-input
  - $ske-line-height-m table → --semantic-line-height-table
  - $ske-line-height-m andre elementer → --semantic-line-height-default
  - $ske-line-height-l h4 → --semantic-line-height-heading4
  - $ske-line-height-l buttons → --semantic-line-height-buttons
  - $ske-line-height-l article → --semantic-line-height-article
  - $ske-line-height-xl h1 → --semantic-line-height-heading1
  - $ske-line-height-xl h2 → --semantic-line-height-heading2

- font-weight:

  - $ske-font-weight-light → faset ut
  - $ske-font-weight-semilight → faset ut
  - $ske-font-weight-regular → --font-weight-regular
  - $ske-font-weight-medium → --font-weight-medium
  - $ske-font-weight-semibold → faset ut
  - $ske-font-weight-bold → --font-weight-bold

**Bruk av designtokens for icon sizes: ($ske-font-size-icon-\*)**

Størrelser til ikoner settes ikke gjennom font-sizes lenger. Verdiene kan importeres fra sizes.css

```js static
// Eksempel på import av alle ressursene. Man får reset stylesheet, alle designtokens, og SKE theme som default.
// Dette gjøres bare én gang i hoved index.tsx
import '@skatteetaten/ds-core-designtokens/index.css';

// Alternativt kan importeres slik
import '@skatteetaten/ds-core-designtokens/designtokens/sizes.css';
```

**Mapping av nye navn:**

- $ske-font-size-icon-xs → faset ut
- $ske-font-size-icon-s → --size-extra-small
- $ske-font-size-icon-m → --size-small eller --semantic-size-default
- $ske-font-size-icon-l → --size-medium
- $ske-font-size-icon-xl → --size-large
- $ske-font-size-icon-xxl → faset ut
- $ske-font-size-icon-mega → --size-extra-large

</td>
</tr>
<tr><td> Palette </td>
<td>

**Mapping av nye navn:**

- $ske-color-burgundy-100 → --palette-burgundy-100
- $ske-color-burgundy-70 → --palette-burgundy-70
- $ske-color-burgundy-50 → --palette-burgundy-50
- $ske-color-burgundy-30 → --palette-burgundy-30
- $ske-color-burgundy-10 → --palette-burgundy-10
- $ske-color-burgundy-5 → --palette-burgundy-5
- $ske-color-green-100 → --palette-forest-100
- $ske-color-green-70 → --palette-forest-70
- $ske-color-green-50 → --palette-forest-50
- $ske-color-green-30 → --palette-forest-30
- $ske-color-green-10 → --palette-forest-10
- $ske-color-green-5 → --palette-forest-5
- $ske-color-brown-100 → --palette-ochre-100
- $ske-color-brown-70 → --palette-ochre-70
- $ske-color-brown-50 → --palette-ochre-50
- $ske-color-brown-30 → --palette-ochre-30
- $ske-color-brown-10 → --palette-ochre-10
- $ske-color-brown-5 → --palette-ochre-5
- $ske-color-blue-100 → --palette-denim-100
- $ske-color-blue-70 → --palette-denim-70
- $ske-color-blue-50 → --palette-denim-50
- $ske-color-blue-30 → --palette-denim-30
- $ske-color-blue-10 → --palette-denim-10
- $ske-color-blue-5 → --palette-denim-5
- $ske-color-black-100 → --palette-graphite-100
- $ske-color-grey-70 → --palette-graphite-70
- $ske-color-grey-50 → --palette-graphite-50
- $ske-color-grey-30 → --palette-graphite-30
- $ske-color-grey-10 → --palette-graphite-10
- $ske-color-grey-5 → --palette-graphite-5
- $ske-color-white-100 → --palette-graphite-0
- $ske-color-status-error → --semantic-danger-foreground (brukes sammen med --semantic-danger-background)
- $ske-color-status-warning → --semantic-warning-foreground (brukes sammen med --semantic-warning-background)
- $ske-color-status-ok → --semantic-success-foreground (brukes sammen med --semantic-success-background
- $ske-color-interactive-dark → --palette-azure-100 (for interaksjonsrelatert styling, bruk alias --semantic-interactive-foreground)
- $ske-color-interactive → --palette-azure-70 (for interaksjonsrelatert styling, bruk alias --semantic-interactive-main)
- $ske-color-interactive-light → --palette-azure-10 (for interaksjonsrelatert styling, bruk alias --semantic-interactive-background)

**Nye tokens:**

- --semantic-divider 30
- --semantic-divider-50

</td>
</tr>
<tr><td> Spacing </td>
<td>

Før:

```javascript static
import designtokenSpacing from '/utils/designtokens/_spacing.json';
```

Nå:

```js static
// Eksempel på import av alle ressursene. Man får reset stylesheet, alle designtokens, og SKE theme som default.
// Dette gjøres bare én gang i hoved index.tsx
import '@skatteetaten/ds-core-designtokens/index.css';

// Alternativt kan importeres slik
import '@skatteetaten/ds-core-designtokens/designtokens/spacing.css';
```

**Mapping av nye navn:**

- $ske-spacing-xs → --spacing-xxs
- $ske-spacing-sm → --spacing-xs
- $ske-spacing-md → --spacing-s
- $ske-spacing-lg → --spacing-m
- $ske-spacing-xl → --spacing-l
- $ske-spacing-xxl → --spacing-xl
- $ske-spacing-xxxl → --spacing-xxl
- $ske-spacing-mega → --spacing-mega

</td>
</tr>
</tbody>
</table>
</div>
