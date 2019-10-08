** Spinner brukes for å vise brukeren at data lastes. **

```js
import Spinner from '@skatteetaten/frontend-components/Spinner';
import Button from '@skatteetaten/frontend-components/Button';

<div style={{ textAlign: 'center' }}>
  <Button type="primary">
    {' '}
    <Spinner label="kake" spinnerColor="white" />{' '}
  </Button>
  <br />
  <br />
  <Spinner size={Spinner.Size.large} spinnerColor="black" />
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
      Dersom brukeren må vente mellom ett og ti sekunder vil dette oppleves som
      en forsinkelse. I slike tilfeller er det nyttig å kunne bruke en spinner
      for å vise at systemet jobber.
    </p>
    <p>
      Spinneren kommer i svart og hvit, der svart er standardfarge. Den hvite
      spinneren kan brukes i knapper.
    </p>
  </AccordionItem>
  <AccordionItem
    toggleContent
    toggleButtonText={'Universell utforming'}
    stepId={'step-1-2'}
  >
    <ul>
      <li>
        Bruk bare spinner når du har en handling eller oppgave med innlasting.{' '}
      </li>
      <li>Vis bare én spinner om gangen.</li>
      <li>
        Spinneren kan gjerne ha en label slik at brukeren vet hva som foregår.
      </li>
      <li>
        Bruk <b>aria-label</b> for å gi elementet riktige labels.
      </li>
      <li>
        Spinneren kommer i svart og hvit, der svart er standardfarge. Den hvite
        spinneren kan brukes i knapper.
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
        href="https://developer.microsoft.com/en-us/fabric#/components/spinner#Implementation"
        target="_blank"
      >
        Se flere tilgjengelige props i Fabric dokumentasjonen
      </a>
    </p>
  </AccordionItem>
</Accordion>;
```
