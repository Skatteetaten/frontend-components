** Teknisk grunnkomponent for å sette Skatteetatens fonter og farge **

```js noeditor beskrivelse
import Accordion from '@skatteetaten/frontend-components/Accordion';
import AccordionItem from '@skatteetaten/frontend-components/Accordion/AccordionItem';

<Accordion>
  <AccordionItem
    toggleContent
    isOpen
    toggleButtonText={'Bruk'}
    stepId={'step-1-1'}
  >
    <p>
      Teknisk komponent som aktiverer skatteetaten-utseende på komponentene i
      dette biblioteket. Sørg for at denne komponenten ligger øverste nivå og
      underliggende komponenter vil hente riktige farger, fonter og ikoner. Den
      vil også tilgjengeligegjøre fonter, farger og ikoner for stiling av nye
      komponenter.
    </p>
    <p>
      Dersom man ikke bruker denne komponenten er det mulig at standard-ikoner
      og fonter brukes i stedet - og å bruke disse kan være et brudd på
      lisensbetingelsene.
    </p>
  </AccordionItem>
  <AccordionItem
    toggleContent
    toggleButtonText={'Universell utforming'}
    stepId={'step-1-2'}
  >
    <p>Dette seksjonen er tom.</p>
  </AccordionItem>
  <AccordionItem
    toggleContent
    toggleButtonText={'Tekniske detaljer'}
    stepId={'step-1-3'}
  >
    <p>
      Sjekk kom i gang-> For utvikler for å se hvordan du bruker denne
      komponenten.
    </p>
  </AccordionItem>
</Accordion>;
```
