** Kan brukes for å vise for langt det er igjen for noe å laste **

```
import ProgressBar from '@skatteetaten/frontend-components/ProgressBar';

<ProgressBar
  label="Laster inn..."
  description="Vennligst vent mens vi laster inn litt data"
  percentComplete={.33}
/>
```

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
      Dersom innlasting av data tar mer enn ti seunder og vi kan forutsi
      fremdriften, kan vi vise dette med med denne komponenten.
    </p>
    <p>
      Bruk vanlig Spinner dersom du ikke kan forutsi fremdriften eller
      innlasting tar kortere tid.
    </p>
  </AccordionItem>
  <AccordionItem
    toggleContent
    toggleButtonText={'Universell utforming'}
    stepId={'step-1-2'}
  >
    <p>Verdien i baren skal alltid være i readonly modus.</p>
  </AccordionItem>
  <AccordionItem
    toggleContent
    toggleButtonText={'Tekniske detaljer'}
    stepId={'step-1-3'}
  >
    <p>
      <a
        href="https://developer.microsoft.com/en-us/fabric#/components/progressindicator#Implementation"
        target="_blank"
      >
        Se flere tilgjengelige props i Fabric dokumentasjonen
      </a>
    </p>
  </AccordionItem>
</Accordion>;
```
