** ButtonLink skal brukes når den ekstra fremtredende hovedhandlingen for Button
er navigasjon til et annet område. **

Denne komponentene rendrer en a-tag, men med role="button".

<p>
Den implementerer en vedtatt designretningslinje i etaten, 
som er at lenker man ønsker å fremheve (lede brukerens oppmerksomhet mot)
skal se ut som knapper, på en måte som skal sikre god uu.
</p>

```js
import ButtonLink from '@skatteetaten/frontend-components/ButtonLink';

<ButtonLink path={'#'} text="Vær forsiktig med denne" />;
```

```js noeditor beskrivelse
<p>
En a-tag med role=button presenteres som en knapp for skjermleserbrukere,
men selve funksjonen, altså at du kommer til en ny side, vil være som før.
</p>

<p>
Knappeteksten må tydliggjøre hva knappen gjør, da denne teksten kan av skjermleserbrukere
bli brukt i søk for å lokalisere knappen.
</p>
```

```js noeditor uu
import Link from '@skatteetaten/frontend-components/Link';
<div>
  <p>Role=button brukes fordi lenken visuelt ser ut en knapp.</p>
  <p>
    Med forbehold, når noe ser ut som en knapp visuelt, bør det også være en
    knapp for skjermleserbrukere. Grunnen er at hvis f.eks. en synshemmet ringer
    førstelinje og ønsker veiledning eller spør en kollega, så vil de mest
    sannsynlig henvise til knappen &lt;insert knappetekst&gt;. Da kan en
    skjermleserbruker bruke hurtigtast for å gå til knapp. Med role="button" vil
    komponenten kun dukke opp som en knapp, og <i>ikke</i> i en liste over
    lenker.
  </p>
  <p>
    Forbeholdet i forrige avsnitt skyldes på at det er delte meninger (i
    uu-verdenen) om lenke vs. knapp-problematikken.
    <br />
    NAV har også en knapp "som lenke":
    <Link
      path="https://design.nav.no/components/knapp"
      text="NAV Designsystem Knapp"
      openInNew={true}
      icon="OpenInNew"
      placement="after"
    />
    <br />
    Etaten har altså landet på å kode det slik som det ser ut som.
  </p>
  <p>
    Man mistenker at bruk av lenkelister/knappelister med skjermleser når bruker
    leter etter noe, ikke er veldig utstrakt. En nettside kan ha utrolig mange
    lenker. Bruker aner verken hvor i listen det man søker etter vil ligge eller
    hvilken forbokstav lenken/knappen begynner med. Hypotesen er at det er først
    og fremst søk, Ctrl + f, som benyttes, og bruker søker på noe man antar vil
    stå som tekst i knappen. Derfor er ordlyden som benyttes viktig, se 'Bruk og
    innhold'.
  </p>
</div>;
```
