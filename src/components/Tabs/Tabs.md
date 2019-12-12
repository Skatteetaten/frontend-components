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
    Innhold #1
  </TabItem>
  <TabItem headerText="Mine oppgaver" itemCount={2} itemKey="itemKey-2">
    Innhold #2
  </TabItem>
  <TabItem headerText="Andres oppgaver" itemCount={67} itemKey="itemKey-3">
    Innhold #3
  </TabItem>
</Tabs>;
```

```js noeditor uu
<h3>Huskeliste</h3>

<p>Ikke bruk tabs til å linke til andre sider.</p>
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
