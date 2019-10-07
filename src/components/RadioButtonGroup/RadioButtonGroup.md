** En valggruppe (med radioknapper) brukes i skjemaer for å velge ett alternativ blant flere gjensidig utelukkende valg. **

```js
import RadioButtonGroup from '@skatteetaten/frontend-components/RadioButtonGroup';

const initialState = {
  options: [
    {
      key: 'A',
      text: 'Epler'
    },
    {
      key: 'B',
      text: 'Pærer'
    },
    {
      key: 'C',
      text: 'Druer',
      disabled: true
    }
  ]
};
<>
  <RadioButtonGroup
    label="Ta et valg"
    defaultSelectedKey="B"
    options={state.options}
    onChange={(e, option) => console.log(option)}
    id="hepp"
  />
</>;
```

Hjelpetekster og advarsel:

```js
import RadioButtonGroup from '@skatteetaten/frontend-components/RadioButtonGroup';

const initialState = {
  options: [
    {
      key: 'A',
      text: 'Bananer'
    },
    {
      key: 'B',
      text: 'Pærer'
    },
    {
      key: 'C',
      text: 'Appelsiner'
    }
  ]
};

<div style={{ width: '300px' }}>
  <RadioButtonGroup
    label="Velg en frukt"
    defaultSelectedKey="B"
    options={state.options}
    onChange={(e, option) => console.log(option)}
    help={'Velg en frukt'}
    id="medHjelp"
    calloutFloating={false}
  />
  <br />
  <RadioButtonGroup
    label="Velg enda en frukt"
    defaultSelectedKey="B"
    options={state.options}
    onChange={(e, option) => console.log(option)}
    warning={'Er du sikker på at pærer er det riktige valget for deg?'}
    id="medVarsel"
  />
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
      Radioknapper bruker vi når ber brukeren om å velge nøyaktig ett valg i en
      liste.
    </p>
    <p>
      Hvis du har plass på siden, og 2-7 valg å velge mellom, er det ofte en
      fordel å bruke slike radioknapper fremfor nedtrekksmeny.
    </p>
    <p>
      Dersom brukeren må ta et aktivt valg, kan listen med radioknappen starte
      uten at noen av valgene er avhuket. Implisitt betyr dette at dersom listen
      med radioknapper får en default-valg satt, MÅ ikke brukeren ta et valg.
    </p>
  </AccordionItem>
  <AccordionItem
    toggleContent
    toggleButtonText={'Universell utforming'}
    stepId={'step-1-2'}
  >
    <ul>
      <li>RadioButtonGroup egner seg best når det er 2–7 valg.</li>
      <li>Hvis det er mer enn 7 valg, bruk heller komponenten Dropdown.</li>
    </ul>
  </AccordionItem>
  <AccordionItem
    toggleContent
    toggleButtonText={'Tekniske detaljer'}
    stepId={'step-1-3'}
  >
    <p>
      <a
        href="https://developer.microsoft.com/en-us/fabric#/components/choicegroup#Implementation"
        target="_blank"
      >
        Se flere tilgjengelige props i Fabric dokumentasjonen
      </a>
    </p>
  </AccordionItem>
</Accordion>;
```
