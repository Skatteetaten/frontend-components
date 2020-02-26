```js noeditor
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

```js noeditor uu
<p>
  <a href="https://www.w3.org/TR/wai-aria-practices-1.1/#accordion">
    Mer om WAI-ARIA for accordion.
  </a>
</p>
<h3>Riktig overskriftsnivå</h3>
<p>En Accordion kan brukes på mange ulike nivåer på siden. .Komponenten produserer som standard  tekst inni label-tag for det blå klikkbare elementet, men det det i enkelte tilfeller være ønskelig å angi dette som et bestemt overskriftsnivå, for eksempel h3 eller h4. Det gjør du slik:</p>
```

```js uu
import Accordion from '@skatteetaten/frontend-components/Accordion';
import AccordionItem from '@skatteetaten/frontend-components/Accordion/AccordionItem';

<Accordion headingLevel={3}>
  <AccordionItem
    toggleContent
    toggleButtonText={'En knappetittel i <h3>'}
    stepId={'step-1-1'}
    title="Dette blir automatisk en <h4>"
  >
    <p>
      Man trenger ikke benytte <i>title</i> for å lage en overskrift i en
      AccordionItem:
    </p>
    <h4>
      En overskrift uten å benytte <i>title</i>-attributtet
    </h4>
  </AccordionItem>
  <AccordionItem
    toggleContent
    toggleButtonText={'En knappetittel i <h3>'}
    stepId={'step-1-2'}
  >
    <p>
      En brukertest inkluderer planlegging, deltakere, forbedredelse,
      gjennomføring og oppsummering.
    </p>
  </AccordionItem>
  <AccordionItem
    headingLevel={1}
    toggleContent
    toggleButtonText={
      'Man kan overskrive h-tagen for hvert AccordionItem, dette er en <h1>'
    }
    stepId={'step-1-3'}
    title="Dette er en <h2>"
  >
    <p>Beregn omkring 3 dager for planlegging og gjennomføring.</p>
  </AccordionItem>
</Accordion>;
```

```js noeditor beskrivelse
  <h3>Vise og skjule informasjon</h3>
  <p>Accordion brukes for å gruppevis vise og skjule utdypende informasjon,
      eller for å veilede brukeren gjennom en sekvens av trinnvise steg.{' '}
    </p>
    <p>Det er mulig å vise vilkårlig innhold inni et ekspanderende område.</p>
```
