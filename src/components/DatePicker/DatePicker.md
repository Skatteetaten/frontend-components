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
      isRequiredErrorMessage={'Dato må fylles ut'}
    />
  </div>
  <br />
  <div className="ExampleFlexContainer-200">
    <DatePicker
      id={'my-date'}
      label={'Ukenummer'}
      placeholder={'dd.mm.åååå'}
      help={'Denne datovelgeren viser ukenummer i kalender'}
      value={state.value2}
      onChange={({ target: { value2 } }) => setState({ value2 })}
      showMonthPickerAsOverlay={true}
      showWeekNumbers={true}
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
    isRequiredErrorMessage={'Dato må fylles ut'}
  />
</div>;
```

```js noeditor uu
<h3>Huskeliste</h3>
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
<h3>Månedsoversikt og ukenummer</h3>
<p>DatePicker-komponenten kan konfigureres på mange måter. For eksemepel kan man velge å vise månedvelger og ukenummer. Ta hensyn til hvor langt frem eller tilbake brukeren pleier å velge dato. Hvis man vanligvis velger en dato noen dager frem i tid, er det kanskje ikke behov å vise månedsoversikten. I andre tilfeller er det fornuftig å vise både månedoversikt og ukenummer samtidig.</p>
<h3>Lesemodus</h3>
<p>Datofeltet har også en lesemodus for når man har behov for å gå fra en tilstand der man kan endre datoen til bare å vise den.
</p>
```
