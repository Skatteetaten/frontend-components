**Fra @skatteetaten/frontend-components v5+ (designsystem-legacy) til Designsystemet v0.2.0**

## Endringer i funksjonalitet:

- Typography som komponent fases ut og brytes ned i mindre komponenter (Heading, Paragraph/Ingress, Blockquote og List).

## Styling:

- Noen endringer i line-height og avstand mellom elementer.
- De nye komponentene i designsystemet er avhengige av designtokens. Disse leveres nå som en separat pakke. <a class="brodtekst-link" href="#section-designtokens-deprecated">Se designtokens for detaljer.</a>

## Endringer i API:

For full API-dokumentasjon, vennligst se på <a class="brodtekst-link" href="https://www.skatteetaten.no/stilogtone/designsystemet/komponenter/typography/">Typografi-komponenter</a> på dokumentasjonssiden til designsystemet.

<div class="migration-tabell">
<table>
<caption>Liste over endringer i komponent-api'et</caption>
<thead><tr><th>Tidligere Prop</th><th>Alternativ</th></tr></thead>
<tbody>
<tr>
<td>&lt;Typography&gt;</td>
<td>
Typography som komponent fases ut og brytes ned i mindre komponenter:

- Heading
- Paragraph/Ingress
- Blockquote
- List
  - List.Element

</td>
</tr>

<tr>
<td>
'noBorder'

'noColor'

'noMargin'

'noSize'

</td>

<td>
Fases ut. Egen styling må gjøres med className.

Før:

```javascript static
import { Typography } from '@skatteetaten/frontend-components/Typography';

<Typography>
  <h1>Overskriftsnivå 1</h1>
  <h2>Overskriftsnivå 2</h2>
  <h3>Overskriftsnivå 3</h3>
  <h4>Overskriftsnivå 4</h4>
  <h5>Overskriftsnivå 5</h5>
  <p>
    Tekstavsnitt som kan inneholde en lengre tekst. Husk å følge
    klarspråkprinsippene når en skriver tekster. I dette tilfellet skriver bare
    litt ekstra tekst for å få litt innhold, men normalt vil en ønske å skrive
    så konsentrert som mulig. Mange brukere leser bare de første ordene i en
    tekst, eller hopper ganske enkelt over den. Dette er en{' '}
    <a href="#testhg">lenke</a>.
  </p>

  <p>Hvordan lage god interaksjonsdesign:</p>
  <ul>
    <li>Kjenner du behovet til brukeren?</li>
    <li>Er du sikker på at du kjenner behovet til brukeren?</li>
    <li>Snakk med andre</li>
  </ul>

  <p>Skatteetatens brukskvalitetsmetode:</p>
  <ol>
    <li>Beskrive konteksten</li>
    <li>Forstå behov og krav</li>
    <li>Designe brukeropplevelsen</li>
    <li>Evaluere</li>
  </ol>
</Typography>;
```

Nå:

```js static
import { Heading, Paragraph, Blockquote, List } from '@skatteetaten/ds-typography';

<Heading as={'h1'} level={1}>{'Overskriftsnivå 1'}</Heading>
<Heading as={'h2'} level={2}>{'Overskriftsnivå 2'}</Heading>
<Heading as={'h3'} level={3}>{'Overskriftsnivå 3'}</Heading>
<Heading as={'h4'} level={4}>{'Overskriftsnivå 4'}</Heading>
<Heading as={'h5'} level={5}>{'Overskriftsnivå 5'}</Heading>
<Paragraph>
    {'Tekstavsnitt som kan inneholde en lengre tekst. Husk å følge ' +
    'klarspråkprinsippene når en skriver tekster. I dette tilfellet skriver bare ' +
    'litt ekstra tekst for å få litt innhold, men normalt vil en ønske å skrive ' +
    'så konsentrert som mulig. Mange brukere leser bare de første ordene i en ' +
    'tekst, eller hopper ganske enkelt over den. Dette er en ' +
    <a href={'#testhg'}>{'lenke'}</a>
    '.'}
</Paragraph>

<Paragraph>{'Hvordan lage god interaksjonsdesign:'}</Paragraph>
<List>
    <List.Element>{'Kjenner du behovet til brukeren?'}</List.Element>
    <List.Element>{'Er du sikker på at du kjenner behovet til brukeren?'}</List.Element>
    <List.Element>{'Snakk med andre'}</List.Element>
</List>

<Paragraph>{'Skatteetatens brukskvalitetsmetode:'}</Paragraph>
<List as={'ol'}>
    <List.Element>{'Beskrive konteksten'}</List.Element>
    <List.Element>{'Forstå behov og krav'}</List.Element>
    <List.Element>{'Designe brukeropplevelsen'}</List.Element>
    <List.Element>{'Evaluere'}</List.Element>
</List>

```

</td>

</tr>
</tbody>
</table>
</div>
