### ScreenPlugin

```js noeditor beskrivelse
import { UseScreen } from '@skatteetaten/frontend-components/utils/ScreenPlugin';
```

Plugin for a dedektere skjermstørrelsen.
Bruker brekkpunktene fra [Grid](#grid)

Eksempel på bruk:

```js
import { UseScreen } from '@skatteetaten/frontend-components/utils/ScreenPlugin';

const size = UseScreen();
<div>
  {size.md && <span>Vises når skjermstørrelsen er 'md'</span>}
  {size.lt.md && <span>Vises når skjermstørrelsen er mindre enn 'md'</span>}
  {size.gt.md && <span>Vises når skjermstørrelsen er større enn 'md'</span>}
</div>;
```
