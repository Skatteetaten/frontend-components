```js noeditor
<div style={{ width: '500px' }}>
  <h3>Formatering av datoer</h3>
  <p>
    Vi skriver 16.08.2020 eller 16. august 2020. Husk at vi alltid skriver
    årstallet helt ut for å unngå misforståelser. Se{' '}
    <a href="https://www.skatteetaten.no/stilogtone/skrive/skriveregler/datoer/">
      skriveregelene
    </a>{' '}
    for detaljer.
  </p>
</div>
```

```js
import { LabelWithCallout } from '@skatteetaten/frontend-components';

const date = new Date('2020-07-16');
var options = {
  year: 'numeric',
  month: '2-digit',
  day: '2-digit',
};
var full_options = {
  year: 'numeric',
  month: 'long',
  day: 'numeric',
};

const no_formatted_date = `${new Intl.DateTimeFormat('no-NB', options).format(
  date
)}`;
const no_formatted_long_date = `${new Intl.DateTimeFormat(
  'no-NB',
  full_options
).format(date)}`;

const en_formatted_date = `${new Intl.DateTimeFormat(
  'en-GB',
  full_options
).format(date)}`;

<div style={{ width: '400px' }}>
  <LabelWithCallout
    label={no_formatted_date}
    help="Standard måte å skrive norsk dato på. Vi skriver årstallet fullt ut, og to siffer i dag og måned."
  />
  <br />
  <LabelWithCallout
    label={no_formatted_long_date}
    help="Hvis du har bedre plass kan du skrive måneden fullt ut. "
  />

  <br />
  <LabelWithCallout
    label={'På engelsk: ' + en_formatted_date}
    help="For å unngå usikkerhet skriver du datoer ut i sin helhet på engelsk."
  />
</div>;
```

```js noeditor
<div style={{ width: '500px' }}>
  <h3>Formatering av tall</h3>
  <p>
    Tall skrives med siffer. Vi skriver 4 og 104, ikke fire og hundreogfire. Se{' '}
    <a href="https://www.skatteetaten.no/stilogtone/skrive/skriveregler/tall/">
      skriveregelene
    </a>{' '}
    for detaljer.
  </p>
</div>
```

```js
import { TextField, LabelWithCallout } from '@skatteetaten/frontend-components';

const count = 26254;
const count_persent = 13.5;

const no_formatted_number = `${new Intl.NumberFormat('no-NB').format(count)}`;
const no_formatted_desimal = `${new Intl.NumberFormat('no-NB').format(
  count_persent
)}`;

const en_formatted_number = `${new Intl.NumberFormat('en-GB').format(count)}`;
const en_formatted_desimal = `${new Intl.NumberFormat('en-GB').format(
  count_persent
)}`;

<div style={{ width: '400px' }}>
  <LabelWithCallout
    label={'Norsk beløp: ' + no_formatted_number + '\u00A0kroner'}
  />
  <br />
  <LabelWithCallout label={'Englesk beløp: NOK\u00A0' + en_formatted_number} />
  <br />
  <LabelWithCallout
    label={'Norsk desimaltall: ' + no_formatted_desimal + '\u00A0%'}
    help="Vi bruker hardt mellomrom mellom tallet og prosenttegnet"
  />
  <br />
  <LabelWithCallout
    label={'Englesk desimaltall: ' + en_formatted_desimal + '%'}
  />
</div>;
```

```js noeditor
<h3>Relativ tid</h3>
```

```js
import { LabelWithCallout } from '@skatteetaten/frontend-components';

const rtf = new Intl.RelativeTimeFormat('no', {
  localeMatcher: 'best fit',
  numeric: 'always',
  style: 'long',
});
<div style={{ width: '300px' }}>
  <LabelWithCallout
    label={rtf.format(-3, 'day')}
    help={'Tallene skrives alltid med siffer, også 1-10'}
  />
  <br />
  <LabelWithCallout
    label={rtf.format(3, 'day')}
    help={'Tallene skrives alltid med siffer, også 1-10'}
  />
</div>;
```
