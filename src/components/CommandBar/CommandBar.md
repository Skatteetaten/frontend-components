** CommandBar kan inneholde en eller flere menyer og knapper.
For å skape en bra struktur kan man også velge å flytte ikke-viktige
knapper i overflow eller på andre siden av skjermen. **

```js
initialState = {
  items: [
    {
      key: 'calendarEvent',
      name: 'Kalender',
      ariaLabel: 'Kalender',
      onClick: () => {
        console.log('hei');
      },
      iconProps: {
        iconName: 'Calendar'
      }
    },
    {
      key: 'calendarEvent1',
      name: 'Kalender',
      ariaLabel: 'Kalender',
      onClick: () => {
        console.log('og');
      },
      iconProps: {
        iconName: 'Calendar'
      }
    },
    {
      key: 'calendarEvent2',
      name: 'Kalender',
      ariaLabel: 'Kalender',
      onClick: () => {
        console.log('hopp');
      },
      iconProps: {
        iconName: 'Calendar'
      }
    },
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
            key: 'calendarEvent',
            name: 'Kalender',
            ariaLabel: 'Kalender',
            onClick: () => {
              console.log(':o');
            },
            iconProps: {
              iconName: 'Calendar'
            }
          }
        ]
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
      key: 'filtrer',
      name: 'Filter',
      ariaLabel: 'Filter',
      iconProps: {
        iconName: 'Filter'
      }
    },
    {
      key: 'Print',
      name: 'Skriv ut',
      ariaLabel: 'Skriv ut',
      selected: true,
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

Man kan også flytte menyen på høyre side

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

```js noeditor
import Accordion from '@skatteetaten/frontend-components/Accordion';
import AccordionItem from '@skatteetaten/frontend-components/Accordion/AccordionItem';

<Accordion>
  <AccordionItem toggleContent toggleButtonText={'Bruk'} stepId={'step-1-1'}>
    <p>
      CommandBar er til å bruke når man trenger en meny eller kommandolinje for
      å håndtere kommandoer eller navigering internt på siden eller til andre
      sider.
    </p>
  </AccordionItem>
  <AccordionItem
    toggleContent
    toggleButtonText={'Universell utforming'}
    stepId={'step-1-2'}
  >
    <ul>
      <li>
        Kontroller at det er mulig å åpne/lukke CommandBar-menyene både med mus
        og tastatur
      </li>
      <li>Sjekk at skjermleser klarer å få tak i labelene til valgene.</li>
    </ul>
  </AccordionItem>
  <AccordionItem
    toggleContent
    toggleButtonText={'Tekniske detaljer'}
    stepId={'step-1-3'}
  >
    <p>
      <a
        href="https://developer.microsoft.com/en-us/fabric#/controls/web/commandbar"
        target="_blank"
      >
        Se flere tilgjengelige props i Fabric dokumentasjonen
      </a>
    </p>
  </AccordionItem>
</Accordion>;
```
