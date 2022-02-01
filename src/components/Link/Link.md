**Link (Lenke): lenke til filer eller nettsider**

Filer:

```js
import { Link } from '@skatteetaten/frontend-components/Link';

<div>
  <Link
    path={'#link'}
    text={'Rettledning til RF-1167 Næringsoppgave 2 for 2020 (pdf)'}
    placement="before"
  />
</div>;
```

Eksterne sider:

```js
import { Link } from '@skatteetaten/frontend-components/Link';

<div>
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
    placement="after"
  />
</div>;
```

Åpne i ny fane:

```js
import { Link } from '@skatteetaten/frontend-components/Link';
<div>
  <Link
    path={'https://www.skatteetaten.no/rettskilder/type/lover-og-forskrifter/'}
    text={'Se lover og forskrifter (åpnes i ny fane)'}
    openInNew={true}
    placement="after"
  />
</div>;
```

Løpende tekst:

```js
import { Link } from '@skatteetaten/frontend-components/Link';
<p>
  Det er også mulig å bruke en
  <Link path={'#link'} text={'link'} /> inni et avsnitt med tekst.
</p>;
```

```js noeditor beskrivelse
import LinkGroup from '@skatteetaten/frontend-components/LinkGroup';
const links = [
  {
    text: 'ActionButton (Aksjonsknapp)',
    path: '#actionbutton',
  },
  {
    text: 'Button (Knapp)',
    path: '#button',
  },
  ,
  {
    text: 'IconButton (Ikonknapp)',
    path: '#iconbutton',
  },
];
<>
  <h3>Lenke til filer eller nettsider</h3>
  <p>Vi benytter Link for å lenke til filer eller nettsider.</p>
  <p>
    Hvis lenken er en handling som påvirker siden brukeren er på, som for
    eksempel «Lagre» eller «Send inn», skal du normalt bruke en knapp i stedet.
    Se
    <a href="#actionbutton">aksjonsknapp</a>, <a href="#button">knapp</a> og <a href="#iconbutton">
      ikonknapp
    </a> for eksempler på knapper. Se også <a href="https://www.skatteetaten.no/stilogtone/produkt/skatteetatenno/lenker/">
      Skatteetatens skriveregler
    </a> for hjelp til å lage gode lenketekster.
  </p>

  <h3>Åpne i eksisterende fane, ny fane eller nedlastning?</h3>
  <p>
    Når brukeren klikker på lenken, kommer den aktuelle filen eller nettsiden
    frem. Hovedregelen er at lenker skal åpnes i samme fane. Det finnes også
    unntak hvor lenken kan åpnes i ny fane eller som nedlastning.
  </p>

  <h4>Når bør du åpne lenken i samme vindu:</h4>
  <ul>
    <li>
      I de fleste tilfeller – dette er hovedregelen fordi vi sikrer en
      konsistent og forutsigbar brukeropplevelse ved å la brukerens egne
      lenkeinnstillinger i nettleseren videreføres etter klikket på lenken.
    </li>
  </ul>

  <h4>Når bør du åpne lenken i egen fane eller som nedlastning:</h4>
  <ul>
    <li>
      Når du lenker til veiledninger eller annet innhold som brukeren benytter
      som støtte i gjennomføringen av oppgaven.
    </li>
    <li>
      Dersom brukeren risikerer å miste innhold når hun klikker på lenken, for
      eksempel ved utfylling av skjema.{' '}
    </li>
  </ul>

  <h3>Pass på, når du lenker til ny fane eller nedlastning:</h3>
  <ul>
    <li>
      Marker lenker som åpner eksterne sider og filer med eget symbol (se
      eksempel).
    </li>
    <li>
      Når du lenker til eksterne sider eller sider med innhold som er laget av
      bruker, er det spesielt viktig å beskytte mot ondsinnet kode. Legg derfor
      til to attributter; den første, «target», åpner i nytt vindu, og den
      andre, «rel», er en sikkerhetsfunksjon som bryter koblingen mellom
      eksisterende vindu og nytt vindu. Uten denne funksjonen, kan ondsinnet
      kode få tilgang til vinduet du lenket fra.
    </li>
  </ul>

  <h3>Relaterte komponenter</h3>
  <LinkGroup links={links} />
</>;
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
