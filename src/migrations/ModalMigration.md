**Fra @skatteetaten/frontend-components v5+ (designsystem-legacy) til Designsystemet v0.5.0**

## Endringer i funksjonalitet:

- tittel er obligatorisk

## Styling:

- de nye komponentene i designsystemet er avhengige av designtokens. Disse leveres nå som en separat pakke. <a class="brodtekst-link" href="#section-designtokens-deprecated">Se designtokens for detaljer.</a>

## Endringer i API

<!-- For full API-dokumentasjon, vennligst se på <a class="brodtekst-link" href="https://www.skatteetaten.no/stilogtone/designsystemet/komponenter/modal/">Modal komponent</a> på dokumentasjonssiden til designsystemet. -->

<div class="migration-tabell">
<table>
<caption>Liste over endringer i komponent-api'et</caption>
<thead><tr><th>Tidligere Prop</th><th>Alternativ</th></tr></thead>
<tbody>
<tr>
<td>'name'</td>
<td>
Faset ut.
</td>
</tr>
<tr>
<td>'customClassNames'</td>
<td>
Faset ut. Bruk 'className' eller 'classNames' for å style komponenten.
</td>
</tr>
<tr>
<td>'elementToFocusOnDismiss'</td>
<td>
Faset ut.
</td>
</tr>
<tr>
<td>'language'</td>
<td>
'lang'
</td>
</tr>
<tr>
<td>'onOpen'</td>
<td>
Faset ut.
</td>
</tr>
<tr>
<td>'shadowRootNode'</td>
<td>
Faset ut.
</td>
</tr>
</tbody>
</table>
</div>
