OpenClose definerer en enkelt åpne/lukke knapp med tilhørende innholdspanel.

```js
import OpenClose from '@skatteetaten/frontend-components/OpenClose';

<OpenClose isOpen={true} title={'Du kan åpne meg'}>
  Klikk på knappen for å skjule meg.
</OpenClose>;
```

```js
import OpenClose from '@skatteetaten/frontend-components/OpenClose';

// Inline styles are bad design https://reactjs.org/docs/faq-styling.html
// Just for the purpose of the example
const headingStyle = {
  fontSize: '16px'
};

<OpenClose 
  isOpen={true} 
  title={'Du kan åpne meg også'} 
  headingLevel={2}
>
  <p>Første element</p>
  <p>Andre element</p>
  <div>En liten div</div>
  <h3 style={headingStyle}>Vi kan fortsette hierarkiet i komponenten</h3>
</OpenClose>;
```
