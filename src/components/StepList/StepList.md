```js noeditor
import MessageBar from '@skatteetaten/frontend-components/MessageBar';

<MessageBar type={MessageBar.Type.info}>
  Se tilhørende underkompoent <a href="/#step">Step</a> for komplett API.
</MessageBar>;
```

** StepList benyttes for å veilede brukeren gjennom en sekvens av trinnvise steg **

```js
import Button from '@skatteetaten/frontend-components/Button';
import RadioButtonGroup from '@skatteetaten/frontend-components/RadioButtonGroup';
import Step from '@skatteetaten/frontend-components/StepList/Step';
import StepList from '@skatteetaten/frontend-components/StepList';

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
const showFirstStep = true;
const testFunc = () => {
  console.log('Hei fra ActionButton');
};

<StepList ariaLabel="Liste med steg">
  {showFirstStep && (
    <Step
      stepTitle={titles.step1.no}
      stepId={'step-1-1'}
      actionBtn={{
        text: 'Endre',
        event: testFunc,
        ariaLabel: 'Endre jobber du?'
      }}
    >
      <div>
        <p>Jeg jobber</p>
      </div>
    </Step>
  )}
  <Step
    stepTitle={titles.step2.no}
    stepId={'step-1-2'}
    actionBtn={{ text: 'Endre', ariaLabel: 'Endre overnatting' }}
  >
    <div>
      <p>Ja, jeg overnatter et annet sted enn hjemme på grunn av jobb</p>
    </div>
  </Step>
  <Step stepTitle={titles.step3.no} stepId={'step-1-3'} activeStep={true}>
    <p style={{ marginBottom: '5px' }}>Hvor er hjemmet ditt?</p>
    <RadioButtonGroup
      required
      defaultSelectedKey="A"
      options={state.options}
      id="RadiobuttonGroup"
    />
    <br />
  </Step>
  <Step stepType={'next'}>
    <Button buttonStyle="primary">Neste</Button>
  </Step>
</StepList>;
```

Oppsummering før innsending:

```js
import Button from '@skatteetaten/frontend-components/Button';
import RadioButtonGroup from '@skatteetaten/frontend-components/RadioButtonGroup';
import Step from '@skatteetaten/frontend-components/StepList/Step';
import StepList from '@skatteetaten/frontend-components/StepList';
import CheckBox from '@skatteetaten/frontend-components/CheckBox';
import Card from '@skatteetaten/frontend-components/Card';

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
  },
  step4: {
    no: 'Oppsummering før innsending',
    en: 'Summary before submit'
  }
};
const showFirstStep = true;

const testFunc = () => {
  console.log('Hei fra ActionButton');
};

<StepList>
  {showFirstStep && (
    <Step
      stepTitle={titles.step1.no}
      stepId={'step-1-1'}
      actionBtn={{
        text: 'Endre',
        event: testFunc,
        ariaLabel: 'Endre jobber du?'
      }}
    >
      <div>
        <p>Jeg jobber</p>
      </div>
    </Step>
  )}
  <Step
    stepTitle={titles.step2.no}
    stepId={'step-1-2'}
    actionBtn={{ text: 'Endre', ariaLabel: 'Endre overnatting' }}
  >
    <div>
      <p>Ja, jeg overnatter et annet sted enn hjemme på grunn av jobb</p>
    </div>
  </Step>
  <Step stepTitle={titles.step3.no} stepId={'step-1-3'}>
    <p>Jeg bor i Norge</p>
  </Step>
  <Step stepTitle={titles.step4.no} stepId={'step-1-4'} activeStep={true}>
    <Card color={Card.Color.BEIGE} margin={'large'}>
      <p style={{ fontWeight: '700' }}>
        Følgende opplysninger er klare til innsending:
      </p>
      <ul>
        <li>Du jobber</li>
        <li>Du overnatter et annet sted enn hjemme på grunn av jobb</li>
        <li>Du bor i Norge</li>
      </ul>
      <CheckBox
        boxSide={'start'}
        label="Jeg bekrefter at opplysningene over stemmer."
      />
    </Card>
    <br />
  </Step>
  <Step stepType={'next'}>
    <Button buttonStyle="primary">Send inn</Button>
  </Step>
</StepList>;
```

StepList som er fullført og viser et resultat i i siste steg

```js
import Button from '@skatteetaten/frontend-components/Button';
import Step from '@skatteetaten/frontend-components/StepList/Step';
import StepList from '@skatteetaten/frontend-components/StepList';
import LinkGroup from '@skatteetaten/frontend-components/LinkGroup';

const links = [
  {
    text: 'Beregn reisefradrag',
    path: '#stepList'
  },
  {
    text: 'Oversikt over alle fradrag',
    path: '#stepList'
  }
];

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
  <Step
    stepTitle={titles.step1.no}
    stepId={'step-1-1'}
    actionBtn={{ text: 'Endre', ariaLabel: 'Endre jobber du?' }}
  >
    <div>
      <p>Jeg er fulltidsstudent eller vernepliktig i militæret </p>
    </div>
  </Step>
  <Step
    stepTitle={titles.step2.no}
    stepId={'step-1-2'}
    activeStep={false}
    actionBtn={{ text: 'Endre', ariaLabel: 'Endre sommerjobb?' }}
  >
    <p>Nei</p>
  </Step>
  <Step stepTitle={titles.step3.no} stepType={'result'} resultIcon={'Check'}>
    <p>
      Er du fulltidsstudent eller i militæret, regnes du ikke som pendler hvis
      du ikke har sommerjobb. Hvis du har lang reisevei mellom hjem og
      arbeidsplass, kan du ha krav på reisefradrag. Det kan du sjekke i
      reisefradragskalkulatoren.
    </p>
    <LinkGroup links={links} />
  </Step>
</StepList>;
```

```js noeditor beskrivelse
  <h3>Veileder eller skjema</h3>
  <p>StepList brukes når vi ønsker å veilede brukeren gjennom en rekke steg.
  Komponenten kan brukes til å dele opp et skjema i porsjoner, eller som en
  veiviser med spørsmål som ender opp i et svar eller en konklusjon.</p>

  <p>Hvis du skal bruke komponenten til å lage et skjema, bør det som
  hovedregel være med et oppsummeringssteg til slutt. (Elmer-standarden sier
  at bruker skal ha mulighet til å se over skjemaet før innsending.)
  Oppsummeringssteget skal være et eget steg og knappen endrer da navn til
  «Send inn» eller tilsvarende. Her kan du ha eventuelt ha med mulighet for
  at bruker godkjenner opplysningene.</p>

  <h3>Feilhåndtering i steget</h3>

  <p>Når et steg inneholder feil, plasserer vi oppsummering av feilen(e) i en
  MessageBar i toppen av steget. Denne dukker opp når bruker klikker Neste.
  Fokus settes til overskriften i MessageBar.</p>

  <h3>Stegliste som del av en større prosess</h3>

  <p>I noen tilfeller bør en kunne hoppe inn midt i liste med steg. Et eksempel
  er dersom man har fylt inn opplysninger i en veiviser på skatteetaten.no,
  og deretter sendes til en innlogget tjeneste – så bør opplysningene man
  allerede har registrert være forhåndsutfylt i den innloggede tjenesten.</p>

  <p>Hvis du gjør en endring i et tidlig steg og det ikke er avhengigheter,
  husker skjemaet det du har skrevet inn på senere steg. Hvis det er
  avhengigheter, nullstilles senere steg.</p>

```
