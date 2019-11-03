** Toppbanner vises på toppen i løsningene og skiller interne og eksterne løsninger fra hverandre **

```js
import TopBanner from '@skatteetaten/frontend-components/TopBanner';

<TopBanner homeText="Hjem" title="Intern saksbehandling" />;
```

```js
import TopBanner from '@skatteetaten/frontend-components/TopBanner';

<TopBanner compact homeText="Hjem" title="Intern saksbehandling" />;
```

```js
import TopBanner from '@skatteetaten/frontend-components/TopBanner';

<TopBanner
  external
  homeText="Til skatteetaten.no"
  title="Ekstern publikumsløsning"
  logoLink
/>;
```

```js
import TopBanner from '@skatteetaten/frontend-components/TopBanner';

<TopBanner
  external
  compact
  homeText="Til skatteetaten.no"
  title="Ekstern publikumsløsning"
/>;
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
      Interne løsninger bruker toppbanner med skrå strek, mens eksterne bruker
      den som er tilnærmet lik skatteetaten.no
    </p>
    <p>
      For alle publikumsløsninger, hvis logoen er klikkbar skal det ta brukeren
      til forsiden på www.skatteetaten.no.
    </p>
    <p>
      Det er valgfritt å bruke kompakt eller standard utgave av banneren, men
      bruken må være konsekvent i løsningen.
    </p>
    <p>
      Se{' '}
      <a href="https://www.skatteetaten.no/stilogtone/visuell-identitet/">
        visuell identitet
      </a>{' '}
      for detaljer rundt bruk av logoen.
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
