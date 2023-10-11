**Fra @skatteetaten/frontend-components v5+ (designsystem-legacy) til Designsystemet v0.4.0**

Callout er blitt erstattet med Popover.

## Endringer i funksjonalitet:

- 'type' er erstattet av 'variant', se tabellen for migrering.
- 'variant' har ingen default verdi og er dermed påkrevd.
- 'duration' er faset ut, lukkekryss skal brukes istedet (UU).
- 'size' utgår og Alert tilbys i kun én størrelse.

## Styling:

- de nye komponentene i designsystemet er avhengige av designtokens. Disse leveres nå som en separat pakke. <a class="brodtekst-link" href="#section-designtokens-deprecated">Se designtokens for detaljer.</a>

## Endringer i API

<div className="migration-tabell">
<table>
<caption>Liste over endringer i komponent-api'et</caption>
<thead><tr><th>Tidligere Prop</th><th>Alternativ</th></tr></thead>
<tbody>
<tr>
<td>'alignTargetEdge'</td>
<td>
Fluent-ui prop som er faset ut.
</td>
</tr>
<tr>
<td>'ariaDescribedBy'</td>
<td>
Fluent-ui prop som er faset ut.
</td>
</tr>
<tr>
<td>'ariaLabel'</td>
<td>

'ref'

Alle komponentene våre bruker forwardRef. For denne komponenten sendes 'ref' til div-elementet.

</td>
</tr>
<tr>
<td>'ariaLabelledBy'</td>
<td>
Fluent-ui prop som er faset ut.
</td>
</tr>
<tr>
<td>'autoDismiss'</td>
<td>
Faset ut. Default behavior er autoDismiss.
</td>
</tr>
<tr>
<td>'beakWidth'</td>
<td>
Fluent-ui prop som er faset ut.
</td>
</tr>
<tr>
<td>'border'</td>
<td>
Faset ut.
</td>
</tr>
<tr>
<td>'bounds'</td>
<td>
Fluent-ui prop som er faset ut.
</td>
</tr>
<tr>
<td>'calloutMaxHeight'</td>
<td>
Fluent-ui prop som er faset ut.
</td>
</tr>
<tr>
<td>'calloutMaxWidth'</td>
<td>
Fluent-ui prop som er faset ut.
</td>
</tr>
<tr>
<td>'calloutMinWidth'</td>
<td>
Fluent-ui prop som er faset ut.
</td>
</tr>
<tr>
<td>'calloutWidth'</td>
<td>
Faset ut.
</td>
</tr>
<tr>
<td>'color'</td>
<td>
Burgundy warning er faset ut. Bruk className for å style.
</td>
</tr>
<tr>
<td>'coverTarget'</td>
<td>
Fluent-ui prop som er faset ut.
</td>
</tr>
<tr>
<td>
'directionalHint'

'directionalHintFixed

'directionalHintForRTL'

</td>
<td>
Fluent-ui prop som er faset ut.
</td>
</tr>
<tr>
<td>'dismissOnTargetClick'</td>
<td>
Fluent-ui prop som er faset ut.
</td>
</tr>
<tr>
<td>'doNotLayer'</td>
<td>
Fluent-ui prop som er faset ut.
</td>
</tr>
<tr>
<td>'finalHeight'</td>
<td>
Fluent-ui prop som er faset ut.
</td>
</tr>
<tr>
<td>'gapSpace'</td>
<td>
Fluent-ui prop som er faset ut.
</td>
</tr>
<tr>
<td>'hidden'</td>
<td>
Fluent-ui prop som er faset ut.
</td>
</tr>
<tr>
<td>'hideOverflow'</td>
<td>
Fluent-ui prop som er faset ut.
</td>
</tr>
<tr>
<td>'isBeakVisible'</td>
<td>
Fluent-ui prop som er faset ut.
</td>
</tr>
<tr>
<td>'layerProps'</td>
<td>
Fluent-ui prop som er faset ut.
</td>
</tr>
<tr>
<td>'minPagePadding'</td>
<td>
Fluent-ui prop som er faset ut.
</td>
</tr>
<tr>
<td>'onClose'</td>
<td>
Faset ut.
</td>
</tr>
<tr>
<td>'onDismiss'</td>
<td>
Fluent-ui prop som er faset ut.
</td>
</tr>
<tr>
<td>'onLayerMounted'</td>
<td>
Fluent-ui prop som er faset ut.
</td>
</tr>
<tr>
<td>'onPositioned'</td>
<td>
Fluent-ui prop som er faset ut.
</td>
</tr>
<tr>
<td>'onRestoreFocus'</td>
<td>
Fluent-ui prop som er faset ut.
</td>
</tr>
<tr>
<td>'onScroll'</td>
<td>
Fluent-ui prop som er faset ut.
</td>
</tr>
<tr>
<td>'popupProps'</td>
<td>
Fluent-ui prop som er faset ut.
</td>
</tr>
<tr>
<td>
'preventDismissOnEvent'

'preventDismissOnLostFocus'

'preventDismissOnResize'

'preventDismissOnScroll'

</td>
<td>
Fluent-ui prop som er faset ut.
</td>
</tr>
<tr>
<td>'role'</td>
<td>
Fluent-ui prop som er faset ut.
</td>
</tr>
<tr>
<td>'setInitialFocus'</td>
<td>
Fluent-ui prop som er faset ut.
</td>
</tr>
<tr>
<td>'shouldDismissOnWindowFocus'</td>
<td>
Fluent-ui prop som er faset ut.
</td>
</tr>
<tr>
<td>'shouldRestoreFocus'</td>
<td>
Fluent-ui prop som er faset ut.
</td>
</tr>
<tr>
<td>'shouldUpdateWhenHidden'</td>
<td>
Fluent-ui prop som er faset ut.
</td>
</tr>
<tr>
<td>
'style'
'styles'
'theme'
</td>
<td>
Fluent-ui prop som er faset ut.
</td>
</tr>
<tr>
<td>'target'</td>
<td>
Faset ut?
</td>
</tr>
</tbody>
</table>
</div>
