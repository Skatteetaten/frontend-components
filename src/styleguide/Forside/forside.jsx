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
        Designe og utvikle
      </h1>
      <Card color={Card.Color.RED}>
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
              <h2 style={{ marginTop: '0px' }}>
                Komponentene på disse sidene er utdaterte
              </h2>
              <p>
                Vi har laget et nytt designsystem som erstatter innholdet på
                disse sidene. Du bør heller gå til{' '}
                <Link
                  path={
                    'https://www.skatteetaten.no/stilogtone/designsystemet/'
                  }
                  text={'de nye sidene til designsystemet'}
                />{' '}
                og velge komponenter derfra.
              </p>

              <p>
                Hvis du lurer på noe kan du alltid spørre oss i
                Designsystem-kanalen i Teams.
              </p>
            </Grid.Col>
            <Grid.Col noSpacing sm={0} lg={1} xl={2}></Grid.Col>
          </Grid.Row>
        </Grid>
      </Card>

      <NavigationTile>
        <NavigationContent
          icon={'hammer'}
          heading={'For utviklere'}
          to={'#section-kom-i-gang-for-utviklere'}
          key={'for-utviklere'}
        >
          Kom i gang med designsystemet i din løsning
        </NavigationContent>
        <NavigationContent
          icon={'bookOpen'}
          heading={'For designere'}
          to={'#section-kom-i-gang-for-designere'}
          key={'for-designere'}
        >
          Kom i gang med Figma-prototyper og design
        </NavigationContent>
      </NavigationTile>
    </div>
  );
}

export default Forside;
