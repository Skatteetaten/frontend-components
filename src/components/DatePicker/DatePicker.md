**DatePicker (Datovelger): brukes i skjemaer når brukeren skal oppgi datoer.**

```js
import { DatePicker } from '@skatteetaten/frontend-components/DatePicker';

<div>
  <div className="ExampleFlexContainer-200">
    <DatePicker
      id={'my-date'}
      label={'Dato (dd.mm.åååå)'}
      placeholder="Skriv eller velg"
      help={'Denne datovelgeren viser ukenummer i kalender'}
      showMonthPickerAsOverlay={false}
      labelWithCalloutProps={{
        calloutProps: { autoDismiss: true },
      }}
      showWeekNumbers
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
    onSelectDate={(datoVerdi) => setDato(datoVerdi)}
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
<>
  <h3>Datovelgeren hjelper brukeren å fylle ut dato</h3>

  <p>
    Datovelgeren i et skjema gjør det enklere for brukeren å oppgi riktig dato
    ved å vise oversikt over dato, uke og måned.{' '}
  </p>

  <h3>Ulike oppsett for datovelger</h3>
  <p>
    Når du setter opp datovelgeren må du ta hensyn til hvor langt frem eller
    tilbake brukeren pleier å velge dato. Vurder om både månedsoversikt og
    ukenummer trenger å vises.
  </p>
  <p>
    Du kan sette opp skjemaet med datovelgeren flere måter:
    <ul>
      <li>Vise dagens dato i datofeltet og legge til mulighet for å endre.</li>
      <li>
        Vise en handligsrettet tekst i datofeltet, for eksempel «Velg en dato»
        og deretter vise månedsvelger og ukenummer når brukeren klikker i
        feltet.
      </li>
      <li>
        Vise både månedsoversikt og datoer med ukenummer, eller bare den ene,
        når brukeren klikker i feltet eller på endre-ikonet.{' '}
      </li>
    </ul>
  </p>
  <p>
    Se{' '}
    <a href="https://www.skatteetaten.no/stilogtone/skrive/skriveregler/datoer/">
      oppsett for hvordan vi skriver datoer
    </a>{' '}
    i Skatteetaten.
  </p>
</>
```
