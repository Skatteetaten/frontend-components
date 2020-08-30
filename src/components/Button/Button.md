** Button brukes til hovedhandlinger, og tommelfingerregelen er det kun skal være én slik knapp på siden **

Tydelig knapp:

```js
import Button from '@skatteetaten/frontend-components/Button';

<div className="ExampleSpacing8">
  <Button buttonStyle="primary">Godkjenn</Button>{' '}
</div>;
```

Noe nedtonet hovedhandling:

```js
import Button from '@skatteetaten/frontend-components/Button';

<div className="ExampleSpacing8">
  <Button buttonStyle="primaryRoundedFilled">Send inn uendret</Button>
  <Button icon="edit">Endre</Button>
</div>;
```

Advarsel:

```js
import Button from '@skatteetaten/frontend-components/Button';

<div className="ExampleSpacing8">
  <Button buttonStyle="warning">Avvis</Button>
</div>;
```

```js noeditor uu
import Link from '@skatteetaten/frontend-components/Link';
<div>
  <h3>Tips</h3>

  <ul>
    <li>
      Bruk én linje med tekst inne i knappen. For mye tekst kan virke
      forvirrende for skjermlesere.
    </li>
    <li>
      Ikke bruk knappen for å navigere videre til et annet område.
      <br />
      Til det skal <Link path="/#buttonlink" text="ButtonLink" />
      -komponenten benyttes, og da <i>kun</i> hvis man er helt sikker på at man ønsker
      å ha en lenke som ser ut som en knapp.
    </li>
    <li>Ikke putt et ikon inne i selve knappen. Bruk heller IconButton.</li>
    <li>
      Unngå inaktiv (disabled) knapp pga:
      <ul>
        <li>Dårlig kontrast</li>
        <li>Forvirrende om/når den kan velges</li>
        <li>Brukere kan gå glipp av tilstandsendring</li>
        <li>Noen skjermlesere leser ikke elementer som er disabled</li>
        <li>Alternativ: Aktiv knapp (blå) med eventuelle feilmeldinger</li>
      </ul>
    </li>
  </ul>

  <h3>Mest relevante WCAG-krav</h3>

  <ul>
    <li>4.1.2 A, Navn, rolle, verdi</li>
  </ul>

  <h3>WAI-ARIA</h3>

  <ul>
    <li>
      Aria-hidden="true" brukes der det er et ikon for å skjule det for
      skjermleser.
    </li>
  </ul>
</div>;
```

```js noeditor beskrivelse
import ErrorMessage from '@skatteetaten/frontend-components/ErrorMessage';
import Link from '@skatteetaten/frontend-components/Link';
<div>
  <h3>En knapp er hovedhandlingen på en side</h3>
  <p>
    Du skal benytte en «knapp» til hovedhandlinger. En tommelfingerregel er at
    det kun skal være én slik knapp på siden.
  </p>
  <p>
    Se{' '}
    <a href="https://www.skatteetaten.no/stilogtone/skrive/skriveregler/knapper/">
      skrivereglene
    </a>{' '}
    for hvordan skrive på knapper.
  </p>

  <h3>Tre ulike varianter</h3>
  <p>
    Utformingen av knappen kan være firkantet eller avrundet. Den avrundede kan
    være fylt eller ikke fylt, mens den firkantede alltid er fylt. Hvilken knapp
    du skal velge er avhengig av hvor mye oppmerksomhet du ønsker funksjonen
    skal ha på siden. Firkantet knapp viser størst viktighet, og deretter kommer
    avrundet knapp med fyll og til slutt avrundet knapp uten fyll.
  </p>
  <p>
    Bruk samme type knapp i løsningen for å sikre konsistens av innholdet. De to
    formene kan ikke plasseres ved siden av hverandre.
  </p>
  <div className="dodont">
    <div className="do">
      <p>Gjør slik:</p>
      <Button buttonStyle="primary">Send inn</Button>
      <Button className="ml8" buttonStyle="secondary">
        Avbryt
      </Button>
      <p>Eller slik:</p>
      <Button buttonStyle="primaryRoundedFilled">Send inn</Button>
      <Button className="ml8">Avbryt</Button>
    </div>
    <div className="dont">
      <p>Ikke gjør slik:</p>
      <Button buttonStyle="primary">Send inn</Button>
      <Button className="ml8">Avbryt</Button>
    </div>
  </div>

  <h3>Bruk egen stil for overordnete og underordnete knapper</h3>
  <p>
    Dersom du har en underordnet funksjon ved siden av en hovedfunksjon, for
    eksempel «Avbryt» ved siden av «Send inn», finnes det en egen stil for
    dette.
  </p>
  <h3>Bruk knapp med rød bakgrunn for handlinger det ikke går an å angre på</h3>
  <p>
    En advarselsknapp har rød bakgrunn. Eksempler på advarselsknapper er
    «Godkjenn» og «Avvis», og de uttrykker typisk noe som ikke kan reverseres.
    Bruk denne knappen til en handling som er sidestilt med en annen
    primærhandling, der du ønsker å signalisere en konsekvens.
  </p>
  <div className="dodont">
    <div className="do">
      <p>Gjør slik:</p>
      <Button buttonStyle="primary">Godkjenn</Button>
      <Button buttonStyle="warning" className="ml8">
        Avvis
      </Button>
    </div>
    <div className="dont">
      <p>Ikke gjør slik:</p>
      <Button buttonStyle="primary">Godkjenn</Button>
      <Button buttonStyle="primary" className="ml8">
        Avvis
      </Button>
    </div>
  </div>

  <h3>Ikke bruk inaktive knapper</h3>
  <p>
    Unngå å bruke knapper i inaktiv tilstand, som typisk er lysegrå. I stedet
    bør knappen alltid være aktiv, som for eksempel blå med hvit skrift. Dersom
    skjemaet eller siden inneholder feil, slik at brukeren ikke kan navigere seg
    videre, skal du vise fornuftige feilmeldinger når den klikkes på. I interne
    løsninger kan det imidlertid være ok å bruke inaktive knapper for å øke
    effektiviteten.
  </p>
  <div className="dodont">
    <div className="do">
      <p>Gjør slik:</p>
      <Button buttonStyle="primary">Send inn</Button>
      <ErrorMessage>Du må bekrefte beløpet før du kan sende inn</ErrorMessage>
    </div>
    <div className="dont">
      <p>Ikke gjør slik:</p>
      <Button disabled buttonStyle="primary">
        Send inn
      </Button>
    </div>
  </div>

  <h3>Når knappen skal ta brukeren til et annet område</h3>
  <p>
    Noen ganger er hovedhandlingen til knappen kun at bruker skal videre til ny side, og ikke navigere ned i egen sidestruktur.
For å sikre best mulig brukskvalitet for flest mulig brukergrupper, skal du da bruke 
{' '}
    <a href="https://skatteetaten.github.io/frontend-components/#buttonlink">
      ButtonLink
    </a>{' '}. 
Denne komponenten har en a-tag med role=button, som gjør at den fremstår som en knapp for skjermleserbrukere. 
Komponenten vil samtidig ha funksjonen med at den tar brukeren til en ny side ved et klikk. 
Et eksempel er hovedhandlingen «Se og endre skattekort» på den innloggede siden «Min skatt». 
  </p>
  <p>
    Lenker skal i utgangspunktet aldri styles som en knapp. Hovedhandling som
    lenke er unntaket.
  </p>
</div>;
```
