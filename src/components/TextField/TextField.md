**TextField (Tekstfelt): benyttes når vi ønsker at brukeren skrive inn informasjon av en bestemt type - som oftest i et skjema**

Standard tekstfelt:

```js
import { TextField } from '@skatteetaten/frontend-components/TextField';

const [state, setState] = React.useState({ value: '' });

<div style={{ maxWidth: '300px' }}>
  <TextField
    id={'my-input'}
    label={'Navn'}
    value={state.value}
    onChange={(e, value) => setState({ value: value })}
  />
</div>;
```

Stor variant av tekstfelt:

```js
import { TextField } from '@skatteetaten/frontend-components/TextField';

const [state, setState] = React.useState({ value: '' });

<div style={{ maxWidth: '300px' }}>
  <TextField
    label={'Navn'}
    inputSize={'large'}
    value={state.value}
    onChange={(e, value) => setState({ value })}
  />
</div>;
```

Hjelpetekster og advarsel med automatisk lukking:

```js
import { TextField } from '@skatteetaten/frontend-components/TextField';

const [name, setName] = React.useState('');
const [children, setChildren] = React.useState('23');

<>
  <div style={{ maxWidth: '300px' }}>
    <TextField
      label="Fullt navn"
      value={name}
      onChange={(e, value) => setName(value)}
      help="Vi trenger å vite navnet ditt dersom vi skal kontakte deg senere."
      labelWithCalloutProps={{
        calloutProps: { autoDismiss: true },
      }}
    />
  </div>
  <br />
  <div style={{ maxWidth: '150px' }}>
    <TextField
      label="Antall barn"
      placeholder={''}
      inputMode={'numeric'}
      value={children}
      warning="Er du sikker på at antall barn er riktig?"
      onChange={(e, value) => setChildren(value)}
      labelWithCalloutProps={{
        calloutProps: { autoDismiss: true },
      }}
    />
  </div>
</>;
```

Prefix og suffix i felt:

```js
import { TextField } from '@skatteetaten/frontend-components/TextField';

const [state, setState] = React.useState({ value: '' });

<div style={{ maxWidth: '300px', paddingBottom: '16px' }}>
  <p style={{ margin: '0 0 8px 0' }}>
    <em>Prefix:</em>
  </p>
  <TextField
    id={'my-input'}
    label={'Telefonnummer'}
    prefix="+47"
    value={state.value}
    onChange={(e, value) => setState({ value: value })}
  />
  <p style={{ paddingTop: '16px', marginBottom: '8px' }}>
    <em>Suffix:</em>
  </p>
  <TextField
    id={'my-input'}
    label={'Inntekt'}
    suffix="NOK"
    value={state.value}
  />
</div>;
```

Feilmelding vises i umiddelbar nærhet til feltet:

```js
import { TextField } from '@skatteetaten/frontend-components/TextField';

const [state, setState] = React.useState({ value: '' });

<div style={{ maxWidth: '160px' }}>
  <TextField
    label="Inntektsår"
    value={state.value}
    onChange={(e, value) => setState({ value })}
    errorMessage={
      state.value !== '2008' ? 'Inntekståret må være etter 2008.' : null
    }
  />
</div>;
```

Av og til ønsker man å veksle mellom skrive og lesemodus. Da vises det som ren tekst med et blyant-ikon. Når man klikker, blir det skrivefelt:

```js
import { TextField } from '@skatteetaten/frontend-components/TextField';

const [state, setState] = React.useState({
  value: 'Siri Saksbehandler',
  vekt: '4',
  empty: '',
});

<div style={{ maxWidth: '300px' }}>
  <TextField
    readOnly
    editable
    label="Saksbehandler"
    value={state.value}
    onChange={(e, value) => setState({ ...state, value })}
    boldText={true}
  />
  <p style={{ paddingTop: '16px', marginBottom: '8px' }}>
    <em>Med suffix:</em>
  </p>
  <TextField
    readOnly
    editable
    label="Vekt på vare"
    value={state.vekt}
    onChange={(e, value) => setState({ ...state, vekt: value })}
    boldText={true}
    suffix={'kg'}
  />
  <p style={{ paddingTop: '16px', marginBottom: '8px' }}>
    <em>Rediger når tekstfeltet er tomt:</em>
  </p>
  <TextField
    readOnly
    editable
    editableWhenEmpty
    label="Saksbehandler"
    value={state.empty}
    onChange={(e, value) => setState({ ...state, empty: value })}
    boldText={true}
  />
</div>;
```

Bestemt formatering:

```js
import { TextField } from '@skatteetaten/frontend-components/TextField';

const [state, setState] = React.useState({ value: '' });

<div style={{ maxWidth: '300px' }}>
  <TextField
    value={state.value}
    onChange={(e, value) => setState({ value })}
    label={'Org.nummer (9 siffer)'}
    mask={'999 999 999'}
    maskChar={''}
  />
</div>;
```

Multiline tekstfelt:

```js
import { TextField } from '@skatteetaten/frontend-components/TextField';

const [lineBreak, setLineBreak] = React.useState(false);

<div style={{ maxWidth: '300px' }}>
  <TextField
    label="Endres til multiline dersom teksten er lengre enn 50 tegn"
    multiline={lineBreak}
    onChange={(e, value) => {
      const shouldBreakLine = value.length > 50;
      if (shouldBreakLine !== state.lineBreak) {
        setLineBreak(shouldBreakLine);
      }
    }}
  />
  <br />
  <TextField
    label="Antall rader som vises i multiline modus kan settes"
    multiline
    rows={7}
  />
</div>;
```

```js noeditor uu
<>
  <h3>Tips</h3>
  <ul>
    <li>
      For tekstfelt med synlig ledetekst, brukes input med label for-attributt.
      Tekstfelt uten synlig ledetekst kan bruke aria-label på input.
    </li>
    <li>
      Tydelige og forståelige ledetekster er viktig. Hvis formatet er viktig,
      f.eks. 9 siffer, er det en fordel om dette vises i ledeteksten. Eksempel:
      Organisasjonsnummer (9 siffer).
    </li>
    <li>
      Kun placeholder-attributt er ikke tilstrekkelig for å bestå WCAG.
      Ledetekst (label/aria-label) og placeholder bør ikke være identiske.
      Placeholder-tekst er ment for å gi et hint om det som skal skrives i
      feltet.
    </li>
    <li>
      I publikumsløsninger vises advarsel- og hjelpetekst mellom label og verdi
      (CalloutFloating til false). Hjelpetekster i Callout fanges ikke like
      enkelt opp av skjermlesere.
    </li>
    <li>Sjekk at suffix og feilmeldinger leses opp av skjermlesere.</li>
    <li>
      Husk at kontrastkravet (minst 4.5 i kontrast) også gjelder på
      feilmeldinger.
    </li>
    <li>
      Feilmeldingen skal vises i umiddelbar nærhet til elementet den hører til.
      I Skatteetaten vises meldingen under tilhørende felt.
    </li>
  </ul>

  <h3>Mest relevante WCAG-krav</h3>
  <ul>
    <li>1.3.1 A, Informasjon og relasjoner</li>
    <li>2.4.6 AA, Overskrifter og ledetekster</li>
    <li>3.3.1 A, Identifikasjon av feil</li>
    <li>3.3.2 A, Ledetekster eller instruksjoner</li>
    <li>4.1.2 A, Navn, rolle, verdi</li>
  </ul>

  <h3>WAI-ARIA</h3>
  <ul>
    <li>
      Role=alert brukes på feilmeldinger for at de skal leses opp av skjermleser
    </li>
    <li>
      Aria-atomic brukes på feilmeldinger for at hele innholdet skal leses av
      skjermleser hvis det skjer en oppdatering (feilmelding endrer seg).
    </li>
    <li>
      Aria-describedby brukes på input for at skjermlesere skal lese suffix der
      det brukes.
    </li>
    <li>Aria-expanded brukes på hjelp/infoknapper som utvides/minimeres.</li>
    <li>Aria-hidden brukes for å skjule hjelp/info-ikon for skjermleser.</li>
  </ul>
</>
```

```js noeditor beskrivelse
<>
  <h3>Mange varianter av tekstfelt</h3>

  <p>
    I designsystemet finnes det mange ulike variasjoner av tekstfelt.
    Tekstfeltene kan ha:
  </p>
  <ul>
    <li>hjelpetekst eller være blanke</li>
    <li>feilmeldinger som varsler</li>
    <li>lese- og skrivemodus</li>
    <li>
      formateringer som sikrer riktig format, som for eksempel fødselsnummer
    </li>
    <li>mulighet for å skrive flere setninger med en bestemt begrensing</li>
  </ul>
</>
```
