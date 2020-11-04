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
      <Grid.Col sm={0} lg={1} xl={2}>
        <p style={textStyle}>Venstremarg</p>
      </Grid.Col>
      <Grid.Col sm={12} lg={10} xl={8}>
        <p style={textStyle}>Hovedinnhold</p>

        <Card
          margin="xlarge"
          color={Card.Color.WHITE}
          border={Card.Border.GREEN_BORDER}
        >
          <p style={textStyle}>Boks</p>
        </Card>
        <Card
          margin="xlarge"
          color={Card.Color.WHITE}
          border={Card.Border.GREEN_BORDER}
        >
          <p style={textStyle}>Boks</p>
        </Card>
      </Grid.Col>
      <Grid.Col sm={0} lg={1} xl={2}>
        <p style={textStyle}>Høyremarg</p>
      </Grid.Col>
    </Grid.Row>
  </Grid>

  <FooterContent>
    <p style={textStyle}>Footer</p>
  </FooterContent>
</div>;
```
