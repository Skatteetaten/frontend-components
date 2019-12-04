** Kan brukes for å vise for langt det er igjen for noe å laste **

```
import ProgressBar from '@skatteetaten/frontend-components/ProgressBar';

<ProgressBar
  label="Laster inn..."
  description="Vennligst vent mens vi laster inn litt data"
  percentComplete={.33}
/>
```

```js noeditor uu
<p>Verdien i baren skal alltid være i readonly modus.</p>
```

```js noeditor beskrivelse
  <p>
    Dersom innlasting av data tar mer enn ti seunder og vi kan forutsi
    fremdriften, kan vi vise dette med med denne komponenten.
  </p>
  <p>
    Bruk vanlig Spinner dersom du ikke kan forutsi fremdriften eller
    innlasting tar kortere tid.
  </p>
```
