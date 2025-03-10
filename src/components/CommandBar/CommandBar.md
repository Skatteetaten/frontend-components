**CommandBar (Menyknapper): et område med kommandoer**

```js noeditor
import { MessageBar } from '@skatteetaten/frontend-components/MessageBar';

<MessageBar type={MessageBar.Type.info}>
  Denne komponenten kan ikke brukes i micro frontends inntil videre.
</MessageBar>;
```

```js
const [state, setState] = React.useState({
  items: [
    {
      key: 'Add',
      name: 'Registrer ny opplysning',
      ariaLabel: 'Registrer ny opplysning',
      iconProps: {
        iconName: 'AddOutline',
      },
    },
  ],
  farItems: [
    {
      key: 'view1',
      name: 'Tekst',
      ariaLabel: 'Vis tekst',
      onClick: () => {
        console.log('Klikk');
      },
      iconProps: {
        iconName: 'File',
      },
    },
    {
      key: 'view2',
      name: 'XML',
      ariaLabel: 'Vis XML',
      selected: true,
      iconProps: {
        iconName: 'XMLFile',
      },
    },
    {
      key: 'view3',
      name: 'Excel',
      ariaLabel: 'Vis XML',
      iconProps: {
        iconName: 'ExcelFile',
      },
    },
  ],
  overflowItems: [
    {
      key: 'bookmark',
      name: 'Merk som bokmerke',
      ariaLabel: 'Merk som bokmerke',
      iconProps: {
        iconName: 'Bookmark',
      },
    },
    {
      key: 'favorite',
      name: 'Merk som favoritt',
      ariaLabel: 'Merk som favoritt',
      iconProps: {
        iconName: 'Favorite',
      },
    },
  ],
});

<CommandBar items={state.items} farItems={state.farItems} />;
```

```js
const [state, setState] = React.useState({
  items: [
    {
      key: 'view1',
      name: 'Start arbeidsoppgave',
      ariaLabel: 'Start arbeidsoppgave',
      onClick: () => {
        console.log('og');
      },
      iconProps: {
        iconName: 'PlayOutline',
      },
    },
    {
      key: 'view2',
      name: 'Sett på vent',
      ariaLabel: 'Sett arbeidsoppgave på vent',
      onClick: () => {
        console.log('hei');
      },
      iconProps: {
        iconName: 'PauseOutline',
      },
    },

    {
      key: 'view3',
      name: 'Tildel',
      ariaLabel: 'Tildel arbeidsoppgave',
      onClick: () => {
        console.log('og');
      },
      iconProps: {
        iconName: 'PersonMoreOutline',
      },
    },
  ],

  farItems: [
    {
      key: 'Print',
      name: 'Skriv ut',
      ariaLabel: 'Skriv ut',
      iconProps: {
        iconName: 'Print',
      },
      iconOnly: true,
    },
  ],
});

<CommandBar items={state.items} farItems={state.farItems} />;
```

```js noeditor uu
<>
  <h3>Tips</h3>

  <ul>
    <li>
      Menyen skal kun ha ett tabstopp. Sjekk at du kan navigere med piltastene i
      menyen.
    </li>
    <li>
      Pass på at du beholder tastatur- og skjermleserfokus på det du velger.
    </li>
  </ul>

  <h3>Mest relevante WCAG-krav</h3>

  <ul>
    <li>2.4.3 A, Fokusrekkefølge</li>
    <li>4.1.2 A, Navn, rolle, verdi</li>
  </ul>

  <h3>WAI-ARIA</h3>

  <ul>
    <li>Aria-hidden="true" brukes på ikoner for skjule de for skjermleser.</li>
    <li>Aria-label brukes for å navngi nav-tag og tydeliggjøre sidevalg.</li>
    <li>Aria-current="true/false" brukes for å annonsere gjeldende valg.</li>
    <li>Aria-disabled="true/false" brukes for inaktive/aktive funksjoner.</li>
    <li>Role="group" brukes for å gruppere knapper.</li>
    <li>
      Role="menubar", role="menuitem" brukes typisk på en meny som presenteres
      horisontalt og kan sammnlignes med lignende funksjonalitet i Windows, Mac
      osv. OBS: Skal ikke brukes på vanlige menyer på web og er ikke vanlig i
      publikumsløsninger.{' '}
    </li>
  </ul>
</>
```

```js noeditor beskrivelse
<>
  <p>
    CommandBar er et område med knapper og kommandoer som ligger på toppen av
    tilhørende innhold, som for eksempel en side eller et panel. Knappene skal
    få brukeren til å intutiv utføre handlinger knyttet til innholdet.
  </p>

  <h3>Slik bruker du CommandBar:</h3>
  <ul>
    <li>
      Unngå for mange elementer. Vi anbefaler maksimum 7 kommandoer. Blir det
      for mange knapper blir det uoversiktlig og vanskelig å bruke.
    </li>
    <li>
      Plasser de viktigste elementene først. Sorter etter viktighet fra venstre
      mot høyre.{' '}
    </li>
    <li>
      Kommandoer som viser status eller visningsalternativer hører til på høyre
      side. Plasser maksimum 2–3 element her, for å skape oversikt i komponenten
      som helhet.
    </li>
    <li>
      Bruk ikoner. Kommandoene skal som hovedregel ha både ikon og beskrivende
      tekst. Du kan benytte kun ikonet på kommandoer som er mye brukt og er lett
      gjenkjennelige, som for eksempel et ikon for utskrift.{' '}
    </li>
  </ul>
</>
```
