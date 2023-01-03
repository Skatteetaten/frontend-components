**Fra @skatteetaten/frontend-components v5+ (designsystem-legacy) til Designsystemet v0.2.0**

### Styling:

- de nye komponentene i designsystemet er avhengige av designtokens. Disse leveres nå som en separat pakke. Se [designtokens](#section-designtokens-deprecated) for detaljer.
- fontvekten var tidligere i _bold_ mens nå er den i _font-weight-medium_
- kulepunkter ble tidligere vist kun med ikonet _forwardArrow_ mens nå kan også velge å bruke ikonet _downArrow_

### Endringer i API:

<div class="migration-tabell">
<table>
<caption>Liste over endringer i komponent-api'et</caption>
<thead><tr><th>Tidligere Prop</th><th>Alternativ</th></tr></thead>
<tbody>
<tr>
<td>'links'</td>
<td>
'children'

Før:

```javascript static
import { LinkGroup } from '@skatteetaten/frontend-components/LinkGroup';

const links = [
  {
    text: 'Er du pendler?',
    path: '#path1',
  },
  {
    text: 'Pendler du dagen lang?',
    path: '#path2',
  },
];

<LinkGroup links={links} />;
```

Nå:

```js static
import { Link, LinkGroup } from '@skatteetaten/ds-buttons';

<LinkGroup>
  <LinkGroup.Link href={'#path1'}>{'Er du pendler?'}</LinkGroup.Link>
  <LinkGroup.Link href={'#path2'}>{'Pendler du dagen lang?'}</LinkGroup.Link>
</LinkGroup>;
```

</td>
</tr>
<tr>
<td>'renderContent'</td>
<td>

Faset ut.

Før:

```javascript static
import { Link as RRLink, BrowserRouter as Router } from 'react-router-dom';
import { Link } from '@skatteetaten/frontend-components/Link';

const links = [
  {
    text: 'Er du pendler?',
    path: '#path1',
  },
  {
    text: 'Pendler du dagen lang?',
    path: '#path2',
  },
];

<Router>
  <LinkGroup
    links={links}
    renderContent={(path, text, classNames) => {
      return (
        <RRLink to={path} className={classNames}>
          {text}
        </RRLink>
      );
    }}
  />
</Router>;
```

Nå:

```js static
import { useNavigate } from 'react-router-dom';
import { Link, LinkGroup } from '@skatteetaten/ds-buttons';

const navigate = useNavigate();

<LinkGroup>
  <LinkGroup.Link
    href={'#path1'}
    onClick={(e): void => {
      e.preventDefault();
      navigate('#path1');
    }}
  >
    {'Er du pendler?'}
  </LinkGroup.Link>
  <LinkGroup.Link
    href={'#path2'}
    onClick={(e): void => {
      e.preventDefault();
      navigate('#path2');
    }}
  >
    {'Pendler du dagen lang?'}
  </LinkGroup.Link>
</LinkGroup>;
```

</td>
</tr>
<tr>
</tr>
</tbody>
</table>
</div>
