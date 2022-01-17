**Grid (Rutenett): brukes til å plassere komponenter og annet innhold på siden, og hjelper til med å justere plasseringen for ulike skjermbredder.**

```js noeditor
DemoBlock = ({ children }) => (
  <div
    style={{
      border: '1px solid black',
      backgroundColor: '#ddd',
      textAlign: 'center',
      marginBottom: '0',
      padding: '8px 0',
    }}
  >
    {children}
  </div>
);
```

Grid med standard padding:

```js
import { Grid } from '@skatteetaten/frontend-components/Grid';

<Grid padding="0px">
  <Grid.Row>
    <Grid.Col lg={4}>
      <DemoBlock>4</DemoBlock>
    </Grid.Col>
    <Grid.Col lg={4}>
      <DemoBlock>4</DemoBlock>
    </Grid.Col>
    <Grid.Col lg={4}>
      <DemoBlock>4</DemoBlock>
    </Grid.Col>
  </Grid.Row>
  <Grid.Row>
    <Grid.Col lg={8}>
      <DemoBlock>8</DemoBlock>
    </Grid.Col>
    <Grid.Col lg={4}>
      <DemoBlock>4</DemoBlock>
    </Grid.Col>
  </Grid.Row>
  <Grid.Row>
    <Grid.Col lg={6}>
      <DemoBlock>6</DemoBlock>
    </Grid.Col>
    <Grid.Col lg={6}>
      <DemoBlock>6</DemoBlock>
    </Grid.Col>
  </Grid.Row>
  <Grid.Row>
    <Grid.Col lg={12}>
      <DemoBlock>12</DemoBlock>
    </Grid.Col>
  </Grid.Row>
</Grid>;
```

Grid uten padding:

```js
import { Grid } from '@skatteetaten/frontend-components/Grid';

<Grid padding="0">
  <Grid.Row rowSpacing={Grid.SPACE_NONE}>
    <Grid.Col noSpacing lg={4}>
      <DemoBlock>4</DemoBlock>
    </Grid.Col>
    <Grid.Col noSpacing lg={4}>
      <DemoBlock>4</DemoBlock>
    </Grid.Col>
    <Grid.Col noSpacing lg={4}>
      <DemoBlock>4</DemoBlock>
    </Grid.Col>
  </Grid.Row>
  <Grid.Row rowSpacing={Grid.SPACE_NONE}>
    <Grid.Col noSpacing lg={8}>
      <DemoBlock>8</DemoBlock>
    </Grid.Col>
    <Grid.Col noSpacing lg={4}>
      <DemoBlock>4</DemoBlock>
    </Grid.Col>
  </Grid.Row>
  <Grid.Row rowSpacing={Grid.SPACE_NONE}>
    <Grid.Col noSpacing lg={6}>
      <DemoBlock>6</DemoBlock>
    </Grid.Col>
    <Grid.Col noSpacing lg={6}>
      <DemoBlock>6</DemoBlock>
    </Grid.Col>
  </Grid.Row>
  <Grid.Row rowSpacing={Grid.SPACE_NONE}>
    <Grid.Col noSpacing lg={12}>
      <DemoBlock>12</DemoBlock>
    </Grid.Col>
  </Grid.Row>
</Grid>;
```

Endre bredde på seksjon ved ulike skjermstørrelser:

```js
import Grid from '@skatteetaten/frontend-components/Grid';
<Grid padding="0px">
  <Grid.Row>
    <Grid.Col sm={12} md={4} lg={3} xl={2} xxl={1}>
      <DemoBlock>Del 1</DemoBlock>
    </Grid.Col>
    <Grid.Col sm={12} md={4} lg={3} xl={2} xxl={1}>
      <DemoBlock>Del 2</DemoBlock>
    </Grid.Col>
    <Grid.Col sm={12} md={4} lg={3} xl={2} xxl={1}>
      <DemoBlock>Del 3</DemoBlock>
    </Grid.Col>
  </Grid.Row>
</Grid>;
```

Seksjoner som hører sammen

```js
import Grid from '@skatteetaten/frontend-components/Grid';
import Card from '@skatteetaten/frontend-components/Card';
import TextField from '@skatteetaten/frontend-components/TextField';
<div>
  <Grid padding="16px 8px">
    <Grid.Row rowSpacing={Grid.SPACE_NONE}>
      <Grid.Col lg={12}>
        <Card
          title="Saksopplysninger"
          color={Card.Color.BEIGE}
          expand={true}
          isExpanded={false}
        >
          <p>Ingen opplysninger registrert.</p>
        </Card>
      </Grid.Col>
    </Grid.Row>
    <Grid.Row rowSpacing={Grid.SPACE_NONE}>
      <Grid.Col lg={12}>
        <Card
          title="Fra arbeidsgiver"
          color={Card.Color.BEIGE}
          expand={true}
          isExpanded={false}
        >
          <p>Ingen opplysninger registrert.</p>
        </Card>
      </Grid.Col>
    </Grid.Row>
    <Grid.Row rowSpacing={Grid.SPACE_NONE}>
      <Grid.Col lg={12}>
        <Card
          title="Fra skattemelding"
          color={Card.Color.BEIGE}
          expand={true}
          isExpanded={false}
        >
          <p>Ingen opplysninger registrert.</p>
        </Card>
      </Grid.Col>
    </Grid.Row>
  </Grid>
</div>;
```

Grid inni et annet grid:

```js
import Grid from '@skatteetaten/frontend-components/Grid';
import Card from '@skatteetaten/frontend-components/Card';
import TextField from '@skatteetaten/frontend-components/TextField';
<div>
  <Grid padding="0px">
    <Grid.Row>
      <Grid.Col lg={12}>
        <Card
          title="Skattemelding"
          color={Card.Color.BEIGE}
          expand={true}
          isExpanded={false}
        >
          <Grid padding="0px">
            <Grid.Row>
              <Grid.Col sm={12} md={4} lg={3} xl={2} xxl={1} noSpacing>
                Del 1
              </Grid.Col>
              <Grid.Col sm={12} md={4} lg={3} xl={2} xxl={1} noSpacing>
                Del 2
              </Grid.Col>
              <Grid.Col sm={12} md={4} lg={3} xl={2} xxl={1} noSpacing>
                Del 3
              </Grid.Col>
            </Grid.Row>
          </Grid>
        </Card>
      </Grid.Col>
    </Grid.Row>
  </Grid>
</div>;
```

```js noeditor beskrivelse
import Grid from '@skatteetaten/frontend-components/Grid';
import Card from '@skatteetaten/frontend-components/Card';
import TextField from '@skatteetaten/frontend-components/TextField';
import Button from '@skatteetaten/frontend-components/Button';
import DatePicker from '@skatteetaten/frontend-components/DatePicker';

<>
  <h3>Komponent for å plassere innhold på en nettside</h3>
  <p>
   Et rutenett lar deg fordele og plassere komponenter og annet innhold på
   en nettside.
  </p>
<h3>Hvorfor grid?</h3>
<p>
    <ul>
  <li>Grid er nyttig i utvikling av nettsiden fordi det hjelper oss å
planlegge hvordan vi enklest kan plassere komponentene.</li>
    <li>Rutenettet sikrer responsivt design ved å fordele og gruppere innholdet
riktig. Det vil si at komponentene er på rett plass, selv om brukerne benytter
forskjellige skjermbredder</li>
  </ul>
  </p>

 <h3>Slik setter du opp rader og kolonner i rutenettet:</h3>
  <p>
  <ul>
  <li>Et grid består av rader og kolonner. En rad kan maksimalt ha 12
kolonner, men du trenger ikke bruke alle 12.</li>
 <li>Sett opp rutenettet slik at tallet på kolonner som brukeren ser, er
avhengig av skjermstørrelsen. Da vil innholdet automatisk blir strekt, krympet
eller flyttet for å tilpasse seg den tilgjengelige skjermplassen.</li>
 <li>I praksis må du forholde deg et sett av skjermstørrelser og hvordan rutenettet
skal se ut på hver av dem. Ved gitte skjermstørrelser kan rutenettet justere seg for eksempel,
gå fra flere kolonner på desktop til én kolonne på mobil.</li>
  </ul>
  </p>

<h3>Brekkpunkter som komponenten bruker:</h3>
  <p>
   { " " }
    Skjermstørrelsene som rutenettet kan justere seg på kalles brekkpunkter, og
    komponenten bruker disse:
  <ul>
    <li>Small (sm): maks 479px</li>
    <li>Medium (md): 480px-639px</li>
    <li>Large (lg): 640px-1023px</li>
    <li>X-large (xl): 1024px-1365px</li>
    <li>Xx-large (xxl): 1366px-1919px</li>
    <li>Xxx-large (xxxl): min 1920px</li>
  </ul>
 </p>

  <h3>Bruk luft og avstander for å dele opp eller knytte sammen innhold:</h3>
  <p>
    Vi anbefaler at du bruker luft eller ulike anstander til å vise i hvor stor
    grad en seksjon med innhold er knyttet til en annen, slik som du tydelig ser
    i bunnen på <a href="https://www.skatteetaten.no">skatteetaten.no</a>.
  </p>
  <p>Slik bruker du avstander mellom radene i rutenettet for å skille eller samle innhold:</p>
  <ul>
    <li>
      Når innholdet hører sammen: Grid.SPACE_NONE (0px) eller Grid.SPACE_SMALL
      (8px)</li>
    <li>For ny seksjon med samme type innhold: Grid.SPACE_MEDIUM (16px)</li>
    <li>Nytt type innhold eller tydelig skille: Grid.SPACE_LARGE (24px)</li>
  </ul>
 </p>

  <p>Slik justerer du luft rundt celler for å skille eller samle innhold:</p>
  <ul>
    <li>
      Sett for eksempel &lt;Grid.Col colPadding="0 8px 0 0"&gt; forå legge til
      mer luft.
    </li>
    <li>Fjern luft helt ved å bruke &lt;Grid.Col noSpacing&gt;.</li>
  </ul>
 </p>
</>;
```

```js noeditor uu
<>
  <h3>Tips</h3>
  <ul>
    <li>Tenk på logisk rekkefølge</li>
  </ul>

  <h3>Mest relevante WCAG-krav</h3>
  <ul>
    <li>1.3.2 A, Meningsfylt rekkefølge</li>
  </ul>

  <h3>WAI-ARIA</h3>
  <ul>
    <li>N/A</li>
  </ul>
</>
```
