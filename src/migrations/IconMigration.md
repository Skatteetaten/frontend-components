**Fra @skatteetaten/frontend-components v5 (designsystem-legacy) til Designsystemet v0.1.0**

### Endringer i funksjonalitet

- Icon er nå svg-basert og ikke font-basert. Markupen er dermed forandret i stor grad.
- temaikoner har nå eksplisitte begrensninger i størrelse.

### Styling

- størrelse på selve ikonet og luft er endret. Default verdier er også justert og ikonet er noe større ut av boksen (20px nå, vs. 16px før). Se kombinasjon av 'variant' og 'size' props for å få til riktig visning.
- markup er endret og custom styling vil muligens ikke fungere lenger (migrasjon fra font properties til svg properties).

### Endringer i API

<div className="migration-tabell">
<table>
<caption>Liste over endringer i komponent-api'et</caption>
<thead><tr><th>Tidligere Prop</th><th>Alternativ</th></tr></thead>
<tbody>
<tr>
    <td>'componentRef'</td>
    <td>
    'ref'<br/>
    Alle komponentene våre bruker forwardRef.<br/>
    For ikon-komponent sendes ref til &lt;svg&gt;-elementet
    </td>
</tr>

<tr>
    <td>'ariaLabel'<br/>
    'aria-label'</td>
    <td>
    Sendes kun videre til &lt;svg&gt;-element når 'title' ikke er oppgitt.
    Se API-dokumentasjon for mer info.
<br/>Nå:

```js
import { Icon, InfoSVGpath } from '@skatteetaten/ds-icons';

&lt;Icon svgPath={&lt;path d="M12.5 11a2 2 0 1 0-.09 3.998A /&gt;} ariaLabel={'my label'} /&gt;
// ELLER
&lt;Icon svgPath={&lt;InfoSVGpath /&gt;} title={'my title'} /&gt;
```

    </td>

</tr>

<tr>
    <td>'aria-*'</td>
    <td>Andre aria-* attributer som  f.eks aria-hidden og aria-labelledby settes automatisk opp på &lt;svg&gt;-elementet avhengig av andre props.
Dette beregnes internt i Icon-komponent.</td>
</tr>

<tr>
    <td>'iconName'</td>
    <td>
    Faset ut. Ikonet som tegnes defineres gjennom 'svgPath' prop som tar imot en <path>. Pathene kan importeres fra ds-icons pakke, eller man kan sende egen.
Se (ny) API-dokumentasjon og IconGallery for mer info.
Se avsnitt "Endringer i navn på ikoner" lengre ned for å migrere til riktig import navn når navnene har endret seg.

Før:

```static
import { Icon } from '@skatteetaten/frontend-components/Icon';

&lt;Icon iconName={'Info'} /&gt;;
```

Nå:

```js
import { Icon, InfoSVGpath } from '@skatteetaten/ds-icons';

&lt;Icon svgPath={&lt;InfoSVGpath /&gt;} /&gt;
// ELLER
&lt;Icon svgPath={&lt;path d="M12.5 11a2 2 0 1 0-.09 3.998A" /&gt;} /&gt;
```

</td>

</tr>

<tr>
    <td>'theme'<br/>
'styles'<br/>
'imageErrorAs'<br/>
'imageProps'</td>
    <td>Fluent-ui spesifikke props som er faset ut.
Bruk className for å tilpasse komponenten.
<br/>
Vi setter ikke stiler på komponenter ved hjelp av props. All definisjon av stil skal settes via className. 
Dvs at denne koden ikke skal brukes lenger:

Før:

```static
import { Icon } from '@skatteetaten/frontend-components/Icon';

&lt;Icon iconName={'Info'} style={{ fontSize: '24px', color: '#1362ae' }} />;
```

Vi må definere en ekstern css stil og bruke className for å tilordne stilen til komponenten:

```js
import { Icon, InfoSVGpath } from '@skatteetaten/ds-icons';

&lt;Icon svgPath={&lt;InfoSVGpath /&gt;} className="myCustomIconClassname" /&gt;;
```

</td>
</tr>

<tr>
    <td>'onClick'<br/>
'onMouseOut'<br/>
'onMouseOver'</td>
    <td>Faset ut. Dersom konsumenten ønsker å legge klikk-event på et ikon kan det brukes komponenten IconButton.
I andre tilfeller må Icon wrappes. </td>
</tr>
</tbody>
</table>
</div>

Endringer i navn på ikoner:

<table>
<caption>Liste over endringer i komponent-api'et</caption>
<thead><tr><th>Tidligere Prop</th><th>Alternativ</th></tr></thead>
<tbody>
<tr><td>OpenInNew</td>
<td>External</td>
</tr>
<tr><td>AvgiftBedrift</td>
<td>PercentCompany</td>
</tr>
<tr><td>Avgift</td>
<td>Percent</td>
</tr>

<tr><td>Dupliser</td>
<td>Duplicate</td>
</tr>

<tr><td>Ekteskap</td>
<td>Marriage</td>
</tr>

<tr><td>Pencil-off</td>
<td>PencilOff</td>
</tr>

<tr><td>TaOppgave</td>
<td>AccountBox</td>
</tr>

<tr><td>Soknad</td>
<td>Soeknad</td>
</tr>

<tr><td>TemaFamilie</td>
<td>Family (ikke et temaikon lengre)</td>
</tr>

<tr><td>OpenInNew</td>
<td>External</td>
</tr>

<tr>
<td>Dupliser</td>
<td>Duplicate</td>
</tr>

<tr>
<td>Tema*</td>
<td>De andre temaikonene har samme navn men uten prefiks Tema</td>
</tr>

<tr>
<td>TemaChatbot</td>
<td>ChatbotDetailed</td>
</tr>

<tr>
<td>TaOppgave</td>
<td>AccountBox</td>
</tr>

</tbody>
</table>
