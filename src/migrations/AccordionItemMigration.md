**Fra @skatteetaten/frontend-components v13+ (designsystem-legacy) til Designsystemet v0.8.0**

## Styling:

- de nye komponentene i designsystemet er avhengige av designtokens. Disse leveres nå som en separat pakke. <a class="brodtekst-link" href="#section-designtokens-deprecated">Se designtokens for detaljer.</a>

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
<td>'icon'</td>
<td>
Faset ut. Erstattet av 'svgPath'.

Før:

```javascript static
<Accordion>
  <AccordionItem
    icon="Check"
    toggleContent
    toggleButtonText={'Restskatt på 1 000 kroner eller mer'}
    stepId={'step-1-1'}
  >
    <p>
      Fikk du over 1 000 kroner i restskatt, deles summen opp i 2 fakturaer.
      Fristen for når du må betale avhenger av når du fikk skatteoppgjøret ditt:
    </p>
</Accordion>;
```

Nå:

```js static
import { Accordion } from '@skatteetaten/ds-collections';
import { PersonSVGpath } from '@skatteetaten/ds-icons';

<Accordion>
  <Accordion.Item
    title={'Restskatt på 1 000 kroner eller mer'}
    svgPath={PersonSVGpath}
  >
    <p>
      Fikk du over 1 000 kroner i restskatt, deles summen opp i 2 fakturaer.
      Fristen for når du må betale avhenger av når du fikk skatteoppgjøret ditt:
    </p>
  </Accordion.Item>
</Accordion>;
```

</td>
</tr>
<tr>
<td>'isOpen'</td>
<td>
Endret til 'isExpanded'.
</td>
</tr>
<tr>
<td>'headingLevel'</td>
<td>
Endret til 'titleAs'.
</td>
</tr>
<tr>
<td>'onChange'</td>
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
<tr>
<td>'stepNumber'</td>
<td>
Faset ut.
</td>
</tr>
<tr>
<td>'toggleButtonText'</td>
<td>
Faset ut.
</td>
</tr>
<tr>
<td>'toggleContent'</td>
<td>
Faset ut.
</td>
</tr>
<tr>
<td>'totalSteps'</td>
<td>
Faset ut.
</td>
</tr>
</tbody>
</table>
</div>
