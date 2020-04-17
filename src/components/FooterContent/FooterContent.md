** FooterContent brukes i publikumsløsninger for å markere bunnen av siden.**

```js
import FooterContent from '@skatteetaten/frontend-components/FooterContent';
import Grid from '@skatteetaten/frontend-components/Grid';

<div>
  <FooterContent>
    <Grid>
      <Grid.Row>
        <Grid.Col sm={12} lg={12} xl={4}>
          <FooterContent.Logo />
        </Grid.Col>
        <Grid.Col sm={12} lg={12} xl={4}>
          <b>Kontakt oss</b>
        </Grid.Col>
        <Grid.Col sm={12} lg={12} xl={4}>
          noreply@skatteetaten.no
        </Grid.Col>
      </Grid.Row>
    </Grid>
  </FooterContent>
</div>;
```

```js noeditor beskrivelse
  <h3>Type innhold i footer</h3>
  <p>
    Footeren i løsningene våre inneholder typisk lenker for deling,
    kontaktopplysniger, personvernopplysninger og liknende.
  </p>
  <p>
    Teknisk sett kan FooterContent-komponenten innholde et vilkårlig
    underelementer, men det er anbefalt å bruke grid-systemet slik som i
    eksemplene fordi det da tilpasser seg ulike skjermstørrelser.
  </p>
  <p>
    Logo er en egen komponent på FooterContent-komponenten
    `FooterContent.Logo`. Logoen blir midtstilt når vinduet er mindre enn
    1024px som tilsvarer fra og med large i grid-systemet.
  </p>
```

```js noeditor uu
h3>Tips</h3>
<ul>
<li>Footer-innhold bør ligge wrapped i en footer-tag (eller eventuelt en tag med attributtet role=contentinfo).</li>
<li>Tenk på struktur og overskriftshierarki. Det mest vanlige er å bruke <h2> på overskrifter i en footer.</li>
</ul>

<h3>Mest relevante WCAG-krav</h3>
<ul>
<li>1.3.1 A, Informasjon og relasjoner</li>
</ul>

<h3>WAI-ARIA</h3>
<ul>
<li>Aria-hidden brukes for skjule footer-grafikk for skjemleser. </li>
</ul>

```
