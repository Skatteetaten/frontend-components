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
import Button from '@skatteetaten/frontend-components/Button';
import Step from '@skatteetaten/frontend-components/StepList/Step';
import StepList from '@skatteetaten/frontend-components/StepList';
import LinkGroup from '@skatteetaten/frontend-components/LinkGroup';
import { UseScreen } from '../../components/utils/ScreenPlugin';

const links = [
  {
    text: 'Beregn reisefradrag',
    path: '#stepList'
  },
  {
    text: 'Oversikt over alle fradrag',
    path: '#stepList'
  }
];

const titles = {
  step1: {
    no: 'Jobber du?',
    en: 'Are you a wage earner doing paid work?'
  },
  step2: {
    no: 'Sommerjobb?',
    en: 'Summerjob?'
  },
  step3: {
    no: 'Du er ikke pendler',
    en: 'You are not a commuter.'
  }
};

const screenSize = UseScreen();

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
      <TopStripeButton ariaLabel={'Norsk'}>Norsk</TopStripeButton>
      <TopStripeButton icon={'check'} ariaLabel={'Nynorsk'}>
        Nynorsk
      </TopStripeButton>
      <TopStripeButton ariaLabel={'Engelsk'}>Engelsk</TopStripeButton>
      <TopStripeButton ariaLabel={'Sørsamisk'}>Sørsamisk</TopStripeButton>
      <TopStripeButton ariaLabel={'Nordsamisk'}>Nordsamisk</TopStripeButton>
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
        <Grid.Col noSpacing sm={0} lg={1} xl={2}></Grid.Col>
        <Grid.Col noSpacing sm={12} lg={10} xl={8}>
          <Grid>
            <Grid.Row rowSpacing={Grid.SPACE_LARGE}>
              <Grid.Col noSpacing sm={0} lg={1} xl={2}></Grid.Col>
              <Grid.Col noSpacing sm={12} lg={10} xl={8}>
                <h2 style={{ marginTop: '8px' }}>
                  Eksempel på publikumsløsning
                </h2>
                <p>
                  Denne siden inneholder et eksempel hvordan en publikumsløsning
                  kan utformes. Hovedinnholdet justeres mot en linje i
                  venstrekant, mens enkelte elementer trekkes ut over linjen.
                </p>
              </Grid.Col>
              <Grid.Col noSpacing sm={0} lg={1} xl={2}></Grid.Col>
            </Grid.Row>
          </Grid>
          <Card
            color={Card.Color.BEIGE}
            margin={screenSize.gt.md ? 'small' : 'medium'}
          >
            <Grid padding={'0px'}>
              <Grid.Row>
                <Grid.Col noSpacing sm={0} lg={1} xl={2}>
                  <div style={{ textAlign: 'center', marginTop: '8px' }}>
                    <Icon
                      iconName="Info"
                      style={{
                        fontSize: '36px',
                        display: screenSize.lt.xl ? 'none' : 'block'
                      }}
                    />
                  </div>
                </Grid.Col>
                <Grid.Col noSpacing sm={12} lg={10} xl={8}>
                  <h3 style={{ marginTop: '14px' }}>Varsel</h3>
                  <p>
                    Dersom vi ønsker å tiltrekke brukerens oppmerksomhet kan vi
                    legge inn bokser (Card) og et passende ikon. Siden det er
                    ønskelig at innholdet inni boksen justeres pent med
                    innholdet rundt, plasserer vi det i et grid.
                  </p>
                  <br />
                </Grid.Col>
                <Grid.Col noSpacing sm={0} lg={1} xl={2}></Grid.Col>
              </Grid.Row>
            </Grid>
          </Card>
        </Grid.Col>
        <Grid.Col noSpacing sm={0} lg={1} xl={2}></Grid.Col>
      </Grid.Row>
    </Grid>
  </Typography>
  <div style={{ height: '24px' }} />
  <Grid padding={'0px'}>
    <Grid.Row>
      <Grid.Col noSpacing sm={0} lg={1} xl={2}></Grid.Col>
      <Grid.Col noSpacing sm={12} lg={10} xl={8}>
        <StepList>
          <Step
            stepTitle={titles.step1.no}
            stepId={'step-1-1'}
            actionBtn={{ text: 'Endre', ariaLabel: 'Endre jobber du?' }}
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
            actionBtn={{ text: 'Endre', ariaLabel: 'Endre sommerjobb?' }}
            gridSpacing
          >
            <p>Nei</p>
          </Step>
          <Step stepType={'result'} resultIcon={'Check'} gridSpacing>
            <h3 style={{ marginTop: '10px' }}>Resultatvisning</h3>
            <p>
              Resultatet etter stegveiviseren bør også få en del oppmerksomhet,
              og derfor større bredde enn hovedinnholdet.
            </p>
          </Step>
        </StepList>
      </Grid.Col>
      <Grid.Col noSpacing sm={0} lg={1} xl={2}></Grid.Col>
    </Grid.Row>
  </Grid>

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
