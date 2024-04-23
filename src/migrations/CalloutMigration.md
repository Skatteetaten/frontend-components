**Fra @skatteetaten/frontend-components v11+ (designsystem-legacy) til Designsystemet v0.8.0**

## Endringer i funksjonalitet:

Komponenten har byttet navn til Popover og kommer med to underkomponenter: Popover.Trigger og Popover.Content. Disse sørger for at åpne/lukke-knapp automatisk kobles til innholdet i Popover.
Komponenten kan håndterer åpne-lukke tilstand automatisk, men det er også mulig å overstyre tilstanden med isOpen og Popover.Trigger sin onClick.

## Styling:

- De nye komponentene i designsystemet er avhengige av designtokens. Disse leveres nå som en separat pakke. <a class="brodtekst-link" href="#section-designtokens-deprecated">Se designtokens for detaljer.</a>

## Endringer i API

For full API-dokumentasjon, vennligst se på <a class="brodtekst-link" href="https://www.skatteetaten.no/stilogtone/designsystemet/komponenter/popover/">Popover komponent</a> på dokumentasjonssiden til designsystemet.

<div class="migration-tabell">
<table>
<caption>Liste over endringer i komponent-api'et</caption>
<thead><tr><th>Tidligere Prop</th><th>Alternativ</th></tr></thead>
<tbody>
<tr>
<td>'target'</td>
<td>Faset ut. Komponenten posisjoneres nå i forhold til <Popover.Trigger />.</td>
</tr>
<tr>
<td>'directionalHint'</td>
<td>'position'

Alternativer: 'topStart' | 'topEnd' | 'bottomStart' | 'bottomEnd'. 'bottomStart' er default.

Før:

```javascript static
import { ActionButton } from '@skatteetaten/frontend-components/ActionButton';
import { Callout } from '@skatteetaten/frontend-components/Callout';

const [state, setState] = React.useState({
  isCalloutVisible: false,
});

const visible = state.isCalloutVisible;

function closeButton() {
  setState({
    isCalloutVisible: false,
  });
}

<div>
  <span ref={(spanElement) => (buttonElement = spanElement)}>
    <ActionButton
      buttonStyle="secondary"
      aria-expanded={visible}
      icon="HelpOutline"
      onClick={() => setState({ isCalloutVisible: !state.isCalloutVisible })}
    >
      Vis hjelpetekst
    </ActionButton>
  </span>

  {state.isCalloutVisible && (
    <Callout
      target={buttonElement}
      directionalHint={Callout.POS_TOP_LEFT}
      onClose={() => closeButton()}
      onDismiss={() => closeButton()}
    >
      {'innhold'}
    </Callout>
  )}
</div>;
```

Nå:

```js static
import { Popover } from '@skatteetaten/ds-overlays';

<Popover position={'topStart'}>
  <Popover.Trigger />
  <Popover.Content>{'innhold'}</Popover.Content>
</Popover>;
```

</td>
</tr>

<tr>
<td>'directionalHintFixed'
'directionalHintForRTL'
</td>
<td>Faset ut</td>
</tr>
<tr>
<td>'onClose'</td>
<td>onClose ligger nå på <Popover.Content />.

Før:

```javascript static
import { Callout } from '@skatteetaten/frontend-components/Callout';

<Callout
  target={buttonElement}
  onClose={() => closeButton()}
  onDismiss={() => closeButton()}
>
  {'innhold'}
</Callout>;
```

Nå:

```js static
import { Popover } from '@skatteetaten/ds-overlays';

<Popover position={'topStart'}>
  <Popover.Trigger />
  <Popover.Content onClose={() => closeButton()}>{'innhold'}</Popover.Content>
</Popover>;
```

</td>
</tr>
<tr>
<td>'onDismiss'</td>
<td>Faset ut. Popover skiller ikke lenger mellom onClose og onDismiss.</td>
</tr>
<tr>
<td>'ariaDescribedBy'</td>
<td>Flyttet fra Callout til Popover.Trigger siden det er selve knappen som skal beskrives.</td>
</tr>
<tr>
<td>'ariaLabel'</td>
<td>Faset ut.</td>
</tr>
<tr>
<td>'ariaLabelledBy'</td>
<td>Faset ut.</td>
</tr>
<tr>
<td>'role'</td>
<td>Faset ut.</td>
</tr>
<tr>
<td>'border'</td>
<td>Faset ut</td>
</tr>
<tr>
<td>'color'</td>
<td>
Fargene har fått nye navn og 'lightPink' har blitt faset ut.

'color'

Alternativer: 'forest', 'ochre', 'white'.
'forest' er default

</td>
</tr>
<tr>
<td>'hidden'</td>
<td>'isOpen</td>
</tr>
<tr>
<td>
'preventDismissOnEvent'

'preventDismissOnLostFocus'

'preventDismissOnResize'

'preventDismissOnScroll'

'shouldDismissOnWindowFocus'

'dismissOnTargetClick'

</td>
<td>
Faset ut. Det er forsatt mulig å forhindre automatisk lukking med 'disableAutoDismissOnMobile' og 'disableAutoDismiss'.
</td>
</tr>
<tr>
<td>
'onLayerMounted'

'onPositioned'

'onRestoreFocus'

'onScroll'

</td>
<td>
Fluent-ui props som er faset ut.
</td>
</tr>
<tr>
<td>'alignTargetEdge'

'bounds'

'coverTarget'

'doNotLayer'

'finalHeight'

'popupProps'

'layerProps'

'shouldUpdateWhenHidden'

'setInitialFocus'

</td>

<td>Fluent-ui props som er faset ut.</td>

</tr>
<tr>
<td>
'beakWidth'

'calloutMaxHeight'

'calloutMaxWidth'

'calloutMinWidth'

'calloutWidth'

'styles'

'theme'

'minPagePadding'

'isBeakVisible'

'hideOverflow'

'gapSpace'

</td>
<td>
Fluent-ui props som er faset ut. Bruk 'className' for å style komponenten.
</td>
</tr>
</tbody>
</table>
</div>
