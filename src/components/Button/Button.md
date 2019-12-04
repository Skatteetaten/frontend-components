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

Ekstra fremtredende hovedhandling

```js
import Button from '@skatteetaten/frontend-components/Button';

<div className="ExampleSpacing8">
  <Button buttonStyle="primaryLarge">Send inn meldingen</Button>
</div>;
```

```js noeditor uu
<ul>
  <li>
    Bruk én linje med tekst inne i knappen. For mye tekst kan virke forvirrende
    for skjermlesere.
  </li>
  <li>
    Ikke bruk knappen for å navigere videre til et annet område. Knappen skal se
    ut som en knapp, og ikke være en lenke.
  </li>
  <li>Ikke putt et ikon inne i selve knappen. Bruk heller IconButton.</li>
</ul>
```

```js noeditor beskrivelse
import ErrorMessage from '@skatteetaten/frontend-components/ErrorMessage';
<div>
  <h3>Variasjoner av knapper</h3>
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
      <Button buttonStyle="secondary">Avbryt</Button>
      <p>Eller slik:</p>
      <Button buttonStyle="primaryRoundedFilled">Send inn</Button>
      <Button>Avbryt</Button>
    </div>
    <div className="dont">
      <p>Ikke gjør slik:</p>
      <Button buttonStyle="primary">Send inn</Button>
      <Button>Avbryt</Button>
    </div>
  </div>
  <h3>Overordnet og underordnet</h3>
  <p>
    Dersom du har en underordnet funksjon ved siden av en hovedfunksjon (for
    eksempel «Avbryt») finnes det et egen stil for dette.
  </p>
  <h3>Ikke-reverserbare handlinger</h3>
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
</div>;
```
