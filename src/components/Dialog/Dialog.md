**Dialog (Dialogboks): brukes til å vise innhold midt på skjermen og tiltrekke seg brukerens oppmerksomhet.**

```js
import { ActionButton } from '@skatteetaten/frontend-components/ActionButton';
import { Button } from '@skatteetaten/frontend-components/Button';
import { Dialog } from '@skatteetaten/frontend-components/Dialog';

const [state, setState] = React.useState({ hideDialog: true });

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
import { ActionButton } from '@skatteetaten/frontend-components/ActionButton';
import { Button } from '@skatteetaten/frontend-components/Button';
import { Dialog } from '@skatteetaten/frontend-components/Dialog';
import { NavigationTile } from '@skatteetaten/frontend-components/NavigationTile';

const [state, setState] = React.useState({ hideDialog: true });

function closeDialog() {
  setState({ hideDialog: true });
}

const content1 = [
  {
    to: '#',
    heading: 'Næringsrapport skatt AS',
    icon: 'ArrowForward',
  },
  {
    to: '#',
    heading: 'Næringsrapport skatt ENK',
    icon: 'ArrowForward',
  },
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
    title="Velg den inngangen som passer for deg"
    forceFocusInsideTrap
    minWidth="500px"
    maxWidth="600px"
    layoutStyle={'airy'}
  >
    <p>
      Løsningen for aksjeselskap (AS) åpner i februar mens den blir tilgjengelig
      for enkeltpersonforetak (ENK) i april
    </p>

    <NavigationTile
      naviStyle="left"
      naviIcon="left"
      naviTitle="left"
      naviDesc="left"
      contents={content1}
      renderContent={(to, content1) => <a href={'#'}>{content1}</a>}
    ></NavigationTile>
  </Dialog>
</div>;
```

```js
import { ActionButton } from '@skatteetaten/frontend-components/ActionButton';
import { Button } from '@skatteetaten/frontend-components/Button';
import { Dialog } from '@skatteetaten/frontend-components/Dialog';

const [state, setState] = React.useState({ hideDialog: true });

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

const [state, setState] = React.useState({ hideDialog: true });

function closeDialog() {
  setState({ hideDialog: true });
}

<div>
  <Button
    buttonStyle="secondary"
    onClick={() => setState({ hideDialog: false })}
  >
    Vis dialog som lukkes aktivt
  </Button>
  <Dialog
    hidden={state.hideDialog}
    type={Dialog.Type.normal}
    onDismiss={closeDialog}
    modalProps={{ isBlocking: true, isModeless: false }}
    title="Meldinger"
    forceFocusInsideTrap
    minWidth="400px"
    maxWidth="600px"
  >
    <p>Du har ingen nye meldinger.</p>

    <Dialog.Footer>
      <Button onClick={closeDialog}>Lukk</Button>
    </Dialog.Footer>
  </Dialog>
</div>;
```

```js noeditor uu
<>
  <h3>Tips</h3>
  <ul>
    <li>
      Sjekk at dialogen får fokus etter at den åpnes. Dette gjør det enklere for
      en skjermleser å oppdage og lese opp innholdet.
    </li>
    <li>
      Test med tastatur at du ikke kan navigere ut av dialogen. Sjekk også hvor
      tastaturfokuset er når du lukker dialogen. Tastaturfokuset skal være på
      knappen som åpner dialogen.
    </li>
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
    <li>
      Aria-modal gir beskjed til skjermlesere at det underliggende vinduet ikke
      er aktivt.
    </li>
    <li>
      Aria-labelledby brukes for navngi dialogen med bruk av overskriften.
    </li>
    <li>
      Role=heading og aria-level brukes for å sette overskrift med riktig nivå
      for skjermlesere.
    </li>
    <li>
      Aria-label brukes for å navngi lukk-ikon i dialogen. Aria-hidden brukes
      for å skjule selve ikonet for skjermlesere.
    </li>
  </ul>
</>
```

```js noeditor beskrivelse
<div>
  <h3>En dialogboks fremhever informasjon</h3>
  <p>
    Dialogboksen dukker opp midt på skjermen for å tiltrekke seg brukerens
    oppmerksomhet. Det kan for eksempel gjelde en viktig beskjed eller noe
    brukeren må velge for å fortsette.
  </p>
  <p>
    Hvis brukeren skal ta et valg i dialogboksen, bør vi blokkere annen
    brukerinput.{' '}
  </p>
  <h3>Tre varianter</h3>
  <p>Dialogen finnes i tre varianter: </p>
  <ul>
    <li>Standard – for generelt innhold.</li>
    <li>Luftig – når dialogen skal tiltrekke seg ekstra oppmerksomhet.</li>
    <li>Viktig – en fremtredende melding med «Skatteetaten som avsender».</li>
  </ul>
  <p>Dialogen kan inneholde tekst, inputfelt, hjelpeikoner osv.</p>
  <p>
    Se{' '}
    <a href="https://www.skatteetaten.no/stilogtone/skrive/">
      Skatteetatens stil og tone
    </a>{' '}
    for hjelp til å skrive gode tekster.
  </p>
</div>
```
