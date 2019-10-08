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

<Grid>
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
  <Grid.Row rowSpacing={Grid.SPACE_LARGE}>
    <Grid.Col lg={12}>
      <DemoBlock>12</DemoBlock>
    </Grid.Col>
  </Grid.Row>
</Grid>;
```

```js noeditor
import Accordion from '@skatteetaten/frontend-components/Accordion';
import AccordionItem from '@skatteetaten/frontend-components/Accordion/AccordionItem';
<Accordion>
  <AccordionItem
    isOpen
    toggleContent
    toggleButtonText={'Bruk'}
    stepId={'step-1-1'}
  >
    <p>
      Et grid/rutenett hjelper til med å plassere komponenter på skjermen. Det
      er først og fremst nyttig i utvikling, men kan være lurt for designere å
      tenke på hvordan komponenter enkelt plasseres
    </p>
    <p>
      Et grid består av rader og kolonner, hvor en rad kan maksimalt ha 12
      kolonner, men man trenger ikke bruke alle 12
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
      Rader har standard avstand på 8px. Men kan endre denne per rad ved å bruke
      rowSpacing: `Grid.SPACE_NONE, Grid.SPACE_SMALL, Grid.SPACE_MEDIUM,
      Grid.SPACE_LARGE`
    </p>
  </AccordionItem>
</Accordion>;
```
