** FooterContent brukes i publikumsløsninger for å markere bunnen av siden.**

```js
import FooterContent, {
  FooterLogo
} from '@skatteetaten/frontend-components/FooterContent';
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
<>
  <p>
    I alle publikumsløsningene våre har vi en bunn som typisk inneholder kontaktopplysninger, 
      personvernopplysninger og lenker for deling. 
      Denne bunn-komponenten kan inneholde flere underelementer.
  </p>
  <h3>Tilpass bunnen til ulike skjermstørrelser</h3>
  <ul>
    <li>
      Bruk grid-systemet når du setter opp bunnen. Dette gjør at den tilpasser seg ulike skjermstørrelser.
    </li>
  </ul>
  <h3>Plasser logo i bunnen</h3>
  <ul>
    <li>
      Bruk komponenten FooterContent.Logo i bunnen. Logoen blir midtstilt på 
      skjermer mindre enn 1024px bred, og det tilsvarer fra og med «large» i grid-systemet.
    </li>
  </ul>
</>
```

```js noeditor uu
<>
  <h3>Tips</h3>
  <ul>
    <li>
      Footer-innhold bør ligge wrapped i en footer-tag (eller eventuelt en tag
      med attributtet role=contentinfo).
    </li>
    <li>
      Tenk på struktur og overskriftshierarki. Det mest vanlige er å bruke
      &lt;h2&gt; på overskrifter i en footer.
    </li>
  </ul>

  <h3>Mest relevante WCAG-krav</h3>
  <ul>
    <li>1.3.1 A, Informasjon og relasjoner</li>
  </ul>

  <h3>WAI-ARIA</h3>
  <ul>
    <li>Aria-hidden brukes for skjule footer-grafikk for skjermleser. </li>
  </ul>
</>
```
