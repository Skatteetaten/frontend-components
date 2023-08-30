**Fra @skatteetaten/frontend-components v5+ (designsystem-legacy) til Designsystemet v0.2.0**

## Endringer i funksjonalitet:

- det kan ikke sendes inn markup lengre
- har ikke lenger skipLink-mekansimen
- kun valgfritt ikon på venstre side

## Styling:

- de nye komponentene i designsystemet er avhengige av designtokens. Disse leveres nå som en separat pakke. Se [designtokens](#section-designtokens-deprecated) for detaljer.
- noen små endringer hovedsakelig for hover og fokus

## Endringer i API:

For full API-dokumentasjon, vennligst se på [Link komponent](https://www.skatteetaten.no/stilogtone/designsystemet/komponenter/link/) på dokumentasjonssiden til designsystemet.

<div class="migration-tabell">
<table>
<caption>Liste over endringer i komponent-api'et</caption>
<thead><tr><th>Tidligere Prop</th><th>Alternativ</th></tr></thead>
<tbody>
<tr>
<td>'uniqueId'</td>
<td>'id'</td>
</tr>
<tr>
<td>'componentRef'</td>
<td>
'ref'

Alle komponentene våre bruker forwardRef. For komponent sendes ref til &lt;a&gt;-elementet

</td>
</tr>
<tr>
<td>'openInNew'</td>
<td>'target'

Før:

```javascript static
import { Link } from '@skatteetaten/frontend-components/Link';

<Link
  openInNew={true}
  path={'#path'}
  text={'Er du pendler? (åpnes i ny fane)'}
/>;
```

Nå:

```js static
import { Link } from '@skatteetaten/ds-buttons';

<Link target={'_blank'} href={'#path'}>
  Er du pendler? (åpnes i ny fane)
</Link>;
```

</td>
</tr>
<tr>
<td>'text'</td>
<td>
'children'

Før:

```javascript static
import { Link } from '@skatteetaten/frontend-components/Link';

<Link path={'#'} text="Er du pendler?" />;
```

Nå:

```js static
import { Link } from '@skatteetaten/ds-buttons';

<Link href={'#'}>Er du pendler?</Link>;
```

</td>
</tr>
<tr>
<td>'path'</td>
<td>
'href'

Før:

```javascript static
import { Link } from '@skatteetaten/frontend-components/Link';

<Link path={'#'} text={'Er du pendler?'} />;
```

Nå:

```js static
import { Link } from '@skatteetaten/ds-buttons';

<Link href={'#'}>Er du pendler?</Link>;
```

</td>
</tr>
<tr>
<td>'icon'</td>
<td>
'svgPath'

Forhåndsdefinert path kan importeres fra @skatteetaten/ds-icons pakke. Alternativt kan custom path sendes.

Før:

```javascript static
import { Link } from '@skatteetaten/frontend-components/Link';

<Link icon={'Add'} placement="before" path={'#'} text={'Er du pendler?'} />;
```

Nå:

```js static
import { Link } from '@skatteetaten/ds-buttons';
import { AddSVGpath } from '@skatteetaten/ds-icons';

<Link svgPath={AddSVGpath} href={'#'}>
  Er du pendler?
</Link>
// ELLER
<Link svgPath={<path d='M19 13h-6v6h-2v-6H5v-2h6V5h2v6h6v2Z' />} href={'#'}>
  Er du pendler?
</Link>
```

</td>
</tr>
<tr>
<td>'placement'</td>
<td>
Faset ut. Valgfritt ikon blir plassert på venstre side av lenketeksten. Mens bruk av prop 'isExternal' legger inn riktig ikon for 
eksterne sider (som tidligere het OpenInNew men som nå heter External) med en plassering på høyre side (uten at 'svgPath' må være satt).

Før:

```javascript static
import { Link } from '@skatteetaten/frontend-components/Link';

<Link placement='after' icon='Add' path={'#'} text={'Er du pendler?'}/>
// ELLER
<Link placement='before' icon='OpenInNew' path={'#'} text={'Er du pendler?'}/>
```

Nå:

```js static
import { Link } from '@skatteetaten/ds-buttons';
import { AddSVGpath } from '@skatteetaten/ds-icons';

<Link svgPath={AddSVGpath} href={'#'}>
  Er du pendler?
</Link>
// ELLER
<Link isExternal href={'#'}>
  Er du pendler?
</Link>
```

</td>
</tr>
<tr>
<td>'skipLink'</td>
<td>
Faset ut. SkipLink-mekanismen vil istedenfor bli en del av TopBanner i det nye designsystemet (fordi den har et begrenset 
bruksområde hvor den skal ligge blant de 3 første tab-stegene og før hovedinnholdet på nettsiden).

SkipLink skal være synlig når den får fokus og er først og fremst ment som en snarvei for en tastaturbruker. <strong>For
å oppfylle WCAG-kravet 2.4.1 (Hoppe over blokker) må det inntil videre utvides med css-regler for dette slik som under Nå.</strong>

Før:

```javascript static
import { Link } from '@skatteetaten/frontend-components/Link';

<Link skipLink path={'#main-content-id'} text={'Hopp til hovedinnhold'} />;
```

Nå:

```js static
import { Link } from '@skatteetaten/ds-buttons';

// css kode:
.skipLink {
  left: -9999px;
  position: absolute;
  top: auto;
  opacity: 0;
  overflow: hidden;
}
// css kode:
.skipLink:focus,
.skipLink:active {
  display: block;
  color: #1a1a1a;
  background-color: #fff;
  position: relative;
  left: auto;
  top: auto;
  height: auto;
  overflow: auto;
  text-align: center;
  opacity: 1;
  padding: 12px 8px;
  outline: none;
}

<Link href={'#main-content-id'} className='skipLink'>
  Hopp til hovedinnhold
</Link>
```

</td>
</tr>
<tr>
<td>'renderContent'</td>
<td>
Faset ut.

Før:

```javascript static
import { Link as RRLink } from 'react-router-dom';
import { Link } from '@skatteetaten/frontend-components/Link';

<Link
  href={'#path'}
  text="Er du pendler?"
  renderContent={(path, text, classNames) => {
    return (
      <RRLink to={path} className={classNames}>
        {text}
      </RRLink>
    );
  }}
/>;
```

Nå:

```js static
import { useNavigate } from 'react-router-dom';
import { Link } from '@skatteetaten/ds-buttons';

const navigate = useNavigate();

<Link
  href={'#path'}
  onClick={(e): void => {
    e.preventDefault();
    navigate('#path');
  }}
>
  Er du pendler?
</Link>;
```

</td>
</tr>
</tbody>
</table>
</div>
