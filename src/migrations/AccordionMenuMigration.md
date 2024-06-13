**Fra @skatteetaten/frontend-components v13+ (designsystem-legacy) til Designsystemet v0.8.0**

AccordionMenu er deprecated i sin helhet og er ikke tilgjengelig som en egen komponent i det nye designsystemet. Se migreringsguide for <a class="brodtekst-link" href="#accordion">Accordion</a>.

For full API-dokumentasjon, vennligst se på <a class="brodtekst-link" href="https://www.skatteetaten.no/stilogtone/designsystemet/komponenter/accordion/">Accordion komponent</a> på dokumentasjonssiden til designsystemet.

Før:

```javascript static
import { AccordionMenu } from '@skatteetaten/frontend-components/AccordionMenu';
import { AccordionMenuItem } from '@skatteetaten/frontend-components/AccordionMenu/AccordionMenuItem';

<AccordionMenu>
  <AccordionMenuItem icon="Company" iconLabel={'Skatt'} heading={'Skatt'}>
    {
      'Fikk du over 1 000 kroner i restskatt, deles summen opp i 2 fakturaer. Fristen for når du må betale avhenger av når du fikk skatteoppgjøret ditt.'
    }
  </AccordionMenuItem>
</AccordionMenu>;
```

Nå:

```js static
import { Accordion } from '@skatteetaten/ds-collections';
import { SkattetrekkSVGpath } from '@skatteetaten/ds-icons';

<Accordion color={'graphite'}>
  <Accordion.Item
    title={'Skatt'}
    subtitle={
      'Skattekort, frikort, forskuddsskatt, skattemelding (selvangivelse)'
    }
    svgPath={SkattetrekkSVGpath}
  >
    {
      'Fikk du over 1 000 kroner i restskatt, deles summen opp i 2 fakturaer. Fristen for når du må betale avhenger av når du fikk skatteoppgjøret ditt.'
    }
  </Accordion.Item>
</Accordion>;
```
