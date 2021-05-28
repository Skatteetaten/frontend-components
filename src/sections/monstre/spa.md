```js noeditor
import {
  Accordion,
  AccordionItem,
  Card,
  Icon,
  Grid,
  LabelWithCallout,
  ComboBox,
  IconButton,
  Link,
  MessageBar,
  TextField,
  Typography,
  Spinner,
  Chip,
  Image,
  Callout,
} from '@skatteetaten/frontend-components';

<div>
  <Card
    title="Hovedregler for single page-applikasjon"
    color={Card.Color.WHITE}
    border={Card.Border.YELLOW_BORDER}
    titlesize="x-large"
    margin="large"
  >
    <p className="mt0">
      De fleste av våre løsninger er såkalte Single Page-Applikasjoner (SPA);
      web-applikasjoner som bare viser innholdet på én og samme side. Dette gir
      mange fordeler med tanke på brukeropplevelse og ytelse fordi vi kan laste
      inn og presentere kun de opplysningene brukeren trenger.
    </p>
    <p>
      Denne typen dynamisk innhold fører med seg en ekstra utfording: vi må
      sørge for at brukere får med seg at innholdet på siden har endret seg, for
      eksempel hvis det er grunn til å tro at de de ser et annet sted på siden
      eller bruker skjermleser.
    </p>
    <p>
      For å gi tastatur- og skjermleserbrukere bedre kontroll i løsningene våre
      må vi:
    </p>

    <ul>
      <li>
        Ved navigasjon og lasting av side: sette fokus til hovedinnholdet
        (main-taggen) på siden.
      </li>
      <li>
        Sørg for at overskriften som beskriver brukerens oppgave leses opp av
        skjermleser.
      </li>
      <li>Sørg for at sidetittel (title) er korrekt og blir oppdatert.</li>
    </ul>
  </Card>

  <h2>Se nærmere om single page-applikasjoner:</h2>

  <Accordion>
    <AccordionItem
      toggleContent
      toggleButtonText={'Sette fokus på siden'}
      headingLevel="3"
      stepId={'fokus-step-1'}
    >
      <p>
        Hvis brukeren har navigert til en konkret nettside er det mest
        sannsynlig at de er interessert i hovedinnholdet på den nye siden. Dette
        betyr at vi må sette identifisere et fornuftig «startpunkt» for
        skjermleser-brukere, slik at de unngår å måtte bla gjennom hele siden
        hver gang den endrer seg. I løsningene våre har vi ofte en overskrift
        (&lt;h1&gt; eller &lt;h2&gt;) i toppen som endres fra side til side. En
        av titlene kan være mer statisk tekst som beskriver fagområde eller
        liknende. Det vil som often være fornuftig å la skjermleser lese opp fra
        tittelen som endres fra side til siste, fremfor den statiske teksten.
        Det bør også være en sammenheng mellom det brukeren klikket på for å få
        frem innholdet og det første som blir lest opp når det nye innholdet
        lastes.
      </p>
      <p>
        Måten vi gjør dette må er å gi den beskrivende overskriften en id, og la
        main-elementet henvise til denne:
        <br />
        <code>
          &lt;h1 id="heading_id1"&gt;Dynamisk overskrift&lt;/h1&gt;
        </code>{' '}
        og
        <code>&lt;main aria-describedby="heading_id1"&gt;</code>
      </p>
    </AccordionItem>
    <AccordionItem
      toggleContent
      toggleButtonText={'Oppdatere sidetittel'}
      headingLevel="3"
      stepId={'fokus-step-2'}
    >
      <p>
        Sidetittelen, &lt;title&gt;, er synlig i fanenavnet i nettleseren.
        Standard format i sidetittel er [sidetittel] – [nettsted], for eksempel
        «Skatteoppgjør – Skatteetaten». Den gir brukerne informasjon om hvor de
        befinner seg og annonseres også av skjermlesere ved innlasting. Derfor
        må vi sikre at denne alltid er oppdatert i våre Single Page Apps.
      </p>
    </AccordionItem>
    <AccordionItem
      toggleContent
      toggleButtonText={'Bruke tabindex'}
      headingLevel="3"
      stepId={'fokus-step-3'}
    >
      <p>
        Tabindex er et attributt som kan legges på de fleste html-elenenter.
        Tabindex-attributtet har 3 hovedfunksjoner:
      </p>
      <ul>
        <li>
          <b>Tabindex="0"</b> brukes for å få tastaturfokus (tab-stopp) på
          elementer som ikke er vanlige lenker, knapper og skjemaelementer.
          Attributtet endrer ikke navigeringsrekkefølgen og skal i hovedsak ikke
          brukes på et element som ikke er interaktivt.
        </li>
        <li>
          <b>Tabindex="-1"</b> brukes vanligvis for å få "programmatisk" fokus,
          med hjelp av skript, på elementer som ikke er lenker, knapper og
          skjemaelementer. Det er hensiktsmessig når du ønsker å sette fokus et
          gitt sted f.eks. i en Single Page App eller internt hopp på en
          nettside, f.eks. "Hopp til hovedinnhold", men som ikke skal inngå i
          vanlig tab-rekkefølge. Tabindex="-1" på f.eks. &lt;button&gt; vil
          fjerne tastaturfokus på dette elementet.
        </li>
        <li>
          <b>Tabindex="1"</b> eller høyere definerer en konkret
          navigeringsrekkefølge. Positive verdier brukes kun i sjeldne
          tilfeller, har lett for å medføre feil og skal unngås.
        </li>
      </ul>
    </AccordionItem>
    <AccordionItem
      toggleContent
      toggleButtonText={'Tydelig dynamisk innhold'}
      headingLevel="3"
      stepId={'fokus-step-4'}
    >
      <p>
        Det er fort gjort å gå glipp av innhold som endrer seg på siden. Pass
        derfor på å kun oppdatere innhold automatisk på en slik måte at brukeren
        er klar over det, og i umiddelbar nærhet til der brukeren har
        oppmerksomheten sin. Du kan eventuelt bruke MessageBar eller ikoner for
        å tiltrekke oppmerksomhet der det er nødvendig. Dersom du har har et et
        regnestykke som må oppdateres som følge av nye data, kan du bruke en
        spinner for å signalisere at opplysningene er i ferd med å endres.
      </p>
    </AccordionItem>
  </Accordion>
</div>;
```
