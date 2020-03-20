** ErrorMessage brukes til å vise feilmeldinger. **

```js
import ErrorMessage from '@skatteetaten/frontend-components/ErrorMessage';

<ErrorMessage>Skriv datoen slik: 17.05.2019</ErrorMessage>;
```

Feilmelding ved en komponent:

```js
import ErrorMessage from '@skatteetaten/frontend-components/ErrorMessage';
import Button from '@skatteetaten/frontend-components/Button';
const initialState = {
  hasError: false
};

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
  <h3>Huskeliste</h3>
  <p>
    Sjekk at den røde teksten plasseres på en flate som gir tilstrekkelig god
    lesekontrast.
  </p>
  <p>
    Feilmeldingen skal vises i umiddelbar nærhet til elementet den hører til.
  </p>
```

```js noeditor beskrivelse
<h3>Generell feilmelding</h3>
  <p>
    Dersom komponentene ikke har noen innebygget mekanisme for feilmeldinger,
    kan ErrorMessage brukes for å vise feilmeldinger knyttet til et annet
    element. Typiske situasjoner er felt eller knapper i skjemaer.
    Feilmeldingen skal vises i umiddelbar nærhet til elementet den hører til.
  </p>
    <p>For feil eller varsler som gjelder hele siden, bruk MessageBar.</p>

  <h3>Teksten i feilmeldingen</h3>
  <p>
    Teksten i feilmeldingen bør hjelpe brukeren å komme videre, fremfor å peke
    på hva han/hun har gjort feil. Du kan for eksempel skrive: "Skriv datoen
    slik: 17.05.2019" i stedet for "Du har brukt feil datoformat."
  </p>
```