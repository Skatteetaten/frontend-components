```js
import TopBanner from '@skatteetaten/frontend-components/TopBanner';
import Grid from '@skatteetaten/frontend-components/Grid';
import Card from '@skatteetaten/frontend-components/Card';
import FooterContent from '@skatteetaten/frontend-components/FooterContent';

const { Layout } = require('../components/Layout/Layout.js');
const { Header } = require('../components/Layout/Header.js');
const { Main } = require('../components/Layout/Main.js');
const { Article } = require('../components/Layout/Article.js');

const DemoBlock = ({ children }) => (
  <div
    style={{
      border: '1px solid',
      textAlign: 'center',
      color: '#000'
    }}
  >
    {children}
  </div>
);
<Layout>
  <Header hiddenXlUp>
    <TopBanner
      external
      compact
      homeText="Til skatteetaten.no(d)"
      title="Ny publikumsløsning"
    />
  </Header>
  <Header hiddenLgDown>
    <TopBanner external homeText="Til skatteetaten.no" title="Betale avgift" />
  </Header>
  <Main>
    <Article
      xl={8}
      lg={10}
      md={12}
      sm={12}
      centered
      rowSpacing={Grid.SPACE_MEDIUM}
    >
      <Card
        titlesize="large"
        title="Tittel 1"
        color={Card.Color.BEIGE}
        marginbottom="16px"
      >
        Innhold
      </Card>
      <Card color={Card.Color.WHITE} marginbottom="16px">
        <p style={{ marginTop: '-16px', marginBottom: '0' }}>
          Innhold uten tittel
        </p>
      </Card>
    </Article>
  </Main>
  <FooterContent>Innhold i footer</FooterContent>
</Layout>;
```
