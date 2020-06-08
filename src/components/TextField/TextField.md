** Tekstfelt benyttes når vi ønsker at brukeren skrive inn informasjon av en bestemt type - som oftest i et skjema **

Standard tekstfelt:

```js
import { TextField } from '@skatteetaten/frontend-components';

<div style={{ width: '300px' }}>
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
import { TextField } from '@skatteetaten/frontend-components';

<div style={{ width: '300px' }}>
  <TextField
    label={'Navn'}
    inputSize={'large'}
    value={state.value}
    onChange={(e, value) => setState({ value })}
  />
</div>;
```

Hjelpetekster og advarsel:

```js
import { TextField } from '@skatteetaten/frontend-components';

<>
  <div style={{ width: '300px' }}>
    <TextField
      label="Fullt navn"
      value={state.value1}
      onChange={(e, value) => setState({ value1: value })}
      help="Vi trenger å vite navnet ditt dersom vi skal kontakte deg senere."
    />
  </div>
  <br />
  <div style={{ width: '150px' }}>
    <TextField
      label="Antall barn"
      placeholder={''}
      inputMode={'numeric'}
      value={'23'}
      warning="Er du sikker på at antall barn er riktig?"
      onChange={(e, value) => setState({ value2: value })}
    />
  </div>
</>;
```

Feilmelding vises i umiddelbar nærhet til feltet:

```js
import { TextField } from '@skatteetaten/frontend-components';

<div style={{ width: '160px' }}>
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
import { TextField } from '@skatteetaten/frontend-components';

const initialState = {
  value: 'Siri Saksbehandler',
  vekt: '4',
  empty: '',
};

<div style={{ width: '300px' }}>
  <TextField
    readOnly
    editable
    label="Saksbehandler"
    value={state.value}
    onChange={(e, value) => setState({ value })}
    boldText={true}
  />
  <p>Med suffix:</p>
  <TextField
    readOnly
    editable
    label="Vekt på vare"
    value={state.vekt}
    onChange={(e, value) => setState({ vekt: value })}
    boldText={true}
    suffix={'kg'}
  />
  <p>Rediger når tekstfeltet er tomt:</p>
  <TextField
    readOnly
    editable
    editableWhenEmpty
    label="Saksbehandler"
    value={state.empty}
    onChange={(e, value) => setState({ empty: value })}
    boldText={true}
  />
</div>;
```

Bestemt formatering:

```js
import { TextField } from '@skatteetaten/frontend-components';

<div style={{ width: '300px' }}>
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
import { TextField } from '@skatteetaten/frontend-components';

<div style={{ width: '300px' }}>
  <TextField
    label="Endres til multiline dersom teksten er lengre enn 50 tegn"
    multiline={state.lineBreak}
    onChange={(e, value) => {
      const lineBreak = value.length > 50;
      if (lineBreak !== state.lineBreak) {
        setState({
          lineBreak: lineBreak,
        });
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
<h3>Tips</h3>
<ul>
<li>For tekstfelt med synlig ledetekst, brukes input med label for-attributt. Tekstfelt uten synlig ledetekst kan bruke aria-label på input.</li>
<li>Tydelige og forståelige ledetekster er viktig. Hvis formatet er viktig, f.eks. 9 siffer, er det en fordel om dette vises i ledeteksten. Eksempel: Organisasjonsnummer (9 siffer).</li>
<li>Kun placeholder-attributt er ikke tilstrekkelig for å bestå WCAG. Ledetekst (label/aria-label) og placeholder bør ikke være identiske. Placeholder-tekst er ment for å gi et hint om det som skal skrives i feltet.</li>
<li>I publikumsløsninger vises advarsel- og hjelpetekst mellom label og verdi (CalloutFloating til false). Hjelpetekster i Callout fanges ikke like enkelt opp av skjermlesere.</li>
<li>Sjekk at suffix og feilmeldinger leses opp av skjermlesere.</li>
<li>Husk at kontrastkravet (minst 4.5 i kontrast) også gjelder på feilmeldinger.</li>
<li>Feilmeldingen skal vises i umiddelbar nærhet til elementet den hører til. I Skatteetaten vises meldingen under tilhørende felt.</li>
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
<li>Role=alert brukes på feilmeldinger for at de skal leses opp av skjermleser</li>
<li>Aria-atomic brukes på feilmeldinger for at hele innholdet skal leses av skjermleser hvis det skjer en oppdatering (feilmelding endrer seg).</li>
<li>Aria-describedby brukes på input for at skjermlesere skal lese suffix der det brukes.</li>
<li>Aria-expanded brukes på hjelp/infoknapper som utvides/minimeres.</li>
<li>Aria-hidden brukes for å skjule hjelp/info-ikon for skjermleser.</li>
</ul>
```

```js noeditor beskrivelse
  <h3>Mange ulike kombinasjoner</h3>

<p>
  I Designsystemet finnes det mange ulike varisjoner av tekstfelt. Vi har med og
  uten hjelpetekst, feilmeldinger eller lese- og skrivemodus. Vi har også
  mulighet til å bestemme formatering, for eksempel ved organiasasjonsnummer.
</p>
```
