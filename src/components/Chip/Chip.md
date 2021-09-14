**Chip (Emneknagg): brukes til å markere eller utheve noe – som en merkelapp.**

```js
import { Chip } from '@skatteetaten/frontend-components/Chip';
import { Icon } from '@skatteetaten/frontend-components/Icon';

<div>
  <Chip>Klagesak</Chip>
  <span> </span>
  <Chip type={Chip.OK} size="standard">
    <Icon iconName="Check" /> Godkjent
  </Chip>
  <span> </span>
  <Chip type={Chip.WARNING}>Unntatt offentlighet</Chip>
</div>;
```

Eksempel på bruk i tekst:

```js
import { Chip } from '@skatteetaten/frontend-components/Chip';

<div>
  <h3>Dekning av saksomkostninger</h3>
  <p>
    Klage på avslag om dekning av saksomkostninger etter lov av 13. juni 1980
    nr. 24 om ligningsforvalgning (likningsloven) §9-11 etter at skattekontoret
    omgjorde endringsvedtak for 2005 om internprising og tilleggsskatt.
  </p>
  <Chip>Tilleggsskatt</Chip> <span> </span>
  <Chip>Internprising</Chip> <span> </span>
  <Chip>Skatteklagenemnda</Chip> <span> </span>
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
  <h3>En merkelapp markerer eller uthever noe</h3>
  <p>
    En merkelapp er ganske enkelt en farget liten boks, med kort tekst inni.
  </p>
  <p>
    Merkelappen er lett å få øye på og derfor en god måte å fortelle brukeren om
    en viktig opplysning. Et eksempel er en boks merket «Unntatt offentlighet».
    Boksen uthever informasjonen slik at brukeren raskt oppfatter den.
  </p>
  <p>
    Du kan også bruke slike merkelapper for å vise aktive filtre i et søk eller
    kategorier i artikler.
  </p>
  <p>
    Merkelappene kan inneholde lenker dersom de er klikkbare. Lenkene skal være
    blå, men merk at blå lenkefarge på rød bakgrunn ikke har god nok
    lesekontrast.
  </p>
  <h3>Unngå for mange merkelapper på en side</h3>
  <p>
    Merkelappen er effektiv fordi den skiller seg ut og slik fremhever
    informasjon for brukeren. Hvis du bruker for mange merkelapper vil effekten
    miste sin kraft og informasjonen kan drukne i stedet.
  </p>
  <h3>Stor og liten merkelapp</h3>

  <p>
    En chip er liten i sin natur, men dersom du ønsker et kraftigere visuelt
    uttrykk finnes den i en stor variant.
  </p>
  <h3>Fargebruk på merkelapper:</h3>
  <ul>
    <li>Gul: Standard farge.</li>
    <li>Rød: Obs/advarsler.</li>
    <li>Grønn: OK.</li>
  </ul>
</>
```
