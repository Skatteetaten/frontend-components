** OpenClose er enkelstående områder for å vise og skjule utdypende informasjon. **

```js
import OpenClose from '@skatteetaten/frontend-components/OpenClose';
import Typography from '@skatteetaten/frontend-components/Typography';

// Inline styles are bad design https://reactjs.org/docs/faq-styling.html
// Just for the purpose of the example

const paraStyle = {
  marginBlockStart: '0'
};

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
      <li>lønn til utleid utenlandsk arbeidstaker, inkludert feriepenger</li>
      <li>
        utgiftsgodtgjørelser, refusjoner og naturalytelser som er skattepliktige
        fordeler for deg, inkludert dekning av pendlerkostnader
      </li>
    </ul>
  </Typography>
</OpenClose>;
```

OpenClose som er åpen fra start:

```js
import OpenClose from '@skatteetaten/frontend-components/OpenClose';

// Inline styles are bad design https://reactjs.org/docs/faq-styling.html
// Just for the purpose of the example

const paraStyle = {
  marginBlockStart: '0'
};

<OpenClose
  isOpen={true}
  title={'Tilleggsmelding eller korrigert melding?'}
  headingLevel={2}
>
  <p style={paraStyle}>
    Både tilleggsmelding og korrigert melding er endringsmeldinger. Forskjellen
    er at tilleggsmelding kun inkluderer de endringene du skal gjøre, mens en
    korrigert melding er en ny innlevering av hele mva-meldingen. Korrigert
    melding skal kun brukes hvis du har ført mye av regnskapet feil.
  </p>
  <p>
    Du kan gjøre endringer innen 3 år etter den opprinnelige innleveringsfristen
    for mva-meldingen.
  </p>
</OpenClose>;
```

```js noeditor beskrivelse
<p>
  OpenClose-komponenten kan brukes når du skal vise og skjule utdypende
  informasjon. Den er laget for å kunne stå alene, så dersom du har flere
  grupper med utdypende informasjon bør du vurdere å bruke Accordion i stedet.
</p>
<p>
  Du kan plassere vilkårlig innhold inni komponenten, men det skal alltid være tydelig at innholdet hører til under den aktuelle «overskriften». Som regel løser vi dette ved å la innholdet inni komponenten få en liten vestremarg.
</p>
```
