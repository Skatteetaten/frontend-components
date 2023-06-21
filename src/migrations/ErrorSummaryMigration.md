**Fra @skatteetaten/frontend-components v5+ (designsystem-legacy) til Designsystemet v0.4.0**

## Endringer i funksjonalitet:

- 'title' er ikke obligatorisk lenger og har fått default verdi -> 'For å gå videre må du rette opp i {{children.length}} feil:'

## Styling:

- de nye komponentene i designsystemet er avhengige av designtokens. Disse leveres nå som en separat pakke. <a class="brodtekst-link" href="#section-designtokens-deprecated">Se designtokens for detaljer.</a>

## Endringer i API

<div class="migration-tabell">
<table>
<caption>Liste over endringer i komponent-api'et</caption>
<thead><tr><th>Tidligere Prop</th><th>Alternativ</th></tr></thead>
<tbody>
<tr>
<td>'errors'</td>
<td>
'children'

Før:

```javascript static
import { ErrorSummary } from '@skatteetaten/frontend-components/ErrorSummary';

<ErrorSummary
  id={'errorsummary_example1'}
  title={'For å gå videre må du rette opp i følgende:'}
  titleTagName={'h2'}
  errors={[
    { id: 'input_aar-input', error: 'Inntekståret må være etter 2008' },
    {
      id: 'input_epost-input',
      error: 'E-posten ser ikke riktig ut. Skriv slik: ola.normann@norge.no',
    },
    { id: 'input_dager-input', error: 'Antall dager må fylles ut.' },
  ]}
/>;
```

Nå:

```js static
import { ErrorSummary } from '@skatteetaten/ds-forms';

<ErrorSummary
  title={'For å gå videre må du rette opp i følgende:'}
  showErrorSummary
>
  <ErrorSummary.Error id={'input_aar-input'}>
    {'Inntekståret må være etter 2008'}
  </ErrorSummary.Error>
  <ErrorSummary.Error id={'input_epost-input'}>
    {'E-posten ser ikke riktig ut. Skriv slik: ola.normann@norge.no'}
  </ErrorSummary.Error>
  <ErrorSummary.Error id={'input_dager-input'}>
    {'Antall dager må fylles ut.'}
  </ErrorSummary.Error>
</ErrorSummary>;
```

</td>
</tr>
<tr>
<td>'onClick'</td>
<td>
Faset ut.
</td>
</tr>
<tr>
<td>'titleTagName'</td>
<td>
'titleAs'. Alternativer: 'h1', 'h2', 'h3', 'h4', 'h5' og 'h6'. Default er satt til 'h2'.
</td>
</tr>
</tbody>
</table>
</div>
