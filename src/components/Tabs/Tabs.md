```js noeditor
import MessageBar from '@skatteetaten/frontend-components/MessageBar';

<MessageBar>
  Se også <a href="#tabitem">TabItem</a> som beskriver hver enkelt fane og
  innholdet i den.
</MessageBar>;
```

** Tabs brukes til å veksle mellom visninger innenfor samme kontekst, og når brukerne ikke trenger å se innholdet fra de ulike visningene samtidig. **

```js
import Tabs from '@skatteetaten/frontend-components/Tabs';
import TabItem from '@skatteetaten/frontend-components/Tabs/TabItem';

<Tabs>
  <TabItem
    headerText="Tilgjengelige oppgaver"
    itemCount={23}
    itemKey="itemKey-1"
  >
    Tilgjengelige oppgaver
  </TabItem>
  <TabItem headerText="Mine oppgaver" itemCount={2} itemKey="itemKey-2">
    Mine oppgaver
  </TabItem>
  <TabItem headerText="Andres oppgaver" itemCount={67} itemKey="itemKey-3">
    Andres oppgaver
  </TabItem>
</Tabs>;
```

Tabs med border og underline for å fremheve klikkbare elementer:

```js
import Card from '@skatteetaten/frontend-components/Card';
import Tabs from '@skatteetaten/frontend-components/Tabs';
import TabItem from '@skatteetaten/frontend-components/Tabs/TabItem';

<Card>
  <Tabs border={true}>
    <TabItem
      headerText="Tilgjengelige oppgaver"
      itemCount={23}
      itemKey="itemKey-1"
    >
      Alle tilgjengelige oppgaver
    </TabItem>
    <TabItem headerText="Mine oppgaver" itemCount={2} itemKey="itemKey-2">
      Mine oppgaver
    </TabItem>
    <TabItem headerText="Andres oppgaver" itemCount={67} itemKey="itemKey-3">
      Andres oppgaver
    </TabItem>
  </Tabs>
</Card>;
```

```js
import Card from '@skatteetaten/frontend-components/Card';
import Tabs from '@skatteetaten/frontend-components/Tabs';
import TabItem from '@skatteetaten/frontend-components/Tabs/TabItem';

<Card>
  <Tabs underline={true}>
    <TabItem
      headerText="Tilgjengelige oppgaver"
      itemCount={23}
      itemKey="itemKey-1"
    >
      Alle tilgjengelige oppgaver
    </TabItem>
    <TabItem headerText="Mine oppgaver" itemCount={2} itemKey="itemKey-2">
      Mine oppgaver
    </TabItem>
    <TabItem headerText="Andres oppgaver" itemCount={67} itemKey="itemKey-3">
      Andres oppgaver
    </TabItem>
  </Tabs>
</Card>;
```

```js noeditor uu
<h3>Tips</h3>
<ul>
<li>Ikke bruk tabs til å linke til andre sider.</li>
<li>Standard fanefunksjonalitet skal kun ha ett tabstopp på fanevalgene. Piltastene skal brukes til å bytte fane.</li>
<li>OBS: Faner SKAL kodes med WAI-ARIA for skjermlesere.</li>
</ul>

<h3>Mest relevante WCAG-krav</h3>
<ul>
<li>1.3.1 A, Informasjon og relasjoner</li>
<li>4.1.2 A, Navn, rolle, verdi</li>
</ul>

<h3>WAI-ARIA</h3>
<ul>
<li>Role=tablist, role=tab og role=tabpanel brukes for å definere faneelementene for skjermleser.</li>
<li>Aria-selected brukes for gi indikere valgt fane for skjermleser.</li>
<li>Aria-controls brukes for noen skjermlesere enkelt kan hoppe til faneinnholdet</li>
<li>Aria-labelledby brukes for gi faneinnholdet en relasjon til fanetittel.</li>
</ul>
```

```js noeditor beskrivelse
  <h3>Innhold</h3>
  <p>
    Etterstreb logisk inndeling av innholdet slik at brukerne enkelt kan forutse
    hva som er innholdet i en fane. Bruk korte tekster på titlene - og unngå kun STORE BOKSTAVER.
  </p>
  <h3>Plassering</h3>

  <p>
    Plasser Tabs oppe på siden, ikke nede eller på siden. Bruk kun én rad med faner om gangen - det er lett å miste oversikten når man
    har Tabs over flere rader.
  </p>

  <h3>Ikke som navigasjon</h3>
  <p>Ikke bruk Tabs-komponentent til å navigere til mellom ulike sider. Den er laget for å bytte visning innad på en side.</p>

```
