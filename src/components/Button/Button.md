**Button (Knapp): brukes til handlinger på siden**

Hovedhandlings-knapp («call to action»):

```js
import { Button } from '@skatteetaten/frontend-components/Button';

<div className="ExampleSpacing8">
  <Button buttonStyle="callToAction">Send inn skattemeldingen</Button>{' '}
</div>;
```

Primær- og sekundærknapper:

```js
import { Button } from '@skatteetaten/frontend-components/Button';

<div className="ExampleSpacing8">
  <Button buttonStyle="primary" mobileFullWidth>
    Send inn skjema
  </Button>
  <Button buttonStyle="secondary" mobileFullWidth>
    Avbryt
  </Button>
</div>;
```

Advarsel:

```js
import { Button } from '@skatteetaten/frontend-components/Button';

<div className="ExampleSpacing8">
  <Button buttonStyle="warning">Slett</Button>
</div>;
```

```js noeditor uu
import { Link } from '@skatteetaten/frontend-components/Link';
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
import { ErrorMessage } from '@skatteetaten/frontend-components/ErrorMessage';
import { Link } from '@skatteetaten/frontend-components/Link';
import { Button } from '@skatteetaten/frontend-components/Button';
import { ActionButton } from '@skatteetaten/frontend-components/ActionButton';
import { Accordion } from '@skatteetaten/frontend-components/Accordion';
import { AccordionItem } from '@skatteetaten/frontend-components/Accordion/AccordionItem';

<div>
  <h3>Typen knapp synliggjør viktigheten</h3>
  <p>
    Hvilken type knapp som passer best avhenger av viktigheten til funksjonen
    som ligger bak; jo viktigere og mer brukt en funksjon er, jo mer
    fremtredende knapp bør brukes. Vi har følgende rekkefølge, fra mest til
    minst fremtrendende:
  </p>
  <ol>
    <li>
      For ekstra fremtrendende hovedhandlinger der vi typisk oppfordrer til
      handling, bruker vi hovedhandlingsknappen (call-to-action):
      <br /> <br />
      <Button buttonStyle="callToAction">Send inn skattemeldingen</Button>
      <br /> <br />
    </li>
    <li>
      Vi bruker primær- og sekundærknappene til viktige funksjoner på siden,
      f.eks. knapperader i bunnen av skjema.
      <br /> <br />
      <Button buttonStyle="primary">Send inn</Button>{' '}
      <Button buttonStyle="secondary">Avbryt</Button>
      <br /> <br />
    </li>

    <li>
      Vi bruker aksjonsknapper (ActionButton) til mindre fremtredende handlinger
      på siden:
      <br />
      <ActionButton border icon="addOutline">
        Legg til rad
      </ActionButton>{' '}
      <ActionButton border icon="edit">
        Rediger
      </ActionButton>
      <ActionButton border icon="print">
        Skriv ut
      </ActionButton>
      <br /> <br />
    </li>
  </ol>

  <h2 style={{ marginTop: '24px' }}>Se nærmere veiledning for knapper: </h2>
  <Accordion>
    <AccordionItem
      toggleContent
      headingLevel={3}
      toggleButtonText={'Skill mellom primær- og sekundærhandlinger'}
      stepId={'step-1-1'}
    >
      <p>
        Bruk primær- og sekundærknappene aktivt for vise brukeren hvilke
        funksjoner som er mer eller mindre sentrale.{' '}
      </p>
      <div className="dodont">
        <div className="do">
          <p class="title">Gjør slik:</p>
          <Button buttonStyle="primary">Send inn</Button>
          <Button className="ml8 pa8-imp" buttonStyle="secondary">
            Avbryt
          </Button>
          <br />
          <Button buttonStyle="primary">Send inn</Button>
          <Button className="ml8 pa8-imp" buttonStyle="secondarySimple">
            Avbryt
          </Button>
        </div>
        <div className="dont">
          <p class="title">Ikke gjør slik:</p>
          <Button buttonStyle="primary">Send inn</Button>
          <Button buttonStyle="primary" className="ml8">
            Avbryt
          </Button>
        </div>
      </div>
    </AccordionItem>
    <AccordionItem
      toggleContent
      headingLevel={3}
      toggleButtonText={
        'Advarselknapp for handlinger det ikke går an å angre på'
      }
      stepId={'step-1-2'}
    >
      <p>
        En advarselsknapp har rød bakgrunn. Eksempler på advarselsknapper er
        «Godkjenn» og «Avvis», og de uttrykker typisk noe som ikke kan
        reverseres. Bruk denne knappen til en handling som er sidestilt med en
        annen primærhandling, der du ønsker å signalisere en konsekvens.
      </p>

      <div className="dodont">
        <div className="do">
          <p class="title">Gjør slik:</p>
          <Button buttonStyle="primary">Godkjenn</Button>
          <Button buttonStyle="warning" className="ml8">
            Avvis
          </Button>
        </div>
        <div className="dont">
          <p class="title">Ikke gjør slik:</p>
          <Button buttonStyle="secondary">Godkjenn</Button>
          <Button buttonStyle="secondary" className="ml8">
            Avvis
          </Button>
        </div>
      </div>
    </AccordionItem>
    <AccordionItem
      toggleContent
      headingLevel={3}
      toggleButtonText={'Ikke bruk inaktive knapper'}
      stepId={'step-1-3'}
    >
      <p>
        Unngå å bruke knapper i inaktiv tilstand, som typisk er lysegrå. I
        stedet bør knappen alltid være aktiv, som for eksempel blå med hvit
        skrift. Dersom skjemaet eller siden inneholder feil, slik at brukeren
        ikke kan navigere seg videre, skal du vise fornuftige feilmeldinger når
        den klikkes på. I interne løsninger kan det imidlertid være ok å bruke
        inaktive knapper for å øke effektiviteten.
      </p>
      <div className="dodont">
        <div className="do">
          <p class="title">Gjør slik:</p>
          <Button buttonStyle="primary">Send inn</Button>
          <ErrorMessage>
            Du må bekrefte beløpet før du kan sende inn
          </ErrorMessage>
        </div>
        <div className="dont">
          <p class="title">Ikke gjør slik:</p>
          <Button disabled buttonStyle="primary">
            Send inn
          </Button>
        </div>
      </div>
    </AccordionItem>
    <AccordionItem
      toggleContent
      headingLevel={3}
      toggleButtonText={
        'Bruk ButtonLink når knappen skal ta brukeren til et nytt område'
      }
      stepId={'step-1-2'}
    >
      <p>
        Noen ganger er hovedhandlingen til knappen kun at bruker skal videre til
        ny side, og ikke navigere ned i egen sidestruktur. For å sikre best
        mulig brukskvalitet for flest mulig brukergrupper, skal du da bruke{' '}
        <a href="https://skatteetaten.github.io/frontend-components/#buttonlink">
          ButtonLink
        </a>{' '}
        . Denne komponenten har en a-tag med role=button, som gjør at den
        fremstår som en knapp for skjermleserbrukere. Komponenten vil samtidig
        ha funksjonen med at den tar brukeren til en ny side ved et klikk. Et
        eksempel er hovedhandlingen «Se og endre skattekort» på den innloggede
        siden «Min skatt».
      </p>
      <p>
        Lenker skal i utgangspunktet aldri styles som en knapp. Hovedhandling
        som lenke er unntaket. Trenger en lenke mer synlighet bør du vurdere
        andre tiltak.
      </p>
      <p>
        Velger du «Send inn» for et skjema, skal du bruke «Button». Dette er en
        hovedhandling som sender inn skjemaet og tar brukeren til en
        kvitteringsside og ikke til et nytt område, slik en lenke gjør.
      </p>
    </AccordionItem>
  </Accordion>
</div>;
```
