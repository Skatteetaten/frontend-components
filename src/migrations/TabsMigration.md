**Fra @skatteetaten/frontend-components v13+ (designsystem-legacy) til Designsystemet v0.8.0**

## Endringer i funksjonalitet:

Tabs-komponenten er nå splittet opp i flere komponenter.

## Styling:

- De nye komponentene i designsystemet er avhengige av designtokens. Disse leveres nå som en separat pakke. <a class="brodtekst-link" href="#section-designtokens-deprecated">Se designtokens for detaljer.</a>

## Endringer i API

For full API-dokumentasjon, vennligst se på <a class="brodtekst-link" href="https://www.skatteetaten.no/stilogtone/designsystemet/komponenter/tabs/">Tabs komponent</a> på dokumentasjonssiden til designsystemet.

<div class="migration-tabell">
<table>
<caption>Liste over endringer i komponent-api'et</caption>
<thead><tr><th>Tidligere Prop</th><th>Alternativ</th></tr></thead>
<tbody>

<tr>
<td>'border'</td>
<td>
hasBorder
</td>
</tr>
<tr>
<td>'componentRef'</td>
<td>
ref
</td>
</tr>
<tr>
<td>'defaultSelectedKey'</td>
<td>
defaultValue - verdi på tab som skal være aktiv. Gjelder hvis komponenten er brukt uncontrolled.
</td>
</tr>
<tr>
<td>'focusZoneProps'</td>
<td>
Faset ut.
</td>
</tr>
<tr>
<td>'getTabId'</td>
<td>
Faset ut.
</td>
</tr>
<tr>
<td>'headersOnly'</td>
<td>
Faset ut.
</td>
</tr>
<tr>
<td>'linkFormat'</td>
<td>
Faset ut. For styling av enkelt-tabber bruk f.eks &lt;Tabs.Tab className="custom"&gt; direkte på tab-elementet.
</td>
</tr>
<tr>
<td>'linkSize'</td>
<td>
Faset ut. Kan delvis erstattes ved å bruke className prop på Tabs.Tab-komponenten
</td>
</tr>
<tr>
<td>'onLinkClick'</td>
<td>
'onChange' Event som mottar aktiv tab-value ved endring
</td>
</tr>
<tr>
<td>'overflowAriaLabel'</td>
<td>
Faset ut.
</td>
</tr>
<tr>
<td>'overflowBehavior'</td>
<td>
Faset ut.
</td>
</tr>
<tr>
<td>'overflowButtonAs'</td>
<td>
Faset ut.
</td>
</tr>
<tr>
<td>'selectedKey'</td>
<td>
value - Hvis brukt som controlled komponent
</td>
</tr>
<tr>
<td>'style'</td>
<td>
className
</td>
</tr>
<tr>
<td>'theme'</td>
<td>
variant - "standard" eller "compact"
</td>
</tr>
<tr>
<td>'underline'</td>
<td>
Faset ut - Stilsett innhold i Tabs.Tab med className prop
</td>
</tr>
</tbody>
</table>
</div>
