** MessageBar brukes til å formidle viktig informasjon til brukeren som skiller seg ut fra øvrig innhold. Den brukes når du skal gi en tilbakemelding til bruker som omhandler en side, delseksjon eller flere elementer på siden. **

```js
import MessageBar from '@skatteetaten/frontend-components/MessageBar';

<>
  <MessageBar type={MessageBar.Type.success}>Filen ble lastet opp.</MessageBar>
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
import MessageBar from '@skatteetaten/frontend-components/MessageBar';

<MessageBar size="large" onDismiss={() => null}>
  Satsene for denne avgiftstypen ble oppdatert 01.01.2017.
</MessageBar>;
```

MessageBar der boksen forsvinner etter X sekunder:

```js
import MessageBar from '@skatteetaten/frontend-components/MessageBar';
import Button from '@skatteetaten/frontend-components/Button';

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
<ul>
  <li>Innholdet bør være kort og presist.</li>
  <li>Husk å bruke riktig type av MessageBar til riktig type melding.</li>
</ul>
```

```js noeditor beskrivelse
  <p>Varselbokser kan være med eller uten lukkekryss.</p>{' '}
  <p>Fargebruk skal signalisere:</p>
  <ul>
    <li>Gul/beige (standard): Nøytral </li>
    <li>Grønn: Ok, vellykket handling</li>
    <li>Lys rød: Feil, advarsel</li>
    <li>Mørk rød: Fortrolige opplysninger, sterk advarsel </li>
  </ul>
  <p>
    Det er ok å variere størrelse på boksen. Ulike bakgrunnsfarger kan
    kombineres på samme side. Dersom på skjermen handler om sensitive
    opplysninger (KODE 6), brukes en ekstra uthevet meldingsboks.
  </p>
  <p>
    Se{' '}
    <a href="https://www.skatteetaten.no/stilogtone/skrive/">
      Skatteetatens skriveregler
    </a>{' '}
    for hjelp til å skrive gode tekster inni boksen.
  </p>
```
