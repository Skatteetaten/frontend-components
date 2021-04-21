**Lenke til filer eller nettsider**

Filer:

```js
import { Link } from '@skatteetaten/frontend-components';

<div className="ExampleSpacing8">
  <Link
    path={'#link'}
    text={'Rettledning til RF-1167 Næringsoppgave 2 for 2020 (PDF)'}
    placement="before"
  />
</div>;
```

Eksterne sider:

```js
import { Link } from '@skatteetaten/frontend-components';

<div className="ExampleSpacing8">
  <Link
    path={'#link'}
    text={'Kontakte Statens Vegvesen'}
    icon={'OpenInNew'}
    placement="after"
  />
  <br /> <br />
  <Link
    path={'#link'}
    text={'Brukerveiledning for bilforhandlere'}
    icon={'OpenInNew'}
    openInNew={true}
    placement="after"
  />
</div>;
```

Løpende tekst:

```js
import { Link } from '@skatteetaten/frontend-components';
<p>
  Det er også mulig å bruke en
  <Link path={'#link'} text={'link'} /> inni et avsnitt med tekst.
</p>;
```

```js noeditor beskrivelse
<>
  <h3>Lenke til filer eller nettsider</h3>
  <p>
    En link benytter du for å lenke til filer eller nettsider. Når brukeren
    klikker på lenken, kommer den aktuelle filen eller nettsiden frem.
  </p>
  <p>
    Er lenken en handling som påvirker siden brukeren er på, for eksempel
    «Lagre» eller «Send inn», skal du normalt bruke en knapp i stedet. Se
    <a href="#actionbutton">aksjonsknapp</a>, <a href="#button">knapp</a> og <a href="#iconbutton">
      ikonknapp
    </a> for eksempler på knapper. Se også <a href="https://www.skatteetaten.no/stilogtone/produkt/skatteetatenno/lenker/">
      Skatteetatens skriveregler
    </a> for hjelp til å lage gode lenketekster.
  </p>

  <h3>Åpne i nye fane eller nedlasting</h3>
  <p>
    For at brukeren skal få en konsistent og forutsigbar brukeropplevelse,
    anbefaler vi å følge brukerens egne lenkeinnstillinger i nettleseren. Det
    betyr med andre ord at lenker som hovedregel skal åpnes i samme vindu, og
    skal vi være forsiktige med å gjøre våre egne overstyringer. Det finnes
    imidlertid unntak hvor brukerens oppgave tilsier at en bestemt oppførsel er
    bedre. Faner som aktivt åpnes i ny fane bør visuelt markeres med ikon eller
    tekst, slik at brukeren forstår hva som skjer.
  </p>
  <p>Når du bør åpne filer og nettsider i egen fane:</p>
  <ul>
    <li>
      Når vi lenker til veiledninger eller annet innhold som brukeren bruker som
      støtte i gjennomføringen av oppgaven.
    </li>
    <li>
      Dersom brukeren risikerer å miste innhold når hun klikker på lenken, for
      eksempel ved utfylling av skjema.
    </li>
  </ul>
  <p>
    Merk også at ved åpning av i ny fane legger vi til to attributter; den
    første, «target», åpner i nytt vindu, og den andre, «rel», er en
    sikkerhetsfunksjon som bryter koblingen mellom eksisterende vindu og nytt
    vindu. Dersom den åpnede fanen inneholder ondsinnet kode, kan den uten denne
    funksjonen, få tilgang til vinduet den var lenket fra. Dette er spesielt
    viktig å ta hensyn til dersom du lenker til eksterne sider eller sider med
    innhold som er laget av bruker.
  </p>

  <h3>Lenke til eksterne filer og nettsider</h3>
  <p>
    Vi markerer lenker som åpner eksterne sider med eget symbol (se eksempel).
  </p>
</>
```

```js noeditor uu
<>
  <h3>Tips</h3>

  <ul>
    <li>
      En lenke skal minst 2 ulike visuelle "hint" for å skille det fra vanlig
      tekst. Her er det blå farge og understreking.
    </li>
    <li>
      Tenk på kontrast hvis bakgrunnsfargen bak lenken endrer seg, for eksempel
      svart bakgrunn = hvit skrift
    </li>
    <li>
      Lenketeksten eller alternativ tekst (grafisk lenke) skal tydeliggjøre hva
      som er målet til lenken
    </li>
  </ul>

  <h3>Mest relevante WCAG-krav</h3>

  <ul>
    <li>1.4.1 A, Bruk av farge</li>
    <li>1.4.3 AA, Kontrast (minimum)</li>
    <li>2.4.4 A, Formål med lenke (i kontekst)</li>
  </ul>

  <h3>WAI-ARIA</h3>

  <ul>
    <li>Aria-hidden="true" brukes for skjule ikonet for skjermleser.</li>
  </ul>
</>
```
