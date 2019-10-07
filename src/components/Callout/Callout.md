** Callout brukes når man ønsker å vise brukeren en tekst som er knyttet til element i skjermbildet. Et typisk eksempel er en ikon med spørsmåltegn, og en tilhørende hjelpetekst dukker opp når man trykker på det. **

Denne skal _KUN_ brukes i interne løsninger.

### Hjelpetekst

```js
import Callout from '@skatteetaten/frontend-components/Callout';
import Button from '@skatteetaten/frontend-components/Button';

const initialState = {
  isCalloutVisible: false
};

function closeButton() {
  setState({
    isCalloutVisible: false
  });
}

<div>
  <span ref={spanElement => (buttonElement = spanElement)}>
    <Button
      type="secondary"
      aria-haspopup="true"
      icon="Info"
      onClick={() => setState({ isCalloutVisible: !state.isCalloutVisible })}
    >
      Vis hjelpetekst
    </Button>
  </span>

  {state.isCalloutVisible && (
    <Callout
      target={buttonElement}
      gapSpace={5}
      directionalHint={Callout.POS_TOP_LEFT}
      color={Callout.HELP}
      doNotLayer={true}
      onClose={() => closeButton()}
    >
      <h3>Bolignummer</h3>
      <p>
        Bolignummeret er et nummer som unikt identifiserer en leilighet.
        Nummeret består at en bokstav etterfulgt av fire tall, f.eks. H0101.
        Bolignummeret står som regel på et klistemerke i dørkarmen til
        inngangsdøren.
      </p>
    </Callout>
  )}
</div>;
```

### Infotekst

```js
import Callout from '@skatteetaten/frontend-components/Callout';
import Button from '@skatteetaten/frontend-components/Button';

const initialState = { isCalloutVisible: false };

function closeButton() {
  setState({
    isCalloutVisible: false
  });
}

<div>
  <span ref={spanElement => (buttonElement2 = spanElement)}>
    <Button
      type="secondary"
      aria-haspopup="true"
      icon="Info"
      onClick={() => setState({ isCalloutVisible: !state.isCalloutVisible })}
    >
      Vis infotekst
    </Button>
  </span>

  {state.isCalloutVisible && (
    <Callout
      target={buttonElement2}
      directionalHint={Callout.POS_BOTTOM_LEFT}
      color={Callout.INFO}
      onClose={() => closeButton()}
    >
      <h3>Renter ikke inkludert</h3>
      <p>Dette beløpet inkluderer ikke avsavnsrenter.</p>
    </Callout>
  )}
</div>;
```

### Autolukking

```js
import Callout from '@skatteetaten/frontend-components/Callout';
import Button from '@skatteetaten/frontend-components/Button';

function closeButton() {
  setState({
    isCalloutVisible: false
  });
}

<div>
  <span ref={spanElement => (buttonElement4 = spanElement)}>
    <Button
      type="secondary"
      aria-haspopup="true"
      icon="Info"
      onClick={() => setState({ isCalloutVisible: !state.isCalloutVisible })}
    >
      Vis meldingsboks som lukkes automatisk
    </Button>
  </span>

  {state.isCalloutVisible && (
    <Callout
      target={buttonElement4}
      color={Callout.INFO}
      directionalHint={Callout.POS_TOP_LEFT}
      onClose={() => closeButton()}
      autoDismiss={true}
      onDismiss={() => closeButton()}
    >
      <h3>Meldingsboks informasjon </h3>
      <p>
        Denne meldingsboksen skal lukkes automatisk når området utenfor
        meldingsboksen klikkes
      </p>
    </Callout>
  )}
</div>;
```

```js noeditor
import Accordion from '@skatteetaten/frontend-components/Accordion';
import AccordionItem from '@skatteetaten/frontend-components/Accordion/AccordionItem';
<Accordion>
  <AccordionItem
    toggleContent
    isOpen
    toggleButtonText={'Bruk av komponenten'}
    stepId={'step-1-1'}
  >
    <p>
      Merk at Callout kun skal brukes i interne løsninger. Se universell
      utforming for begrunnelse.
    </p>
    <h4>Farger</h4>
    <ul>
      <li>Grønn til hjelpetekster</li>
      <li>Gul til informasjon og opplysning.</li>
    </ul>
    <h4>Farger som brukes med forsiktighet</h4>
    <ul>
      <li>
        Rød til feil og advarsler. Denne skal i utgangspunktet ikke brukes. Hvis
        det er feil, skal det vises brukeren uten at hun trenger å klikke den
        frem.
      </li>
      <li>
        Blå for or å støtte gammel visuell profil (saksbehandlingsløsninger som
        allerede har blå informasjonsbokser). Brukes ikke i nye løsninger.
      </li>
      <li>
        Hvit i unntaktstilfeller der de andre fargene gir for lav lesekontrast
      </li>
    </ul>
  </AccordionItem>
  <AccordionItem
    toggleContent
    toggleButtonText={'Universell utforming'}
    stepId={'step-1-2'}
  >
    <p>
      En Callout vil teknisk legges til slutt i koden. Dette betyr at eventuelle
      hjelpeverktøy, som for eksempel skjermlesere, vil lese opp teksten inni
      Callouten helt til slutt. Av denne grunn anbefaler vi ikke å bruke
      komponenten i publikumsløsninger.
    </p>
    <ul>
      <li>
        Callout skal kun brukes i interne løsninger på grunn av utfordringer
        rundt universell utforming. Innholdet i Callout vil teknisk lastet inn i
        bunnen av siden, slik at en skjermleser ofte vil lese innholdet til
        slutt.
      </li>
      <li>
        <b>aria-haspopup</b> indikerer at knappen åpner et element for
        skjermlesere.
      </li>
      <li>
        Kontroller at det er mulig å åpne/lukke Callout-en både med mus og
        tastatur.
      </li>
    </ul>
  </AccordionItem>
  <AccordionItem
    toggleContent
    toggleButtonText={'Tekniske detaljer'}
    stepId={'step-1-3'}
  >
    <p>
      <a
        href="https://developer.microsoft.com/en-us/fabric#/components/callout#Implementation"
        target="_blank"
      >
        Se flere tilgjengelige props i Fabric dokumentasjonen
      </a>
    </p>
  </AccordionItem>
</Accordion>;
```
