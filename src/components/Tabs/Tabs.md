```js noeditor
import MessageBar from '@skatteetaten/frontend-components/MessageBar';

<MessageBar>
  Se også <a href="#tabitem">TabItem</a> som beskriver hver enkelt fane og
  innholdet i den.
</MessageBar>;
```

** Tabs brukes til å veksle mellom visninger innenfor samme kontekst, og når brukerne ikke trenger å se innholdet fra de ulike visningene samtidig. **

```js
import Tabs from '@skatteetaten/frontend-components/Tabs';
import TabItem from '@skatteetaten/frontend-components/Tabs/TabItem';

<Tabs>
  <TabItem
    headerText="Tilgjengelige oppgaver"
    itemCount={23}
    itemKey="itemKey-1"
  >
    Innhold #1
  </TabItem>
  <TabItem headerText="Mine oppgaver" itemCount={2} itemKey="itemKey-2">
    Innhold #2
  </TabItem>
  <TabItem headerText="Andres oppgaver" itemCount={67} itemKey="itemKey-3">
    Innhold #3
  </TabItem>
</Tabs>;
```

```js noeditor
import Accordion from '@skatteetaten/frontend-components/Accordion';
import AccordionItem from '@skatteetaten/frontend-components/Accordion/AccordionItem';

<Accordion>
  <AccordionItem
    isOpen
    toggleContent
    toggleButtonText={'Bruk'}
    stepId={'step-1-1'}
  >
    <ul>
      <li>
        Etterstreb logisk inndeling av innholdet slik at brukerne enkelt kan
        forutse hva som er innholdet i en fane.
      </li>
      <li>
        Bruk kun én rad med faner om gangen - det er lett å miste oversikten når
        man har Tabs over flere rader.
      </li>
      <li>Bruk korte tekster på titlene - og unngå kun STORE BOKSTAVER.</li>
      <li>Plasser Tabs oppe på siden, ikke nede eller på siden.</li>
      <li>Ikke bruk Tabs til å navigere til mellom ulike sider.</li>
    </ul>
  </AccordionItem>
  <AccordionItem
    toggleContent
    toggleButtonText={'Universell utforming'}
    stepId={'step-1-2'}
  >
    <p>Ikke bruk tabs for å linke til andre nye sider.</p>
  </AccordionItem>
  <AccordionItem
    toggleContent
    toggleButtonText={'Tekniske detaljer'}
    stepId={'step-1-3'}
  >
    <p>
      <a
        href="https://developer.microsoft.com/en-us/fabric#/components/pivot#Implementation"
        target="_blank"
      >
        Se flere tilgjengelige props i Fabric dokumentasjonen
      </a>
    </p>
  </AccordionItem>
</Accordion>;
```
