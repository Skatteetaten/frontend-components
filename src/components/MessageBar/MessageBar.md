**MessageBar brukes til å formidle viktig informasjon til brukeren som skiller seg ut fra øvrig innhold.
Den brukes når du skal gi en tilbakemelding til bruker som omhandler en side, delseksjon eller flere elementer på siden.**

```js
import { MessageBar } from '@skatteetaten/frontend-components';

<>
  <MessageBar type={MessageBar.Type.success} onDismiss={() => null}>
    Filen ble lastet opp.
  </MessageBar>
  <br />
  <MessageBar type={MessageBar.Type.warning}>
    Det finnes feil i kjøretøydata. Sjekk at dette ikke har avgiftsmessige
    konsekvenser.
  </MessageBar>
  <br />
  <MessageBar type={MessageBar.Type.blocked}>
    Disse feltene er låst for redigering fordi du har fått et varsel fra oss
  </MessageBar>
  <br />
  <MessageBar type={MessageBar.Type.severeWarning}>
    Strengt fortrolig (Kode 6)
  </MessageBar>
</>;
```

Stor MessageBar:

```js
import { MessageBar } from '@skatteetaten/frontend-components';

<MessageBar size="large" onDismiss={() => null}>
  Satsene for denne avgiftstypen ble oppdatert 01.01.2017.
</MessageBar>;
```

MessageBar der boksen forsvinner etter X sekunder:

```js
import { MessageBar, Button } from '@skatteetaten/frontend-components';

const afterDurationComponent = (resetDuration, setShowAlways) => (
  <div>
    <Button onClick={resetDuration}>Vis melding igjen</Button>
  </div>
);

<MessageBar
  type={MessageBar.Type.info}
  duration={3}
  onRenderAfterDuration={afterDurationComponent}
>
  Hasta la vista, baby!
</MessageBar>;
```

```js noeditor uu
<>
  <h3>Tips</h3>
  <ul>
    <li>Innholdet bør være kort og presist.</li>
    <li>Pass på tilstrekkelig kontrast (minst 4.5) mellom tekst og bakgrunn</li>
    <li>Husk å bruke riktig type av MessageBar til riktig type melding.</li>
    <li>
      Ved MessageBar som forsvinner må fokus på siden settes tilbake til samme
      sted som brukeren stod før boksen dukket opp og forsvant igjen.
    </li>
    <li>
      Gi brukerne nok tid å få lese meldingen som forsvinner automatisk, selv om
      brukeren kan se meldingen igjen.
    </li>
  </ul>

  <h3>Mest relevante WCAG-krav</h3>
  <ul>
    <li>1.4.3 AA, Kontrast (minimum)</li>
    <li>2.2.1 A, Justerbar hastighet</li>
    <li>4.1.2 A, Navn, rolle, verdi</li>
  </ul>

  <h3>WAI-ARIA</h3>
  <ul>
    <li>Aria-label brukes for å navngi lukk-knapp for skjermlesere.</li>
    <li>
      Role= brukes for å gi beskjed til skjermlesere at meldingen skal leses opp
      (når den er synlig)
    </li>
  </ul>
</>
```

```js noeditor beskrivelse
<>
  <p>Varselbokser kan være med eller uten lukkekryss.</p>{' '}
  <p>Fargebruk skal signalisere:</p>
  <ul>
    <li>Gul: Nøytral.</li>
    <li>Grønn: Ok, vellykket handling.</li>
    <li>Lys rød: Feil eller advarsel.</li>
    <li>Mørk rød: Fortrolige opplysninger, sterk advarsel.</li>
  </ul>
  <p>
    Ulike bakgrunnsfarger kan kombineres på samme side. Dersom innholdet handler
    om sensitive opplysninger (KODE 6), skal du bruke en ekstra uthevet
    meldingsboks.
  </p>
  <p>
    Se{' '}
    <a href="https://www.skatteetaten.no/stilogtone/skrive/">
      Skatteetatens skriveregler
    </a>{' '}
    for hjelp til å skrive gode tekster inni boksen.
  </p>
</>
```
