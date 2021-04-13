** FooterContent brukes i publikumsløsninger for å markere bunnen av siden.**

```js
import {
  FooterContent,
  FooterLogo,
  Grid,
} from '@skatteetaten/frontend-components';

<div>
  <FooterContent>
    <Grid>
      <Grid.Row>
        <Grid.Col sm={0} lg={1} xl={2}></Grid.Col>
        <Grid.Col noSpacing sm={12} lg={10} xl={8}>
          <Grid>
            <Grid.Row>
              <Grid.Col noSpacing sm={0} lg={1} xl={2}>
                <FooterContent.Logo />
              </Grid.Col>
              <Grid.Col noSpacing sm={12} lg={10} xl={8}>
                <p>Innhold i footer</p>
              </Grid.Col>
              <Grid.Col noSpacing sm={0} lg={1} xl={2}></Grid.Col>
            </Grid.Row>
          </Grid>
        </Grid.Col>
        <Grid.Col noSpacing sm={0} lg={1} xl={2}></Grid.Col>
      </Grid.Row>
    </Grid>
  </FooterContent>
</div>;
```

```js noeditor beskrivelse
<>
  <h3>Innhold i bunnen av siden</h3>
  <p>
    I alle nettløsningene våre har vi en bunn som typisk inneholder
    kontaktopplysninger, personvernopplysninger og lenker for deling.
    Bunn-komponenten kan inneholde flere underelementer.
  </p>
  <h3>Tilpass bunnen til ulike skjermstørrelser</h3>
  <p>
    FooterContent-komponenten kan inneholde flere underelementer. Vi anbefaler å
    bruke grid-systemet for å sette det opp, fordi dette gjør at den tilpasser
    seg ulike skjermstørrelser.
  </p>
  <h3>Logo i bunnen</h3>
  <p>
    I bunnen skal det ligge en egen logo-komponent, «FooterContent.Logo». For å
    få engelsk logo kan du bruke «FooterContent.LogoEn». Logoen blir midtstilt
    når skjermen er mindre enn 1024px bred, og dette tilsvarer fra og med
    «large» i grid-systemet.
  </p>
  <h3>Tilpass bunnen til ulike skjermstørrelser</h3>
  <ul>
    <li>
      Bruk grid-systemet når du setter opp bunnen fordi dette gjør at den
      tilpasser seg ulike skjermstørrelser.
    </li>
  </ul>
  <h3>Logo i bunnen</h3>
  <ul>
    <li>
      Bruk komponenten FooterContent.Logo i bunnen. Logoen blir midtstilt på
      skjermer mindre enn 1024px bred, og det tilsvarer fra og med «large» i
      grid-systemet.
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
