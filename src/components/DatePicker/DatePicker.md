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
      calloutFloating={false}
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
    help={
      'Du kan skrive inn dato i feltet, eller velge en dato ved hjelp av datovelgeren, enten med mus eller bruk tastaturet'
    }
    value={state.value1}
    onChange={(e, value1) => setState({ value1 })}
    isRequired={true}
    isRequiredErrorMessage={'Dato må fylles ut'}
    calloutFloating={false}
  />
</div>;
```

```js noeditor uu
<ul>
  <li>
    Test at det er mulig å nå alle funksjoner med tastatur. Datovelgeren er satt
    opp slik at man kan skrive datoer med tastaturet når man tab-er til feltet.
    Hvis man klikker med mus på feltet åpnes kalendervisning først og man må
    klikke i feltet for å kunne skrive med tastatur.
  </li>
  <li>
    Sjekk at fokus settes i kalenderen etter åpning - slik at en eventuell
    skjermleser fanger opp at den vises på skjermen.
  </li>
  <li>Test at skjermleser leser opp fornuftige tekster i kalenderen.</li>
</ul>
```

```js noeditor beskrivelse
<p>
  Ta hensyn til hvor langt frem eller tilbake brukeren pleier å velge dato. Hvis
  man vanligvis velger en dato noen dager frem i tid, er det kanskje ikke behov
  å vise månedsoversikten. I andre tilfeller er det fornuftig å vise
  månedoversikt og ukenummer. Datofeltet har også en lesemodus for når man har
  behov for å gå fra en tilstand der man kan endre datoen til bare å vise den.
</p>
```
