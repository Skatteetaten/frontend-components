Brukerne våre skal ha en enhetlig opplevelse på tvers av løsningene våre. Skal vi få til dette, må alle løsninger i Skatteetaten bruke designsystemet. Gjennom designsystemet sikrer vi også høye standarder for gode brukeropplevelser og universell utforming, og ikke minst, at vi følger den visuelle profilen vår.

Som designer samarbeider du med utviklerne i prosjektet ditt for å best mulig følge prinsippene i designsystemet. Videre ser du hvordan du kommer i gang for å bruke designsystemet når du jobber.

### Last ned Sketch-komponenter

Vi har laget Sketch-varianter av komponentene, slik at skissene dine kan harmonere med de tekniske.

```js noeditor
import { OpenClose } from '@skatteetaten/frontend-components/OpenClose';
import { Link } from '@skatteetaten/frontend-components/Link';
import { Button } from '@skatteetaten/frontend-components/Button';

<div>
  <p>
    <Link
      path={'./assets/sketch/designsystem-1.7.sketch'}
      text={'Last ned nyeste Sketch-fil'}
      icon={'Download'}
      placement="before"
    />
  </p>
</div>;
```

```js noeditor
import { OpenClose } from '@skatteetaten/frontend-components/OpenClose';
import { Typography } from '@skatteetaten/frontend-components/Typography';

const style = {
  marginTop: 0,
};

<OpenClose compact title={'Versjonshistorikk'}>
  <Typography>
    <h4>Versjon 1.7 </h4>
    <p style={{ marginTop: '0' }}>12.04.2021</p>
    <p style={{ marginBottom: '0' }}>
      <strong>Tabeller</strong>
    </p>
    <ul style={{ marginTop: '0' }}>
      <li>
        Ny variant: CompactTable. Denne er med 14px tekst og mindre marginer.{' '}
      </li>
      <li>
        Vil du legge til testdata i tabeller? Kikk på den oppdaterte DIY-guiden
        under Komponenter ↳ Tabeller.
      </li>
      <li>
        Vil du komme igang raskt? Vi har laget et par eksempeltabeller med
        typiske saksbehandlingsfelter.
      </li>
    </ul>
    <p style={{ marginBottom: '0' }}>
      <strong>Farger</strong>
    </p>
    <ul style={{ marginTop: '0' }}>
      <li>Nye og reviderte farger til dekor og statusmeldinger. </li>
    </ul>
    <p style={{ marginBottom: '0' }}>
      <strong>Komponenter</strong>
    </p>
    <ul style={{ marginTop: '0' }}>
      <li>
        AccordionMenu: Active, open og closed er endret til normal, hover og
        open.
      </li>
      <li>
        IconButton: Ny variant. No-outline (til bruk i f.eks. AccordionMenu og
        andre steder der outline ikke vises før hover){' '}
      </li>
    </ul>
    <hr />
    <h4 style={{ marginTop: '0' }}>Versjon 1.6 </h4>
    <p style={{ marginTop: '0' }}>19.11.2020</p>
    <p style={{ marginBottom: '0' }}>
      <strong>Ikoner</strong>
    </p>
    <ul style={{ marginTop: '0' }}>
      <li>Oppdatert Facebook-ikon</li>
    </ul>
    <p style={{ marginBottom: '0' }}>
      <strong>Komponenter</strong>
    </p>
    <ul style={{ marginTop: '0' }}>
      <li>Forenklet navigasjon når man skal lage tabeller</li>
      <li>Venstre-og høyrejusterte overskrifter og kolonner for tabeller</li>
    </ul>
    <p style={{ marginBottom: '0' }}>
      <strong>Gjør det selv-seksjon</strong>
    </p>
    <ul style={{ marginTop: '0' }}>
      <li>
        Lær å lage egne Tabell-elementer. Gå til <em>Komponenter / Tabeller</em>{' '}
        i biblioteket for å lese mer.
      </li>
    </ul>
    <hr />
    <h4 style={{ marginTop: '0' }}>Versjon 1.5 </h4>
    <p style={{ marginTop: '0' }}>03.11.2020</p>
    <p style={{ marginBottom: '0' }}>
      <strong>Ikoner</strong>
    </p>
    <ul style={{ marginTop: '0' }}>
      <li>Bell-ikon, med og uten varselsirkel</li>
    </ul>
    <p style={{ marginBottom: '0' }}>
      <strong>Komponenter</strong>
    </p>
    <ul style={{ marginTop: '0' }}>
      <li>Forbedret håndtering av bredder på radioknapper</li>
      <li>Flere størrelser for IconButton: 50px, 40px og 23px</li>
      <li>Mindre Skatteetaten-logo (40px) i TopBanner</li>
      <li>
        LinkGroup, DetailsList og CommandBar har nå mer detaljerte beskrivelser.
      </li>
    </ul>
    <p style={{ marginBottom: '0' }}>
      <strong>Bokser og gruppering / Accordion</strong>
    </p>
    <ul style={{ marginTop: '0' }}>
      <li>
        Tall/ikon er nå utbyttbart i samme element. Icon-elementet er dermed
        fjernet.
      </li>
    </ul>
    <p style={{ marginBottom: '0' }}>
      <strong>
        <em>(Nytt)</em> Gjør det selv-seksjon
      </strong>
    </p>
    <ul style={{ marginTop: '0' }}>
      <li>
        Lær å lage egne CommandBar-elementer i prosjektet ditt! Gå til{' '}
        <em>Komponenter / Bokser og gruppering</em> for å lese mer.
      </li>
    </ul>
    <p style={{ marginBottom: '0' }}>
      <strong>Farger</strong>
    </p>
    <ul style={{ marginTop: '0' }}>
      <li>
        Alle farger er nå lagt opp som fargevariabler. Husk å oppdatere Sketch
        til minst versjon 69!
      </li>
      <li>Ryddet opp i noen fargeverdier og ikoner i symbolene.</li>
    </ul>
    <hr />
    <h4>Versjon 1.4</h4>
    <p style={{ marginTop: '0' }}>29.09.2020</p>
    <p style={{ marginBottom: '0' }}>
      <strong>Typografi</strong>
    </p>
    <ul style={{ marginTop: '0' }}>
      <li>Størrelsen mega har ny linjehøyde (92px / 1.3525)</li>
      <li>Størrelsen superLarge har ny linjehøyde (56px / 1.33333)</li>
      <li>Oppdaterte retningslinjer for spaltebredde/brødtekst</li>
    </ul>
    <p style={{ marginBottom: '0' }}>
      <strong>Grid</strong>
    </p>
    <ul style={{ marginTop: '0' }}>
      <li>
        Flere retningslinjer for de ulike skjermstørrelsene, inkludert konkrete
        layout settings
      </li>
    </ul>
    <p style={{ marginBottom: '0' }}>
      <strong>Symboler</strong>
    </p>
    <ul style={{ marginTop: '0' }}>
      <li>Button: Forbedret layout på lange knapper </li>
      <li>Accordion: Litt opprydding i navngiving</li>
      <li>Callout: Ny pilretning (top-right)</li>
      <li>StepList: Nye symboler for mobilt design</li>
    </ul>
    <p style={{ marginBottom: '0' }}>
      <strong>Ikoner</strong>
    </p>
    <ul style={{ marginTop: '0' }}>
      <li>Nye: Andre forhold, Kredittfradrag/alternativ fordeling </li>
      <li>Oppdaterte: Næring (Company), AvgiftBedrift</li>
      <li>Småjusteringer av andre ikoner</li>
    </ul>
    <hr />
    <h4 style={{ marginTop: '0' }}>Versjon 1.3</h4>
    <p style={{ marginTop: '0' }}>10.07.2020</p>
    <ul>
      <li>Nytt symbol: Paginering.</li>
      <li>
        TopStripe og TopBanner har nå egne symboler tilpasset størrelsene 1440,
        1024 og 320px.
      </li>
      <li>ScrollToTopButton har oppdatert ikon</li>
      <li>
        StepList: IconStep (steg med ikon i stedet for tall) er lagt inn som ny
        tilstand.
      </li>
      <li>
        Nye ikoner: Pencil-off, Enkeltpersonsforetak, VerticalDots,
        VerticalDotsCircle, VerticalDotsCircleSolid
      </li>
      <li>
        Justerte komponenter: Tabs (arkfane), ProgressBar (UU), MessageBar
        (SevereWarning), Inputfelt (nye error-tilstander og Input Label),
        StepList (plassering av knapp)
      </li>
      <li>Farger: opprydding av duplikater og forbedret Burgundy.</li>
    </ul>
    <hr />
    <h4 style={{ marginTop: '0' }}>Versjon 1.2</h4>
    <p style={{ marginTop: '0' }}>13.05.2020</p>
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
import { Accordion } from '@skatteetaten/frontend-components/Accordion';
import { AccordionItem } from '@skatteetaten/frontend-components/Accordion/AccordionItem';
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
import { OpenClose } from '@skatteetaten/frontend-components/OpenClose';
import { Link } from '@skatteetaten/frontend-components/Link';

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
