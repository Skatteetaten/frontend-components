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
    aria-haspopup="true"
    onClick={() => setState({ hideDialog: false })}
  >
    Vis standard dialog
  </Button>
  <Dialog
    id="hipp"
    hidden={state.hideDialog}
    type={Dialog.Type.normal}
    onDismiss={closeDialog}
    title="Kansellere arbeidsoppgaven?"
    minWidth="400px"
    maxWidth="600px"
  >
    <p>Er du sikker på at du vil kansellere arbeidsoppgaven?</p>

    <p>Handlingen kan ikke reverseres</p>
    <Dialog.Footer>
      <ActionButton onClick={closeDialog}>Avbryt</ActionButton>
      <Button onClick={closeDialog} hoved>
        Kanseller
      </Button>l
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
    title: 'Næringsrapport skatt AS',
    icon: 'ArrowForward'
  },
  {
    to: '#',
    title: 'Næringsrapport skatt ENK',
    icon: 'ArrowForward'
  }
];

<div>
  <Button
    buttonStyle="secondary"
    aria-haspopup="true"
    onClick={() => setState({ hideDialog: false })}
  >
    Vis luftig dialog
  </Button>
  <Dialog
    hidden={state.hideDialog}
    type={Dialog.Type.normal}
    onDismiss={closeDialog}
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
    aria-haspopup="true"
    onClick={() => setState({ hideDialog: false })}
  >
    Vis viktig dialog
  </Button>
  <Dialog
    id="hipp"
    hidden={state.hideDialog}
    type={Dialog.Type.normal}
    layoutStyle={'important'}
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

```js noeditor uu
<h3>Huskeliste</h3>
<ul>
  <li>
    Bruk <b>aria-haspopup</b> for å indikere at en dialog åpnes ved klikk på en
    knapp.{' '}
  </li>
  <li>
    Sjekk at dialogen får fokus etter at den åpnes. Dette gjør det enkelere for
    en skjermleser å oppdage og lese opp innholdet.
  </li>
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
