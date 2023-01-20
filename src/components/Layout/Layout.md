Vår Layout er basert på et grid oppbygd av 12 responsive kolonner med fast 16 px gutter og 32px margins

## Brekkpunkter

Vi benytter oss av seks sett med brekkpunkter:

- small (320px - 479px)
- medium (480px - 639px )
- large (640px - 1023px)
- extra large (1024px - 1365px)
- XX large (1366px - 1919px)
- XXX large 1920px og opp)

Eksempel på responsiv sidelayout:

```js noeditor
DemoBlock = ({ children }) => (
  <div
    style={{
      backgroundColor: '#eaeaea',
      border: '1px solid',
      textAlign: 'center',
      padding: '8px 0',
    }}
  >
    {children}
  </div>
);
<Layout>
  <Header hiddenXlUp>
    <DemoBlock>Header SM</DemoBlock>
  </Header>
  <Header hiddenLgDown>
    <DemoBlock>Header LG</DemoBlock>
  </Header>

  <Main>
    <Nav lg="12" xl="2">
      <DemoBlock>Nav</DemoBlock>
    </Nav>
    <Article lg="12" xl="8">
      <DemoBlock>Article</DemoBlock>
    </Article>
    <Aside lg="12" xl="2">
      <DemoBlock>Aside</DemoBlock>
    </Aside>
  </Main>
  <Footer>
    <DemoBlock>Footer</DemoBlock>
  </Footer>
</Layout>;
```

## Push and pull

Noen ganger kan det være aktuelt at rekkefølgen på kolonnene visuelt er forskjellig fra rekkefølgen i koden. Push og pull-mekanismen gjør dette mulig. Push flytter en kolonne til høyre, pull flytter en kolonne til venstre.

```js
<Grid>
  <Grid.Row>
    <Grid.Col sm={4} smPush={8}>
      <DemoBlock>First in code</DemoBlock>
    </Grid.Col>
    <Grid.Col sm={8} smPull={4}>
      <DemoBlock>Second in code</DemoBlock>
    </Grid.Col>
  </Grid.Row>
  <Grid.Row>
    <Grid.Col md={4} mdPush={8}>
      <DemoBlock>First in code</DemoBlock>
    </Grid.Col>
    <Grid.Col md={8} mdPull={4}>
      <DemoBlock>Second in code</DemoBlock>
    </Grid.Col>
  </Grid.Row>
</Grid>
```

## Visibility

Noen ganger ønsker en å vise og skjule innehold avhengig av skjermstørrelsen. I designsystemet kan vi slå av eller på kolonner over et bredt spekter av skjermstørrelser.

```js
<Grid>
  <Grid.Row>
    <Grid.Col sm={12} hiddenSm>
      <DemoBlock>hiddenSm</DemoBlock>
    </Grid.Col>
  </Grid.Row>
  <Grid.Row>
    <Grid.Col sm={12} hiddenMd>
      <DemoBlock>hiddenMd</DemoBlock>
    </Grid.Col>
  </Grid.Row>
  <Grid.Row>
    <Grid.Col sm={12} hiddenMdDown>
      <DemoBlock>hiddenMdDown</DemoBlock>
    </Grid.Col>
  </Grid.Row>
  <Grid.Row>
    <Grid.Col sm={12} hiddenMdUp>
      <DemoBlock>hiddenMdUp</DemoBlock>
    </Grid.Col>
  </Grid.Row>
  <Grid.Row>
    <Grid.Col sm={12} hiddenLg>
      <DemoBlock>hiddenLg</DemoBlock>
    </Grid.Col>
  </Grid.Row>
  <Grid.Row>
    <Grid.Col sm={12} hiddenLgDown>
      <DemoBlock>hiddenLgDown</DemoBlock>
    </Grid.Col>
  </Grid.Row>
  <Grid.Row>
    <Grid.Col sm={12} hiddenLgUp>
      <DemoBlock>hiddenLgUp</DemoBlock>
    </Grid.Col>
  </Grid.Row>
  <Grid.Row>
    <Grid.Col sm={12} hiddenXl>
      <DemoBlock>hiddenXl</DemoBlock>
    </Grid.Col>
  </Grid.Row>
  <Grid.Row>
    <Grid.Col sm={12} hiddenXlDown>
      <DemoBlock>hiddenXlDown</DemoBlock>
    </Grid.Col>
  </Grid.Row>
  <Grid.Row>
    <Grid.Col sm={12} hiddenXlUp>
      <DemoBlock>hiddenXlUp</DemoBlock>
    </Grid.Col>
  </Grid.Row>
  <Grid.Row>
    <Grid.Col sm={12} hiddenXxl>
      <DemoBlock>hiddenXxl</DemoBlock>
    </Grid.Col>
  </Grid.Row>
  <Grid.Row>
    <Grid.Col sm={12} hiddenXxlDown>
      <DemoBlock>hiddenXxlDown</DemoBlock>
    </Grid.Col>
  </Grid.Row>
  <Grid.Row>
    <Grid.Col sm={12} hiddenXxlUp>
      <DemoBlock>hiddenXxlUp</DemoBlock>
    </Grid.Col>
  </Grid.Row>
  <Grid.Row>
    <Grid.Col sm={12} hiddenXxxl>
      <DemoBlock>hiddenXxxl</DemoBlock>
    </Grid.Col>
  </Grid.Row>
</Grid>
```
