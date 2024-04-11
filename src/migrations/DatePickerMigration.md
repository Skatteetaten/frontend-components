**Fra @skatteetaten/frontend-components v5+ (designsystem-legacy) til Designsystemet v0.7.0**

## Endringer i funksjonalitet:

- default feilmeldinger er ikke videreført
- innebygde tekster slik som navn på dager, måneder m.m. kan ikke overskrives lengre og vises på det språket som er valgt
- visning av påkrevd dato har endret logikk
- veksle mellom skrive og lesemodus med blyant-knapp er ikke videreført
- det er mulig å ha en tilleggstekst som vises etter ledeteksten eller etter hjelpeteksten hvis den finnes
- det er mulig å ha et valgfritt hjelpe-ikon istedenfor default spørsmålstegn-ikon

## Styling:

- de nye komponentene i designsystemet er avhengige av designtokens. Disse leveres nå som en separat pakke. <a class="brodtekst-link" href="#section-designtokens-deprecated">Se designtokens for detaljer.</a>
- stor variant har endret noe på utseende og blitt tonet ned

## Endringer i API

<!-- For full API-dokumentasjon, vennligst se på <a class="brodtekst-link" href="https://www.skatteetaten.no/stilogtone/designsystemet/komponenter/datepicker/">DatePicker komponent</a> på dokumentasjonssiden til designsystemet.
// TODO FRONT-1348 EPI-dokumentasjon -->

<div class="migration-tabell">
<table>
<caption>Liste over endringer i komponent-api'et</caption>
<thead><tr><th>Tidligere Prop</th><th>Alternativ</th></tr></thead>
<tbody>
<tr>
<td>'componentRef'</td>
<td>'ref'

Alle komponentene våre bruker forwardRef. For komponent sendes ref til div-elementet.

</td>
</tr>

<tr>
<td>'inputSize'</td>
<td>'variant'

Alternativer for 'variant': 'medium' og 'large'. 'medium' er default.

</td>
</tr>

<tr>
<td>'help'</td>
<td>'helpText', 'helpSvgPath', 'titleHelpSvg'

Før:

```javascript static
import { DatePicker } from '@skatteetaten/frontend-components/DatePicker';

<DatePicker
  label={'Dato'}
  help={'Denne datovelgeren viser ukenummer i kalender'}
/>;

// ELLER

<DatePicker
  label={'Dato'}
  help={'Denne datovelgeren viser ukenummer i kalender'}
  labelWithCalloutProps={{
    buttonTitle: 'Info om kalender',
  }}
/>;
```

Nå:

```js static
import { DatePicker } from '@skatteetaten/ds-forms';
import { WarningSVGPath } from '@skatteetaten/ds-icons';

<DatePicker
  label={'Dato'}
  helpText={'Denne datovelgeren viser ukenummer i kalender'}
/>;

// ELLER

<DatePicker
  label={'Dato'}
  helpText={'Denne datovelgeren viser ukenummer i kalender'}
  titleHelpSvg={'Info om kalender'}
/>;

// ELLER hvis du ønsker å bruke et valgfritt ikon istedenfor default ikon (spørsmåltegn)

<DatePicker
  label={'Dato'}
  helpText={'Denne datovelgeren viser ukenummer i kalender'}
  helpSvgPath={WarningSVGPath}
/>;
```

</td>
</tr>

<tr>
<td>'readonlyMode'</td>
<td>'readOnly'</td>
</tr>

<tr>
<td>'isRequired'</td>
<td>'required'</td>
</tr>

<tr>
<td>'requiredWithMark'</td>
<td>'showRequiredMark'

Forutsetter at prop 'required' er tatt i bruk.

Før:

```javascript static
import { DatePicker } from '@skatteetaten/frontend-components/DatePicker';

<DatePicker label={'Dato'} requiredWithMark />;
```

Nå:

```js static
import { DatePicker } from '@skatteetaten/ds-forms';

<DatePicker label={'Dato'} required showRequiredMark />;
```

</td>
</tr>

<tr>
<td>'errorMessage'</td>
<td>'errorMessage' må brukes sammen med ny prop 'hasError' som styrer om feilmeldingen skal vises eller ikke.

Før:

```javascript static
import { DatePicker } from '@skatteetaten/frontend-components/DatePicker';

<DatePicker label={'Dato'} errorMessage={'Dato må fylles ut.'} />;
```

Nå:

```js static
import { DatePicker } from '@skatteetaten/ds-forms';

<DatePicker label={'Dato'} errorMessage={'Dato må fylles ut.'} hasError />;
```

</td>
</tr>

<tr>
<td>'isRequiredErrorMessage'

'isOutOfBoundsErrorMessage'

'invalidInputErrorMessage'

</td>
<td>Faset ut.</td>
</tr>

<tr>
<td>'styles'

'theme'

'calloutFloating'

</td>
<td>
Faset ut. Bruk 'className' eller 'classNames' for å style komponenten.

Før:

```javascript static
import { DatePicker } from '@skatteetaten/frontend-components/DatePicker';

<DatePicker label={'Dato'} style={{ fontSize: '24px', color: '#1362ae' }} />;
```

Nå:

```js static
import { DatePicker } from '@skatteetaten/ds-forms';

<DatePicker
  label={'Dato'}
  className={'myCustomClassname'}
/>

// ELLER

<DatePicker
  label={'Dato'}
  classNames={{
    container: 'myContainerClassname',
    label: 'myLabelClassname',
    dateContainer: 'myDateContainerClassname',
    errorMessage: 'myErrorMessageClassname',
  }}
/>;
```

</td>
</tr>

<tr>
<td>'language'</td>
<td>Faset ut. Språket i kalenderen vil samsvare med det språket som er valgt på siden.</td>
</tr>

<tr>
<td>'formatDate'</td>
<td>

Faset ut. Bruk ny prop dateFormat for å overskrive default format dd.MM.yyyy. Formater som kan brukes: https://date-fns.org/v3.3.1/docs/parse.

Før:

```javascript static
import { DatePicker } from '@skatteetaten/frontend-components/DatePicker';

<DatePicker
  label={'Dato'}
  formatDate={(date) =>
    date !== undefined &&
    Object.prototype.toString.call(date) === '[object Date]' &&
    !isNaN(date.getTime())
      ? date.toJSON().substring(0, 10)
      : ''
  }
/>;
```

Nå:

```js static
import { DatePicker } from '@skatteetaten/ds-forms';

<DatePicker label={'Dato'} dateFormat={'yyyy-MM-dd'} />;
```

</td>
</tr>

<tr>
<td>'dateTimeFormatter'

'allowTextInput'

'parseDateFromString'

'today'

'ariaLabel'

'pickerAriaLabel'

'labelButtonAriaLabel'

'editable'

'formatDate'

'isMonthPickerVisible'

'allFocusable'

'disableAutoFocus'

'strings'

'tabIndex'

'textField'

'calendarAs'

'calendarProps'

'highlightCurrentMonth'

'highlightSelectedMonth'

'calloutProps'

'labelWithCalloutProps'

'datepickerCalloutProps'

'firstDayOfWeek'

'firstWeekOfYear'

'showCloseButton'

'showGoToToday'

'showMonthPickerAsOverlay'

'showWeekNumbers'

'onCalloutToggle'

'openOnClick'

'onAfterMenuDismiss'

</td>
<td>Faset ut.</td>
</tr>
</tbody>
</table>
</div>
