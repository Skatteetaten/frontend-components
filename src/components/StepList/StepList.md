```js noeditor
import { MessageBar } from '@skatteetaten/frontend-components/MessageBar';

<MessageBar type={MessageBar.Type.info}>
  Se tilhørende underkompoent <a href="/#step">Step</a> for komplett API.
</MessageBar>;
```

**Stegvis veiledning for brukeren**

```js
import { Button } from '@skatteetaten/frontend-components/Button';
import { RadioButtonGroup } from '@skatteetaten/frontend-components/RadioButtonGroup';
import { Step } from '@skatteetaten/frontend-components/StepList/Step';
import { StepList } from '@skatteetaten/frontend-components/StepList/StepList';

const [state, setState] = React.useState({
  options: [
    {
      key: 'A',
      text: 'Jeg bor i Norge',
    },
    {
      key: 'B',
      text: 'Ikke i Norge',
    },
  ],
});

const titles = {
  step1: {
    no: 'Jobber du?',
    en: 'Are you a wage earner doing paid work?',
  },
  step2: {
    no: 'Overnatting',
    en: 'Spend the night somewhere else than at home?',
  },
  step3: {
    no: 'Bor i Norge',
    en: 'Where is your home?',
  },
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
        icon: 'edit',
        event: testFunc,
        ariaLabel: 'Endre jobber du?',
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
    actionBtn={{ text: 'Endre', icon: 'edit', ariaLabel: 'Endre overnatting' }}
  >
    <div>
      <p>Ja, jeg overnatter et annet sted enn hjemme på grunn av jobb</p>
    </div>
  </Step>
  <Step stepTitle={titles.step3.no} stepId={'step-1-3'} activeStep={true}>
    <RadioButtonGroup
      required
      label="Hvor er hjemmet ditt?"
      options={state.options}
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
import { Button } from '@skatteetaten/frontend-components/Button';
import { Card } from '@skatteetaten/frontend-components/Card';
import { CheckBox } from '@skatteetaten/frontend-components/CheckBox';
import { RadioButtonGroup } from '@skatteetaten/frontend-components/RadioButtonGroup';
import { Step } from '@skatteetaten/frontend-components/StepList/Step';
import { StepList } from '@skatteetaten/frontend-components/StepList/StepList';
import { Typography } from '@skatteetaten/frontend-components/Typography';

const [state, setState] = React.useState({
  options: [
    {
      key: 'A',
      text: 'Jeg bor i Norge',
    },
    {
      key: 'B',
      text: 'Ikke i Norge',
    },
  ],
});

const titles = {
  step1: {
    no: 'Jobber du?',
    en: 'Are you a wage earner doing paid work?',
  },
  step2: {
    no: 'Overnatting',
    en: 'Spend the night somewhere else than at home?',
  },
  step3: {
    no: 'Bor i Norge',
    en: 'Where is your home?',
  },
  step4: {
    no: 'Oppsummering før innsending',
    en: 'Summary before submit',
  },
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
        icon: 'edit',
        ariaLabel: 'Endre jobber du?',
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
    actionBtn={{ text: 'Endre', icon: 'edit', ariaLabel: 'Endre overnatting' }}
  >
    <div>
      <p>Ja, jeg overnatter et annet sted enn hjemme på grunn av jobb</p>
    </div>
  </Step>
  <Step stepTitle={titles.step3.no} stepId={'step-1-3'}>
    <p>Jeg bor i Norge</p>
  </Step>
  <Step stepTitle={titles.step4.no} stepId={'step-1-4'} activeStep={true}>
    <div style={{ marginTop: '8px', marginBottom: '16px' }}>
      <Card
        title="Følgende opplysninger er klare til innsending:"
        titlesize="medium"
        color={Card.Color.BEIGE}
      >
        <ul style={{ marginTop: '0' }}>
          <li>Du jobber</li>
          <li>Du overnatter et annet sted enn hjemme på grunn av jobb</li>
          <li>Du bor i Norge</li>
        </ul>
        <CheckBox
          boxSide={'start'}
          label="Jeg bekrefter at opplysningene over stemmer."
        />
      </Card>
    </div>
  </Step>
  <Step stepType={'next'}>
    <Button buttonStyle="primary">Send inn</Button>
  </Step>
</StepList>;
```

StepList som er fullført og viser et resultat i i siste steg

```js
import { Button } from '@skatteetaten/frontend-components/Button';
import { LinkGroup } from '@skatteetaten/frontend-components/LinkGroup';
import { Step } from '@skatteetaten/frontend-components/StepList/Step';
import { StepList } from '@skatteetaten/frontend-components/StepList/StepList';
import { Typography } from '@skatteetaten/frontend-components/Typography';

const links = [
  {
    text: 'Beregn reisefradrag',
    path: '#stepList',
  },
  {
    text: 'Oversikt over alle fradrag',
    path: '#stepList',
  },
];

const titles = {
  step1: {
    no: 'Jobber du?',
    en: 'Are you a wage earner doing paid work?',
  },
  step2: {
    no: 'Sommerjobb?',
    en: 'Summerjob?',
  },
  step3: {
    no: 'Du er ikke pendler',
    en: 'You are not a commuter.',
  },
};

<StepList>
  <Step
    stepTitle={titles.step1.no}
    stepId={'step-1-1'}
    actionBtn={{ text: 'Endre', icon: 'edit', ariaLabel: 'Endre jobber du?' }}
    gridSpacing
  >
    <div>
      <p>Jeg er fulltidsstudent eller vernepliktig i militæret </p>
    </div>
  </Step>
  <Step
    stepTitle={titles.step2.no}
    stepId={'step-1-2'}
    activeStep={false}
    actionBtn={{ text: 'Endre', icon: 'edit', ariaLabel: 'Endre sommerjobb?' }}
    gridSpacing
  >
    <p>Nei</p>
  </Step>
  <Step
    stepTitle={titles.step3.no}
    stepType={'result'}
    resultIcon={'Check'}
    gridSpacing
  >
    <Typography>
      <p>
        Er du fulltidsstudent eller i militæret, regnes du ikke som pendler hvis
        du ikke har sommerjobb. Hvis du har lang reisevei mellom hjem og
        arbeidsplass, kan du ha krav på reisefradrag. Det kan du sjekke i
        reisefradragskalkulatoren.
      </p>
    </Typography>
    <LinkGroup links={links} />
  </Step>
</StepList>;
```

```js noeditor beskrivelse
<>
  <h3>Stegvis veiledning for brukeren</h3>
  <p>
    Når vi ønsker å veilede brukeren gjennom en rekke steg, bruker vi StepList.
    Dette er en effektiv og motiverende måte å vise vei for brukeren, slik at
    det ikke blir overveldende å lese all informasjonen på en gang. Vi bruker
    komponenten på to måter:{' '}
  </p>
  <ul>
    <li>Dele opp et skjema i porsjoner.</li>
    <li>Veiviser med spørsmål som ender opp i et svar eller en konklusjon.</li>
  </ul>
  <h3>Bruk oppsummering til slutt</h3>
  <p>
    Hvis du skal bruke komponenten til å lage et skjema, er hovedregelen at du
    har med et oppsummeringssteg til slutt. Det er viktig at brukeren har
    mulighet til å se over skjemaet før innsending. Oppsummeringssteget skal
    være et eget steg og teksten på knappen endrer seg fra «Neste» til «Send
    inn» eller tilsvarende. Her kan du eventuelt også ha med mulighet for at
    brukeren godkjenner opplysningene.
  </p>

  <h3>Varsel av brukerfeil når brukeren klikker «neste»</h3>

  <p>
    Når et steg inneholder feil, plasserer vi oppsummering av feilen i en
    MessageBar i toppen av steget. Denne dukker opp når bruker klikker «Neste».
    Fokus settes til overskriften i MessageBar.
  </p>

  <h3>Brukeren skal kunne hoppe frem og tilbake i steglisten</h3>

  <p>
    I noen tilfeller kan en bruker starte midt i en stegliste. Et eksempel er
    dersom brukeren allerede har fylt inn opplysninger i en veiviser på
    skatteetaten.no, og deretter blir sendt til en innlogget tjeneste. Da skal
    opplysningene som allerede er registrert, nå være forhåndsutfylt i den
    innloggede tjenesten.
  </p>

  <p>
    Hvis brukeren gjør en endring i et tidlig steg og det ikke er avhengigheter,
    husker skjemaet det som er skrevet inn på senere steg. Hvis det derimot er
    avhengigheter mellom stegene, blir senere steg nullstilt.
  </p>
</>
```

```js noeditor uu
<>
  <h3>Tips</h3>
  <ul>
    <li>
      Sjekk at du får tastaturfokus på riktig sted etter at du har valgt å
      endre.
    </li>
    <li>
      Skjemafelt skal være kodet riktig med bruk av fieldset og legend
      (gruppering av sjekkbokser og radioknapper), gode ledetekster med label
      for-attributt til input.{' '}
    </li>
  </ul>

  <h3>Mest relevante WCAG-krav</h3>
  <ul>
    <li>1.3.1 A, Informasjon og relasjoner</li>
    <li>2.4.6 AA, Overskrifter og ledetekster</li>
    <li>3.3.1 A, Identifikasjon av feil</li>
    <li>3.3.2 A, Ledetekster eller instruksjoner</li>
    <li>4.1.2 A, Navn, rolle, verdi</li>
  </ul>

  <h3>WAI-ARIA</h3>
  <ul>
    <li>
      Aria-label brukes for å tydeliggjøre hva du endrer hvis du navigerer på
      knappene med skjermleser (ikke piler gjennom hele prosessen).
    </li>
  </ul>
</>
```
