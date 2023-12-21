**Fra @skatteetaten/frontend-components v5+ (designsystem-legacy) til Designsystemet v0.6.0**

Migrasjonsguide for TopBannerExternal.

## Endringer i funksjonalitet:

- TopStripe er faset ut.
- Kontakt oss og Endre skriftstørrelse er ikke inkludert i TopBanner lenger.

## Styling:

- de nye komponentene i designsystemet er avhengige av designtokens. Disse leveres nå som en separat pakke. <a class="brodtekst-link" href="#section-designtokens-deprecated">Se designtokens for detaljer.</a>

## Endringer i API

<!-- For full API-dokumentasjon, vennligst se på <a class="brodtekst-link" href="https://www.skatteetaten.no/stilogtone/designsystemet/komponenter/topbanner/">TopBannerExternal komponent</a> på dokumentasjonssiden til designsystemet. -->

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
'lang'
</td>
</tr>
<tr>
<td>'logoLink'</td>
<td>
'Legg inn nytt navn'
</td>
</tr>
<tr>
<td>'logoLinkUrl'</td>
<td>
'Legg inn nytt navn'
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
() => {
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
    const role = (e.target.value as UserRole);
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
    href: '#storybook-root',
    text: 'Skatt'
  }, {
    href: '#storybook-root',
    text: 'Avgift'
  }, {
    href: '#storybook-root',
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
}

```
