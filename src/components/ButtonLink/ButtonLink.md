```js noeditor
import { MessageBar } from '@skatteetaten/frontend-components/MessageBar';

<MessageBar type={MessageBar.Type.info}>
  NB: Vær ekstra oppmerksom på kravene til universell utforming når du benytter
  denne komponenten.
</MessageBar>;
```

**ButtonLink (Knappelenke): brukes når hovedhandlingen er navigasjon til en annen side**

```js
import { ButtonLink } from '@skatteetaten/frontend-components/ButtonLink';

<ButtonLink path={'#'} text="Se og endre skattekort" />;
```

```js noeditor beskrivelse
<div>
  <h3>Knapp der hovedhandlingen tar brukeren videre til nytt område</h3>
  <p>
    Knappelenken leder oppmerksomheten til brukeren mot en enkelt hovedhandling,
    der utførelsen av denne handlingen skjer på en annen side. I
    designretningslinjene til Skatteetaten, har vi bestemt at hovedhandlinger
    skal se ut som knapper. Denne komponenten sikrer god universell utforming i
    slike situasjoner.
  </p>
  <p>
    Et eksempel er «Se og endre skattekort» på Skatteetaten.no. Når brukeren
    klikker på denne, vil løsningen for å endre skattekortet bli åpnet i en ny
    side.
  </p>

  <h3>Knappeteksten må fortelle hva knappen gjør</h3>

  <p>
    Teksten på knappelenken skal lede brukeren til handlingen. Denne teksten
    blir brukt av skjermleserbrukere når de søker etter den. Det er derfor svært
    viktig at knappeteksten tydelig forteller hva knappen gjør.
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
    ButtonLink har en a-tag med role=button, som gjør at den fremstår som en
    knapp for skjermleserbrukere. Komponenten vil samtidig ha funksjonen med at
    den tar brukeren til en ny side ved et klikk.
  </p>
</div>
```

```js noeditor uu
<>
  <h3>Knapp eller lenke</h3>
  <p>
    Hovedregelen er at vi skal bruke knapper og lenker til det de opprinnelig er
    laget for. Men knapper og lenker brukes en del overlappende. ButtonLink ser
    ut som en knapp, men er lenke funksjonelt. En blind person med skjermleser
    har mange måter å navigere på, f.eks. fra knapp til knapp, liste med lenker,
    internt tekstsøk på nettsiden osv. Hvis en skjermleserbruker får hjelp på
    nettsiden av en seende person vil den trolig omtales som en knapp. Fordi den
    kan bli enklere å finne i en veiledningssituasjon har vi derfor har vi valgt
    å bruke role=button . Vi tror allikevel at det er en god tekst på knappen
    som er mest avgjørende for brukeren, altså at det er tydelig hva som skjer
    hvis den velges.
  </p>

  <h3>Mest relevante WCAG-krav</h3>
  <ul>
    <li>2.4.4 A, Formål med lenke (i kontekst)</li>
    <li>4.1.2 A, Navn, rolle, verdi</li>
    <li></li>
  </ul>

  <h3>WAI-ARIA</h3>
  <ul>
    <li>Role=button brukes fordi lenken visuelt ser ut en knapp.</li>
  </ul>
</>
```
