<br />
<br />

```
import Image from '@skatteetaten/frontend-components/Image';

    <Image src='http://placehold.it/350x150' alt='Beskriv innholdet i bildet' />
```

```js noeditor
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
      Det brukes lite bilder i våre løsninger, unntaket er kampanjer på
      skatteetaten.no og bakgrunnsbilde på oppgaveliste.
    </p>
    <p>Denne komponenten hjelper til med skalering av bilder.</p>
  </AccordionItem>
  <AccordionItem
    toggleContent
    toggleButtonText={'Universell utforming'}
    stepId={'step-1-2'}
  >
    <ul>
      <li>Innholdet i bilder må beskrives i en tilhørende alt-tag</li>
      <li>Unngå bilder av tekst.</li>
    </ul>
  </AccordionItem>
  <AccordionItem
    toggleContent
    toggleButtonText={'Tekniske detaljer'}
    stepId={'step-1-3'}
  >
    <p>
      Uten satt imageFit prop, vil width og height prop kontrollere størrelsen
      på rammen. Avhengig av hvilken av dem som brukes, vil bildet skalere til å
      få plass i rammen.
    </p>
    <p>
      <a
        href="https://developer.microsoft.com/en-us/fabric#/components/image#Implementation"
        target="_blank"
      >
        Se flere tilgjengelige props i Fabric dokumentasjonen
      </a>
    </p>
  </AccordionItem>
</Accordion>;
```
