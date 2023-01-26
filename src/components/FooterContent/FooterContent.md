**FooterContent (Bunn): brukes i publikumsløsninger for å markere bunnen av siden.**

Lenken til tilgjengelighetserklæring er **en unik url pr løsning** og skal ha fast plassering i footer.

Tilgjengelighetserklæring opprettes og fylles ut på <a class="brodtekst-link" href="https://uustatus.no/nb">uustatus.no</a> hvor det blir generert en unik url til erklæring.
Les mer <a class="brodtekst-link" href="https://www.uutilsynet.no/veiledning/tilgjengelighetserklaering/1127">om tilgjengelighetserklæringen på uutilsynet sine sider</a>.

```js
import { FooterContent } from '@skatteetaten/frontend-components/FooterContent';
import { Grid } from '@skatteetaten/frontend-components/Grid';
import { LinkGroup } from '@skatteetaten/frontend-components/LinkGroup';

const links = [
  {
    text: 'Kontakt oss',
    path: '#path1',
  },
  {
    text: 'Sikkerhet og personvern',
    path: '#path2',
  },
  {
    text: 'Tilgjengelighetserklæring',
    path: '#unikpathforhverloesning',
  },
];

<div>
  <FooterContent>
    <Grid>
      <Grid.Row>
        <Grid.Col lg={1} />
        <Grid.Col lg={2}>
          <FooterContent.Logo />
        </Grid.Col>
        <Grid.Col lg={6} className="footer-linkgroup">
          <LinkGroup links={links} />
        </Grid.Col>
      </Grid.Row>
    </Grid>
  </FooterContent>
</div>;
```

<div class="lenke-tabell">
<table>
<caption>Lenketekster og url-er</caption>
<thead><tr><th>Bokmål</th><th>Nynorsk</th><th>Engelsk</th><th>Samisk</th></tr></thead>
<tbody>
<tr>
<td>Kontakt oss - https://www.skatteetaten.no/kontakt/</td>
<td lang='nn'>Kontakt oss - https://www.skatteetaten.no/nn/kontakt-oss/</td>
<td lang='en'>Contact us - https://www.skatteetaten.no/en/contact/</td>
<td lang='se'>Váldde oktavuođa minguin</td>
</tr>
<tr>
<td>Sikkerhet og personvern - https://www.skatteetaten.no/om-skatteetaten/sikkerhet/</td>
<td lang='nn'>Sikkerheit og personvern - https://www.skatteetaten.no/nn/om-skatteetaten/sikkerhet/</td>
<td lang='en'>Security and privacy - https://www.skatteetaten.no/en/about-tde-tax-administration/security-and-privacy/</td>
<td lang='se'>Sihkarvuohta ja persovdnasuodjaleapmi</td>
</tr>
<tr>
<td>Tilgjengelighetserklæring</td>
<td lang='nn'>Tilgjengelegheitserklæring</td>
<td lang='en'>Accessibility statement</td>
<td lang='se'>Almmusjulggaštus</td>
</tr>
</tbody>
</table>
</div>
<p>Tilgjengelighetserklæringer er kun på bokmål.</p>

```js noeditor beskrivelse
<>
  <h3>Innhold i bunnen av siden</h3>
  <p>
    I alle publikumsløsningene våre har vi en bunn som typisk inneholder
    kontaktopplysninger, personvernopplysninger og lenker for deling. Denne
    bunn-komponenten kan inneholde flere underelementer.
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
      Bruk grid-systemet når du setter opp bunnen. Dette gjør at den tilpasser
      seg ulike skjermstørrelser.
    </li>
  </ul>
  <h3>Plasser logo i bunnen</h3>
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
      med attributtet role="contentinfo").
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
    <li>Aria-hidden brukes for å skjule footer-grafikk for skjermleser. </li>
  </ul>
</>
```
