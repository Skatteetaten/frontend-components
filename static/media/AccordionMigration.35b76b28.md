**Fra @skatteetaten/frontend-components v13+ (designsystem-legacy) til Designsystemet v0.8.0**

## Endringer i funksjonalitet:

- Ny prop for plassering av vis/skjul-ikon ('left', 'right').
- Prosessliste er ikke videreført. Bruk nummererte titler eller egendefinerte ikoner.

## Styling:

- de nye komponentene i designsystemet er avhengige av designtokens. Disse leveres nå som en separat pakke. <a class="brodtekst-link" href="#section-designtokens-deprecated">Se designtokens for detaljer.</a>
- lagt til støtte for ulike fargevarianter.
- kommer nå i 3 ulike størrelser ('small', 'medium', 'large').

## Endringer i API

For full API-dokumentasjon, vennligst se på <a class="brodtekst-link" href="https://www.skatteetaten.no/stilogtone/designsystemet/komponenter/accordion/">Accordion komponent</a> på dokumentasjonssiden til designsystemet.

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
<td>'headingLevel'</td>
<td>
Faset ut. Settes direkte som 'titleAs' på <a class="brodtekst-link" href="#accordionItem">Accordion.Item</a>
</td>
</tr>
<tr>
<td>'ariaLabel'</td>
<td>
Faset ut.
</td>
</tr>
<tr>
<td>'processList'</td>
<td>
Faset ut.
</td>
</tr>
<tr>
<td>'stepId'</td>
<td>
Faset ut.
</td>
</tr>
</tbody>
</table>
</div>
