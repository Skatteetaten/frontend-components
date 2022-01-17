Venstre, kjerne og rutine:

```js
import { Article } from '@skatteetaten/frontend-components/Article';
import { Aside } from '@skatteetaten/frontend-components/Aside';
import { Card } from '@skatteetaten/frontend-components/Card';

import { Header } from '@skatteetaten/frontend-components/Header';
import { Layout } from '@skatteetaten/frontend-components/Layout';
import { Main } from '@skatteetaten/frontend-components/Main';
import { Nav } from '@skatteetaten/frontend-components/Nav';
import { TopBanner } from '@skatteetaten/frontend-components/TopBanner';

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
import { Article } from '@skatteetaten/frontend-components/Article';
import { Aside } from '@skatteetaten/frontend-components/Aside';
import { Card } from '@skatteetaten/frontend-components/Card';
import { Header } from '@skatteetaten/frontend-components/Header';
import { Layout } from '@skatteetaten/frontend-components/Layout';
import { Main } from '@skatteetaten/frontend-components/Main';
import { Nav } from '@skatteetaten/frontend-components/Nav';
import { TopBanner } from '@skatteetaten/frontend-components/TopBanner';

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
import {
  TopBanner,
  Card,
  Layout,
  Header,
  Main,
  Article,
  Nav,
  Aside,
} from '@skatteetaten/frontend-components';

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
