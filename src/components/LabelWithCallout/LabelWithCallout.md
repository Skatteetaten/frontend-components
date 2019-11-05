** Label med callout **

Kan brukes for å gi label med callout til komponenter

```js
import LabelWithCallout from '@skatteetaten/frontend-components/LabelWithCallout';
<>
  <LabelWithCallout
    label={'Dette er en label med hjelpetekst'}
    help={'Dette er en warning'}
  />
  <LabelWithCallout
    label={'Dette er en label med warning tekst'}
    warning={'Dette er en warning'}
  />
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
