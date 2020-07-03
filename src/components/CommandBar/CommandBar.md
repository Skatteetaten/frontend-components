** CommandBar kan inneholde en eller flere menyer og knapper.
For å skape en bra struktur kan man også velge å flytte ikke-viktige
knapper i overflow eller på andre siden av skjermen. **

```js
initialState = {
  items: [
    {
      key: 'view1',
      name: 'Vis tekst',
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
      name: 'Vis XML',
      ariaLabel: 'Vis XML',
      selected: true,
      iconProps: {
        iconName: 'XMLFile'
      }
    },
    {
      key: 'view3',
      name: 'Vis Excel',
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
  ],
  farItems: [
    {
      key: 'Print',
      name: 'Skriv ut',
      ariaLabel: 'Skriv ut',
      iconProps: {
        iconName: 'Print'
      }
    },
    {
      key: 'log',
      name: 'Sakslogg',
      ariaLabel: 'Info',
      iconProps: {
        iconName: 'History'
      },
      iconOnly: true
    }
  ]
};

<div className="ExampleSpacing8">
  <CommandBar items={state.items} farItems={state.farItems} />
</div>;
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
    },
    {
      key: 'info',
      name: 'Info',
      ariaLabel: 'Info',
      iconProps: {
        iconName: 'Info'
      },
      iconOnly: true
    }
  ]
};

<div className="ExampleSpacing8">
  <CommandBar items={state.items} farItems={state.farItems} />
</div>;
```

Som en meny:

```js
initialState = {
  options: [
    {
      key: 'menuItem',
      name: 'Meny',
      iconProps: {
        iconName: 'Menu'
      },
      ariaLabel: 'Meny',
      subMenuProps: {
        items: [
          {
            key: 'home',
            name: 'Hjem',
            ariaLabel: 'Hjem',
            iconProps: {
              iconName: 'Home'
            }
          },
          {
            key: 'calendarEvent',
            name: 'Kalender',
            ariaLabel: 'Kalender',
            iconProps: {
              iconName: 'Calendar'
            }
          }
        ]
      }
    }
  ]
};
<div className="ExampleSpacing8">
  <CommandBar farItems={state.options} />
</div>;
```

```js noeditor uu
<p>Denne seksjonen er foreløpig tom.</p>
```

```js noeditor beskrivelse
<p>Denne seksjonen er foreløpig tom.</p>
```
