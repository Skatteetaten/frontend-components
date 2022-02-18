**ScrollToTopButton (Gå til toppen): brukes til å gå til toppen av siden.**

```js noeditor
import { MessageBar } from '@skatteetaten/frontend-components/MessageBar';

<MessageBar>Rull nedover på siden for å se knappen.</MessageBar>;
```

```js
import { ScrollToTopButton } from '@skatteetaten/frontend-components/ScrollToTopButton';

<div>
  <ScrollToTopButton label={'Til toppen'} />
</div>;
```

```js noeditor beskrivelse
<>
  <h3>Knapp for å navigere til toppen av siden</h3>
  <p>
    ScrollToTopButton bruker du på lange sider når det er nyttig for brukeren å
    gå tilbake til toppen av siden. På store skjermer (1366px og opp) plasseres
    knappen nede til venstre. Dersom knappen dekker annet innhold kan du
    overstyre standardplasseringen.
  </p>
</>
```

```js noeditor uu
<>
  <h3>Tips</h3>

  <ul>
    <li>
      Må kunne brukes med tastatur og flytte tastaturfokus til toppen, ikke bare
      rulle.
    </li>
    <li>
      Nettleseren skal ikke bare rulle til toppen, men også tastaturfokus skal
      også flyttes til toppen.
    </li>
    <li>
      Skjermleserbrukere vil hovedsakelig bruke hurtigtaster for å flytte til
      toppen.
    </li>
    <li>Det er ikke noe krav å ha slik funksjonalitet</li>
  </ul>

  <h3>Mest relevante WCAG-krav</h3>

  <ul>
    <li>2.1.1 A, Tastatur</li>
  </ul>

  <h3>WAI-ARIA</h3>

  <ul>
    <li>
      Aria-hidden="true" brukes for å skjule funksjonaliteten for skjermlesere.
    </li>
    <li>
      All annen aria-koding er overflødig pga. at hele knappen er skjult for
      skjermlesere.
    </li>
  </ul>
</>
```
