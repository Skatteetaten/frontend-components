**Kan brukes for å vise for langt det er igjen for noe å laste**

```js
import { ProgressBar } from '@skatteetaten/frontend-components/ProgressBar';

<ProgressBar
  label="Laster inn..."
  description="Vennligst vent mens vi laster inn litt data"
  percentComplete={0.33}
/>;
```

```js noeditor uu
<>
  <h3>Tips</h3>
  <ul>
    <li>Verdien i baren skal alltid være i readonly modus.</li>
    <li>
      Husk at både rammen rundt baren og fargen som fylles opp er meningsbærende
      og at kontrast på minst 3.0 gjelder.
    </li>
    <li>Sjekk at statusen i prosessen oppdateres og leses med skjermleser</li>
  </ul>

  <h3>Mest relevante WCAG-krav</h3>
  <ul>
    <li>1.4.11 AA, Kontrast for ikke-tekstlig innhold </li>
    <li>4.1.2 A, Navn, rolle, verdi</li>
  </ul>

  <h3>WAI-ARIA</h3>
  <ul>
    <li>
      Role=progressbar brukes for identifisere statusindikatoren for
      skjermleser.
    </li>
    <li>
      Aria-valuemin, aria-valuemax og aria-valuenow setter minimum, maksimum og
      nåværende verdi for indikatoren.
    </li>
  </ul>
</>
```

```js noeditor beskrivelse
<>
  <h3>Viser hvor langt det tar for noe å laste </h3>
  <p>
    Dersom innlasting av data tar mer enn ti sekunder og vi kan forutsi
    fremdriften, kan vi vise dette med ProgressBar.
  </p>
  <p>
    Bruk vanlig Spinner dersom du ikke kan forutsi fremdriften eller hvis
    innlasting tar kortere tid enn ti sekunder.
  </p>
</>
```
