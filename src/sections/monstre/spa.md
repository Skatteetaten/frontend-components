```js noeditor
import { Accordion } from '@skatteetaten/frontend-components/Accordion';
import { AccordionItem } from '@skatteetaten/frontend-components/Accordion/AccordionItem';
import { Callout } from '@skatteetaten/frontend-components/Callout';
import { Card } from '@skatteetaten/frontend-components/Card';
import { Chip } from '@skatteetaten/frontend-components/Chip';
import { ComboBox } from '@skatteetaten/frontend-components/ComboBox';
import { Grid } from '@skatteetaten/frontend-components/Grid';
import { Icon } from '@skatteetaten/frontend-components/Icon';
import { IconButton } from '@skatteetaten/frontend-components/IconButton';
import { Image } from '@skatteetaten/frontend-components/Image';
import { LabelWithCallout } from '@skatteetaten/frontend-components/LabelWithCallout';
import { Link } from '@skatteetaten/frontend-components/Link';
import { MessageBar } from '@skatteetaten/frontend-components/MessageBar';
import { Spinner } from '@skatteetaten/frontend-components/Spinner';
import { TextField } from '@skatteetaten/frontend-components/TextField';
import { Typography } from '@skatteetaten/frontend-components/Typography';

<div>
  <Card
    title="Prinsipper for utvikling av single page-applikasjon"
    color={Card.Color.WHITE}
    border={Card.Border.YELLOW_BORDER}
    titlesize="x-large"
    margin="large"
  >
    <p className="mt0">
      De fleste løsningene våre viser innholdet bare på én og samme side og er
      såkalte Single Page-Applikasjoner (SPA); web-applikasjoner. Dette gir
      mange fordeler for brukeropplevelse og ytelse fordi vi kan laste inn og
      presentere kun de opplysningene brukeren trenger.
    </p>
    <p>
      Denne typen dynamisk innhold fører med seg en ekstra utfordring: vi må
      sørge for at brukere får med seg at innholdet på siden har endret seg.
    </p>
    <p>
      For å gi tastatur- og skjermleserbrukere bedre kontroll i løsningene våre
      må vi:
    </p>

    <ul>
      <li>
        Sette fokus til hovedinnholdet (main-tag) på siden, ved navigasjon og
        lasting av side.
      </li>
      <li>
        Sørge for at overskriften som beskriver brukerens oppgave leses opp av
        skjermleser.
      </li>
      <li>Sørge for at sidetittel (title) er korrekt og blir oppdatert.</li>
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
      <div>
        <p>
          Viktige prinsipper for å gi tastatur og skjermleser-brukere bedre
          kontroll når vi setter fokus på siden:
        </p>
        <ul>
          <li>
            Vi må sette et fornuftig «startpunkt» for skjermleser-brukere, slik
            at de unngår å måtte bla gjennom hele siden hver gang den endrer
            seg. Hvis de har navigert til en konkret nettside er det mest
            sannsynlig at de er interessert i hovedinnholdet på den nye siden.
          </li>
          <li>
            I løsningene våre har vi ofte en overskrift (&lt;h1&gt; eller
            &lt;h2&gt;) i toppen, som endres fra side til side. En av titlene
            kan være mer statisk tekst som beskriver fagområde eller liknende.
            Det vil som oftest være fornuftig å la skjermleser lese opp fra
            tittelen som endres fra side til siste, fremfor den statiske
            teksten.
          </li>
          <li>
            Det bør også være en sammenheng mellom det brukeren valgte for å få
            frem innholdet og det første som blir lest opp når det nye innholdet
            lastes.
          </li>
        </ul>

        <h4 style={{ marginBottom: '4px' }}>Sette fokus til overskrift</h4>
        <p style={{ marginTop: '0' }}>
          Måten vi gjør dette er å gi den beskrivende overskriften en id, og la
          main-elementet henvise til denne:
          <br />
          <code>
            &lt;h1 id="heading_id1"&gt;Dynamisk overskrift&lt;/h1&gt;
          </code>{' '}
          og
          <code>&lt;main aria-labelledby="heading_id1" tabindex="-1"&gt;</code>
        </p>
        <p>
          Og deretter bruke et skript for å sette fokus når siden lastes: <br />
          <code>
            window.setTimeout(function () &#123; const myTitle: HTMLElement |
            null = document.getElementById(&#39;heading_id1&#39;); myTitle
            &amp;&amp; myTitle.focus(); &#125;, 0);
          </code>
        </p>

        <h4 style={{ marginBottom: '4px' }}>Bruk av tabindex</h4>
        <p style={{ marginTop: '0' }}>
          Tabindex er et attributt som kan legges på de fleste html-elementer
          for å styre fokus. Tabindex-attributtet har 3 hovedfunksjoner:
        </p>
        <ul>
          <li>
            <b>Tabindex="0"</b> brukes for å få tastaturfokus (tab-stopp) på
            elementer som ikke er vanlige lenker, knapper og skjemaelementer.
            Attributtet endrer ikke navigeringsrekkefølgen og skal i hovedsak
            ikke brukes på et element som ikke er interaktivt.
          </li>
          <li>
            <b>Tabindex="-1"</b> brukes vanligvis for å få «programmatisk»
            fokus, med hjelp av skript, på elementer som ikke er lenker, knapper
            og skjemaelementer. Det er hensiktsmessig når du ønsker å sette
            fokus et gitt sted f.eks. i en Single Page App eller internt hopp på
            en nettside, f.eks. «Hopp til hovedinnhold», men som ikke skal inngå
            i vanlig tab-rekkefølge. Tabindex="-1" på f.eks. &lt;button&gt; vil
            fjerne tastaturfokus på dette elementet.
          </li>
          <li>
            <b>Tabindex="1"</b> eller høyere definerer en konkret
            navigeringsrekkefølge. Positive verdier brukes kun i sjeldne
            tilfeller, har lett for å medføre feil og <i>skal unngås</i>.
          </li>
        </ul>
      </div>
    </AccordionItem>
    <AccordionItem
      toggleContent
      toggleButtonText={'Oppdatere sidetittel'}
      headingLevel="3"
      stepId={'fokus-step-2'}
    >
      <p>
        Gi tastatur og skjermleser-brukere bedre kontroll ved å oppdatere
        sidetittel:
      </p>
      <ul>
        <li>
          Vi må sikre at sidetittel alltid er oppdatert i våre Single Page Apps,
          fordi den gir brukerne informasjon om hvor de befinner seg og
          annonseres også av skjermlesere ved innlasting.
        </li>
        <li>
          Vær oppmerksom på at sidetittelen, &lt;title&gt;, er synlig i
          fanenavnet i nettleseren. Standard format i sidetittel er [sidetittel]
          – [nettsted], for eksempel «Skatteoppgjør – Skatteetaten».{' '}
        </li>
      </ul>
    </AccordionItem>
    <AccordionItem
      toggleContent
      toggleButtonText={'Sette fokus i StepList'}
      headingLevel="3"
      stepId={'fokus-step-3'}
    >
      <p>
        På samme måte som vi må sette fokus der hovedinnholdet byttes ut, må vi
        også styre fokus til riktig sted i en StepList. Når Neste-knappen
        velges, lukkes steget du stod på og nytt steg dukker opp. Her må fokus
        settes til toppen av det nye innholdet, det vil si overskriften som
        navngir steget. Løsningen blir derfor ikke helt identisk som å sette
        fokus til &lt;main&gt; når nytt hovedinnhold vises. Slik løses det i
        StepList:
        <code>
          &lt;h3 id="heading_id3" tabindex="-1"&gt; Steg 2 &lt;/h3&gt;
        </code>
      </p>
    </AccordionItem>
  </Accordion>
</div>;
```
