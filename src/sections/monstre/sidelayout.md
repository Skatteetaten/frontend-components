### Publikumsløsning

I publikumsløsningene våre ser vi at mobil og nettbrett blir stadig viktigere. Det er derfor svært viktig at sidelayouten er reponsiv. I de fleste publikumsløsningen gir det mening å ha hovedinnholdet sentrert i en midtkolonne og solide marger når skjermbredden er stor. På den måten kan hovedinnholdet få en bredde som fungerer godt både på dekstop og mobil.

Merk: Denne siden inneholder eksempler som bruker Grid-komponenten til å lage sidelayout. Dersom du ikke trenger å støtte Internet Explorer 11 kan det er være verd å vurdere [CSS-grid](https://www.w3schools.com/css/css_grid.asp) i stedet.

```js
import {
  Link,
  Card,
  TextField,
  TopStripe,
  TopStripeMenu,
  TopStripeButton,
  TopBanner,
  FooterContent,
  Grid,
} from '@skatteetaten/frontend-components';

const textStyle = {
  fontSize: '12px',
  textAlign: 'center',
  textTransform: 'uppercase'
};

const white = {
  color: '#ffffff'
};

<div>
  <TopStripe>
    <p style={textStyle}>Toppstripe</p>
  </TopStripe>
  <TopBanner
    external
    homeText="Til skatteetaten.no"
    title="Ekstern publikumsløsning"
    logoLink
  />
  <Grid>
    <Grid.Row>
      <Grid.Col sm={0} lg={1} xl={2}></Grid.Col>
      <Grid.Col sm={12} lg={10} xl={8}>
        <p style={textStyle}>Midtkolonne med hovedinnhold</p>
        <Card margin="xlarge" color={Card.Color.BEIGE}>
          <p style={textStyle}>Boks med viktige opplysninger</p>
        </Card>
        <br />

        <Card
          margin="xlarge"
          color={Card.Color.WHITE}
          border={Card.Border.GREEN_BORDER}
        >
          <p style={textStyle}>Ramme med beløpsinformasjon</p>
        </Card>
      </Grid.Col>
      <Grid.Col sm={0} lg={1} xl={2}></Grid.Col>
    </Grid.Row>
  </Grid>

  <FooterContent>
    <p style={textStyle}>Footer</p>
  </FooterContent>
</div>;
```

### Saksbehandlingsløsning

I de interne løsningene deler vi inn skjermen i et partsområde, et kjerneområde og et valgfritt rutineområde. Reponsivt design er viktig også her, fordi mange saksbehandlere bruker løsningene på deler av skjermen. Partsområdet skal inneholde opplysninger om personen, bedriften, kjøretøyet eller liknende som gir en støtte for saksbehandler for utførelse av arbeidsoppgaven. Kjerneområdet fyller hoveddelen av skjermbildet og har høyest prioritet. Her utføres selve arbeidsoppgaven. Funksjoner knyttet til arbeidsoppgaven kan ligge i kjerneområdet eller i toppen. I systemer med komplekse rutiner eller lovbestemmelser kan det være nyttig å tilby en rutinebeskrivelse i et eget område.

```js
import { 
  AccordionMenu,
  AccordionMenuItem,
  Link,
  Card,
  Icon,
  IconButton,
  TextField,
  TopStripe,
  TopStripeMenu,
  TopStripeButton,
  TopBanner,
  CommandBar,
  Grid,
} from '@skatteetaten/frontend-components';

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
import { 
  AccordionMenu,
  AccordionMenuItem,
  Link,
  Card,
  Icon,
  IconButton,
  TextField,
  TopStripe,
  TopStripeMenu,
  TopStripeButton,
  TopBanner,
  CommandBar,
  Grid,
} from '@skatteetaten/frontend-components';

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
