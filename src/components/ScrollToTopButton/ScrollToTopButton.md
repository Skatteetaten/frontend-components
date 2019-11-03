** ScrollToTopButton brukes til å gå til toppen av siden. **

```js
import ScrollToTopButton from '@skatteetaten/frontend-components/ScrollToTopButton';

<div>
  <p>Scroll nedover for å se knappen. </p>
  <ScrollToTopButton label={'Til toppen'} />
</div>;
```

```js noeditor beskrivelse
import Accordion from '@skatteetaten/frontend-components/Accordion';
import AccordionItem from '@skatteetaten/frontend-components/Accordion/AccordionItem';

<Accordion>
  <AccordionItem
    isOpen
    toggleContent
    toggleButtonText={'Bruk'}
    stepId={'step-1-1'}
  >
    <p>
      ScrollToTopButton brukes når man har lange sider og det er nyttig å gå
      tilbake til toppen av siden. Ved skjermbredde større enn 1170px vises
      symbolet nede til høyre som overlay. Er skjermbredden mindre vises den
      sentrert.
    </p>
  </AccordionItem>
  <AccordionItem
    toggleContent
    toggleButtonText={'Universell utforming'}
    stepId={'step-1-2'}
  >
    <p>Dette seksjonen er foreløpig tom.</p>
  </AccordionItem>
  <AccordionItem
    toggleContent
    toggleButtonText={'Tekniske detaljer'}
    stepId={'step-1-3'}
  >
    <p>
      Denne komponenten har vi laget selv fra bunnen av, så ingen flere props er
      tilgjengelig.
    </p>
  </AccordionItem>
</Accordion>;
```
