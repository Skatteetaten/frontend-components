import React from 'react';

import { Card } from '../../components/Card';
import { Grid } from '../../components/Grid';
import { Link } from '../../components/Link';

import { Icon } from '../../components/Icon';
import { NavigationTile } from '../../components/NavigationTile';
import { NavigationContent } from '../../components/NavigationTile/NavigationContent';

function Forside(props) {
  return (
    <div style={{ marginBottom: '56px', marginTop: '30px' }}>
      <h1 style={{ textAlign: 'center', marginBottom: '56px' }}>
        Legacy designkomponenter
      </h1>
      <Card color={Card.Color.RED} className="deprecated-card">
        <Grid padding={'0px'}>
          <Grid.Row rowSpacing={Grid.SPACE_LARGE}>
            <Grid.Col noSpacing hiddenLgDown sm={0} lg={1} xl={2}>
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
                  }}
                />
              </div>
            </Grid.Col>
            <Grid.Col noSpacing sm={12} lg={10} xl={8}>
              <h2 style={{ marginTop: '0px' }}>Komponentene er utgått</h2>
              <p>
                Vi har laget et nytt designsystem som erstatter innholdet på
                disse sidene. Komponentene blir ikke aktivt vedlikeholdt. Gå
                heller til{' '}
                <Link
                  path={
                    'https://www.skatteetaten.no/stilogtone/designsystemet/'
                  }
                  text={'designsystemet på stil og tone'}
                />{' '}
                og bruk komponenter derfra.
              </p>

              <p>
                Hvis du lurer på noe kan du alltid spørre oss i
                Designsystem-kanalen.
              </p>
            </Grid.Col>
            <Grid.Col noSpacing sm={0} lg={1} xl={2}></Grid.Col>
          </Grid.Row>
        </Grid>
      </Card>

      <NavigationTile>
        <NavigationContent
          icon={'bookOpen'}
          heading={'Kom i gang med migrering'}
          to={'#section-kom-i-gang-med-migrering'}
          key={'migrering'}
        >
          Overordnet om hvordan du migrerer til nytt designsystem
        </NavigationContent>
        <NavigationContent
          icon={'hammer'}
          heading={'Installasjon'}
          to={'#section-installasjon'}
          key={'for-utviklere'}
        >
          Kommandoer for å installere legacy-komponeter
        </NavigationContent>
      </NavigationTile>
    </div>
  );
}

export default Forside;
