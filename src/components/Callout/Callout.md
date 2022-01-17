**Callout (Utropsboks): brukes når man ønsker å vise brukeren en tekst som er knyttet til element i skjermbildet.**

### Hjelpetekst

```js
import { Button } from '@skatteetaten/frontend-components/Button';
import { Callout } from '@skatteetaten/frontend-components/Callout';

const [state, setState] = React.useState({
  isCalloutVisible: false,
});

const visible = state.isCalloutVisible;

function closeButton() {
  setState({
    isCalloutVisible: false,
  });
}

<div>
  <span ref={(spanElement) => (buttonElement = spanElement)}>
    <Button
      buttonStyle="secondary"
      aria-expanded={visible}
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
      onDismiss={() => closeButton()}
    >
      <h3>Bolignummer</h3>
      <p>
        {
          'Bolignummeret er et nummer som unikt identifiserer en leilighet. Nummeret består at en bokstav etterfulgt av fire tall, f.eks. H0101.Bolignummeret står som regel på et klistemerke i dørkarmen tilinngangsdøren.'
        }
      </p>
    </Callout>
  )}
</div>;
```

### Infotekst

```js
import { Button } from '@skatteetaten/frontend-components/Button';
import { Callout } from '@skatteetaten/frontend-components/Callout';

const [state, setState] = React.useState({ isCalloutVisible: false });

const visible = state.isCalloutVisible;

function closeButton() {
  setState({
    isCalloutVisible: false,
  });
}

<div>
  <span ref={(spanElement) => (buttonElement2 = spanElement)}>
    <Button
      buttonStyle="secondary"
      aria-expanded={visible}
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
      onDismiss={() => closeButton()}
    >
      <h3>Renter ikke inkludert</h3>
      <p>Dette beløpet inkluderer ikke avsavnsrenter.</p>
    </Callout>
  )}
</div>;
```

### Autolukking

```js
import { Button } from '@skatteetaten/frontend-components/Button';
import { Callout } from '@skatteetaten/frontend-components/Callout';

const [state, setState] = React.useState({ isCalloutVisible: false });

const visible = state.isCalloutVisible;

function closeButton() {
  setState({
    isCalloutVisible: false,
  });
}

<div>
  <span ref={(spanElement) => (buttonElement4 = spanElement)}>
    <Button
      buttonStyle="secondary"
      aria-expanded={visible}
      icon="Info"
      onClick={() => setState({ isCalloutVisible: !state.isCalloutVisible })}
    >
      Vis meldingsboks som må lukkes manuelt
    </Button>
  </span>

  {state.isCalloutVisible && (
    <Callout
      target={buttonElement4}
      color={Callout.INFO}
      directionalHint={Callout.POS_TOP_LEFT}
      onClose={() => closeButton()}
      autoDismiss={false}
    >
      <h3>Meldingsboks informasjon </h3>
      <p>Denne meldingsboksen må lukkes ved lukkekrysset</p>
    </Callout>
  )}
</div>;
```

```js noeditor uu
<>
  <h3>Tips</h3>
  <ul>
    <li>
      En Callout vil teknisk legges til slutt i koden. Dette betyr at eventuelle
      hjelpeverktøy, som for eksempel skjermlesere, vil lese opp teksten inni
      Callouten helt til slutt. Av denne grunn skal ikke komponenten brukes i
      publikumsløsninger.
    </li>
    <li>
      Kontroller at det er mulig å åpne/lukke Callout-en både med mus og
      tastatur.
    </li>
  </ul>

  <h3>Mest relevante WCAG-krav</h3>
  <ul>
    <li>1.3.1 A, Informasjon og relasjoner</li>
    <li>4.1.2 A, Navn, rolle, verdi</li>
  </ul>

  <h3>WAI-ARIA</h3>
  <ul>
    <li>Aria-haspopup brukes på knappene som viser melding/varsel.</li>
    <li>Role=dialog identifiserer dialogboksen for skjermleser</li>
    <li>Aria-label brukes for å navngi lukk-ikon i dialogen.</li>
    <li>Aria-hidden brukes for skjule ikoner for skjermleser. </li>
  </ul>
</>
```

```js noeditor beskrivelse
<>
  <h3>Kun i interne løsninger</h3>
  <p>
    Vi bruker callout normalt for å vise en hjelpetekst. Et typisk eksempel er
    et ikon med en «i», der en informasjons-tekst dukker opp når brukeren
    trykker på ikonet. Merk at vi bare bruker callout i interne løsninger fordi
    dette ikke støtter universell utforming. Se begrunnelse under fanen
    universell utforming.
  </p>
  <h3>Vi bruker grønn og gul farge på boksene</h3>
  <ul>
    <li>Grønn til hjelpetekster.</li>
    <li>Gul til informasjon og opplysning.</li>
  </ul>
  <h3>Unntak fra regelen:</h3>
  <ul>
    <li>
      Blå farge, for å støtte gammel visuell profil. Det vil si
      saksbehandlingsløsninger som alt har blå informasjonsbokser. Vi bruker
      ikke blå i nye løsninger.
    </li>
    <li>Hvit farge, i tilfeller der grønn og gul gir for lav lesekontrast.</li>
    <li>
      Når det gjelder rød farge skal vi ikke bruke denne på utropsbokser. Må vi
      kommunisere en feil, skal vi fortelle det uten at brukeren må klikke det
      frem.
    </li>
  </ul>
</>
```
