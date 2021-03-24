### Publikumsløsning

I publikumsløsningene våre ser vi at mobil og nettbrett blir stadig viktigere. Det er derfor svært viktig at sidelayouten er reponsiv. I de fleste publikumsløsningen gir det mening å ha hovedinnholdet sentrert i en midtkolonne og solide marger når skjermbredden er stor. På den måten kan hovedinnholdet få en bredde som fungerer godt både på dekstop og mobil.

Merk: Denne siden inneholder eksempler som bruker Grid-komponenten til å lage sidelayout. Dersom du ikke trenger å støtte Internet Explorer 11 kan det er være verd å vurdere [CSS-grid](https://www.w3schools.com/css/css_grid.asp) i stedet.

```js
import TopStripe, {
  TopStripeMenu,
  TopStripeButton
} from '@skatteetaten/frontend-components/TopStripe';
import TopBanner from '@skatteetaten/frontend-components/TopBanner';
import Link from '@skatteetaten/frontend-components/Link';
import Card from '@skatteetaten/frontend-components/Card';
import TextField from '@skatteetaten/frontend-components/TextField';
import FooterContent from '@skatteetaten/frontend-components/FooterContent';
import Grid from '@skatteetaten/frontend-components/Grid';
import Icon from '@skatteetaten/frontend-components/Icon';
import Typography from '@skatteetaten/frontend-components/Typography';
//import { UseScreen } from '../../../src/utils/ScreenPlugin';

//const screenSize = UseScreen();

<div>
  <TopStripe>
    <Link path={'#topstripe'} text={'Kontakt oss'} placement="before" />

    <TopStripeMenu title={'Endre skriftstørrelse'}>
      <div style={{ fontSize: '20px' }}>
        Hold Ctrl-tasten nede (Cmd-tasten på Mac). Trykk på + for å forstørre
        eller - for å forminske.
      </div>
    </TopStripeMenu>
    <TopStripeMenu title={'Language / Språk'}>
      <TopStripeButton ariaLabel={'Norsk'} onClick={() => console.log('NB')}>
        Norsk
      </TopStripeButton>
      <TopStripeButton
        icon={'check'}
        ariaLabel={'Nynorsk'}
        onClick={() => console.log('NN')}
      >
        Nynorsk
      </TopStripeButton>
      <TopStripeButton ariaLabel={'Engelsk'} onClick={() => console.log('EN')}>
        Engelsk
      </TopStripeButton>
      <TopStripeButton
        ariaLabel={'Sørsamisk'}
        onClick={() => console.log('SMA')}
      >
        Sørsamisk
      </TopStripeButton>
      <TopStripeButton
        ariaLabel={'Nordsamisk'}
        onClick={() => console.log('SME')}
      >
        Nordsamisk
      </TopStripeButton>
    </TopStripeMenu>
    <Link path={'#link'} text={'Logg inn'} placement="before" />
  </TopStripe>
  <TopBanner
    external
    title={'Side for publikum'}
    homeText={'Tilbake til skatteetaten.no'}
  />
  <Typography>
    <Grid padding={'0px'}>
      <Grid.Row>
        <Grid.Col sm={0} lg={1} xl={2}></Grid.Col>
        <Grid.Col sm={12} lg={10} xl={8}>
          <Grid>
            <Grid.Row rowSpacing={Grid.SPACE_LARGE}>
              <Grid.Col noSpacing sm={0} lg={1} xl={2}></Grid.Col>
              <Grid.Col noSpacing sm={12} lg={10} xl={8}>
                <h2>Innhold utenfor Card</h2>
                <p>
                  Dette er også et eget grid. Den er meningen at denne teksten
                  skal alignes pent med teksten inni kortet under.
                </p>
              </Grid.Col>
              <Grid.Col noSpacing sm={0} lg={1} xl={2}></Grid.Col>
            </Grid.Row>
          </Grid>
          <Card
            color={Card.Color.WHITE}
            border={Card.Border.GREEN_BORDER}
            margin="small"
          >
            <Grid padding={'0px'}>
              <Grid.Row>
                <Grid.Col noSpacing sm={0} lg={1} xl={2}>
                  <div style={{ textAlign: 'center', marginTop: '10px' }}>
                    <Icon
                      iconName="Company"
                      style={{
                        fontSize: '40px'
                        //display: screenSize.lt.xl ? 'none' : 'block'
                      }}
                    />
                  </div>
                </Grid.Col>
                <Grid.Col noSpacing sm={12} lg={10} xl={8}>
                  <h3 style={{ marginTop: '24px' }}>Et kort</h3>
                  <p>
                    I dette kortet måtte jeg fjerne alt av titler og marg og
                    satt inn en nytt grid. 8 av kolonnene brukes til innhold
                  </p>
                  <br />
                </Grid.Col>
                <Grid.Col noSpacing sm={0} lg={1} xl={2}></Grid.Col>
              </Grid.Row>
            </Grid>
          </Card>
        </Grid.Col>
        <Grid.Col sm={0} lg={1} xl={2}></Grid.Col>
      </Grid.Row>
    </Grid>
  </Typography>

  <FooterContent>
    <Grid>
      <Grid.Row>
        <Grid.Col sm={0} lg={1} xl={2}></Grid.Col>
        <Grid.Col noSpacing sm={12} lg={10} xl={8}>
          <Grid>
            <Grid.Row>
              <Grid.Col noSpacing sm={0} lg={1} xl={2}></Grid.Col>
              <Grid.Col noSpacing sm={12} lg={10} xl={8}>
                <p>Innhold i footer</p>
              </Grid.Col>
              <Grid.Col noSpacing sm={0} lg={1} xl={2}></Grid.Col>
            </Grid.Row>
          </Grid>
        </Grid.Col>
        <Grid.Col noSpacing sm={0} lg={1} xl={2}></Grid.Col>
      </Grid.Row>
    </Grid>
  </FooterContent>
</div>;
```

### Saksbehandlingsløsning

I de interne løsningene deler vi inn skjermen i et partsområde, et kjerneområde og et valgfritt rutineområde. Reponsivt design er viktig også her, fordi mange saksbehandlere bruker løsningene på deler av skjermen. Partsområdet skal inneholde opplysninger om personen, bedriften, kjøretøyet eller liknende som gir en støtte for saksbehandler for utførelse av arbeidsoppgaven. Kjerneområdet fyller hoveddelen av skjermbildet og har høyest prioritet. Her utføres selve arbeidsoppgaven. Funksjoner knyttet til arbeidsoppgaven kan ligge i kjerneområdet eller i toppen. I systemer med komplekse rutiner eller lovbestemmelser kan det være nyttig å tilby en rutinebeskrivelse i et eget område.

```js
import TopStripe, {
  TopStripeMenu,
  TopStripeButton
} from '@skatteetaten/frontend-components/TopStripe';
import TopBanner from '@skatteetaten/frontend-components/TopBanner';
import Link from '@skatteetaten/frontend-components/Link';
import Card from '@skatteetaten/frontend-components/Card';
import TextField from '@skatteetaten/frontend-components/TextField';
import Grid from '@skatteetaten/frontend-components/Grid';
import CommandBar from '@skatteetaten/frontend-components/CommandBar';
import Icon from '@skatteetaten/frontend-components/Icon/Icon';
import IconButton from '@skatteetaten/frontend-components/IconButton/IconButton';
import ActionButton from '@skatteetaten/frontend-components/ActionButton/ActionButton';
import AccordionMenu from '@skatteetaten/frontend-components/AccordionMenu';
import AccordionMenuItem from '@skatteetaten/frontend-components/AccordionMenu/AccordionMenuItem';

const textStyle = {
  fontSize: '12px',
  textAlign: 'center',
  textTransform: 'uppercase'
};

const white = {
  color: '#ffffff'
};

initialState = {
  items: [
    {
      key: 'view1',
      name: 'Start arbeidsoppgave',
      ariaLabel: 'Start arbeidsoppgave',
      onClick: () => {
        console.log('og');
      },
      iconProps: {
        iconName: 'PlayOutline'
      }
    },
    {
      key: 'view2',
      name: 'Sett på vent',
      ariaLabel: 'Sett arbeidsoppgave på vent',
      onClick: () => {
        console.log('hei');
      },
      iconProps: {
        iconName: 'PauseOutline'
      }
    },

    {
      key: 'view3',
      name: 'Tildel',
      ariaLabel: 'Tildel arbeidsoppgave',
      onClick: () => {
        console.log('og');
      },
      iconProps: {
        iconName: 'PersonMoreOutline'
      }
    }
  ]
};

const dlStyle = {
  display: 'inline-block',
  width: '50%',
  margin: '0 0 5px 0',
  verticalAlign: 'text-top'
};

const removeMargin = {
  margin: '0'
};

const ulStyle = {
  padding: 0,
  margin: 0
};

const centerAlignStyle = {
  display: 'flex',
  alignItems: 'center'
};

const timeStampStyle = {
  paddingLeft: 40,
  marginTop: '-10px'
};

<div>
  <TopBanner compact title="Kontekst" homeText="Systemnavn">
    <CommandBar items={state.items} />
  </TopBanner>

  <div style={{ marginTop: '16px' }}>
    <Grid>
      <Grid.Row>
        <Grid.Col sm={12} lg={12} xl={3}>
          <div style={{ minWidth: '200px' }}>
            <AccordionMenu>
              <AccordionMenuItem
                icon="Person"
                iconLabel="Firmanavn"
                heading={
                  <>
                    <span>
                      <strong>Fatima Normann</strong>
                    </span>
                  </>
                }
              >
                <span>
                  <strong>Kontaktopplysninger</strong>
                </span>
                <dl style={removeMargin}>
                  <dt style={dlStyle}>Navn</dt>
                  <dd style={dlStyle}>Firma AS</dd>
                  <dt style={dlStyle}>Adresse</dt>
                  <dd style={dlStyle}>
                    Strandgaten 10 <br />
                    1234 Lillevik
                  </dd>
                  <dt style={dlStyle}>Telefon</dt>
                  <dd style={dlStyle}>987 65 432</dd>
                </dl>
              </AccordionMenuItem>
            </AccordionMenu>
          </div>
        </Grid.Col>
        <Grid.Col sm={12} lg={12} xl={7}>
          <Card subtitle="Kjerneområde" color={Card.Color.GREY}>
            <CommandBar items={state.items} />
          </Card>
        </Grid.Col>
        <Grid.Col sm={12} lg={12} xl={2}>
          <Card
            subtitle="Rutiner/regler (valgfritt)"
            color={Card.Color.BEIGE}
          ></Card>
        </Grid.Col>
      </Grid.Row>
    </Grid>
  </div>
</div>;
```

```js
import TopStripe, {
  TopStripeMenu,
  TopStripeButton
} from '@skatteetaten/frontend-components/TopStripe';
import TopBanner from '@skatteetaten/frontend-components/TopBanner';
import Link from '@skatteetaten/frontend-components/Link';
import Card from '@skatteetaten/frontend-components/Card';
import TextField from '@skatteetaten/frontend-components/TextField';
import Grid from '@skatteetaten/frontend-components/Grid';
import CommandBar from '@skatteetaten/frontend-components/CommandBar';
import Icon from '@skatteetaten/frontend-components/Icon/Icon';
import IconButton from '@skatteetaten/frontend-components/IconButton/IconButton';
import ActionButton from '@skatteetaten/frontend-components/ActionButton/ActionButton';
import AccordionMenu from '@skatteetaten/frontend-components/AccordionMenu';
import AccordionMenuItem from '@skatteetaten/frontend-components/AccordionMenu/AccordionMenuItem';

const textStyle = {
  fontSize: '12px',
  textAlign: 'center',
  textTransform: 'uppercase'
};

const white = {
  color: '#ffffff'
};

initialState = {
  items: [
    {
      key: 'view1',
      name: 'Start arbeidsoppgave',
      ariaLabel: 'Start arbeidsoppgave',
      onClick: () => {
        console.log('og');
      },
      iconProps: {
        iconName: 'PlayOutline'
      }
    },
    {
      key: 'view2',
      name: 'Sett på vent',
      ariaLabel: 'Sett arbeidsoppgave på vent',
      onClick: () => {
        console.log('hei');
      },
      iconProps: {
        iconName: 'PauseOutline'
      }
    },

    {
      key: 'view3',
      name: 'Tildel',
      ariaLabel: 'Tildel arbeidsoppgave',
      onClick: () => {
        console.log('og');
      },
      iconProps: {
        iconName: 'PersonMoreOutline'
      }
    }
  ]
};

const dlStyle = {
  display: 'inline-block',
  width: '50%',
  margin: '0 0 5px 0',
  verticalAlign: 'text-top'
};

const removeMargin = {
  margin: '0'
};

const ulStyle = {
  padding: 0,
  margin: 0
};

const centerAlignStyle = {
  display: 'flex',
  alignItems: 'center'
};

const timeStampStyle = {
  paddingLeft: 40,
  marginTop: '-10px'
};

<div>
  <TopBanner
    external
    title="Klage - fastsetting av engangsavgift"
    homeText="Til Avgiftsweb hjem"
  ></TopBanner>

  <div style={{ marginTop: '16px' }}>
    <Grid>
      <Grid.Row>
        <Grid.Col sm={12} lg={12} xl={3}>
          <div style={{ minWidth: '200px' }}>
            <AccordionMenu>
              <AccordionMenuItem
                icon="Person"
                iconLabel="Firmanavn"
                heading={
                  <>
                    <span>
                      <strong>Fatima Normann</strong>
                    </span>
                  </>
                }
              >
                <span>
                  <strong>Kontaktopplysninger</strong>
                </span>
                <dl style={removeMargin}>
                  <dt style={dlStyle}>Navn</dt>
                  <dd style={dlStyle}>Firma AS</dd>
                  <dt style={dlStyle}>Adresse</dt>
                  <dd style={dlStyle}>
                    Strandgaten 10 <br />
                    1234 Lillevik
                  </dd>
                  <dt style={dlStyle}>Telefon</dt>
                  <dd style={dlStyle}>987 65 432</dd>
                </dl>
              </AccordionMenuItem>
            </AccordionMenu>
          </div>
        </Grid.Col>
        <Grid.Col sm={12} lg={12} xl={7}>
          <Card
            title="Behandle klage fra brev"
            subtitle="Utført 14.02.2021 Av Siri Saksbehandler"
            color={Card.Color.GREY}
            marginbottom="16px"
          >
            <p>
              Behandle klage i brev fra Fatima Normann.{' '}
              <Link
                path={'#link'}
                text={'Åpne påstand'}
                icon={'OpenInNew'}
                openInNew={true}
                placement="after"
              />
            </p>
            <p></p>
          </Card>
          <Card
            title="Skrive vedtaksbrev"
            subtitle="Ikke påbegynt"
            color={Card.Color.WHITE}
            border={Card.Border.YELLOW_BORDER}
          >
            <CommandBar items={state.items} />
          </Card>
        </Grid.Col>
        <Grid.Col sm={12} lg={12} xl={2}>
          <Card
            subtitle="Rutiner/regler (valgfritt)"
            color={Card.Color.BEIGE}
          ></Card>
        </Grid.Col>
      </Grid.Row>
    </Grid>
  </div>
</div>;
```
