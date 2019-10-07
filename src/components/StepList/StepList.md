```js noeditor
import MessageBar from '@skatteetaten/frontend-components/MessageBar';

<MessageBar type={MessageBar.Type.info}>
  Se tilhørende underkompoent <a href="/#step">Step</a> for komplett API.
</MessageBar>;
```

** StepList benyttes for å veilede brukeren gjennom en sekvens av trinnvise steg **

```js
import StepList from '@skatteetaten/frontend-components/StepList';
import Step from '@skatteetaten/frontend-components/StepList/Step';
import ActionButton from '@skatteetaten/frontend-components/ActionButton';
import RadioButtonGroup from '@skatteetaten/frontend-components/RadioButtonGroup';
import Button from '@skatteetaten/frontend-components/Button';

const initialState = {
  options: [
    {
      key: 'A',
      text: 'Jeg bor i Norge'
    },
    {
      key: 'B',
      text: 'Ikke i Norge'
    }
  ]
};

const titles = {
  step1: {
    no: 'Jobber du?',
    en: 'Are you a wage earner doing paid work?'
  },
  step2: {
    no: 'Overnatting',
    en: 'Spend the night somewhere else than at home?'
  },
  step3: {
    no: 'Bor i Norge',
    en: 'Where is your home?'
  }
};

<StepList>
  <Step stepTitle={titles.step1.no} stepId={'step-1-1'}>
    <div>
      <p>Jeg jobber</p>
    </div>
    <div style={{ marginLeft: 'auto' }}>
      <ActionButton>Endre</ActionButton>
    </div>
  </Step>
  <Step stepTitle={titles.step2.no} stepId={'step-1-2'}>
    <p>Ja, jeg overnatter et annet sted enn hjemme på grunn av jobb</p>
    <div style={{ marginLeft: 'auto' }}>
      <ActionButton>Endre</ActionButton>
    </div>
  </Step>
  <Step stepTitle={titles.step3.no} stepId={'step-1-3'} activeStep={true}>
    <p>Hvor er hjemmet ditt?</p>
    <RadioButtonGroup
      required
      defaultSelectedKey="A"
      options={state.options}
      id="RadiobuttonGroup"
    />
  </Step>
  <Step stepType={'next'}>
    <Button type="primary">Neste</Button>
  </Step>
</StepList>;
```

StepList som er fullført og viser et resultat i i siste steg

```js
import StepList from '@skatteetaten/frontend-components/StepList';
import Step from '@skatteetaten/frontend-components/StepList/Step';
import ActionButton from '@skatteetaten/frontend-components/ActionButton';
import Button from '@skatteetaten/frontend-components/Button';

const titles = {
  step1: {
    no: 'Jobber du?',
    en: 'Are you a wage earner doing paid work?'
  },
  step2: {
    no: 'Sommerjobb?',
    en: 'Summerjob?'
  },
  step3: {
    no: 'Du er ikke pendler',
    en: 'You are not a commuter.'
  }
};

<StepList>
  <Step stepTitle={titles.step1.no} stepId={'step-1-1'}>
    <div>
      <p>Jeg er fulltidsstudent eller vernepliktig i militæret </p>
    </div>
    <div style={{ marginLeft: 'auto' }}>
      <ActionButton icon="Edit">Endre</ActionButton>
    </div>
  </Step>
  <Step stepTitle={titles.step2.no} stepId={'step-1-2'} activeStep={false}>
    <p>Nei</p>
    <div style={{ marginLeft: 'auto' }}>
      <ActionButton icon="Edit">Endre</ActionButton>
    </div>
  </Step>
  <Step stepTitle={titles.step3.no} stepType={'result'} resultIcon={'Check'}>
    <p>
      Er du fulltidsstudent eller i militæret, regnes du ikke som pendler hvis
      du ikke har sommerjobb. Hvis du har lang reisevei mellom hjem og
      arbeidsplass, kan du ha krav på reisefradrag. Det kan du sjekke i
      reisefradragskalkulatoren:
    </p>
    <Button type="primaryRounded">Beregn reisefradrag</Button>
  </Step>
</StepList>;
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
      StepList brukes når vi ønsker å veilede brukeren gjennom en rekke steg.
    </p>
    <p>Stegene kan være aktive eller fullførte.</p>
  </AccordionItem>
  <AccordionItem
    toggleContent
    toggleButtonText={'Universell utforming'}
    stepId={'step-1-2'}
  >
    <p>Dette seksjonen er foreløpig tom.</p>
  </AccordionItem>
  <AccordionItem
    toggleContent
    toggleButtonText={'Tekniske detaljer'}
    stepId={'step-1-3'}
  >
    <p>
      Dette er en egenutviklet komponent, så det finnes ingen flere props
      tilgjengelig.
    </p>
  </AccordionItem>
</Accordion>;
```
