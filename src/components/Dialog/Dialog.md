** Dialog brukes til å vise innhold midt på skjermen og tiltrekke seg brukerens oppmerksomhet. **

```js
import Dialog from '@skatteetaten/frontend-components/Dialog';
import Button from '@skatteetaten/frontend-components/Button';
import ActionButton from '@skatteetaten/frontend-components/ActionButton';

const initialState = { hideDialog: true };

function closeDialog() {
  setState({ hideDialog: true });
}

<div>
  <Button
    buttonStyle="secondary"
    onClick={() => setState({ hideDialog: false })}
  >
    Vis standard dialog
  </Button>
  <Dialog
    hidden={state.hideDialog}
    type={Dialog.Type.normal}
    onDismiss={closeDialog}
    title="Kansellere arbeidsoppgaven?"
    forceFocusInsideTrap
    minWidth="400px"
    maxWidth="600px"
  >
    <p>Er du sikker på at du vil kansellere arbeidsoppgaven?</p>

    <p>Handlingen kan ikke reverseres</p>
    <Dialog.Footer>
      <ActionButton onClick={closeDialog}>Avbryt</ActionButton>
      <Button onClick={closeDialog} hoved>
        Kanseller
      </Button>
    </Dialog.Footer>
  </Dialog>
</div>;
```

```js
import Dialog from '@skatteetaten/frontend-components/Dialog';
import Button from '@skatteetaten/frontend-components/Button';
import NavigationTile from '@skatteetaten/frontend-components/NavigationTile';

const initialState = { hideDialog: true };

function closeDialog() {
  setState({ hideDialog: true });
}

const content1 = [
  {
    to: '#',
    heading: 'Næringsrapport skatt AS',
    icon: 'ArrowForward'
  },
  {
    to: '#',
    heading: 'Næringsrapport skatt ENK',
    icon: 'ArrowForward'
  }
];

<div>
  <Button
    buttonStyle="secondary"
    onClick={() => setState({ hideDialog: false })}
  >
    Vis luftig dialog
  </Button>
  <Dialog
    hidden={state.hideDialog}
    type={Dialog.Type.normal}
    onDismiss={closeDialog}
    forceFocusInsideTrap
    title="Velg den inngangen som passer for deg"
    minWidth="500px"
    maxWidth="600px"
    layoutStyle={'airy'}
  >
    <p>
      Løsningen for aksjeselskap (AS) åpner i februar mens den blir tilgjengelig
      for enkeltpersonforetak (ENK) i april
    </p>
    <br />
    <NavigationTile
      naviStyle="left"
      naviIcon="left"
      naviTitle="left"
      naviDesc="left"
      contents={content1}
      renderContent={(to, content1) => <a href={'#'}>{content1}</a>}
    />
  </Dialog>
</div>;
```

```js
import Dialog from '@skatteetaten/frontend-components/Dialog';
import Button from '@skatteetaten/frontend-components/Button';
import ActionButton from '@skatteetaten/frontend-components/ActionButton';

const initialState = { hideDialog: true };

function closeDialog() {
  setState({ hideDialog: true });
}

<div>
  <Button
    buttonStyle="secondary"
    onClick={() => setState({ hideDialog: false })}
  >
    Vis viktig dialog
  </Button>
  <Dialog
    hidden={state.hideDialog}
    type={Dialog.Type.normal}
    layoutStyle={'important'}
    modalProps={{ isModeless: false }}
    forceFocusInsideTrap
    onDismiss={closeDialog}
    title="Viktig melding!"
    minWidth="400px"
    maxWidth="600px"
  >
    <p>Løsning er ikke kommet i drift ennå eller tatt ned for vedlikehold</p>
    <Dialog.Footer>
      <ActionButton onClick={closeDialog}>
        Les mer på skatteetaten.no
      </ActionButton>
    </Dialog.Footer>
  </Dialog>
</div>;
```

```js
import Dialog from '@skatteetaten/frontend-components/Dialog';
import Button from '@skatteetaten/frontend-components/Button';
import ActionButton from '@skatteetaten/frontend-components/ActionButton';

const initialState = { hideDialog: true };

function closeDialog() {
  setState({ hideDialog: true });
}

<div>
  <Button
    buttonStyle="secondary"
    onClick={() => setState({ hideDialog: false })}
  >
    Dialog som forsvinner ved klikk utenfor
  </Button>
  <Dialog
    hidden={state.hideDialog}
    type={Dialog.Type.normal}
    onDismiss={closeDialog}
    modalProps={{ isBlocking: false, isModeless: false }}
    title="Sakshistorikk"
    forceFocusInsideTrap
    minWidth="400px"
    maxWidth="600px"
  >
    <p>Ingen opplysninger funnet.</p>

    <Dialog.Footer>
      <Button onClick={closeDialog}>Lukk</Button>
    </Dialog.Footer>
  </Dialog>
</div>;
```

```js noeditor uu
<h3>Tips</h3>
<ul>
<li>Sjekk at dialogen får fokus etter at den åpnes. Dette gjør det enklere for en skjermleser å oppdage og lese opp innholdet.</li>
<li>Test med tastatur at du ikke kan navigere ut av dialogen. Sjekk også hvor tastaturfokuset er når du lukker dialogen. Tastaturfokuset skal være på knappen som åpner dialogen.</li>
<li>Sjekk at alt innholdet bak dialogen "viskes" ut visuelt.</li>
</ul>

<h3>Mest relevante WCAG-krav</h3>
<ul>
<li>2.4.3 A, Fokusrekkefølge</li>
<li>4.1.2 A, Navn, rolle, verdi</li>
</ul>

<h3>WAI-ARIA</h3>
<ul>
<li>Role=dialog identifiserer dialog-elementet for skjermlesere.</li>
<li>Aria-modal gir beskjed til skjermlesere at det underliggende vinduet ikke er aktivt.</li>
<li>Aria-labelledby brukes for navngi dialogen med bruk av overskriften.</li>
<li>Role=heading og aria-level brukes for å sette overskrift med riktig nivå for skjermlesere.</li>
<li>Aria-label brukes for å navngi lukk-ikon i dialogen. Aria-hidden brukes for å skjule selve ikonet for skjermlesere.</li>
</ul>
```

```js noeditor beskrivelse
  <h3>Vise valg innenfor kontekst</h3>
  <p>
    En dialogboks (modal) brukes gjerne til å gi brukeren et valg samtidig som
    konteksten beholdes.
  </p>
  <p>
    Hvis brukeren skal ta stilling til et valg i dialogen bør den settes opp
    slik at annen brukerinput blir blokkert.{' '}
  </p>
  <h3>Tre varianter</h3>
  <p>
    Dialogen finnes i tre varianter; «standard», «luftig» eller «viktig»:
    Luftig kan brukes hvor du ønsker å at dialogen skal tiltrekke seg ektra
    oppmerksomhet, mens viktig brukes dersom vi ønsker å formidle en viktig
    melding der Skatteetaten er avsender.
  </p>
  <p>Dialogen kan inneholde tekst, inputfelt, hjelpeikoner osv.</p>
  <p>
    Se{' '}
    <a href="https://www.skatteetaten.no/stilogtone/skrive/">
      Skatteetatens stil og tone
    </a>{' '}
    for hjelp til å skrive gode tekster.
    </p>
```
