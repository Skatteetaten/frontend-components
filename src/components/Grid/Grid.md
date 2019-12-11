** Grid er en komponent som brukes til å plassere komponenter og annet innhold på siden, og hjelper til med å justere plasseringen for ulike skjermbredder. **

```js noeditor
DemoBlock = ({ children }) => (
  <div
    style={{
      border: '1px solid black',
      backgroundColor: '#ddd',
      textAlign: 'center',
      marginBottom: '0',
      padding: '8px 0'
    }}
  >
    {children}
  </div>
);
```

```js
import Grid from '@skatteetaten/frontend-components/Grid';

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
import Grid from '@skatteetaten/frontend-components/Grid';

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

```js noeditor beskrivelse
  <h3>For plassering av elementer</h3>
  <p>
    Et grid/rutenett hjelper til med å plassere komponenter på skjermen. Det
    er først og fremst nyttig i utvikling, men kan være lurt for designere å
    tenke på hvordan komponenter enkelt plasseres.
  </p>
  <h3>Kolonner og brekkpunkter</h3>
  <p>
    Et grid består av rader og kolonner, hvor en rad kan maksimalt ha 12
    kolonner, men man trenger ikke bruke alle 12.
  </p>
  <p>
    Griden kan settes opp slik at antall kolonner som vises er avhengig av
    skjermstørrelsen, og på den måten kan realisere responsivt design. Vi har
    følgende brekkpunkter:
  </p>
  <ul>
    <li>Small (sm): maks 479px</li>
    <li>Medium (md): 480px-639px</li>
    <li>Large (lg): 640px-1023px</li>
    <li>X-large (xl): 1024px-1365px</li>
    <li>Xx-large (xxl): 1366px-1919px</li>
    <li>Xxx-large (xxxl): min 1920px</li>
  </ul>
  <p>Man kan fjerne luft rundt kolonner ved å sette noPadding. </p>
  <p>
    Det anbefalt å bruke luft/anstander til å fortelle om i hvor stor grad en
    seksjon er knyttet til en annen. Du kan bruke avstander mellom radene i
    griden for oppnå det:
  </p>
  <ul>
    <li>
      Når innholdet hører sammen: Grid.SPACE_NONE (0px) eller Grid.SPACE_SMALL
      (8px)
    </li>
    <li>For ny seksjon, med samme type innhold: Grid.SPACE_MEDIUM (16px)</li>
    <li>Nytt type innhold eller tydelig skille: Grid.SPACE_LARGE (24px)</li>
  </ul>
```
