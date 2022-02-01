```js noeditor
import { Card } from '@skatteetaten/frontend-components/Card';

<div>
  <Card
    title="Hovedregler for sidelayout"
    color={Card.Color.WHITE}
    border={Card.Border.YELLOW_BORDER}
    titlesize="x-large"
    margin="large"
  >
    <p style={{ marginTop: '0' }}>
      Oppbygging av siden skal gjøres på en slik måte at den fungerer godt
      uavhengig av skjermstørrelse (responsiv design). I publikumsløsninger er
      dette viktig fordi mange bruker løsningene våre på mobil og nettbrett,
      ikke bare på PC. I interne løsninger er det viktig fordi saksbehandlerne
      ofte har flere vinduer ved siden av hverandre på skjermen.
      <ul>
        <li>Publikumsløsninger skal alltid ha topp og bunn.</li>
        <li>
          Legg hovedinnholdet i én kolonne midt på siden og juster teksten og
          visuelle elementer i hovedinnholdet mot en vertikal linje.
        </li>
        <li>
          Bokser og rammer kan gis ekstra oppmerksomhet ved å trekke dem utenfor
          den vertikale linjen.
        </li>
        <li>
          Bredden på hovedinnhold, bokser og rammer skal fungere godt på den
          skjermen de vises. Bruk solide marger til høyre og venstre når
          skjermbredden er stor, og reduser dem når skjermbredden minker.
        </li>
      </ul>
    </p>
  </Card>
</div>;
```

### Eksempel på sidelayout for publikumsløsning

```js
import { useState } from 'react';

import { Card } from '@skatteetaten/frontend-components/Card';
import { FooterContent } from '@skatteetaten/frontend-components/FooterContent';
import { Grid } from '@skatteetaten/frontend-components/Grid';
import { Icon } from '@skatteetaten/frontend-components/Icon';
import { LanguagePicker } from '@skatteetaten/frontend-components/TopStripe/LanguagePicker';
import { Link } from '@skatteetaten/frontend-components/Link';
import { TextField } from '@skatteetaten/frontend-components/TextField';
import { Step } from '@skatteetaten/frontend-components/StepList/Step';
import { StepList } from '@skatteetaten/frontend-components/StepList/StepList';
import { TopBanner } from '@skatteetaten/frontend-components/TopBanner';
import { TopStripe } from '@skatteetaten/frontend-components/TopStripe';
import { TopStripeMenu } from '@skatteetaten/frontend-components/TopStripe/TopStripeMenu';
import { TopStripeButton } from '@skatteetaten/frontend-components/TopStripe/TopStripeButton';
import { Typography } from '@skatteetaten/frontend-components/Typography';

import { UseScreen } from '../../components/utils/ScreenPlugin';

const [language, setLanguage] = useState('nb');

const screenSize = UseScreen();

const links = [
  {
    text: 'Beregn reisefradrag',
    path: '#stepList',
  },
  {
    text: 'Oversikt over alle fradrag',
    path: '#stepList',
  },
];

const titles = {
  step1: {
    no: 'Jobber du?',
    en: 'Are you a wage earner doing paid work?',
  },
  step2: {
    no: 'Sommerjobb?',
    en: 'Summerjob?',
  },
  step3: {
    no: 'Du er ikke pendler',
    en: 'You are not a commuter.',
  },
};

const textStyle = {
  fontSize: '12px',
  textAlign: 'center',
  textTransform: 'uppercase',
};

const white = {
  color: '#ffffff',
};

const leadtextStyles = {
  fontSize: '14px',
  textAlign: 'right',
  fontWeight: '400',
  margin: '8px 13% 8px 0',
};

<div>
  <TopBanner
    external
    topStripe={
      <TopStripe>
        <Link
          path={'#main-content-id'}
          text={'Hopp til hovedinnhold'}
          skipLink
        />
        <Link
          path={'https://www.skatteetaten.no/kontakt/'}
          text={'Kontakt oss'}
          placement="before"
        />
        <TopStripeMenu
          closeMenuAriaLabel="Lukk endre skriftstørrelse"
          title={'Endre skriftstørrelse'}
          showOnMobile={false}
          contentIsMenu={false}
        >
          <div style={{ fontSize: '24px', marginTop: '8px' }}>
            Hold Ctrl-tasten nede (Cmd-tasten på Mac). Trykk på + for å
            forstørre eller - for å forminske.
          </div>
        </TopStripeMenu>
        <LanguagePicker
          selectedLanguage={language}
          setLanguage={setLanguage}
          showOnMobile={true}
          showSami={true}
        />

        <Link path={'#link'} text={'Logg inn'} placement="before" />
      </TopStripe>
    }
    title={'Side for publikum'}
    homeText={'Tilbake til skatteetaten.no'}
  />
  <main aria-labelledby="main_heading" tabindex="-1">
    <Typography>
      <Grid padding={'0px'}>
        <Grid.Row>
          <Grid.Col noSpacing sm={0} lg={1} xl={2}></Grid.Col>
          <Grid.Col noSpacing sm={12} lg={10} xl={8}>
            <Grid>
              <Grid.Row rowSpacing={Grid.SPACE_LARGE}>
                <Grid.Col noSpacing sm={0} lg={1} xl={2}></Grid.Col>
                <Grid.Col noSpacing sm={12} lg={10} xl={8}>
                  <h2 id="main_heading" style={{ marginTop: '8px' }}>
                    Eksempel på publikumsløsning
                  </h2>
                  <p>
                    Denne siden inneholder et eksempel hvordan en
                    publikumsløsning kan utformes. Hovedinnholdet justeres mot
                    en linje i venstrekant, mens enkelte elementer trekkes ut
                    over linjen.
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
                <Grid.Row rowSpacing={Grid.SPACE_LARGE}>
                  <Grid.Col noSpacing sm={0} lg={1} xl={2}>
                    <div
                      style={{
                        textAlign: 'right',
                        marginTop: '-4px',
                        marginRight: '16px',
                      }}
                    >
                      <Icon
                        iconName="Info"
                        style={{
                          fontSize: '36px',
                          display: screenSize.lt.xl ? 'none' : 'block',
                        }}
                      />
                    </div>
                  </Grid.Col>
                  <Grid.Col noSpacing sm={12} lg={10} xl={8}>
                    <h3 style={{ marginTop: '0px' }}>Varsel</h3>
                    <p>
                      Dersom vi ønsker å tiltrekke brukerens oppmerksomhet kan
                      vi legge inn bokser (Card) og et passende ikon. Siden det
                      er ønskelig at innholdet inni boksen justeres pent med
                      innholdet rundt, plasserer vi det i et grid.
                    </p>
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
    <Grid padding={'0px'}>
      <Grid.Row rowSpacing={Grid.SPACE_NONE}>
        <Grid.Col noSpacing sm={0} lg={1} xl={2}></Grid.Col>
        <Grid.Col noSpacing sm={12} lg={10} xl={8}>
          <p style={leadtextStyles}>Alle felt må fylles ut</p>
          <StepList>
            <Step
              stepTitle={titles.step1.no}
              stepId={'step-1-1'}
              headingLevel={3}
              actionBtn={{
                text: 'Endre',
                icon: 'Edit',
                ariaLabel: 'Endre jobber du?',
              }}
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
              headingLevel={3}
              actionBtn={{
                text: 'Endre',
                icon: 'Edit',
                ariaLabel: 'Endre sommerjobb?',
              }}
              gridSpacing
            >
              <p>Nei</p>
            </Step>
            <Step stepType={'result'} resultIcon={'Check'} gridSpacing>
              <Typography>
                <div style={{ marginTop: '8px', marginBottom: '8px' }}>
                  <h3 style={{ marginTop: '0' }}>Resultatvisning</h3>
                  <p>
                    Resultatet etter stegveiviseren bør også få en del
                    oppmerksomhet, og derfor større bredde enn hovedinnholdet.
                  </p>
                </div>
              </Typography>
            </Step>
          </StepList>
        </Grid.Col>
        <Grid.Col noSpacing sm={0} lg={1} xl={2}></Grid.Col>
      </Grid.Row>
    </Grid>
  </main>
  <FooterContent>
    <Grid>
      <Grid.Row>
        <Grid.Col sm={0} lg={1} xl={2}></Grid.Col>
        <Grid.Col noSpacing sm={12} lg={10} xl={8}>
          <Grid>
            <Grid.Row>
              <Grid.Col noSpacing sm={0} lg={1} xl={2}>
                <FooterContent.Logo />
              </Grid.Col>
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
