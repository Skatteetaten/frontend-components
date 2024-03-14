**Fra @skatteetaten/frontend-components v11+ (designsystem-legacy) til Designsystemet v0.7.0**

## Endringer i funksjonalitet:

Komponenten kan brukes controlled og uncontrolled. Dvs at den kan være controlled med onChange / currentPage eller ved å sette en initiell verdi med defaultCurrentPage.

## Styling:

- De nye komponentene i designsystemet er avhengige av designtokens. Disse leveres nå som en separat pakke. <a class="brodtekst-link" href="#section-designtokens-deprecated">Se designtokens for detaljer.</a>

## Endringer i API

For full API-dokumentasjon, vennligst se på <a class="brodtekst-link" href="https://www.skatteetaten.no/stilogtone/designsystemet/komponenter/pagination/">Pagination komponent</a> på dokumentasjonssiden til designsystemet.

<div class="migration-tabell">
<table>
<caption>Liste over endringer i komponent-api'et</caption>
<thead><tr><th>Tidligere Prop</th><th>Alternativ</th></tr></thead>
<tbody>
<tr>
<td>'currentPage'</td>
<td>
'currentPage' eller 'defaultCurrentPage'.
'currentPage' er ikke lenger påkrevet hvis Pagination blir brukt som en uncontrolled component. Bruk da defaultCurrentPage
</td>
</tr>

<tr>
<td>'onPageChange'</td>
<td>
onChange
</td>
</tr>

<tr>
<td>'pageSize'</td>
<td>
listLength
</td>
</tr>

<tr>
<td>'total'</td>
<td>
listTotalLength
</td>
</tr>

<tr>
<td>'ariaLabelNavigationLink'</td>
<td>
Faset ut.
</td>
</tr>

<tr>
<td>'ariaLabelNavigationLinkActive'</td>
<td>
Faset ut.
</td>
</tr>

<tr>
<td>'nextLabel'</td>
<td>
Faset ut.
</td>
</tr>

<tr>
<td>'pagesDisplayed'</td>
<td>
'sibling'
</td>
</tr>

<tr>
<td>'previousLabel'</td>
<td>
Faset ut.
</td>
</tr>
</tbody>
</table>
</div>
