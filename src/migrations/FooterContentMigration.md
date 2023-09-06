**Fra @skatteetaten/frontend-components v5+ (designsystem-legacy) til Designsystemet v0.4.0**

## Endringer i funksjonalitet:

- antall kolonner i Footer er begrenset til maks 3
- hver kolonne skal ha en tittel
- de første tre lenkene i første kolonne er 'Kontakt oss', 'Sikkerhet og personvern' og 'Tilgjengelighetserklæring'. URL-en til disse lenkene kan overskrives.

## Styling:

- de nye komponentene i designsystemet er avhengige av designtokens. Disse leveres nå som en separat pakke. <a class="brodtekst-link" href="#section-designtokens-deprecated">Se designtokens for detaljer.</a>

## Endringer i API

For full API-dokumentasjon, vennligst se på <a class="brodtekst-link" href="https://www.skatteetaten.no/stilogtone/designsystemet/komponenter/footer/">Footer komponent</a> på dokumentasjonssiden til designsystemet.

<div class="migration-tabell">
<table>
<caption>Liste over endringer i komponent-api'et</caption>
<thead><tr><th>Tidligere Prop</th><th>Alternativ</th></tr></thead>
<tbody>
<tr>
<td>'ariaLabel'</td>
<td>
Faset ut.
</td>
</tr>
<tr>
<td>'brand'</td>
<td>
Faset ut.

Brand/Theme hentes fra ds-core-designtokens. Alternativer er INK, LSO og SKE. SKE er default theme.

</td>
</tr>
</tbody>
</table>
</div>
