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
        <li>Noen skjermlesere leser leser ikke elementer som er disabled</li>
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
  <h3>Enten kun firkantede eller kun avrundede knapper</h3>
  <p>
    Button kan være firkantet eller avrundet, der den avrundede kan være fylt
    eller ikke fylt. Man skal ikke plassere avrundet og firkantet ved siden av
    hverandre. Hvilken du skal velge er avhengig av hvor mye oppmerksomhet du
    ønsker funksjonen skal ha på siden.
  </p>
  <p>
    Etterstreb å bruke samme type Button i løsningen for å sikre konsistens.
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
  <h3>Egen knappestil for knapp med sekundær funksjon</h3>
  <p>
    Dersom du har en underordnet funksjon ved siden av en hovedfunksjon (for
    eksempel «Avbryt») finnes det et egen stil, 'secondary', for dette.
  </p>
  <h3>Advarselknappen for ikke-reverserbare handlinger</h3>
  <p>
    Advarselsknapp (Button med rød bakgrunn) brukes til en handling som er
    sidestilt med en annen primærhandling der du ønsker å signalisere en
    konskvens, typisk noe som ikke kan reverseres uten videre. (F.eks.
    Godkjenn/Avvis)
  </p>
  <h3>Ikke bruk inaktive knapper</h3>
  <p>
    Unngå å bruke knapper i inaktiv tilstand (disabled). I stedet bør knappen
    alltid være aktiv (blå) og, dersom skjemaet eller siden inneholder feil,
    vise fornuftige feilmeldinger når den klikkes på.
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
  <h3>Når hovedhandlingen er navigasjon til et annet område</h3>
  <p>
    Med «annet område» menes at klikk på knapp skal ta bruker til en annen side,
    og <i>ikke</i> navigasjon videre ned i egen sidestruktur.
  </p>
  <p>
    Noen ganger er hovedhandlingen kun at bruker skal videre til ny side, og
    ingen handling skal forekomme <i>i tillegg</i> til denne. Et eksempel er
    hovedhandlingen “Se og endre skattekort” på den innloggede siden Min skatt.
    Det beste alternativet er å bruke en a-tag med role=“button” og style den
    som en hovedhandling. Dette vil sikre best mulig brukskvalitet for flest
    mulig brukergrupper. Komponenten{' '}
    <Link path="/#buttonlink" text="ButtonLink" /> skal benyttes i disse
    tilfellene.
  </p>
  <p>
    Lenker skal i utgangspunktet aldri styles som en knapp. Hovedhandling som
    lenke er unntaket. Trenger en lenke mer synlighet så bør andre tiltak
    vurderes før man setter lenken som hovedhandling. “Send inn” for et skjema
    er en hovedhandling som både sender inn og tar bruker til en ny side. Da
    skal du bruke &lt;Button&gt; som vanlig.
  </p>
</div>;
```
