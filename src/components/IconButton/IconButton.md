** Ikonknapper brukes til mindre fremtredende funksjoner, når man har lite plass eller når funksjonen er innlysende og man ikke trenger å kommunisere den tekstlig **

```js
import IconButton from '@skatteetaten/frontend-components/IconButton';

<div className="ExampleSpacing8">
  <IconButton
    alt={'Sky med sirkel rundt'}
    title="Skriv ut"
    circle
    type="large"
    icon="Print"
  />
  <IconButton
    alt={'Sky med sirkel rundt'}
    title="Skriv ut"
    type="large"
    icon="Print"
  />
  <br />
  <IconButton
    alt={'Sky med sirkel rundt'}
    title="Skriv ut"
    circle
    type="default"
    icon="Print"
  />
  <IconButton
    alt={'Sky med sirkel rundt'}
    title="Skriv ut"
    type="default"
    icon="Print"
  />
</div>;
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
    <p>
      Knapper bør i størst mulig grad ha den beskrivende teksten synlig, men
      ikonknapper kan brukes i situasjoner der man ikke har anleding til å vise
      den. Det skal alltid være en tekst som kommer ved mouseover som forklarer
      hva ikonet gjør.
    </p>
    <p>Ikonknapper bør brukes med varsomhet i publikumsløsninger.</p>
    <p>
      Ikonknapper kan være små eller store, med eller uten sirkel. Sirkelen
      benyttes for å fremheve ikonknappen.
    </p>
  </AccordionItem>
  <AccordionItem
    toggleContent
    toggleButtonText={'Universell utforming'}
    stepId={'step-1-2'}
  >
    <ul>
      <li>Tittel på knappen bør beskrive dens funksjon.</li>
      <li>
        Husk å bruke gi ikonknappen en label slik at skjermlesere kan lese opp
        funksjonen
      </li>
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
