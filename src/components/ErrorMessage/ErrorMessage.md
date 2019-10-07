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
    {state.hasError ? 'Skjul feil' : 'Vis Feil'}
  </Button>
  <ErrorMessage showError={state.hasError}>
    Du har 3 valideringsfeil.
  </ErrorMessage>
</>;
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
      Dersom komponentene ikke har noen innebygget mekanisme for feilmeldinger,
      kan ErrorMessage brukes for å vise feilmeldinger knyttet til et mindre
      element. Typiske situasjoner er felt eller knapper i skjemaer.
      Feilmeldingen skal vises i umiddelbar nærhet til elementet den hører til.
    </p>
    <p>
      Teksten i feilmeldingen bør hjelpe brukeren å komme videre, fremfor å peke
      på hva han/hun har gjort feil. Du kan for eksempel skrive: "Skriv datoen
      slik: 17.05.2019" i stedet for "Du har brukt feil datoformat."
    </p>
    <p>For feil eller varsler som gjelder hele siden, bruk MessageBar.</p>
  </AccordionItem>
  <AccordionItem
    toggleContent
    toggleButtonText={'Universell utforming'}
    stepId={'step-1-2'}
  >
    <p>
      Sjekk at den røde teksten plasseres på en flate som gir tilstrekkelig god
      lesekontrast.
    </p>
  </AccordionItem>
  <AccordionItem
    toggleContent
    toggleButtonText={'Tekniske detaljer'}
    stepId={'step-1-3'}
  >
    <p>
      Dette er en egenutviklet komponent, så ingen flere props er tilgjengelig.
    </p>
  </AccordionItem>
</Accordion>;
```
