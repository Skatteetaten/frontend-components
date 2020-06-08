** Teknisk grunnkomponent for å sette Skatteetatens fonter og farge **

```js noeditor
import { MessageBar } from '@skatteetaten/frontend-components';

<MessageBar>Det finnes ingen egne eksempler for SkeBasis.</MessageBar>;
```

```js noeditor beskrivelse
import { MessageBar } from '@skatteetaten/frontend-components';
<div>
  <h3>Teknisk komponent for oppsett</h3>
  <p>
    SkeBasis henter inn korrekte farger, fonter og ikoner på komponentene i
    dette biblioteket. Sørg for at denne komponenten ligger øverste nivå og
    underliggende komponenter slik at komponentene blir stilet i henhold til
    visuell profil.
  </p>
  <p></p>
  <MessageBar>
    Dersom man ikke bruker denne komponenten er det sannsynlig at
    standard-ikoner og fonter brukes i stedet - og å bruke disse kan være et
    brudd på lisensbetingelsene.
  </MessageBar>
</div>;
```
