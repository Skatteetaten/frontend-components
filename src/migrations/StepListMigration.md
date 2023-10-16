**Fra @skatteetaten/frontend-components v5+ (designsystem-legacy) til Designsystemet v0.4.0**

## Endringer i funksjonalitet:

- Ny StepList setter ikke lenger stegnummer automatisk. Vi vet at mange uansett velger å sette nummerene manuelt og i tillegg bruker legacy-steplist cloneElement til å sette stegnummerene.
  CloneElement er markert som et legacy API så vi har valgt å ikke videreføre denne funskjonaliteten i denne omgang.
- stepType "next" er faset ut. StepList.Step med variant active vil automatisk vise knappen for å gå videre.
- Det er gjort en del endringer i API-et til Step. Oversikt over disse endringene finnes i egen migration guide.

## Styling:

- De nye komponentene i designsystemet er avhengige av designtokens. Disse leveres nå som en separat pakke. <a class="brodtekst-link" href="#section-designtokens-deprecated">Se designtokens for detaljer.</a>

## Endringer i API:

For full API-dokumentasjon, vennligst se på <a class="brodtekst-link" href="https://www.skatteetaten.no/stilogtone/designsystemet/komponenter/steplist/">StepList komponent</a> på dokumentasjonssiden til designsystemet.

<div class="migration-tabell">
<table>
<caption>Liste over endringer i komponent-api'et</caption>
<thead><tr><th>Tidligere Prop</th><th>Alternativ</th></tr></thead>
<tbody>
<tr>
<td>'ariaLabel'</td>
<td>Faset ut</td>
</tr>
</tbody>
</table>
</div>
