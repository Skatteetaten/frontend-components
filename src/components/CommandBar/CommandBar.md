** Et område med kommandoer **

```js
initialState = {
  items: [
    {
      key: 'Add',
      name: 'Registrer ny opplysning',
      ariaLabel: 'Registrer ny opplysning',
      iconProps: {
        iconName: 'AddOutline'
      }
    }
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
        iconName: 'File'
      }
    },
    {
      key: 'view2',
      name: 'XML',
      ariaLabel: 'Vis XML',
      selected: true,
      iconProps: {
        iconName: 'XMLFile'
      }
    },
    {
      key: 'view3',
      name: 'Excel',
      ariaLabel: 'Vis XML',
      iconProps: {
        iconName: 'ExcelFile'
      }
    }
  ],
  overflowItems: [
    {
      key: 'bookmark',
      name: 'Merk som bokmerke',
      ariaLabel: 'Merk som bokmerke',
      iconProps: {
        iconName: 'Bookmark'
      }
    },
    {
      key: 'favorite',
      name: 'Merk som favoritt',
      ariaLabel: 'Merk som favoritt',
      iconProps: {
        iconName: 'Favorite'
      }
    }
  ]
};

<CommandBar items={state.items} farItems={state.farItems} />;
```

```js
initialState = {
  items: [
    {
      key: 'view1',
      name: 'Start arbeidsoppgave',
      ariaLabel: 'Start arbeidsoppgave',
      onClick: () => {
        console.log('og');
      },
      iconProps: {
        iconName: 'PlayOutline'
      }
    },
    {
      key: 'view2',
      name: 'Sett på vent',
      ariaLabel: 'Sett arbeidsoppgave på vent',
      onClick: () => {
        console.log('hei');
      },
      iconProps: {
        iconName: 'PauseOutline'
      }
    },

    {
      key: 'view3',
      name: 'Tildel',
      ariaLabel: 'Tildel arbeidsoppgave',
      onClick: () => {
        console.log('og');
      },
      iconProps: {
        iconName: 'PersonMoreOutline'
      }
    }
  ],

  farItems: [
    {
      key: 'Print',
      name: 'Skriv ut',
      ariaLabel: 'Skriv ut',
      iconProps: {
        iconName: 'Print'
      },
      iconOnly: true
    }
  ]
};

<CommandBar items={state.items} farItems={state.farItems} />;
```

```js noeditor uu
<>
  <p>Denne seksjonen er foreløpig tom.</p>
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
