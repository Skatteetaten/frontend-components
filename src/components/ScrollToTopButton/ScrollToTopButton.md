** ScrollToTopButton brukes til å gå til toppen av siden. **

```js noeditor
import MessageBar from '@skatteetaten/frontend-components/MessageBar';

<MessageBar>Rull nedover på siden for å se knappen.</MessageBar>;
```

```js
import ScrollToTopButton from '@skatteetaten/frontend-components/ScrollToTopButton';

<div>
  <ScrollToTopButton label={'Til toppen'} />
</div>;
```

```js noeditor beskrivelse

<h3>Går til toppen av siden</h3>
<p>
  ScrollToTopButton brukes når man har lange sider og det er nyttig å gå tilbake
  til toppen av siden. Ved skjermbredde større enn 1170px vises symbolet nede
  til høyre som overlay. Er skjermbredden mindre vises den sentrert.
</p>
```
```js noeditor uu
<p>
Denne vil brukes hovedsakelig av tastatur- og musebrukere. Nettleseren skal ikke bare rulle til toppen, men også tastaturfokus skal også flyttes til toppen. </p>
<p>
Skjermleserbrukere vil benytte andre metoder for å komme til toppen, f.eks. hurtigtaster, så denne funksjonaliteten anbefales skjult med aria-hidden="true". 
</p>
```
