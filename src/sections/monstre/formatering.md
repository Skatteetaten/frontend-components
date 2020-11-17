```js noeditor


<h3>Datoer</h3>
<p>
  Vi skriver 16.08.2020 eller 16. august 2020. Husk at vi alltid skriver
  årstallet helt ut for å unngå misforståelser. Se <a href="https://www.skatteetaten.no/stilogtone/skrive/skriveregler/datoer/">skriveregelene</a> for detaljer.
</p>
```

```js
import LabelWithCallout from '@skatteetaten/frontend-components/LabelWithCallout';

const date = new Date('2020-07-16');
var options = {
  year: 'numeric',
  month: '2-digit',
  day: '2-digit'
};
var full_options = {
  year: 'numeric',
  month: 'long',
  day: 'numeric'
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

<>
  <LabelWithCallout
    label={no_formatted_date}
    help="Standard måte å skrive norsk dato på. Vi skriver årstallet fullt ut, og to siffer i dag og måned."
  />
  <br />
  <LabelWithCallout
    label={no_formatted_long_date}
    help="Norsk dato, hvis du har bedre plass."
  />

  <br />
  <LabelWithCallout
    label={'På engelsk: ' + en_formatted_date}
    help="For å unngå usikkerhet skriver datoer ut i sin helhet på denne måten"
  />
</>;
```

```js noeditor
<h3>Tall</h3>
<p>
  Tall skrives med siffer. Vi skriver 4 og 104, ikke fire og hundreogfire. Se <a href="https://www.skatteetaten.no/stilogtone/skrive/skriveregler/tall/">skriveregelene</a> for detaljer.
</p>
```

```js
import TextField from '@skatteetaten/frontend-components/TextField';
import LabelWithCallout from '@skatteetaten/frontend-components/LabelWithCallout';

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

<>
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
</>;
```

```js noeditor
<h3>Relativ tid</h3>
```

```js
import LabelWithCallout from '@skatteetaten/frontend-components/LabelWithCallout';
const rtf = new Intl.RelativeTimeFormat('no', {
  localeMatcher: 'best fit',
  numeric: 'always',
  style: 'long'
});
<>
  <LabelWithCallout
    label={rtf.format(-3, 'day')}
    help={'Tallene skrives alltid med siffer, også 1-10'}
  />
  <br />
  <LabelWithCallout
    label={rtf.format(3, 'day')}
    help={'Tallene skrives alltid med siffer, også 1-10'}
  />
</>;
```

Vi skriver 18.02.2010 eller 18. februar 2010.
10 000 kroner

Fødselsnummer består av 11 siffer, og vi skiller dem i 2 grupper. Det er mellomrom foran personnummeret (de 5 siste sifrene).
121212 12345

Organisasjonsnummer deles i 3 grupper.
123 123 123

Bankkontonummer deles i 3 grupper. Vi bruker mellomrom, ikke punktum, for å skille gruppene:
2000 12 34567
