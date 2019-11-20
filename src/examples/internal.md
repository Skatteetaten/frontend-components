Venstre, kjerne og rutine:

```js
import TopBanner from '@skatteetaten/frontend-components/TopBanner';
import Card from '@skatteetaten/frontend-components/Card';

const { Layout } = require('../components/Layout/Layout.js');
const { Header } = require('../components/Layout/Header.js');
const { Main } = require('../components/Layout/Main.js');
const { Article } = require('../components/Layout/Article.js');
const { Nav } = require('../components/Layout/Nav.js');
const { Aside } = require('../components/Layout/Aside.js');

<Layout>
  <Header hiddenXlUp>
    <TopBanner compact homeText="Hjem" title="Sakstype" />
  </Header>
  <Header hiddenLgDown>
    <TopBanner homeText="Hjem" title="Sakstype" />
  </Header>
  <Main>
    <Nav lg={12} xl={2}>
      <Card title="Part" color={Card.Color.GREEN}>
        Innhold
      </Card>
    </Nav>
    <Article lg={12} xl={8}>
      <Card title="Kjerne 1" color={Card.Color.GREY}>
        Innhold
      </Card>
    </Article>
    <Aside lg={12} xl={2}>
      <Card title="Rutiner" color={Card.Color.BEIGE}>
        Innhold
      </Card>
    </Aside>
  </Main>
</Layout>;
```

Kjerne og rutine:

```js
import TopBanner from '@skatteetaten/frontend-components/TopBanner';
import Card from '@skatteetaten/frontend-components/Card';

const { Layout } = require('../components/Layout/Layout.js');
const { Header } = require('../components/Layout/Header.js');
const { Main } = require('../components/Layout/Main.js');
const { Article } = require('../components/Layout/Article.js');
const { Nav } = require('../components/Layout/Nav.js');
const { Aside } = require('../components/Layout/Aside.js');

<Layout>
  <Header hiddenXlUp>
    <TopBanner compact homeText="Hjem" title="Sakstype" />
  </Header>
  <Header hiddenLgDown>
    <TopBanner homeText="Hjem" title="Sakstype" />
  </Header>
  <Main>
    <Article lg={12} xl={10}>
      <Card title="Kjerne 1" color={Card.Color.GREY}>
        Innhold
      </Card>
    </Article>
    <Aside lg={12} xl={2}>
      <Card title="Rutiner" color={Card.Color.BEIGE}>
        Innhold
      </Card>
    </Aside>
  </Main>
</Layout>;
```

Venstre, kjerne:

```js
import TopBanner from '@skatteetaten/frontend-components/TopBanner';
import Card from '@skatteetaten/frontend-components/Card';

const { Layout } = require('../components/Layout/Layout.js');
const { Header } = require('../components/Layout/Header.js');
const { Main } = require('../components/Layout/Main.js');
const { Article } = require('../components/Layout/Article.js');
const { Nav } = require('../components/Layout/Nav.js');
const { Aside } = require('../components/Layout/Aside.js');

<Layout>
  <Header hiddenXlUp>
    <TopBanner compact homeText="Hjem" title="Sakstype" />
  </Header>
  <Header hiddenLgDown>
    <TopBanner homeText="Hjem" title="Sakstype" />
  </Header>

  <Main>
    <Nav lg={12} xl={2}>
      <Card title="Part" titlesize="large" color={Card.Color.GREEN}>
        Innhold
      </Card>
    </Nav>
    <Article lg={12} xl={10}>
      <Card title="Navn på arbeidsoppgave" color={Card.Color.GREY}>
        Innhold
      </Card>
      <Card
        title="Delseksjon i arbeidsoppgave"
        titlesize="large"
        color={Card.Color.GREY}
      >
        Innhold
      </Card>
      <Card
        title="Delseksjon i arbeidsoppgave"
        titlesize="large"
        color={Card.Color.GREY}
      >
        Innhold
      </Card>
    </Article>
  </Main>
</Layout>;
```
