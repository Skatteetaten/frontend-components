** Datovelger brukes i skjemaer når brukeren skal oppgi datoer. **

```js
import DatePicker from '@skatteetaten/frontend-components/DatePicker';

const initialState = {
  value: new Date(),
  value2: new Date(),
  value3: new Date()
};

<div>
  <div className="ExampleFlexContainer-200">
    <DatePicker
      id={'my-date1'}
      label={'Velg en dato'}
      placeholder={'Velg en dato...'}
      help={
        'Du kan skrive inn dato i feltet, eller velge en dato ved hjelp av datovelgeren, enten med mus eller bruk tastaturet'
      }
      value={state.value1}
      onChange={(e, value1) => setState({ value1 })}
      isRequired={true}
      isRequiredErrorMessage={'Dato må fylles ut'}
    />
  </div>
  <br />
  <div className="ExampleFlexContainer-200">
    <DatePicker
      id={'my-date'}
      label={'Ukenummer'}
      placeholder={'dd.mm.åååå'}
      help={
        'Du kan skrive inn dato i feltet, eller velge en dato ved hjelp av datovelgeren, enten med mus eller bruk tastaturet'
      }
      value={state.value2}
      onChange={({ target: { value2 } }) => setState({ value2 })}
      showMonthPickerAsOverlay={true}
      showWeekNumbers={true}
    />
  </div>
  <br />
  <div className="ExampleFlexContainer-200">
    <DatePicker
      id={'my-date'}
      label={'Lesemodus'}
      ariaLabel={'Datovelger'}
      placeholder={DatePicker.DefaultDateFormat}
      value={state.value3}
      onChange={({ target: { value3 } }) => setState({ value3 })}
      readonlyMode
    />
  </div>
</div>;
```

Stor versjon:

```js
import DatePicker from '@skatteetaten/frontend-components/DatePicker';

const initialState = {
  value: new Date(),
  value2: new Date(),
  value3: new Date()
};

<div className="ExampleFlexContainer-200">
  <DatePicker
    id={'my-date1'}
    label={'Velg en dato'}
    inputSize={'large'}
    placeholder={'Velg en dato...'}
    info={
      'Du kan skrive inn dato i feltet, eller velge en dato ved hjelp av datovelgeren, enten med mus eller bruk tastaturet'
    }
    value={state.value1}
    onChange={(e, value1) => setState({ value1 })}
    isRequired={true}
    isRequiredErrorMessage={'Dato må fylles ut'}
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
      {' '}
      Ta hensyn til hvor langt frem eller tilbake brukeren pleier å velge dato.
      Hvis man vanligvis velger en dato noen dager frem i tid, er det kanskje
      ikke behov å vise månedsoversikten. I andre tilfeller er det fornuftig å
      vise månedoversikt og ukenummer. Datofeltet har også en lesemodus for når
      man har behov for å gå fra en tilstand der man kan endre datoen til bare å
      vise den.
    </p>
  </AccordionItem>
  <AccordionItem
    toggleContent
    toggleButtonText={'Universell utforming'}
    stepId={'step-1-2'}
  >
    <ul>
      <li>
        Test at det er mulig å nå alle funksjoner med tastatur. Datovelgeren er
        satt opp slik at man kan skrive datoer med tastaturet når man tab-er til
        feltet. Hvis man klikker med mus på feltet åpnes kalendervisning først
        og man må klikke i feltet for å kunne skrive med tastatur.
      </li>
      <li>
        Sjekk at fokus settes i kalenderen etter åpning - slik at en eventuell
        skjermleser fanger opp at den vises på skjermen.
      </li>
      <li>Test at skjermleser leser opp fornuftige tekster i kalenderen.</li>
    </ul>
  </AccordionItem>
  <AccordionItem
    toggleContent
    toggleButtonText={'Tekniske detaljer'}
    stepId={'step-1-3'}
  >
    <p>
      <a
        href="https://developer.microsoft.com/en-us/fabric#/components/datepicker#Implementation"
        target="_blank"
      >
        Se flere tilgjengelige props i Fabric dokumentasjonen
      </a>
    </p>
  </AccordionItem>
</Accordion>;
```
