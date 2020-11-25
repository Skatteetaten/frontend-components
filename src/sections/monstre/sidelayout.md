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
  <TopBanner compact title="Kontekst" homeText="Systemnavn"></TopBanner>

  <div style={{ marginTop: '16px' }}>
    <Grid>
      <Grid.Row>
        <Grid.Col sm={12} lg={12} xl={3}>
          <div style={{ minWidth: '200px' }}>
            <AccordionMenu>
              <AccordionMenuItem
                icon="Company"
                iconLabel="Selskap"
                heading={
                  <>
                    <span>
                      <strong>Firma</strong>
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
