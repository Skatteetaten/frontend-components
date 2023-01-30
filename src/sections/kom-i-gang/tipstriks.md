```js noeditor
<div style={{ maxWidth: '500px' }}>
  <h2>Formatering av datoer</h2>
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
import { LabelWithCallout } from '@skatteetaten/frontend-components/LabelWithCallout';

const marginTopStyle = {
  marginTop: '0.5rem',
};

const date = new Date('2020-08-16');
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

<div style={{ maxWidth: '400px' }}>
  <div style={marginTopStyle}>
    <LabelWithCallout
      label={no_formatted_date}
      help="Standard måte å skrive norsk dato på. Vi skriver årstallet fullt ut, og to siffer i dag og måned."
    />
  </div>
  <div style={marginTopStyle}>
    <LabelWithCallout
      label={no_formatted_long_date}
      help="Hvis du har bedre plass kan du skrive måneden fullt ut. "
    />
  </div>
  <div style={marginTopStyle}>
    <LabelWithCallout
      label={'På engelsk: ' + en_formatted_date}
      help="For å unngå usikkerhet skriver du datoer ut i sin helhet på engelsk."
    />
  </div>
</div>;
```

```js noeditor
<div style={{ maxWidth: '500px' }}>
  <h2>Formatering av tall</h2>
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
import { LabelWithCallout } from '@skatteetaten/frontend-components/LabelWithCallout';
import { TextField } from '@skatteetaten/frontend-components/TextField';

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

const marginTopStyle = {
  marginTop: '0.5rem',
};

<div style={{ maxWidth: '400px' }}>
  <div>
    <LabelWithCallout
      label={'Norsk beløp: ' + no_formatted_number + '\u00A0kroner'}
    />
  </div>
  <div style={marginTopStyle}>
    <LabelWithCallout
      label={'Englesk beløp: NOK\u00A0' + en_formatted_number}
    />
  </div>
  <div style={marginTopStyle}>
    <LabelWithCallout
      label={'Norsk desimaltall: ' + no_formatted_desimal + '\u00A0%'}
      help="Vi bruker hardt mellomrom mellom tallet og prosenttegnet"
    />
  </div>
  <div style={marginTopStyle}>
    <LabelWithCallout
      label={'Englesk desimaltall: ' + en_formatted_desimal + '%'}
    />
  </div>
</div>;
```

```js noeditor
<h2>Relativ tid</h2>
```

```js
import { LabelWithCallout } from '@skatteetaten/frontend-components/LabelWithCallout';

const rtf = new Intl.RelativeTimeFormat('no', {
  localeMatcher: 'best fit',
  numeric: 'always',
  style: 'long',
});

const marginTopStyle = {
  marginTop: '0.5rem',
};
<div style={{ maxWidth: '300px' }}>
  <div>
    <LabelWithCallout
      label={rtf.format(-3, 'day')}
      help={'Tallene skrives alltid med siffer, også 1-10'}
    />
  </div>
  <div style={marginTopStyle}>
    <LabelWithCallout
      label={rtf.format(3, 'day')}
      help={'Tallene skrives alltid med siffer, også 1-10'}
    />
  </div>
</div>;
```
