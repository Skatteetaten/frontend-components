```js noeditor
import Card from '@skatteetaten/frontend-components/Card';
import Grid from '@skatteetaten/frontend-components/Grid';
import Icon from '@skatteetaten/frontend-components/Icon';
import NavigationTile from '@skatteetaten/frontend-components/NavigationTile';

<div style={{ marginBottom: '60px', marginTop: '30px' }}>
  <Card margin="large" color={Card.BEIGE}>
    <Grid>
      <Grid.Row>
        <Grid.Col lg={1} />
        <Grid.Col hiddenMdDown lg={1}>
          <Icon
            iconName="Forum"
            ariaLabel="Ikon med snakkebobler"
            style={{ color: '#1d1d1d', fontSize: '40px', marginTop: '10px' }}
          />
        </Grid.Col>
        <Grid.Col lg={8}>
          <p
            style={{
              marginBottom: '10px',
              fontStyle: 'italic',
              color: '#1d1d1d',
              fontWeight: '400',
              fontSize: '18px'
            }}
          >
            Med Designsystemet slipper vi å tenke så mye på designreglene til
            Skatteetaten, og utviklingsjobben vår blir mye lettere.{' '}
          </p>
          <p
            style={{
              marginBottom: '10px',
              color: '#1d1d1d',
              fontWeight: '400',
              fontSize: '18px',
              textAlign: 'right'
            }}
          >
            – utvikler i Skatteetaten
          </p>
        </Grid.Col>
        <Grid.Col lg={2} />
      </Grid.Row>
    </Grid>
  </Card>
</div>;
```

```js noeditor
import NavigationTile from '@skatteetaten/frontend-components/NavigationTile';

const contents = [
  {
    id: 'my-id-1',
    to: '#section-kom-i-gang-for-utviklere',
    title: 'For utviklere',
    description: 'Kom i gang med designsystemet i din løsning',
    icon: 'hammer'
  },
  {
    id: 'my-id-2',
    to: '#section-kom-i-gang-for-designere',
    title: 'For designere',
    description: 'Kom i gang med sketch-prototyper og design',
    icon: 'bookOpen'
  }
];
<div>
  <NavigationTile contents={contents} />
</div>;
```
