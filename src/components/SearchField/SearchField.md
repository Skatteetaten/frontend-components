** SearchField er et tekstfelt som brukes når man søker gjennom innhold i en nettløsning. **

```js
import SearchField from '@skatteetaten/frontend-components/SearchField';

<div style={{ width: '300px' }}>
  <SearchField
    searchFieldSize="standard"
    border="slim"
    placeholder="Skriv søkeord her"
    ariaLabel="Søkefelt"
  />
  <br />
  <SearchField
    searchFieldSize="large"
    placeholder="Skriv søkeord her"
    ariaLabel="Søkefelt"
  />
</div>;
```

```js noeditor beskrivelse
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
      Et søkefelt skal alltid ha en markering i form av et søkeikon eller
      alternativt en knapp med «Søk».
    </p>
    <p>
      Søkefeltet skal kun ta en del av bredden på skjermen eller området for
      tekst. Hvis feltet blir for stort, oppfatter brukeren det som en banner.
    </p>
    <p>
      Søkefeltet kan legges inni en egen container, og størrelsen kan endres
      deretter.
    </p>
  </AccordionItem>
  <AccordionItem
    toggleContent
    toggleButtonText={'Universell utforming'}
    stepId={'step-1-2'}
  >
    <p>Dette seksjonen er foreløpig tom.</p>
  </AccordionItem>
  <AccordionItem
    toggleContent
    toggleButtonText={'Tekniske detaljer'}
    stepId={'step-1-3'}
  >
    <p>
      <a
        href="https://developer.microsoft.com/en-us/fabric#/components/searchbox#Implementation"
        target="_blank"
      >
        Se flere tilgjengelige props i Fabric dokumentasjonen
      </a>
    </p>
  </AccordionItem>
</Accordion>;
```
