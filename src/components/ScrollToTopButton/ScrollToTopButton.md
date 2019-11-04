** ScrollToTopButton brukes til å gå til toppen av siden. **

```js
import ScrollToTopButton from '@skatteetaten/frontend-components/ScrollToTopButton';

<div>
  <p>Scroll nedover for å se knappen. </p>
  <ScrollToTopButton label={'Til toppen'} />
</div>;
```

```js noeditor beskrivelse
<p>
  ScrollToTopButton brukes når man har lange sider og det er nyttig å gå tilbake
  til toppen av siden. Ved skjermbredde større enn 1170px vises symbolet nede
  til høyre som overlay. Er skjermbredden mindre vises den sentrert.
</p>
```
