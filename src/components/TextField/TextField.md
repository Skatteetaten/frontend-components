** Tekstfelt benyttes når vi ønsker at brukeren skrive inn informasjon av en bestemt type - som oftest i et skjema **

Standard tekstfelt:

```js
import TextField from '@skatteetaten/frontend-components/TextField';

<div style={{ width: '300px' }}>
  <TextField
    id={'my-input'}
    label={'Navn'}
    value={state.value}
    onChange={(e, value) => setState({ value1: value })}
  />
</div>;
```

Stor variant av tekstfelt:

```js
import TextField from '@skatteetaten/frontend-components/TextField';

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
import TextField from '@skatteetaten/frontend-components/TextField';

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
      value={state.value2}
      onChange={(e, value) => setState({ value2: value })}
    />
  </div>
</>;
```

Feilmelding vises i umiddelbar nærhet til feltet:

```js
import TextField from '@skatteetaten/frontend-components/TextField';

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
import TextField from '@skatteetaten/frontend-components/TextField';

const initialState = {
  value: 'Siri Saksbehandler',
  vekt: '4',
  empty: ''
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
import TextField from '@skatteetaten/frontend-components/TextField';

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
import TextField from '@skatteetaten/frontend-components/TextField';

<div style={{ width: '300px' }}>
  <TextField
    label="Endres til multiline dersom teksten er lengre enn 50 tegn"
    multiline={state.lineBreak}
    onChange={(e, value) => {
      const lineBreak = value.length > 50;
      if (lineBreak !== state.lineBreak) {
        setState({
          lineBreak: lineBreak
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
  <h3>Kobling mellom label og felt</h3>
  <p>
    Det skal alltid være en programatisk kobling mellom tekstfelt og label,
    slik at skjermleser kan lese opp beskrivelsen av feltet når det er i
    fokus.
  </p>
  <h3>Hjelpetekster</h3>
  <p>
    I publikumsløsninger viser i advarsel- og hjelpetekst mellom label og
    verdi ( alloutFloating til false). Hjelpetekster i Callout fanges
    ikke like enkelt opp av skjermlesere.
  </p>
```

```js noeditor beskrivelse
  <h3>Mange ulike kombinasjoner</h3>

<p>
  I Designsystemet finnes det mange ulike varisjoner av tekstfelt. Vi har med og
  uten hjelpetekst, feilmeldinger eller lese- og skrivemodus. Vi har også
  mulighet til å bestemme formatering, for eksempel ved organiasasjonsnummer.
</p>
```
