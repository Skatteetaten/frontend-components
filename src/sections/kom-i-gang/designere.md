Hvis vi skal få til en enhetlig brukeropplevelse på tvers, må alle løsninger i Skatteetaten bruke Designsystemet. Som designer må du blant annet hjelpe utviklerne i ditt prosjekt å følge prinsippene her.

### Last ned Sketch-komponenter

Vi har laget Sketch-varianter av komponentene, slik at skissene dine kan harmonere med de tekniske.

```js noeditor
import OpenClose from '@skatteetaten/frontend-components/OpenClose';
import Link from '@skatteetaten/frontend-components/Link';
import Button from '@skatteetaten/frontend-components/Button';

<div>
  <p>
    <Link
      path={'./assets/sketch/designsystem-1.1.sketch'}
      text={'Last ned nyeste Sketch-fil'}
      icon={'Download'}
      placement="before"
    />
  </p>
  <br />
</div>;
```

### Sette opp Sketch

```js noeditor
import Accordion from '@skatteetaten/frontend-components/Accordion';
import AccordionItem from '@skatteetaten/frontend-components/Accordion/AccordionItem';
<div>
  <Accordion processList>
    <AccordionItem
      toggleContent
      toggleButtonText={'Lagre fil'}
      stepId={'step-1-1'}
    >
      <p>
        Last ned nyeste Sketch-fil og lagre på den ønsket sted på maskinen din.
      </p>
    </AccordionItem>
    <AccordionItem
      toggleContent
      toggleButtonText={'Koble fil til Sketch'}
      stepId={'step-1-2'}
    >
      <ol>
        <li>Gå til Sketch > Preferences</li>
        <li>Velg Libraries</li>
        <li>Trykk på Add library</li>
        <li>Bla gjennom og velg filen fra 1)</li>
      </ol>
    </AccordionItem>
    <AccordionItem
      toggleContent
      toggleButtonText={'Lag skisse'}
      stepId={'step-1-3'}
    >
      <p>
        Når Sketch-filen er satt opp kan du bruke komponentene fra den ved å
        trykke på +-ikonet i Sketch. I Sketch kalles komponentene symboler.
      </p>
    </AccordionItem>
  </Accordion>
  <br />
</div>;
```

### Axure-komponenter

Komponentene finnes også i Axure-versjon. Etter at du har fått tilgang til dem vil de automatisk dukke opp i widget-menyen din i Axure. Du kan også bla i kompoentene:

```js noeditor
import OpenClose from '@skatteetaten/frontend-components/OpenClose';
import Link from '@skatteetaten/frontend-components/Link';

<div>
  <p>
    <Link
      path={'https://w2ble0.axshare.com'}
      text={'Gå til Axure-komponenter'}
      icon={'ArrowForward'}
      placement="before"
    />
  </p>
  <br />
</div>;
```
