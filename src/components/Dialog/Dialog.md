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
    type="secondary"
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
    dialogMinWidth="400px"
    dialogMaxWidth="600px"
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
    type="secondary"
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
    dialogMinWidth="500px"
    dialogMaxWidth="600px"
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
    type="secondary"
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
    dialogMinWidth="400px"
    dialogMaxWidth="600px"
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

```js noeditor
import Accordion from '@skatteetaten/frontend-components/Accordion';
import AccordionItem from '@skatteetaten/frontend-components/Accordion/AccordionItem';
<Accordion>
  <AccordionItem
    toggleContent
    isOpen
    toggleButtonText={'Bruk'}
    stepId={'step-1-1'}
  >
    <p>
      En dialogboks (modal) brukes gjerne til å gi brukeren et valg samtidig som
      konteksten beholdes.
    </p>
    <p>
      Hvis brukeren skal ta stilling til et valg i dialogen bør den settes opp
      slik at annen brukerinput blir blokkert.{' '}
    </p>
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
  </AccordionItem>
  <AccordionItem
    toggleContent
    toggleButtonText={'Universell utforming'}
    stepId={'step-1-2'}
  >
    <ul>
      <li>
        Bruk <b>aria-haspopup</b> for å indikere at en dialog åpnes ved klikk på
        en knapp.{' '}
      </li>
      <li>
        Sjekk at dialogen får fokus etter at den åpnes. Dette gjør det enkelere
        for en skjermleser å oppdage og lese opp innholdet.
      </li>
    </ul>
  </AccordionItem>
  <AccordionItem
    toggleContent
    toggleButtonText={'Tekniske detaljer'}
    stepId={'step-1-3'}
  >
    <p>
      <a
        href="https://developer.microsoft.com/en-us/fabric#/components/dialog#Implementation"
        target="_blank"
      >
        Se flere tilgjengelige props i Fabric dokumentasjonen
      </a>
    </p>
  </AccordionItem>
</Accordion>;
```
