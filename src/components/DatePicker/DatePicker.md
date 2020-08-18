** Datovelger brukes i skjemaer når brukeren skal oppgi datoer. **

```js
import DatePicker from '@skatteetaten/frontend-components/DatePicker';

<div>
  <div className="ExampleFlexContainer-200">
    <DatePicker
      id={'my-date1'}
      label={'Velg en dato'}
      help={
        'Du kan skrive inn dato i feltet, eller velge en dato ved hjelp av datovelgeren, enten med mus eller bruk tastaturet'
      }
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
      showMonthPickerAsOverlay={true}
      showWeekNumbers={true}
    />
  </div>
</div>;
```

Veksle mellom skrive og lesemodus:

```js
import DatePicker from '@skatteetaten/frontend-components/DatePicker';
const [dato, setDato] = React.useState(new Date());
<div className="ExampleFlexContainer-200">
  <DatePicker
    id={'readonly-date'}
    readonlyMode
    editable
    label={'Velg en dato'}
    value={dato}
    onSelectDate={datoVerdi => setDato(datoVerdi)}
  />
</div>;
```

```js noeditor uu
<div>
  <h3>Tips</h3>
  <ul>
    <li>
      Datovelgeren skal kunne åpnes og brukes med kun tastatur. Sjekk at
      tastaturfokus beholdes på feltet etter at dato er valgt.
    </li>
    <li>
      Datovelgeren skal kunne åpnes og brukes med skjermleser. Mange
      skjermleserbrukere vil nok foretrekke å skrive inn dato manuelt, men
      datovelgeren er ikke unntatt krav. Det betyr at navigering og riktig
      opplesing i kalenderen er viktig.
    </li>
  </ul>

  <h3>Mest relevante WCAG-krav</h3>
  <ul>
    <li>1.3.1 A, Informasjon og relasjoner </li>
    <li>3.3.2 A, Ledetekster eller instruksjoner</li>
    <li>4.1.2 A, Navn, rolle, verdi</li>
  </ul>

  <h3>WAI-ARIA</h3>
  <ul>
    <li>Aria-expanded brukes på hjelp/info knapp som utvides/minimeres.</li>
    <li>Aria-hidden brukes for å skjule hjelpeikon for skjermleser.</li>
  </ul>
</div>
```

```js noeditor beskrivelse
<h3>Månedsoversikt og ukenummer</h3>
<p>DatePicker-komponenten kan konfigureres på mange måter. For eksemepel kan man velge å vise månedvelger og ukenummer. Ta hensyn til hvor langt frem eller tilbake brukeren pleier å velge dato. Hvis man vanligvis velger en dato noen dager frem i tid, er det kanskje ikke behov å vise månedsoversikten. I andre tilfeller er det fornuftig å vise både månedoversikt og ukenummer samtidig.</p>
<h3>Lesemodus</h3>
<p>Datofeltet har også en lesemodus for når man har behov for å gå fra en tilstand der man kan endre datoen til bare å vise den.
</p>
<p>Se <a href='https://www.skatteetaten.no/stilogtone/skrive/skriveregler/datoer/'>oppsett for hvordan vi skriver datoer</a> i Skatteetaten.</p>
```
