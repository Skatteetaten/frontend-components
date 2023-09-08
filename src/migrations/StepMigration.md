**Fra @skatteetaten/frontend-components v5+ (designsystem-legacy) til Designsystemet v0.4.0**

## Endringer i funksjonalitet:

- stepType "next" er faset ut. StepList.Step med variant active vil automatisk vise knappen for å gå videre.
- Endre-knappen til et steg vil nå håndtere fokus for skjermlesere automatisk

## Styling:

- De nye komponentene i designsystemet er avhengige av designtokens. Disse leveres nå som en separat pakke. <a class="brodtekst-link" href="#section-designtokens-deprecated">Se designtokens for detaljer.</a>

## Endringer i API:

<!--For full API-dokumentasjon, vennligst se på <a class="brodtekst-link" href="https://breakdance.github.io/breakdance/">button komponent</a> på dokumentasjonssiden til designsystemet.
( //TODO FRONT-1268 Lenke til EPI dok)-->

<div class="migration-tabell">
<table>
<caption>Liste over endringer i komponent-api'et</caption>
<thead><tr><th>Tidligere Prop</th><th>Alternativ</th></tr></thead>
<tbody>
<tr>
<td>'actionBtn'</td>
<td>'onEdit' og 'editButtonText'

Før:

```javascript static
import { Step } from '@skatteetaten/frontend-components/StepList/Step';
import { StepList } from '@skatteetaten/frontend-components/StepList';

<StepList>
  <Step
    stepTitle={'steg 1'}
    stepId={'step-1-1'}
    actionBtn={{
      text: 'egendefinert tekst',
      icon: 'edit',
      event: () => console.log('trykket på endre knapp'),
    }}
  >
    {'innhold'}
  </Step>
</StepList>;
```

Nå:

```js static
import { StepList } from '@skatteetaten/ds-collections';

<StepList>
  <StepList.Step
    title={'steg 1'}
    id={'step-1-1'}
    onEdit={() => console.log('trykket på endre knapp')}
    editButtonText={'egendefinert tekst'}
  >
    {'innhold'}
  </StepList.Step>
</StepList>;
```

</td>
</tr>
<tr>
<td>'gridSpacing'</td>
<td>Faset ut</td>
</tr>
<tr>
<td>'headingLevel'</td>
<td>'titleAs'

Alternativer er 'h1', 'h2, 'h3', 'h4', 'h5' og 'h6'. 'h3' er default.

</td>
</tr>
<tr>
<td>'resultIcon'</td>
<td>'svgPath'

I ny komponent er det mulig å vise ikon i stedet for nummer i alle stegtyper.

</td>
</tr>
<tr>
<td>'showStep'</td>
<td>Faset ut</td>
</tr>
<tr>
<td>'stepId'</td>
<td>'id'</td>
</tr>
<tr>
<td>'stepTitle'</td>
<td>'title'</td>
</tr>
<tr>
<td>'stepType'</td>
<td>'variant'

Alternativer er 'active', 'passive', 'positiveResult' og 'neutralResult'. 'passive' er default.
Neste-knappen er ikke lenger en egen stegtype 'next'. I stedet vises knappen når variant er 'active'.</td>

</tr>
</tbody>
</table>
</div>
