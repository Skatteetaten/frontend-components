```js noeditor beskrivelse
import MessageBar from '@skatteetaten/frontend-components/MessageBar';

<MessageBar type={MessageBar.Type.info}>
  Se tilhørende underkompoent <a href="/#accordionitem">AccordionItem</a> for
  komplett API.
</MessageBar>;
```

** Accordion inneholder ett eller flere ekspanderende områder med en beskrivende tittel.**

```js
import Accordion from '@skatteetaten/frontend-components/Accordion';
import AccordionItem from '@skatteetaten/frontend-components/Accordion/AccordionItem';

<Accordion>
  <AccordionItem
    toggleContent
    toggleButtonText={'Derfor holder du brukertest'}
    stepId={'step-1-1'}
  >
    <p>For å finne ut som brukere kan benytte løsningen som forutsatt.</p>
  </AccordionItem>
  <AccordionItem
    toggleContent
    toggleButtonText={'Slik gjennomfører du brukertest'}
    stepId={'step-1-2'}
  >
    <p>
      En brukertest inkluderer planlegging, deltakere, forbedredelse,
      gjennomføring og oppsummering.
    </p>
  </AccordionItem>
  <AccordionItem
    toggleContent
    toggleButtonText={'Tid for gjennomføring'}
    stepId={'step-1-3'}
  >
    <p>Beregn omkring 3 dager for planlegging og gjennomføring.</p>
  </AccordionItem>
</Accordion>;
```

En accordion som brukes for å veilede brukeren gjennom en sekvens av trinnvise steg.

```js
import Accordion from '@skatteetaten/frontend-components/Accordion';
import AccordionItem from '@skatteetaten/frontend-components/Accordion/AccordionItem';

<Accordion processList>
  <AccordionItem
    toggleContent
    toggleButtonText={'Planlegging'}
    stepId={'step-1-1'}
    onClick={() => console.log('Hello World')}
  >
    <p>Hva skal du teste og med hvilke brukere?</p>
  </AccordionItem>
  <AccordionItem
    toggleContent
    toggleButtonText={'Finn deltakere'}
    stepId={'step-1-2'}
  >
    <p>Du trenger minst to deltakere. Kall inn observatører.</p>
  </AccordionItem>
  <AccordionItem
    toggleContent
    toggleButtonText={'Forberedelse'}
    stepId={'step-1-3'}
  >
    <p>Lag oppgaver og gjennomfør pilottest</p>
  </AccordionItem>
  <AccordionItem
    toggleContent
    toggleButtonText={'Gjennomføring'}
    stepId={'step-1-4'}
  >
    <p>Beregn ca. 45 minutter per deltaker.</p>
  </AccordionItem>
  <AccordionItem
    toggleContent
    toggleButtonText={'Oppsummering'}
    stepId={'step-1-5'}
  >
    <p>Lag aksjonsliste sammen med observatører.</p>
  </AccordionItem>
  <AccordionItem
    toggleContent
    toggleButtonText={'Ferdig'}
    stepId={'step-1-6'}
    icon="Check"
    ariaLabel="Fullført"
  >
    <p>
      Et eksempel på et steg der man har ikon istedet for tall i sirkelen til
      venstre. Om ønskelig kan man legge til aria-label som leses opp for
      ikonet, se koden.
    </p>
  </AccordionItem>
</Accordion>;
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
      Accordion brukes for å gruppevis vise og skjule utdypende informasjon,
      eller for å veilede brukeren gjennom en sekvens av trinnvise steg.{' '}
    </p>
    <p>Det er mulig å vise vilkårlig innhold inni et ekspanderende område.</p>
  </AccordionItem>
  <AccordionItem
    toggleContent
    toggleButtonText={'Universell utforming'}
    stepId={'step-1-2'}
  >
    <p>
      <a href="https://www.w3.org/TR/wai-aria-practices-1.1/#accordion">
        Mer om WAI-ARIA for accordion.
      </a>
    </p>
  </AccordionItem>
  <AccordionItem
    toggleContent
    toggleButtonText={'Tekniske detaljer'}
    stepId={'step-1-3'}
  >
    <p>
      Dette er en komponent vi har laget selv fra bunnen av, og det finnes
      derfor ikke flere props enn de som listes på denne siden.
    </p>
  </AccordionItem>
</Accordion>;
```
