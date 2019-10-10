** Tekstfelt benyttes når vi ønsker at brukeren skrive inn informasjon av en bestemt type - som oftest i et skjema **

Standard tekstfelt:

```js
import TextField from '@skatteetaten/frontend-components/TextField';

<div style={{ width: '300px' }}>
  <TextField
    id={'my-input-1'}
    label={'Navn'}
    placeholder={'For- og etternavn'}
    value={state.value1}
    onChange={(e, value) => setState({ value1: value })}
  />
</div>;
```

Stor variant av tekstfelt:

```js
import TextField from '@skatteetaten/frontend-components/TextField';

<div style={{ width: '300px' }}>
  <TextField
    id={'my-input-1'}
    label={'Navn'}
    inputSize={'large'}
    placeholder={'For- og etternavn'}
    value={state.value1}
    onChange={(e, value) => setState({ value1: value })}
  />
</div>;
```

Hjelpetekster og advarsel:

```js
import TextField from '@skatteetaten/frontend-components/TextField';

<>
  <div style={{ width: '300px' }}>
    <TextField
      id={'my-helpfield-1'}
      box
      withLeadingIcon="search"
      label="Fullt navn"
      calloutFloating={false}
      placeholder={''}
      value={state.value4}
      onChange={(e, value) => setState({ value4: value })}
      help="Vi trenger å vite navnet ditt dersom vi skal kontakte deg senere."
      calloutFloating={false}
    />
  </div>
  <br />
  <div style={{ width: '150px' }}>
    <TextField
      id={'my-helpfield-2'}
      box
      withLeadingIcon="search"
      label="Antall barn"
      placeholder={''}
      value={'23'}
      calloutFloating={false}
      warning="Er du sikker på at antall barn er riktig?"
      calloutFloating={false}
    />
  </div>
</>;
```

Feilmelding vises i umiddelbar nærhet til feltet:

```js
import TextField from '@skatteetaten/frontend-components/TextField';

<div style={{ width: '160px' }}>
  <TextField
    id={'my-errorfield-2'}
    box
    withLeadingIcon="search"
    label="Inntektsår"
    value={'0218'}
    errorMessage="Inntekståret må være etter 2008."
  />
</div>;
```

Av og til ønsker man å veksle mellom skrive og lesemodus. Da vises det som ren tekst med et blyant-ikon. Når man klikker, blir det skrivefelt:

```js
import TextField from '@skatteetaten/frontend-components/TextField';

const initialState = {
  value: 'Siri Saksbehandler',
  vekt: '4'
};

<div style={{ width: '300px' }}>
  <TextField
    id={'my-readonlyfield'}
    readOnly
    editable
    box
    label="Saksbehandler"
    value={state.value}
    onChange={(e, value) => setState({ value: value })}
    boldText={true}
  />
  <p>Med suffix:</p>
  <TextField
    id={'vektVare'}
    readOnly
    editable
    box
    label="Vekt på vare"
    value={state.vekt}
    onChange={(e, value) => setState({ vekt: value })}
    boldText={true}
    suffix={'kg'}
  />
</div>;
```

Bestemt formatering:

```js
import TextField from '@skatteetaten/frontend-components/TextField';

<div style={{ width: '300px' }}>
  <TextField
    id={'my-input-1'}
    onChange={(e, val) => console.log(val)}
    label={'Org.nummer'}
    placeholder={'999 999 999'}
    value={''}
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

```js noeditor
import Accordion from '@skatteetaten/frontend-components/Accordion';
import AccordionItem from '@skatteetaten/frontend-components/Accordion/AccordionItem';

<Accordion>
  <AccordionItem
    isOpen
    toggleContent
    toggleButtonText={'Bruk'}
    stepId={'step-1-1'}
  >
    <p>
      I Designsystemet finnes det mange ulike varisjoner av tekstfelt. Vi har
      med og uten hjelpetekst, feilmeldinger eller lese- og skrivemodus. Vi har
      også mulighet til å bestemme formatering, for eksempel ved
      organiasasjonsnummer.
    </p>
  </AccordionItem>
  <AccordionItem
    toggleContent
    toggleButtonText={'Universell utforming'}
    stepId={'step-1-2'}
  >
    <p>
      Det skal alltid være en programatisk kobling mellom tekstfelt og label,
      slik at skjermleser kan lese opp beskrivelsen av feltet når det er i
      fokus.
    </p>
    <p>
      I publikumsløsninger viser i advarsel- og hjelpetekst mellom label og
      verdi (sett calloutFloating til false). Hjelpetekster i Callout fanges
      ikke like enkelt opp av skjermlesere.
    </p>
  </AccordionItem>
  <AccordionItem
    toggleContent
    toggleButtonText={'Tekniske detaljer'}
    stepId={'step-1-3'}
  >
    <p>
      <a
        href="https://developer.microsoft.com/en-us/fabric#/components/textfield#Implementation"
        target="_blank"
      >
        Se flere tilgjengelige props i Fabric dokumentasjonen
      </a>
    </p>
  </AccordionItem>
</Accordion>;
```
