**ErrorSummary (Feiloppsummering): Samlet visning av feil i skjema eller stegliste**

```js
import { ErrorSummary } from '@skatteetaten/frontend-components/ErrorSummary';
import { TextField } from '@skatteetaten/frontend-components/TextField';

<div>
  <div style={{ width: '350px', marginBottom: '16px' }}>
    <TextField
      id={'input_aar'}
      value="1009"
      label={'Inntektsår'}
      errorMessage="Inntekståret må være etter 2008"
      onChange={() => {}}
    />
  </div>
  <div style={{ width: '350px', marginBottom: '16px' }}>
    <TextField
      id={'input_epost'}
      label={'E-post'}
      errorMessage="E-posten ser ikke riktig ut. Skriv slik: ola.normann@norge.no"
    />
  </div>
  <div style={{ width: '350px', marginBottom: '16px' }}>
    <TextField
      id={'input_dager'}
      label={'Antall dager i Norge i perioden/inntekståret'}
      errorMessage="Antall dager må fylles ut"
    />
  </div>
  <ErrorSummary
    title={'For å gå videre må du rette opp i følgende:'}
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
    den relevante id'en heter. For <a href={'/#textfield'}>TextField</a> er feks
    id'en "id" + "-input".
  </p>
</>
```
