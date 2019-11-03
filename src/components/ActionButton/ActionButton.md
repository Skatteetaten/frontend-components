** Aksjonsknapp for selvstendige og mindre fremtredende handlinger **

```js
import ActionButton from '@skatteetaten/frontend-components/ActionButton';

<div>
  <ActionButton ariaLabel={'legg-til'} icon="AddOutline">
    Legg til
  </ActionButton>
  <ActionButton ariaLabel={'oppdater'} icon="Update" color="black">
    Oppdater
  </ActionButton>
</div>;
```

```js noeditor beskrivelse
import Accordion from '../Accordion';
import AccordionItem from '../Accordion/AccordionItem';

<Accordion>
  <AccordionItem
    toggleContent
    isOpen
    toggleButtonText={'Bruk'}
    stepId={'step-1-1'}
  >
    <p>
      ActionButton bruker vi for mindre fremtredende og selvstendige funksjoner
      på siden. Den tar mindre plass og er mer plasseringsvennlig enn Button.
    </p>
    <p>
      Normalt bruker vi blå farge for alle klikkbare elementer, også
      aksjonsknapper, men dersom er mange blå elementer på skjermen kan det
      oppleves som støyende. I slike tilfeller kan vi benytte sorte (nedtonede)
      aksjonsknapper.
    </p>
    <p>
      Dersom aksjonsknappen skal være mer synlig kan man øke ikonstørrelsen.
    </p>
    <p>
      Ikonet kan gis farge hvis en vil understreke en mening, for eksempel grønn
      for godkjenn eller rød for avvis.
    </p>
  </AccordionItem>
  <AccordionItem
    toggleContent
    toggleButtonText={'Universell utforming'}
    stepId={'step-1-2'}
  >
    <ul>
      <li>Legg ikonet ved siden av teksten.</li>
      <li>Bruk korte tekster i knappen.</li>
    </ul>
  </AccordionItem>
  <AccordionItem
    toggleContent
    toggleButtonText={'Tekniske detaljer'}
    stepId={'step-1-3'}
  >
    <p>
      <a
        href="https://developer.microsoft.com/en-us/fabric#/components/button#Implementation"
        target="_blank"
      >
        Se flere tilgjengelige props i Fabric dokumentasjonen
      </a>
    </p>
  </AccordionItem>
</Accordion>;
```
