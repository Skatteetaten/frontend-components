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
  <h3>Forenkler utfylling av datoer</h3>

  <p>Datovelger i et skjema gjør det enklere for brukeren å oppgi datoer.</p>

  <h3>Ulike oppsett for datovelger</h3>

  <p>
    Du kan sette opp datovelgeren på mange måter. For eksempel kan du velge å
    vise månedsvelger og ukenummer når brukeren klikker i feltet. Ta hensyn til
    hvor langt frem eller tilbake brukeren pleier å velge dato. Hvis det er mest
    aktuelt å føre opp en dato noen dager frem i tid, er det kanskje ikke
    nødvendig å vise månedsoversikten. I andre tilfeller er det fornuftig å vise
    både månedsoversikt og ukenummer samtidig.
  </p>

  <p>
    Datofeltet kan også ha en lesemodus. Her kan vi enten vise dagens dato og
    legge til mulighet for å endre, eller vi kan vise en handligsrettet tekst,
    for eksempel «Velg en dato».
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
