**Fra @skatteetaten/frontend-components v5 (designsystem-legacy) til Designsystemet v0.1.0**

### Endringer i funksjonalitet:

- Icon er nå svg-basert og ikke font-basert. Markupen er dermed forandret i stor grad.
- Temaikoner har nå eksplisitte begrensninger i størrelse.

### Styling:

- Størrelse på selve ikonet og luft er endret. Default verdier er også justert og ikonet er noe større ut av boksen (20px nå, vs. 16px før). Se kombinasjon av 'variant' og 'size' props for å få til riktig visning.
- Markup er endret og custom styling vil muligens ikke fungere lenger (migrasjon fra font properties til svg properties).

### Endringer i API:

<!--For full API-dokumentasjon, vennligst se på [button komponent](https://breakdance.github.io/breakdance/) på dokumentasjonssiden til designsystemet.
( //TODO FRONT-917 Lenke til EPI dok)-->

<div className="migration-tabell">
<table>
<caption>Liste over endringer i komponent-api'et</caption>
<thead><tr><th>Tidligere Prop</th><th>Alternativ</th></tr></thead>
<tbody>
<tr>
<td>'componentRef'</td>
<td>

'ref'
Alle komponentene våre bruker forwardRef. For ikon-komponent sendes ref til &lt;svg&gt;-elementet

</td>
</tr>
<tr>
<td>'theme', 'styles', 'imageErrorAs', 'imageProps'</td>
<td>

Fluent-ui spesifikke props som er faset ut. Bruk className for å tilpasse komponenten.
Vi setter ikke stiler på komponenter ved hjelp av props. All definisjon av stil skal settes via className.
Dvs at denne koden ikke skal brukes lenger:

</td>
</tr>
</tbody>
</table>
</div>

**TODO FRONT-917 Skrive migration guide for Button**
