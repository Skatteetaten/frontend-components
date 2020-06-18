** Teknisk grunnkomponent for å sette Skatteetatens fonter og farge **

```js noeditor
import { MessageBar } from '@skatteetaten/frontend-components';

<MessageBar>Det finnes ingen egne eksempler for SkeBasis.</MessageBar>;
```

```js noeditor beskrivelse
import { MessageBar } from '@skatteetaten/frontend-components';
<div>
  <h3>Viktig for riktig oppsett</h3>
  <p>
    SkeBasis henter inn korrekte farger, fonter og ikoner på komponentene i
    dette biblioteket. Sørg for at denne komponenten ligger på øverste nivå for
    underliggende komponenter, slik at komponentene blir i tråd med visuell
    profil.
  </p>
  <p></p>
  <MessageBar>
    Dersom du ikke bruker denne SkeBasis i løsningn din er det sannsynlig
    komponentene vil laste inn feil ikoner og fonter enn det som er standard i
    Skatteetaten - og å bruke slike ikoner og fonter kan være et brudd på
    lisensbetingelsene.
  </MessageBar>
</div>;
```
