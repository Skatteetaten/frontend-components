**Fra @skatteetaten/frontend-components v11+ (designsystem-legacy) til Designsystemet v0.6.0**

TopBanner komponenten er splittet opp i to. For publikumsløsninger skal man benytte
TopBannerExternal og for internløsninger skal man benytte TopBannerInternal.

## Endringer i funksjonalitet:

- TopStripe er faset ut.
- Kontakt oss og Endre skriftstørrelse er ikke inkludert i TopBanner lenger.
- Prop 'external' er faset ut og komponenten er i stedet splittet til TopBannerInternal og TopBannerExternal.

## Styling:

- de nye komponentene i designsystemet er avhengige av designtokens. Disse leveres nå som en separat pakke. <a class="brodtekst-link" href="#section-designtokens-deprecated">Se designtokens for detaljer.</a>

## Endringer i API

For full API-dokumentasjon, vennligst se på <a class="brodtekst-link" href="https://www.skatteetaten.no/stilogtone/designsystemet/under-arbeid/topbanner/">TopBannerExternal komponent</a> på dokumentasjonssiden til designsystemet.

### Endringer til TopBannerExternal

<div class="migration-tabell">
<table>
<caption>Liste over endringer i komponent-api'et</caption>
<thead><tr><th>Tidligere Prop</th><th>Alternativ</th></tr></thead>
<tbody>
<tr>
<td>'compact'</td>
<td>
Faset ut. Det finnes kun én størrelse.
</td>
</tr>
<tr>
<td>'external'</td>
<td>
Faset ut som prop. Bruk TopBannerExternal-komponenten.
</td>
</tr>
<tr>
<td>'homeText'</td>
<td>
Faset ut.
</td>
</tr>
<tr>
<td>'homeUrl'</td>
<td>
Faset ut.
</td>
</tr>
<tr>
<td>'icon'</td>
<td>
Denne gjelder intern TopBanner.
</td>
</tr>
<tr>
<td>'language'</td>
<td>
Faset ut 
Språk på logen vil automatisk endres ut i fra hvilket språk som er valgt. 'defaultLocale' styrer
hvilket språk som er forhåndsvalgt.
</td>
</tr>
<tr>
<td>'logoLink'</td>
<td>
'logo.as'

Alternativer: 'a' | 'div'. 'a' er default.

Før:

```javascript static
import { TopBanner } from '@skatteetaten/frontend-components/TopBanner';

<TopBanner
  external
  title={'Side for publikum'}
  homeText={'Tilbake til Min side'}
  logoLink={false}
/>;
```

Nå:

```js static
import { useRef, useState, ChangeEvent, MouseEvent } from 'react';

import { TopBannerExternal } from '@skatteetaten/ds-layout';

<TopBannerExternal logo={{ as: 'div' }} />;
```

</td>
</tr>
<tr>
<td>'logoLinkUrl'</td>
<td>
'logo.href'

For å kunne overstyre standard url må man også overstyre standard logo.

Før:

```javascript static
import { TopBanner } from '@skatteetaten/frontend-components/TopBanner';

<TopBanner
  external
  title={'Side for publikum'}
  homeText={'Tilbake til Min side'}
  logoLinkUrl={
    'https://www.skatteetaten.no/stilogtone/designsystemet/kom-i-gang/'
  }
/>;
```

Nå:

```js static
import customLogo from '../../assets/custom-logo.svg';
import customMobileLogo from '../../assets/custom-mobile-logo.svg';

import { TopBannerExternal } from '@skatteetaten/ds-layout';

<TopBannerExternal
  logo={{
    logo: customLogo,
    mobileLogo: 'customMobileLogo',
    href: 'https://www.skatteetaten.no/stilogtone/designsystemet/kom-i-gang/',
    alt: 'beskrivende tekst',
  }}
/>;
```

</td>
</tr>
<tr>
<td>'onClick'</td>
<td>
Faset ut.
</td>
</tr>
<tr>
<td>'slantedAreaClassName'</td>
<td>
Denne gjelder intern TopBanner.
</td>
</tr>
<tr>
<td>'slantedAreaWidth'</td>
<td>
Denne gjelder intern TopBanner.
</td>
</tr>
<tr>
<td>'title'</td>
<td>
Faset ut. Legg 'title' under main i stedet.
</td>
</tr>
<tr>
<td>'topStripe'</td>
<td>
Faset ut.
</td>
</tr>
</tbody>
</table>
</div>

<div class="migration-tabell">
Før:

```javascript static
import { useState } from 'react';

import { Icon } from '@skatteetaten/frontend-components/Icon';
import { Link } from '@skatteetaten/frontend-components/Link';
import { TopBanner } from '@skatteetaten/frontend-components/TopBanner';
import { TopStripe } from '@skatteetaten/frontend-components/TopStripe';
import { LanguagePicker } from '@skatteetaten/frontend-components/TopStripe/LanguagePicker';
import { TopStripeButton } from '@skatteetaten/frontend-components/TopStripe/TopStripeButton';
import { TopStripeMenu } from '@skatteetaten/frontend-components/TopStripe/TopStripeMenu';

const [language, setLanguage] = useState('nb');

<div>
  <TopBanner
    external
    title={'Side for publikum'}
    homeText={'Tilbake til Min side'}
    logoLink
    topStripe={
      <TopStripe>
        <Link
          path={'#main-content-id'}
          text={'Hopp til hovedinnhold'}
          skipLink
        />

        <Link
          path={'https://www.skatteetaten.no/kontakt/'}
          text={'Kontakt oss'}
          placement="before"
        />

        <TopStripeMenu
          showOnMobile={false}
          closeMenuAriaLabel="Lukk endre skriftstørrelse"
          title={'Endre skriftstørrelse'}
          contentIsMenu={false}
        >
          <div style={{ fontSize: '24px', marginTop: '8px' }}>
            Hold Ctrl-tasten nede (Cmd-tasten på Mac). Trykk på + for å
            forstørre eller - for å forminske.
          </div>
        </TopStripeMenu>
        <LanguagePicker
          selectedLanguage={language}
          setLanguage={setLanguage}
          showOnMobile={true}
          showSami={true}
        />

        <span>
          <Icon
            iconName="person"
            style={{ fontSize: '20px', verticalAlign: 'sub' }}
          />
          Ola Normann
        </span>

        <Link path={'#topstripe'} text={'Logg ut'} placement="before" />
      </TopStripe>
    }
  />
</div>;
```

Nå:

```js static

import { useRef, useState, ChangeEvent, MouseEvent } from 'react';

import { Button, LinkGroup } from '@skatteetaten/ds-buttons';
import { RadioGroup } from '@skatteetaten/ds-forms';
import {
  TopBannerExternal,
  TopBannerExternalHandle,
  User,
} from '@skatteetaten/ds-layout';
import { Modal } from '@skatteetaten/ds-overlays';
import { dsI18n, langToLocale } from "@skatteetaten/ds-core-utils";

  const modalRef = useRef<HTMLDialogElement>(null);
  const topBannerRef = useRef<TopBannerExternalHandle>(null);
  const [user, setUser] = useState<User>();
  const [isLoggedIn, setIsLoggedIn] = useState<boolean>(false);
  const handleLanguageClick = (e: MouseEvent<HTMLButtonElement>): void => {
    const lang = e.currentTarget.lang;
    dsI18n.changeLanguage(langToLocale[lang]);
  };
  const handleLogOut = (): void => {
    setUser(undefined);
    setIsLoggedIn(false);
  };
  const handleLogIn = (): void => {
    modalRef.current?.showModal();
  };
  const handleChangeRole = (e: ChangeEvent<HTMLInputElement>): void => {
    setIsLoggedIn(true);
    const role = (e.target.value as User["role"]);
    if (role === 'meg') {
      setUser({
        role
      });
    } else {
      setUser({
        role,
        name: 'Knotten, Gudleik'
      });
    }
  };
  const links = [{
    href: '#',
    text: 'Skatt'
  }, {
    href: '#',
    text: 'Avgift'
  }, {
    href: '#',
    text: 'Folkeregisteret'
  }];
  return <>
      <TopBannerExternal ref={topBannerRef} firstColumn={<LinkGroup>
            {links.map((link, index) => <LinkGroup.Link key={index} href={link.href} onClick={(e): void => {
        e.preventDefault();
        topBannerRef.current?.closeMenu?.();
      }}>
                {link.text}
              </LinkGroup.Link>)}
          </LinkGroup>} secondColumn={isLoggedIn ? 'Second column' : ''} thirdColumn={isLoggedIn ? 'Third column' : ''} user={user} onLanguageClick={handleLanguageClick} onLogInClick={handleLogIn} onLogOutClick={handleLogOut} onUserClick={(): void => modalRef.current?.showModal()} />
      <Modal ref={modalRef} title={'Dette er dine roller'}>
        <RadioGroup legend={'Velge en rolle'} selectedValue={user?.role ?? ''} onChange={handleChangeRole}>
          <RadioGroup.Radio value={'meg'}>
            {'Innlogget som meg selv'}
          </RadioGroup.Radio>
          <RadioGroup.Radio value={'andre'}>
            {'Innlogget som annen person'}
          </RadioGroup.Radio>
          <RadioGroup.Radio value={'virksomhet'}>
            {'Innlogget som virksomhet'}
          </RadioGroup.Radio>
        </RadioGroup>
        <Button onClick={(): void => modalRef.current?.close()}>{'Ok'}</Button>
      </Modal>
    </>;
```

</div>

### Endringer til TopBannerInternal

- Propen title er videreført, men ikke lenger koden som en h1.

<div class="migration-tabell">
<table>
<caption>Liste over endringer i komponent-api'et</caption>
<thead><tr><th>Tidligere Prop</th><th>Alternativ</th></tr></thead>
<tbody>
<tr>
<td>'compact'</td>
<td>
Faset ut. Det finnes kun én størrelse.
</td>
</tr>
<tr>
<td>'external'</td>
<td>
Faset ut som prop. Bruk TopBannerExternal-komponenten.
</td>
</tr>
<tr>
<td>'homeText'</td>
<td>
Faset ut. Komponenten har ikke lenger en home-knapp. Bruk 'LogoHref' for å lenke til
hjemsiden og eventuelt 'description' for en ekstra beskrivelse som kommer i tillegg til
'title'.

Før:

```javascript static
import { TopBanner } from '@skatteetaten/frontend-components/TopBanner';

<TopBanner
  homeUrl="/home"
  homeText="Systemnavn"
  title="Sak eller arbeidsoppgave"
/>;
```

Nå:

```js static
import { TopBannerInternal } from '@skatteetaten/ds-layout';

<TopBannerInternal
  title="Systemnavn"
  description="Sak eller arbeidsoppgave"
  logoHref="/home"
/>;
```

</td>
</tr>
<tr>
<td>'homeUrl'</td>
<td>
Faset ut. Bruk logo som link til hjemsiden av løsningen.
</td>
</tr>
<tr>
<td>'icon'</td>
<td>
Faset ut.
</td>
</tr>
<tr>
<td>'language'</td>
<td>
Faset ut.
</td>
</tr>
<tr>
<td>'logoLink'</td>
<td>
Faset ut. Logo er alltid en lenke i TopBannerInternal.
</td>
</tr>
<tr>
<td>'logoLinkUrl'</td>
<td>
'logoHref'

Før:

```javascript static
import { TopBanner } from '@skatteetaten/frontend-components/TopBanner';

<TopBanner
  logoLinkUrl={
    'https://www.skatteetaten.no/stilogtone/designsystemet/kom-i-gang/'
  }
/>;
```

Nå:

```js static
import { TopBannerInternal } from '@skatteetaten/ds-layout';

<TopBannerInternal
  logoHref={'https://www.skatteetaten.no/stilogtone/designsystemet/kom-i-gang/'}
/>;
```

</td>
</tr>
<tr>
<td>'onClick'</td>
<td>
Faset ut. Logo kan brukes som lenke til hjemsiden og 'onLogoClick' kan brukes til å fange
click event på logo.
</td>
</tr>
<tr>
<td>'slantedAreaClassName'</td>
<td>
Faset ut.
</td>
</tr>
<tr>
<td>'slantedAreaWidth'</td>
<td>
Faset ut.
</td>
</tr>
<tr>
<td>'topStripe'</td>
<td>
Faset ut.
</td>
</tr>
</tbody>
</table>
</div>
