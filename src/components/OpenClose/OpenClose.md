**OpenClose (Åpne og lukke): er enkelstående områder for å vise og skjule utdypende informasjon.**

```js
import { OpenClose } from '@skatteetaten/frontend-components/OpenClose';
import { Typography } from '@skatteetaten/frontend-components/Typography';

// Inline styles are bad design https://reactjs.org/docs/faq-styling.html
// Just for the purpose of the example

const [state, setState] = React.useState({ open: false });

const paraStyle = {
  marginBlockStart: '0',
};
<>
  <OpenClose title={'Inntekter som skattlegges i ordningen'}>
    <Typography>
      <p style={paraStyle}>
        Arbeidsgiveren din/den som utbetaler skal trekke kildeskatt av følgende
        inntekter:
      </p>
      <ul>
        <li>
          lønn og andre godtgjørelser fra kilder i Norge for arbeid utført i
          Norge, inkludert feriepenger
        </li>
        <li>godtgjørelser til direktør eller styremedlem i selskap i Norge</li>
        <li>gratiale, tantieme eller lignende ytelser fra norske selskap</li>
        <li>
          lønn til utleid utenlandsk arbeidstaker, inkludert{' '}
          <a href="#">feriepenger</a>
        </li>
        <li>
          <button>test</button>
        </li>
        <li>
          utgiftsgodtgjørelser, refusjoner og naturalytelser som er
          skattepliktige fordeler for deg, inkludert dekning av pendlerkostnader
        </li>
      </ul>
    </Typography>
  </OpenClose>

  <br />
  <OpenClose
    compact
    isOnClickOnlyFiredOnOpen={false}
    title={state.open ? 'Skjul detaljer' : 'Vis detaljer'}
    onClick={() => setState({ open: !state.open })}
  >
    <Typography>
      <p style={paraStyle}>
        Arbeidsgiveren din/den som utbetaler skal trekke kildeskatt av følgende
        inntekter:
      </p>
      <ul>
        <li>
          lønn og andre godtgjørelser fra kilder i Norge for arbeid utført i
          Norge, inkludert feriepenger
        </li>
        <li>godtgjørelser til direktør eller styremedlem i selskap i Norge</li>
        <li>gratiale, tantieme eller lignende ytelser fra norske selskap</li>
        <li>
          lønn til utleid utenlandsk arbeidstaker, inkludert{' '}
          <a href="#">feriepenger</a>
        </li>
        <li>
          <button>test</button>
        </li>
        <li>
          utgiftsgodtgjørelser, refusjoner og naturalytelser som er
          skattepliktige fordeler for deg, inkludert dekning av pendlerkostnader
        </li>
      </ul>
    </Typography>
  </OpenClose>
</>;
```

OpenClose som er åpen fra start:

```js
import { OpenClose } from '@skatteetaten/frontend-components/OpenClose';
import { Typography } from '@skatteetaten/frontend-components/Typography';

// Inline styles are bad design https://reactjs.org/docs/faq-styling.html
// Just for the purpose of the example

const paraStyle = {
  marginBlockStart: '0',
};

<OpenClose
  isOpen={true}
  title={'Tilleggsmelding eller korrigert melding?'}
  headingLevel={2}
>
  <Typography>
    <p style={paraStyle}>
      Både tilleggsmelding og korrigert melding er endringsmeldinger.
      Forskjellen er at tilleggsmelding kun inkluderer de endringene du skal
      gjøre, mens en korrigert melding er en ny innlevering av hele
      mva-meldingen. Korrigert melding skal kun brukes hvis du har ført mye av
      regnskapet feil.
    </p>
    <p>
      Du kan gjøre endringer innen 3 år etter den opprinnelige
      innleveringsfristen for mva-meldingen.
    </p>
  </Typography>
</OpenClose>;
```

```js noeditor uu
<>
  <h3>Tips</h3>
  <ul>
    <li>Det skal kun være ett tabstopp pr ekspander.</li>
    <li>
      Ekspandere skal ha en visuell indikator på at innhold utvides/minimeres.
    </li>
    <li>
      Sjekk at elementet leses som en ekspander med skjermleser og at du
      beholder fokus når du utvider/minimerer den.
    </li>
  </ul>

  <h3>Mest relevante WCAG-krav</h3>
  <ul>
    <li>1.3.1 A, Informasjon og relasjoner</li>
    <li>4.1.2 A, Navn, rolle, verdi</li>
  </ul>

  <h3>WAI-ARIA</h3>
  <ul>
    <li>Aria-expanded brukes på knappene som utvides/minimeres.</li>
    <li>Aria-hidden brukes for å skjule ikoner for skjermlesere.</li>
  </ul>
</>
```

```js noeditor beskrivelse
<>
  <h3>Vise eller skjule utdypende informasjon</h3>
  <p>
    Når det er behov for å vise eller skjule utdypende informasjon, kan du bruke
    OpenClose-komponenten. Dette gjør det ryddig for brukeren. Komponenten skal
    i regelen stå alene, så dersom du har flere grupper med utdypende
    informasjon skal du vurdere å bruke <a href="#Accordion">Accordion</a> i
    stedet.
  </p>
  <h3>En venstremarg gjør overskrift og tekst samlende</h3>
  <p>
    Du kan plassere hvilket som helst innhold inni komponenten, men det skal
    alltid være tydelig at innholdet hører til under den aktuelle overskriften.
    Dette kan du løse ved å la det utdypende innholdet få en liten vestremarg,
    altså et lite innrykk mot høyre.
  </p>
  <p>
    Se også{' '}
    <a href="https://www.skatteetaten.no/stilogtone/skrive/skriveregler/tittel/">
      Skatteetatens skriveregler
    </a>{' '}
    for hjelp til å skrive gode overskrifter.{' '}
  </p>
</>
```
