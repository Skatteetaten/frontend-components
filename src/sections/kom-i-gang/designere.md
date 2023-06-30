```js noeditor
import { MessageBar } from '@skatteetaten/frontend-components/MessageBar';
import { Link } from '@skatteetaten/frontend-components/Link';

<MessageBar>
  <p style={{ margin: 0 }}>
    Denne siden er utdatert. Sjekk
    <Link
      path="https://www.skatteetaten.no/stilogtone/designsystemet/kom-i-gang/for-designere/"
      text="ny kom-i-gang for designere"
    /> i stedet.
  </p>
</MessageBar>;
```

Brukerne våre skal ha en enhetlig opplevelse på tvers av løsningene våre. Skal vi få til dette, må alle løsninger i Skatteetaten bruke designsystemet. Gjennom designsystemet sikrer vi også høye standarder for gode brukeropplevelser og universell utforming, og ikke minst, at vi følger den visuelle profilen vår.

Som designer samarbeider du med utviklerne i prosjektet ditt for å best mulig følge prinsippene i designsystemet. Videre ser du hvordan du kommer i gang for å bruke designsystemet når du jobber.

## Figma

Vi bruker Figma til å designe løsninger og produkter. Alle i Skatteetaten har mulighet til å se på skisser, men man må søke om tilgang for å kunne lage egne design. Som del av Skatteetatens Figma-organisasjon har du tilgang til komponentbiblioteket som del av vårt «Team Library».

```js noeditor
import { OpenClose } from '@skatteetaten/frontend-components/OpenClose';
import { Link } from '@skatteetaten/frontend-components/Link';
import { Button } from '@skatteetaten/frontend-components/Button';

<div>
  <p>
    <Link
      path={
        'https://www.figma.com/file/nMR5vipCwTyVnq9KRAbhFL/Designsystemet---delte-komponenter?node-id=0%3A1'
      }
      text={'Designsystemet - delte komponenter (Figma)'}
      icon={'OpenInNew'}
      placement="before"
    />
  </p>
</div>;
```

## Sette opp Figma

```js noeditor
import { Accordion } from '@skatteetaten/frontend-components/Accordion';
import { AccordionItem } from '@skatteetaten/frontend-components/Accordion/AccordionItem';
import { Image } from '@skatteetaten/frontend-components/Image';
<div>
  <Accordion processList>
    <AccordionItem
      toggleContent
      toggleButtonText={'Søk om tilgang'}
      stepId={'step-1-1'}
    >
      <p>Søk om redigeringstilgang</p>
    </AccordionItem>
    <AccordionItem
      toggleContent
      toggleButtonText={'Bli med i teamet'}
      stepId={'step-1-2'}
    >
      <ol>
        <li>
          Gå til <em>Teams / Designsystem</em>
        </li>
        <li>Bli medlem</li>
      </ol>
      <Image
        src="./assets/png/komigang_designer_1.png"
        alt="Figma-skjermbilde som viser navigasjonen til Team / Designsystem."
        width="220px"
      />
    </AccordionItem>
    <AccordionItem
      toggleContent
      toggleButtonText={'Aktivere bibliotek'}
      stepId={'step-1-3'}
    >
      <p>
        Når du lager en ny skisse kan du aktivere komponentbiblioteket ved å
        velge
        <em>Assets / Team Library / Designsystemet - Delte komponenter.</em>
      </p>
      <Image
        src="./assets/png/komigang_designer_2.png"
        alt="Figma-skjermbilde som viser hvordan du aktiverer komponentbiblioteket."
        width="auto"
      />
    </AccordionItem>
  </Accordion>
</div>;
```
