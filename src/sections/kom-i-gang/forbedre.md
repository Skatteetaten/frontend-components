Vi har lagt opp til at alle som jobber med design og utvikling kan bidra til å forbedre komponentene. Her har vi laget en oversikt for å hjelpe deg i gang.

```js noeditor beskrivelse
import Accordion from '@skatteetaten/frontend-components/Accordion';
import AccordionItem from '@skatteetaten/frontend-components/Accordion/AccordionItem';

<Accordion processList>
  <AccordionItem
    toggleContent
    toggleButtonText={'Tilpasse eksisterende mønster'}
    stepId={'step-1-1'}
  >
    <p>
      Sjekk alle først om det er mulig å tilpasse en komponent som finnes fra
      før du lager noe helt nytt.
    </p>
    <p>
      Spør også brukskvalitet/designeren i ditt prosjekt om vedkommende er enig
      i løsningen din.
    </p>
    <p>
      Endringer i Designsystemet skal knyttes til en sak. Hvis det ikke finnes
      en sak, vil en i Designsystem-teamet opprette en, slik at du kan følge med
      på fremdriften.
    </p>
  </AccordionItem>
  <AccordionItem
    toggleContent
    toggleButtonText={'Vurdere om flere kan bruke mønsteret'}
    stepId={'step-1-2'}
  >
    <p>
      Gjør en vurdering om andre prosjekter i etaten har bruk for det du vil
      legge til. Er det nyttig for mer enn ett prosjekt, er det sannsynlig at
      det hører hjemme i Designsystemet.
    </p>
  </AccordionItem>
  <AccordionItem
    toggleContent
    toggleButtonText={'Få tilgang'}
    stepId={'step-1-3'}
  >
    <p>
      Sørg for at du har skrivetilgang til Designsystemet. Send en e-post til{' '}
      <a href="mailto:designsystem@skatteetaten.no">designsystem-teamet</a>
    </p>
  </AccordionItem>
  <AccordionItem
    toggleContent
    toggleButtonText={'Legg inn koden din'}
    stepId={'step-1-4'}
  >
    <ol>
      <li>
        Opprett en ny branch. Legg inn koden din i den nye brachen, og sørg for
        at den kjører uten feil eller advarsler lokalt på din maskin.
      </li>
      <li>Du får bonus og pluss i margen for automatiserte tester. :)</li>
      <li>
        Lag noen eksempler på hvordan komponenten brukes i en egen markdown-fil.
      </li>
      <li>Opprett en ny pull request.</li>
    </ol>
  </AccordionItem>
  <AccordionItem
    toggleContent
    toggleButtonText={'Veien videre'}
    stepId={'step-1-5'}
  >
    <p>
      Vi tester koden, og gir tilbakemelding. Dersom alt er ok, legger vi inn
      endringene slik at de kommer med i neste release.{' '}
    </p>
  </AccordionItem>
</Accordion>;
```

### Ønsker og bugs

- Andre kommentarer kan sendes til [Designsystem-teamet](mailto:designsystem@skatteetaten.no).
