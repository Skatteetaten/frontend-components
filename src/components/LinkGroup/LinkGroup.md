** Liste med navigasjonslenker med pil**

```js
import LinkGroup from '@skatteetaten/frontend-components/LinkGroup';
import { Link as RRLink, BrowserRouter as Router } from 'react-router-dom';

const links = [
  {
    text: 'Dette er en link',
    path: '#linkgroup'
  },
  {
    text: 'En annen  link',
    path: '#linkgroup'
  }
];

<div>
  <LinkGroup links={links} />
</div>;
```

** Eksempel på egendefinert link-implementasjon vha. react-router **

```js
import LinkGroup from '@skatteetaten/frontend-components/LinkGroup';
import { Link as RRLink, BrowserRouter as Router } from 'react-router-dom';

const links = [
  {
    text: 'Dette er en link',
    path: '#linkgroup'
  },
  {
    text: 'En annen  link',
    path: '#linkgroup'
  }
];

<div>
  <div>
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
    </Router>
  </div>
</div>;
```

```js noeditor uu
<ul>
  <li>
    Alle lenker skal ha minst 2 ulike markeringer for å vise at det er lenke.
  </li>
</ul>
```

```js noeditor beskrivelse
  <p>
      LinkGroup er en samling av lenker, og kan brukes til navigasjon når
      brukeren har flere mulig etterfølgende valg. For enkeltstående lenker,
      eller hvis du trenger andre ikoner, kan du bruke <a href="#link">Link</a>{' '}
      i stedet.{' '}
    </p>
    <p>
      Standarden vi bruker i tekst er blå skrift og understrekning. Hvis
      bakgrunnen krever en annen farge enn blå for å være leselig og oppfylle
      kontrastkravet, brukes en annen farge; for eksempel hvit på svart bakgrunn
      som i innlogget header eller hvit på burgunder i footer.
    </p>

    <p>
      Se{' '}
      <a href="https://www.skatteetaten.no/stilogtone/produkt/skatteetatenno/lenker/">
        Skatteetatens skriveregler
      </a>{' '}
      for hjelp til å lage gode lenker.
    </p>

```
