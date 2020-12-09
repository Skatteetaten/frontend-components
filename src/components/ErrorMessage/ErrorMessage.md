** ErrorMessage brukes til å vise feilmeldinger. **

```js
import { ErrorMessage } from '@skatteetaten/frontend-components';

<ErrorMessage>Skriv datoen slik: 17.05.2019</ErrorMessage>;
```

Feilmelding ved en komponent:

```js
import { ErrorMessage, Button } from '@skatteetaten/frontend-components';
const [state, setState] = React.useState({
  hasError: false,
});

<>
  <Button
    type="primary"
    onClick={() => setState({ hasError: !state.hasError })}
  >
    Neste
  </Button>
  <ErrorMessage showError={state.hasError}>
    Skjemaet inneholder tre feil som må rettes før du kan gå videre.
  </ErrorMessage>
</>;
```

```js noeditor uu
<>
  <h3>Tips</h3>
  <ul>
    <li>
      Husk at kontrastkravet (minst 4.5 i kontrast) også gjelder på
      feilmeldinger.
    </li>
    <li>
      Feilmeldingen skal vises i umiddelbar nærhet til elementet den hører til.
      I Skatteetaten vises meldingen under tilhørende felt.
    </li>
  </ul>

  <h3>Mest relevante WCAG-krav</h3>
  <ul>
    <li>1.4.3 AA, Kontrast (minimum)</li>
    <li>3.3.1 A, Identifikasjon av feil</li>
    <li>4.1.2 A, Navn, rolle, verdi</li>
  </ul>

  <h3>WAI-ARIA</h3>
  <ul>
    <li>
      Role=alert brukes på feilmeldinger for at de skal leses opp av skjermleser
    </li>
    <li>
      Aria-atomic brukes på feilmeldinger for at hele innholdet skal leses av
      skjermleser hvis det skjer en oppdatering (feilmelding endrer seg).
    </li>
  </ul>
</>
```

```js noeditor beskrivelse
<>
  <h3>Feilmelding knyttet til enkeltelement på siden</h3>
  <p>
    Hvis en komponent ikke har innebygget mekanisme for feilmeldinger, kan du
    bruke ErrorMessage. Denne knytter du til det elementet det gjelder. Typiske
    situasjoner er felt eller knapper i skjemaer. Feilmeldingen må komme opp i
    umiddelbar nærhet til delen den hører til.
  </p>
  <p>
    For varsler eller feil som gjelder hele siden, skal du bruke
    <a href="https://skatteetaten.github.io/frontend-components/#messagebar">
      MessageBar (varsler)
    </a>
  </p>
  <h3>Feilmeldingen skal hjelpe brukeren videre</h3>
  <p>
    Det er viktig at teksten i feilmeldingen hjelper brukeren til å komme
    videre, fremfor å peke på hva brukeren har gjort feil. Du kan for eksempel
    skrive: «Skriv datoen slik: 17.05.2019» i stedet for «Du har brukt feil
    datoformat».
  </p>
  <p>
    {' '}
    Se <a href="https://www.skatteetaten.no/stilogtone/skrive/">
      Skatteetatens skriveregler{' '}
    </a> for hjelp til å skrive gode tekster inni boksen.
  </p>
</>
```
