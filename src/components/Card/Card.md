**Innholdskort brukes til å gruppere innhold som hører sammen.**

```js
import { Card } from '@skatteetaten/frontend-components/Card';
import { Link } from '@skatteetaten/frontend-components/Link';
import { Typography } from '@skatteetaten/frontend-components/Typography';

const [state, setState] = React.useState({ title: 'Skatteoppgjøret for 2017' });

<div>
  <Card title={'Skatteoppgjør'} isExpanded={false} expand>
    <Typography>
      <p style={{ marginTop: 0 }}>
        Skatteoppgjøret er ikke klart ennå. Du finner flere opplysninger på{' '}
        <Link path={'#'} text={'min side'} />.
      </p>
    </Typography>
  </Card>
  <Card title={'Saker'} isExpanded={false} expand>
    <Typography>
      <p style={{ marginTop: 0 }}>Ingen registrerte saker.</p>
    </Typography>
  </Card>
</div>;
```

Vi viser gjerne konklusjoner og oppsummeringer i et kort grønn ramme:

```js
import { Card } from '@skatteetaten/frontend-components/Card';
import { Link } from '@skatteetaten/frontend-components/Link';
import { Typography } from '@skatteetaten/frontend-components/Typography';

const [state, setState] = React.useState({ title: 'Skatteoppgjøret for 2017' });

<div>
  <Card
    color={Card.Color.WHITE}
    border={Card.Border.GREEN_BORDER}
    title={'Skatteoppgjør'}
    titlesize="large"
  >
    <Typography>
      <p style={{ marginTop: 0 }}>
        Skatteoppgjøret er ikke klart ennå. Du finner flere opplysninger på{' '}
        <Link path={'#'} text={'min side'} />.
      </p>
    </Typography>
  </Card>
</div>;
```

Varsel i card:

```js
import { Card } from '@skatteetaten/frontend-components/Card';
import { Grid } from '@skatteetaten/frontend-components/Grid';
import { Icon } from '@skatteetaten/frontend-components/Icon';
import { TextField } from '@skatteetaten/frontend-components/TextField';
import { UseScreen } from '../../components/utils/ScreenPlugin';

const screenSize = UseScreen();

<div>
  <Card color={Card.Color.BEIGE} margin={screenSize.gt.md ? 'small' : 'medium'}>
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
          <p style={{ margin: '0px' }}>
            Dersom vi ønsker å tiltrekke brukerens oppmerksomhet kan vi legge
            inn bokser (Card) og et passende ikon. Siden det er ønskelig at
            innholdet inni boksen justeres pent med innholdet rundt, plasserer
            vi det i et grid.
          </p>
        </Grid.Col>
        <Grid.Col noSpacing sm={0} lg={1} xl={2}></Grid.Col>
      </Grid.Row>
    </Grid>
  </Card>
</div>;
```

```js noeditor beskrivelse
<>
  <h3>Gruppering av innhold skaper mer oversikt</h3>
  <p>
    {' '}
    Vi bruker innholdskort for å gruppere innhold som hører sammen. Kortene er
    formet som fargede eller innrammede bokser med tekst inni, noe som gjør
    informasjonen tydelig for brukeren. Er det mange innholdskort på skjermen
    kan det være nyttig å kollapse dem, slik at brukeren ikke ser mye og ulik
    informasjon på en gang.
  </p>
  <p>
    Er innholdet handlingsrettet, altså at brukeren skal gjøre noe, skal du
    beskrive handlingen i toppen av boksen. Les nærmere i språkprofilen om{' '}
    <a href="https://www.skatteetaten.no/stilogtone/skrive/sprakprofil/aktivt-sprak/">
      hvordan du skriver gode handlingstitler
    </a>
    .
  </p>

  <h3>Ulike farger på boksene har ulike betydninger. Vi bruker</h3>
  <ul>
    <li>Grønn: For hjelp</li>
    <li>Gul: For opplysninger og generelt innhold.</li>
    <li>Hvit med grønn ramme: For konklusjoner og betalingsopplysninger</li>
    <li>Grå: Som bakgrunnsfarge for interne løsninger</li>
  </ul>
  <p>
    Unngå å bruke forskjellig farge på ramme og bakgrunn, for eksempel grønn
    ramme og gul bakgrunn.
  </p>
</>
```

```js noeditor uu
<>
  <h3>Tips</h3>
  <ul>
    <li>Det skal kun være ett tabstopp pr ekspander.</li>
    <li>
      Ekspandere skal ha en visuell indikator på at innhold utvides/minimeres.
    </li>
    <li>
      Sjekk at elementet leses som en ekspander med skjermleser og at du
      beholder fokus når du utvider/minimerer den.
    </li>
  </ul>

  <h3>Mest relevante WCAG-krav</h3>
  <ul>
    <li>1.3.1 A, Informasjon og relasjoner</li>
    <li>4.1.2 A, Navn, rolle, verdi</li>
  </ul>

  <h3>WAI-ARIA</h3>
  <ul>
    <li>Aria-expanded brukes på knappene som utvides/minimeres.</li>
    <li>Aria-hidden brukes for å skjule ikoner for skjermlesere.</li>
  </ul>
</>
```
