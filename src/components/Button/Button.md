** Button brukes til hovedhandlinger, og tommelfingerregelen er det kun skal være én slik knapp på siden. **

Tydelig knapp:

```js
import Button from '@skatteetaten/frontend-components/Button';

<div className="ExampleSpacing8">
  <Button type="primary">Godkjenn</Button>{' '}
</div>;
```

Noe nedtonet hovedhandling:

```js
import Button from '@skatteetaten/frontend-components/Button';

<div className="ExampleSpacing8">
  <Button type="primaryRoundedFilled">Send inn uendret</Button>
  <Button icon="edit" type="primaryRounded">
    Endre
  </Button>
</div>;
```

Advarsel:

```js
import Button from '@skatteetaten/frontend-components/Button';

<div className="ExampleSpacing8">
  <Button type="warning">Avvis</Button>
</div>;
```

Ekstra fremtredende hovedhandling

```js
import Button from '@skatteetaten/frontend-components/Button';

<div className="ExampleSpacing8">
  <Button type="primaryLarge">Send inn meldingen</Button>
</div>;
```

```js noeditor
import Accordion from '../Accordion';
import AccordionItem from '../Accordion/AccordionItem';
<Accordion>
  <AccordionItem
    isOpen
    toggleContent
    toggleButtonText={'Bruk'}
    stepId={'step-1-1'}
  >
    <p>
      Button kan være firkantet eller avrundet, der den avrundede kan være fylt
      eller ikke fylt. Man skal ikke plassere avrundet og firkantet ved siden av
      hverandre. Hvilken du skal velge er avhengig av hvor mye oppmerksomhet du
      ønsker funksjonen skal ha på siden.
    </p>
    <p>
      Dersom du har en underordnet funksjon ved siden av en hovedfunksjon (for
      eksempel «Avbryt») finnes det et egen stil for dette.
    </p>
    <p>
      Advarselsknapp (Button med rød bakgrunn) brukes til en handling som er
      sidestilt med en annen primærhandling der du ønsker å signalisere en
      konskvens, typisk noe som ikke kan reverseres uten videre. (F.eks.
      Godkjenn/Avvis)
    </p>
    <p>
      Etterstreb å bruke samme type Button i løsningen for å sikre konsistens.
    </p>
    <p>
      Unngå å bruke knapper i inaktiv tilstand (disabled). I stedet bør knappen
      alltid være aktiv (blå) og, dersom skjemaet eller siden inneholder feil,
      vise fornuftige feilmeldinger når den klikkes på.
    </p>
  </AccordionItem>
  <AccordionItem
    toggleContent
    toggleButtonText={'Universell utforming'}
    stepId={'step-1-2'}
  >
    <ul>
      <li>
        Bruk én linje med tekst inne i knappen. For mye tekst kan virke
        forvirrende for skjermlesere.
      </li>
      <li>
        Ikke bruk knappen for å navigere videre til et annet område. Knappen
        skal se ut som en knapp, og ikke være en lenke.
      </li>
      <li>Ikke putt et ikon inne i selve knappen. Bruk heller IconButton.</li>
    </ul>
  </AccordionItem>
  <AccordionItem
    toggleContent
    toggleButtonText={'Tekniske detaljer'}
    stepId={'step-1-3'}
  >
    <p>
      <a
        href="https://developer.microsoft.com/en-us/fabric#/components/button#Implementation"
        target="_blank"
      >
        Se flere tilgjengelige props i Fabric dokumentasjonen
      </a>
    </p>
  </AccordionItem>
</Accordion>;
```
