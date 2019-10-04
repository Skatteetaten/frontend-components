** Chip brukes til å markere eller utheve noe - som en merkelapp. Et typisk tilfelle er dersom man har en liste med opplysninger, og ett at elementene i listen er et unntak som brukeren bør raskt få øye på. Chips kan også brukes for å vise markere aktive filtre i et søk eller kategorier i artikler.**

Variasjon i utheving, størrelse og farge:

```js
import Chip from '@skatteetaten/frontend-components/Chip';
import Icon from '@skatteetaten/frontend-components/Icon';

<div>
  <Chip ariaLabel="Klagesak">Klagesak </Chip>
  <span> </span>
  <Chip type={Chip.OK} size="standard" ariaLabel="Godkjent">
    <Icon iconName="Check" /> Godkjent
  </Chip>
  <span> </span>
  <Chip type={Chip.WARNING} ariaLabel="Unntatt offentlighet">
    Unntatt offentlighet
  </Chip>
</div>;
```

Eksempel på bruk i tekst:

```js
import Chip from '@skatteetaten/frontend-components/Chip';

<div>
  <h3>Dekning av saksomkostninger</h3>
  <p>
    Klage på avslag om dekning av saksomkostninger etter lov av 13. juni 1980
    nr. 24 om ligningsforvalgning (likningsloven) §9-11 etter at skattekontoret
    omgjorde endringsvedtak for 2005 om internprising og tilleggsskatt.
  </p>
  <Chip ariaLabel="Tilleggsskatt">Tilleggsskatt</Chip> <span> </span>
  <Chip ariaLabel="Internprising">Internprising</Chip> <span> </span>
  <Chip ariaLabel="Skatteklagenemnda">Skatteklagenemnda</Chip> <span> </span>
</div>;
```

```js noeditor
import Accordion from '@skatteetaten/frontend-components/Accordion';
import AccordionItem from '@skatteetaten/frontend-components/Accordion/AccordionItem';

<Accordion>
  <AccordionItem
    isOpen
    toggleContent
    toggleButtonText={'Bruk'}
    stepId={'step-1-1'}
  >
    <p>
      Det er viktig å bruke dette med varsomhet slik at ikke informasjonen
      drukner i merkelapper.
    </p>
    <p>
      En chip er liten i sin natur, men dersom du ønsker et kraftigere visuelt
      uttrykk finnes den i en stor variant.
    </p>
    <p>
      Standard farge på chip er beige/gul, men vi har et par varianter for i
      grønn og rød dersom du trenger å skille chips fra hverandre. Bruk rød til
      obs/advarsel og grønn for å signalisere ok.
    </p>
    <p>
      Chips kan inneholde lenker dersom de er klikkbare. Lenkene skal være blå.
    </p>
  </AccordionItem>
  <AccordionItem
    toggleContent
    toggleButtonText={'Universell utforming'}
    stepId={'step-1-2'}
  >
    <ul>
      <li>
        Pass på at fargen og teksten på merkelappen alltid samsvarer med
        hverandre. Da forhindrer du at brukere med dårlig fargesyn, eller en
        dårlig skjerm, går glipp av informasjon.
      </li>
      <li>
        Bruk <b>aria-label</b> attributten slik at skjermlesere kan fange opp
        teksten.
      </li>
    </ul>
  </AccordionItem>
  <AccordionItem
    toggleContent
    toggleButtonText={'Tekniske detaljer'}
    stepId={'step-1-3'}
  >
    <p>
      Dette er en komponent vi har laget selv fra bunnen av, og det finnes
      derfor ikke flere tilgjengelige props.
    </p>
  </AccordionItem>
</Accordion>;
```
