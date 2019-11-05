** Label med callout **

Kan brukes for å gi label med callout til komponenter

```js
import LabelWithCallout from '@skatteetaten/frontend-components/LabelWithCallout';
import Button from '@skatteetaten/frontend-components/Button';

<>
  <LabelWithCallout
    label={'Dette er en label med hjelpetekst'}
    help={'Dette er en hjelpetekst'}
  />
  <hr />
  <LabelWithCallout
    label={'Dette er en label med hjelpe- og advarsel tekst'}
    help={'Dette er hjelpetekst'}
    warning={state.warning && 'Dette er en advarsel'}
  />
  <Button onClick={() => setState({ warning: !state.warning })}>
    {state.warning ? 'Vis med hjelpetekst' : 'Vis med advarsel'}
  </Button>
</>;
```

Brukt i kompinasjon med andre komponenter og floating prop.

```js
import LabelWithCallout from '@skatteetaten/frontend-components/LabelWithCallout';
import SearchField from '@skatteetaten/frontend-components/SearchField';
<>
  <LabelWithCallout
    label={'Søk etter ting'}
    help={'Her kan du altså søke etter ting'}
    calloutFloating={true}
  />
  <SearchField
    searchFieldSize="standard"
    border="slim"
    placeholder="Skriv søkeord her"
    ariaLabel="Søkefelt"
  />
</>;
```
