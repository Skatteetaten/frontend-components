```js noeditor
import { MessageBar } from '@skatteetaten/frontend-components';

<MessageBar type={MessageBar.Type.info}>
  NB: Vær ekstra oppmerksom på kravene til universell utforming når du benytter
  denne komponenten.
</MessageBar>;
```

** Når hovedhandlingen er navigasjon til en annen side **

Denne komponenten brukes når du ønsker å lede oppmerksomhet mot en enkelt hovedhandling, og når utførselsen av denne hovedhandlingen skjer på en annen side. Et slikt eksempel er «Se og endre skattekort» på «Min side»: Da vil løsningen for å endre skattekort åpnes i en ny side.

Det er en vedtatt designretningslinje i etaten, at slike hovedhandlinger skal se ut som knapper, og denne komponenten sikrer god universell utforming i slike situasjoner.

```js
import { ButtonLink } from '@skatteetaten/frontend-components';

<ButtonLink path={'#'} text="Se og endre skattekort" />;
```

```js noeditor beskrivelse
<h2>Tekst på knappen</h2>
<p>
Knappeteksten må tydelig fortelle hva knappen gjør, siden denne teksten kan
bli brukt av skjermleserbrukere når de søker etter den.
</p>
<h2>Ved klikk</h2>

<p>
Når knappen trykkes på tas brukeren til en ny side.
En a-tag med role=button vil fremstå som en knapp for skjermleserbrukere,
men selve funksjonen - at brukeren kommer til en ny side - vil være som før.
</p>


```

```js noeditor uu
import { Link } from '@skatteetaten/frontend-components';
<div>
  <h2>Knapp eller lenke</h2>
  <p>
    Når noe ser ut som en knapp, bør det også være en knapp for
    skjermleserbrukere. Hvis for eksempel en svaksynt ringer førstelinje og
    ønsker veiledning eller spør en kollega, vil de mest sannsynlig bli henvist
    til knappen med en gitt tekst. Da kan en skjermleserbruker bruke
    hurtigtaster for å gå til knappen. Med role="button" vil komponenten kun
    dukke opp som en knapp, og <i>ikke</i> i en liste over lenker.
  </p>
  <p>En skjermleserbruker har to måter å lete etter innhold på siden: </p>
  <ul>
    <li>
      Vanlig søk (Ctrl + f): Da søker man først og fremst etter teksten på
      lenken eller knappen, som betyr at ordlyden er viktig.
    </li>
    <li>
      Få skjermleseren til å lage en liste over knapper eller lenker på siden,
      og bla gjennom denne. Det er ikke uvanlig at sider har svært mange lenker
      eller knapper, og dette gjør det listen lang å bla gjennom. I slike
      tilfeller er det rimelig å anta at brukeren forsøker å søke først.
    </li>
  </ul>

  <h2>WAI-ARIA</h2>
  <p>Role=button brukes fordi lenken visuelt ser ut en knapp.</p>
</div>;
```
