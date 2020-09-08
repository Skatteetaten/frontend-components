```js noeditor
import MessageBar from '@skatteetaten/frontend-components/MessageBar';

<MessageBar type={MessageBar.Type.info}>
  NB: Vær ekstra oppmerksom på kravene til universell utforming når du benytter
  denne komponenten.
</MessageBar>;
```

** Når hovedhandlingen er navigasjon til en annen side **

```js
import ButtonLink from '@skatteetaten/frontend-components/ButtonLink';

<ButtonLink path={'#'} text="Se og endre skattekort" />;
```

```js noeditor beskrivelse
<h3>Knapp der hovedhandlingen tar brukeren videre til nytt område</h3>
<p>
Knappelenken leder oppmerksomheten til brukeren mot en enkelt hovedhandling, der utførelsen av denne handlingen skjer på en annen side.
I designretningslinjene til Skatteetaten, har vi bestemt at hovedhandlinger skal se ut som knapper.
Denne komponenten sikrer god universell utforming i slike situasjoner.
</p>
<p>
Et eksempel er «Se og endre skattekort» på Skatteetaten.no.
Når brukeren klikker på denne, vil løsningen for å endre skattekortet bli åpnet i en ny side.
</p>

<h3>Knappeteksten må fortelle hva knappen gjør</h3>

<p>
Teksten på knappelenken skal lede brukeren til handlingen.
Denne teksten blir brukt av skjermleserbrukere når de søker etter den. Det er derfor svært viktig at knappeteksten tydelig forteller hva knappen gjør.
</p>
<p>
    Se{' '}
    <a href="https://www.skatteetaten.no/stilogtone/skrive/skriveregler/knapper/">
      skrivereglene
    </a>{' '}
    for hvordan skrive på knapper.
  </p>

<h3>En lenke som ser ut som en knapp</h3>
<p>
ButtonLink har en a-tag med role=button, som gjør at den fremstår som en knapp for skjermleserbrukere.
Komponenten vil samtidig ha funksjonen med at den tar brukeren til en ny side ved et klikk.
</p>
```

```js noeditor uu
<div>
  <h3>Knapp eller lenke</h3>
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

  <h3>WAI-ARIA</h3>
  <p>Role=button brukes fordi lenken visuelt ser ut en knapp.</p>
</div>
```
