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
    toggleButtonText={'Restskatt på 1 000 kroner eller mer'}
    stepId={'step-1-1'}
  >
    <p>
      Fikk du over 1 000 kroner i restskatt, deles summen opp i 2 fakturaer.
      Fristen for når du må betale avhenger av når du fikk skatteoppgjøret ditt:
    </p>
    <ul>
      <li>
        Fikk du skatteoppgjøret ditt 20. juni, er fristen for 1. fakturaen 20.
        august og 2. fakturaen 24. september.
      </li>
      <li>
        Fikk du skatteoppgjøret ditt 15. august eller senere, er fristen for 1.
        fakturaen 3 uker etter datoen skatteoppgjøret ditt var klart, og 2.
        fakturaen 8 uker etter at skatteoppgjøret ditt var klart.
      </li>
    </ul>

    <p>
      Hvis betalingsfristen din er på en lørdag eller søndag, kan du betale
      innen mandagen (første virkedag) etter fristen.
    </p>

    <p>
      Du må betale restskatten selv om du har{' '}
      <a href="#">endret etter fristen for skattemeldingen eller klaget</a>.
      Hvis du ikke betaler restskatten i tide, løper det forsinkelsesrenter ved
      forfall frem til du betaler.
    </p>

    <p>
      Betaler du ikke innen fristen på første fakturaen, regner vi det som om du
      ikke har betalt i det hele tatt. Trenger du hjelp, ta kontakt med
      skatteoppkreveren i din kommune.
    </p>
  </AccordionItem>
  <AccordionItem
    toggleContent
    toggleButtonText={'Restskatt under 1 000 kroner'}
    stepId={'step-1-2'}
  >
    <p>
      Fristen for å betale hvis du har fått restskatt på under 1 000 kroner
      avhenger av når du fikk skatteoppgjøret ditt:
    </p>
    <ul>
      <li>
        Fikk du skatteoppgjøret ditt 20. juni, er fristen for å betale 20.
        august.
      </li>
      <li>
        Fikk du skatteoppgjøret ditt 15. august eller senere, er fristen for å
        betale 3 uker etter datoen skatteoppgjøret ditt var klart.
      </li>
    </ul>

    <p>
      Hvis betalingsfristen din er på en lørdag eller søndag, kan du betale
      innen mandagen (første virkedag) etter fristen.
    </p>

    <p>
      Du må betale restskatten selv om du har{' '}
      <a href="#">endret etter fristen for skattemeldingen eller klaget</a>.
      Hvis du ikke betaler restskatten i tide, løper det forsinkelsesrenter ved
      forfall frem til du betaler.
    </p>

    <p>Restskatt under 100 kroner trenger du ikke å betale.</p>
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
<>
  <h3>Tips</h3>
  <ul>
    <li>
      Riktig overskriftsnivå: En Accordion (ekspander) kan brukes på mange ulike
      nivåer på siden. Komponenten kan være standard tekst (det blå klikkbare
      elementet), men det kan også i enkelte tilfeller være ønskelig å angi
      dette som et bestemt overskriftsnivå, for eksempel h3 eller h4. Det gjør
      du slik:
    </li>
  </ul>
</>
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

```js noeditor uu
<>
  <ul>
    <li>Det skal kun være ett tabstopp pr ekspander.</li>
    <li>
      Ekspandere skal ha en visuell indikator på at innhold utvides/minimeres.
    </li>
    <li>
      Sjekk at elementet leses som en ekspander med skjermleser og at du
      beholder fokus når du utvider/minimerer den.
    </li>
  </ul>

  <h3>Mest relevante WCAG-krav</h3>
  <ul>
    <li>1.3.1 A, Informasjon og relasjoner</li>
    <li>4.1.2 A, Navn, rolle, verdi</li>
  </ul>

  <h3>WAI-ARIA</h3>
  <ul>
    <li>Aria-expanded brukes på knappene som utvides/minimeres.</li>
    <li>
      Aria-label brukes i kombinasjon med aria-describedby på trinnvise steg.
      Dette gjøres for at skjermleserbrukere skal høre hvilket steg de står på
      hvis de navigerer fra knapp til knapp (ikke piler seg gjennom sekvensen).
    </li>
    <li>Aria-hidden brukes for å skjule ikoner for skjermlesere.</li>
  </ul>
  <p>
    <a href="https://www.w3.org/TR/wai-aria-practices-1.1/#accordion">
      Mer om WAI-ARIA for accordion.
    </a>
  </p>
</>
```

```js noeditor beskrivelse
<div>
  <h3>Panel som brukeren kan utvide</h3>
  <p>
    Vi kan plassere deler av et innhold i et ekspanderende panel. Brukeren kan
    lese overskriften og utvide panelet hvis det er aktuelt og la være hvis
    ikke. Et trekkspill gjør det lettere for brukeren å orientere seg i mye
    informasjon.
  </p>
  <p>Gode grunner til å bruke trekkspill:</p>
  <ul>
    <li>Når det er store variasjoner i målgruppens kunnskapsnivå.</li>
    <li>Hvis det er mye veiledningstekst som de fleste ikke trenger.</li>
    <li>Når du skal veilede brukeren gjennom en sekvens av trinnvise steg.</li>
    <li>Dersom du vil vise eksempler.</li>
  </ul>
</div>
```
