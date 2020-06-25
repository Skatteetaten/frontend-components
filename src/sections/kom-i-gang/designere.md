Brukerne våre skal ha en enhetlig opplevelse på tvers av løsningene våre. Skal vi få til dette, må alle løsninger i Skatteetaten bruke designsystemet. Gjennom designsystemet sikrer vi også høye standarder for gode brukeropplevelser og universell utforming, og ikke minst, at vi følger den visuelle profilen vår.

Som designer samarbeider du med utviklerne i prosjektet ditt for å best mulig følge prinsippene i designsystemet. Videre ser du hvordan du kommer i gang for å bruke designsystemet når du jobber.

### Last ned Sketch-komponenter

Vi har laget Sketch-varianter av komponentene, slik at skissene dine kan harmonere med de tekniske.

```js noeditor
import { OpenClose, Link, Button } from '@skatteetaten/frontend-components';

<div>
  <p>
    <Link
      path={'./assets/sketch/designsystem-latest.sketch'}
      text={'Last ned nyeste Sketch-fil'}
      icon={'Download'}
      placement="before"
    />
  </p>
</div>;
```

```js noeditor
import { OpenClose, Typography } from '@skatteetaten/frontend-components';

const style = {
  marginTop: 0,
};

<OpenClose title={'Versjonshistorikk'}>
  <Typography>
    <h4 style={{ marginTop: '0' }}>Versjon 1.2</h4>
    <ul>
      <li>
        Ikoner har nå slices, så det er lettere å få riktige avstander i Zeplin.
      </li>
      <li>
        Flere komponenter (OpenClose, ErrorMessage, LinkGroup, etc) er lagt til.
      </li>
      <li>Mange komponenter har ny dynamisk layout.</li>
      <li>
        TopStripe har nå flere statuser (ikke innlogget, innlogget, flerbruker,
        firma)
      </li>
    </ul>
  </Typography>
</OpenClose>;
```

### Sette opp Sketch

```js noeditor
import { Accordion, AccordionItem } from '@skatteetaten/frontend-components';
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
        <li>Gå til Sketch {'>'} Preferences</li>
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
</div>;
```

### Axure-komponenter også tilgjengelig

Komponentene finnes også i Axure-versjon. Etter at du har fått tilgang til dem vil de automatisk dukke opp i widget-menyen din i Axure. Du kan også bla i komponentene:

```js noeditor
import { OpenClose, Link } from '@skatteetaten/frontend-components';

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
