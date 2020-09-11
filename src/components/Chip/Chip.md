** Chip brukes til å markere eller utheve noe - som en merkelapp. **

Variasjon i utheving, størrelse og farge:

```js
import { Chip, Icon } from '@skatteetaten/frontend-components';

<div>
  <Chip aria-label="Klagesak">Klagesak </Chip>
  <span> </span>
  <Chip type={Chip.OK} size="standard" aria-label="Godkjent">
    <Icon iconName="Check" /> Godkjent
  </Chip>
  <span> </span>
  <Chip type={Chip.WARNING} aria-label="Unntatt offentlighet">
    Unntatt offentlighet
  </Chip>
</div>;
```

Eksempel på bruk i tekst:

```js
import { Chip } from '@skatteetaten/frontend-components';

<div>
  <h3>Dekning av saksomkostninger</h3>
  <p>
    Klage på avslag om dekning av saksomkostninger etter lov av 13. juni 1980
    nr. 24 om ligningsforvalgning (likningsloven) §9-11 etter at skattekontoret
    omgjorde endringsvedtak for 2005 om internprising og tilleggsskatt.
  </p>
  <Chip aria-label="Tilleggsskatt">Tilleggsskatt</Chip> <span> </span>
  <Chip aria-label="Internprising">Internprising</Chip> <span> </span>
  <Chip aria-label="Skatteklagenemnda">Skatteklagenemnda</Chip> <span> </span>
</div>;
```

```js noeditor uu
<>
  <h3>Tips</h3>
  <ul>
    <li>
      Pass på at fargen og teksten på merkelappen alltid har god nok kontrast
      (minst 4.5). Da forhindrer du at brukere med dårlig fargesyn, eller en
      dårlig skjerm, går glipp av informasjon.
    </li>
    <li>
      Ikke bruk blå tekst (lenke) på rød bakgrunn. Denne kombinasjonen har ikke
      tilstrekkelig kontrast.
    </li>
  </ul>

  <h3>Mest relevante WCAG-krav</h3>
  <ul>
    <li>1.4.3 AA, Kontrast (minimum)</li>
  </ul>

  <h3>WAI-ARIA</h3>
  <ul>
    <li>Aria-hidden brukes for å skjule ikon for skjermleser.</li>
  </ul>
</>
```

```js noeditor beskrivelse
<>
  <h3>Typisk bruk</h3>
  <p>
    Et typisk tilfelle er dersom man har en liste med opplysninger, og ett at
    elementene i listen er et unntak som brukeren bør raskt få øye på. Chips kan
    også brukes for å vise markere aktive filtre i et søk eller kategorier i
    artikler.
  </p>
  <h3>Bruk med varsomhet</h3>
  <p>
    Det er viktig å bruke dette med varsomhet slik at ikke informasjonen drukner
    i merkelapper.
  </p>
  <p>
    En chip er liten i sin natur, men dersom du ønsker et kraftigere visuelt
    uttrykk finnes den i en stor variant.
  </p>
  <h3>Farger</h3>
  <p>
    Standard farge på chip er beige/gul, men vi har et par varianter for i grønn
    og rød dersom du trenger å skille dem fra hverandre. Bruk rød til
    obs/advarsel og grønn for å signalisere ok.
  </p>
  <p>
    Chips kan inneholde lenker dersom de er klikkbare. Lenkene skal være blå.
    (Merk at blå lenkefarge på rød bakgrunn ikke har god nok lesekontrast.)
  </p>
</>
```
