```js noeditor
import { MessageBar } from '@skatteetaten/frontend-components/MessageBar';

<MessageBar>
  Se også <a href="#tabitem">TabItem</a> som beskriver hver enkelt fane og
  innholdet i den.
</MessageBar>;
```

**Tabs brukes til å veksle mellom visninger innenfor samme kontekst, og når brukerne ikke trenger å se innholdet fra de ulike visningene samtidig.**

```js
import { Tabs } from '@skatteetaten/frontend-components/Tabs';
import { TabItem } from '@skatteetaten/frontend-components/Tabs/TabItem';

<Tabs underline={true}>
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

Tabs med ytterstrek når brukt på en grå flate:

```js
import { Card } from '@skatteetaten/frontend-components/Card';
import { Tabs } from '@skatteetaten/frontend-components/Tabs';
import { TabItem } from '@skatteetaten/frontend-components/Tabs/TabItem';

<Card title="Arbeidsliste" color={Card.Color.GREY}>
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

```js noeditor uu
<>
  <h3>Tips</h3>
  <ul>
    <li>Ikke bruk tabs til å linke til andre sider.</li>
    <li>
      Standard fanefunksjonalitet skal kun ha ett tabstopp på fanevalgene.
      Piltastene skal brukes til å bytte fane.
    </li>
    <li>OBS: Faner SKAL kodes med WAI-ARIA for skjermlesere.</li>
  </ul>

  <h3>Mest relevante WCAG-krav</h3>
  <ul>
    <li>1.3.1 A, Informasjon og relasjoner</li>
    <li>4.1.2 A, Navn, rolle, verdi</li>
  </ul>

  <h3>WAI-ARIA</h3>
  <ul>
    <li>
      Role=tablist, role=tab og role=tabpanel brukes for å definere
      faneelementene for skjermleser.
    </li>
    <li>Aria-selected brukes for gi indikere valgt fane for skjermleser.</li>
    <li>
      Aria-controls brukes for noen skjermlesere enkelt kan hoppe til
      faneinnholdet
    </li>
    <li>
      Aria-labelledby brukes for gi faneinnholdet en relasjon til fanetittel.
    </li>
  </ul>
</>
```

```js noeditor beskrivelse
<>
  <p>
    Vi kan bruke faner i toppen av en løsning, for å dele informasjonen inn i
    ulike områder eller seksjoner. Dette skaper oversikt og gjør det lettere for
    brukeren å bla i de ulike toppfanene og kun se ett aktuelt tema om gangen.
    Løsningen i designsystemet, som du leser i nå, er et eksempel på bruk av
    Tabs.
  </p>
  <h3>Slik bruker du tabs:</h3>
  <ul>
    <li>
      Innholdet må ha logisk inndeling. Etterstreb en logisk inndeling av
      innholdet slik at brukeren enkelt kan forutse hvilken type informasjon som
      ligger i fanen.
    </li>
    <li>
      Bruk korte tekster på titlene – og unngå hele ord med store bokstaver.
    </li>
    <li>
      Plasser arkfanene må på toppen, ikke nede eller til venstre eller høyre.
    </li>
    <li>
      Bruk kun én rad med faner om gangen for å gjøre det tydelig for brukeren.
    </li>
    <li>
      {' '}
      Arkfanene skal hjelpe brukeren å bytte visning innad på en side og ikke
      for å navigere mellom ulike sider.
    </li>
  </ul>
</>
```
