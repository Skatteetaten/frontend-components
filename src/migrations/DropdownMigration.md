**Fra @skatteetaten/frontend-components v5+ (designsystem-legacy) til Designsystemet v0.4.0**

## Endringer i funksjonalitet:

## Styling:

- de nye komponentene i designsystemet er avhengige av designtokens. Disse leveres nå som en separat pakke. <a class="brodtekst-link" href="#section-designtokens-deprecated">Se designtokens for detaljer.</a>
- stor variant har endret noe på utseende og blitt tonet ned

## Endringer i API

<!-- For full API-dokumentasjon, vennligst se på <a class="brodtekst-link" href="https://www.skatteetaten.no/stilogtone/designsystemet/komponenter/dropdown/">Dropdown komponent</a> på dokumentasjonssiden til designsystemet.
// TODO FRONT-1210 EPI-dokumentasjon -->

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
<td>'options'</td>
<td></td>
</tr>
<tr>
<td>'ariaLabel</td>
<td></td>
</tr>
<tr>
<td>'calloutProps'</td>
<td></td>
</tr>
<tr>
<td>'defaultSelectedKey'

'defaultSelectedKeys'

</td>
<td></td>
</tr>

<tr>
<td>'dropdownWidth'</td>
<td></td>
</tr>

<tr>
<td>'help'</td>
<td>'helpText', 'helpSvgPath', 'titleHelpSvg'</td>
</tr>

<tr>
<td>'inputSize'</td>
<td>'isLarge'</td>
</tr>

<tr>
<td>'requiredWithMark'
</td>
<td>'showRequiredMark'

Forutsetter at prop 'required' er tatt i bruk.

</td>
</tr>

<tr>
<td>'isDisabled'</td>
<td></td>
</tr>

<tr>
<td>'labelButtonAriaLabel'

'labelWithCalloutProps'

</td>
<td></td>
</tr>

<tr>
<td>'panelProps'</td>
<td></td>
</tr>

<tr>
<td>'placeHolder'</td>
<td></td>
</tr>

<tr>
<td>'readOnly'</td>
<td></td>
</tr>

<tr>
<td>'responsiveMode'</td>
<td></td>
</tr>

<tr>
<td>'onDismiss'

'onChanged'</td>

<td></td>
</tr>

<tr>
<td>
'notifyOnReselect'

'onCalloutToggle'

'onRenderCaretDown'

'onRenderContainer'

'onRenderItem'

'onRenderLabel'

'onRenderList’

'onRenderOption'

'onRenderPlaceHolder'

'onRenderTitle'

'openOnKeyboardFocus'

</td>
<td></td>
</tr>

<tr>
<td>''</td>
<td></td>
</tr>

<tr>
<td>'styles'

'theme'</td>

<td>Fluent-ui props som er faset ut. Bruk 'className' for å style komponenten.</td>
</tr>
</tbody>
</table>
</div>
