**ErrorSummary (Feiloppsummering): Samlet visning av feil i skjema eller stegliste**

```js
import { ErrorSummary } from '@skatteetaten/frontend-components/ErrorSummary';

<div>
  <ErrorSummary
    id={'errorsummary_example1'}
    title={'For å gå videre må du rette opp i følgende:'}
    titleTagName={'h2'}
    errors={[
      { id: 'input_aar-input', error: 'Inntekståret må være etter 2008' },
      {
        id: 'input_epost-input',
        error: 'E-posten ser ikke riktig ut. Skriv slik: ola.normann@norge.no',
      },
      { id: 'input_dager-input', error: 'Antall dager må fylles ut.' },
    ]}
  />
</div>;
```

Brukt i et skjema:

```js
import { ErrorSummary } from '@skatteetaten/frontend-components/ErrorSummary';
import { TextField } from '@skatteetaten/frontend-components/TextField';
import { Button } from '@skatteetaten/frontend-components/Button';

const buttonStyle = {
  marginTop: '8px',
};

<div>
  <div style={{ maxWidth: '350px', marginBottom: '16px' }}>
    <TextField
      id={'input_aar'}
      value="1009"
      label={'År'}
      errorMessage="Inntekståret må være etter 2008"
      onChange={(e, value) => setState({ ...state, aar: value })}
    />
  </div>
  <div style={{ maxWidth: '350px', marginBottom: '16px' }}>
    <TextField
      id={'input_epost'}
      value={'Ola.Normann.no'}
      label={'E-post'}
      errorMessage="E-posten ser ikke riktig ut. Skriv slik: ola.normann@norge.no"
      onChange={(e, value) => setState({ ...state, epost: value })}
    />
  </div>
  <div style={{ maxWidth: '350px', marginBottom: '16px' }}>
    <TextField
      id={'input_dager'}
      value={''}
      label={'Antall dager i Norge i perioden/inntekståret'}
      errorMessage="Antall dager må fylles ut"
      onChange={(e, value) => setState({ ...state, dager: value })}
    />
  </div>
  <ErrorSummary
    id={'errorsummary_example2'}
    title={'For å gå videre må du rette opp i følgende:'}
    titleTagName={'h2'}
    errors={[
      { id: 'input_aar-input', error: 'Inntekståret må være etter 2008' },
      {
        id: 'input_epost-input',
        error: 'E-posten ser ikke riktig ut. Skriv slik: ola.normann@norge.no',
      },
      { id: 'input_dager-input', error: 'Antall dager må fylles ut.' },
    ]}
  />

  <Button style={buttonStyle} buttonStyle="primaryRoundedFilled">
    Send inn
  </Button>
</div>;
```

```js noeditor beskrivelse
<>
  <h3>Hovedregler</h3>
  <ul>
    <li>
      Feiloppsummeringen plasseres som hovedregel over «Neste» eller «Send
      inn»-knapp i skjema eller stegliste - i umiddelbar nærhet til der hvor
      brukerens fokus er. Den skal ikke være synlig uten av bruker foretar seg
      noe, og først dukke opp etter en handling som utløser feil.
    </li>
    <li>
      Gjenta tittelen til feltet med feil i helt først eller tidlig lenken som
      peker til feilene.
    </li>
    <li>
      For feilmeldinger som handler om enkle skrivefeil eller obligtoriske felt
      er korte tekster ok (for eksempel «Antall dager må fylles ut»). For lengre
      tekster med veiledning og forklaring anfaler vi å bruke mer aktivt
      «du-språk».{' '}
    </li>
  </ul>

  <h3>Finne ankerpunkt for scroll og fokus</h3>
  <p>
    Designsystemet genererer id-er for de forskjellige komponentene. For at
    scrolling og fokus skal fungere er det viktig at man setter seg inn i hva
    den relevante id'en heter. For{' '}
    <a class="brodtekst-link" href={'/#textfield'}>
      TextField
    </a>{' '}
    er feks id'en "id" + "-input".
  </p>
</>
```

```js noeditor uu
<>
  <h3>Tips</h3>

  <ul>
    <li>
      Sjekk at tastatur- og skjermleserfokus settes til toppen av oppsummeringen
      når den dukker opp.
    </li>
    <li>Sjekk at lenkene setter fokus til riktig felt.</li>
    <li>
      Test med skjermleser at innholdet i oppsummeringen leses opp når den
      dukker opp.{' '}
    </li>
  </ul>

  <h3>Mest relevante WCAG-krav</h3>

  <ul>
    <li>3.3.1 A, Identifikasjon av feil</li>
    <li>4.1.2 A, Navn, rolle, verdi</li>
  </ul>

  <h3>WAI-ARIA</h3>

  <ul>
    <li>Aria-hidden="true" brukes for å skjule ikon(er) for skjermleser.</li>
    <li>
      Role="status" og aria-live="assertive" brukes for å sikre opplesing for
      skjermleser.
    </li>
    <li>
      Tabindex="0" brukes på lenkene for tabstopp pga. manglende href-attributt.
    </li>
  </ul>
</>
```
