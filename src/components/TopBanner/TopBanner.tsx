import * as React from 'react';
import classnames from 'classnames';
import { UseScreen } from '../utils';
import { Icon } from '../Icon';
import { Image } from '../Image';
import { ActionButton } from '../ActionButton';
import { TopBannerTypes } from './TopBanner.types';
import { BrandContext } from '../SkeBasis';
import i18n, { t } from './../utils/i18n/i18n';

// @ts-ignore TODO
import logoSKE from './assets/logoSKE.svg';
import logoSKEen from './assets/logoSKEen.svg';
import logoLSO from './assets/logoLSO.svg';
import logoINK from './assets/logoINK.svg';
import logoINKen from './assets/logoINKen.svg';

import internLogo from './assets/ske-logo-intern.svg';
import internLogoEn from './assets/ske-logo-intern-en.svg';
import { getClassNames as getExternalClassNames } from './External.classNames';
import { getClassNames as getInternalClassNames } from './Internal.classNames';

// @ts-ignore TODO
const InternalHeader = (props) => {
  const styles = getInternalClassNames(props);
  const size = UseScreen();

  return (
    <header
      className={classnames(styles.header, props.className)}
      id={props.id}
    >
      <div
        className={classnames(
          styles.headerLeftContainer,
          props.slantedAreaClassName
        )}
      >
        <a
          className={styles.headerLinkContainer}
          href={props.homeUrl}
          onClick={props.onClick}
        >
          {size.gt.md && (
            <Image
              className={styles.headerLogo}
              src={props.language === 'en' ? internLogoEn : internLogo}
              alt="Skatteetaten logo"
            />
          )}
          <Icon className={styles.headerIcon} iconName={props.icon} />

          <div className={styles.headerLink}>{props.homeText}</div>
        </a>
      </div>
      <div className={styles.headerDiagonal} />
      <div className={styles.headerRightContainer}>
        {typeof props.title === 'string' ? (
          <h1>{props.title}</h1>
        ) : (
          <div className={styles.elementTitle}>{props.title}</div>
        )}
        <div>{props.children}</div>
      </div>
    </header>
  );
};

// @ts-ignore
const ExternalHeaderContent = ({ styles, ...props }) => {
  if (props.children) {
    return props.children;
  }

  if (props.compact) {
    return <h1 className={styles.title}>{props.title}</h1>;
  }

  return (
    <>
      <ActionButton
        href={props.homeUrl}
        onClick={props.onClick}
        className={styles.linkButton}
        icon="ArrowBack"
        role={props.homeUrl ? undefined : 'link'}
      >
        {props.homeText}
      </ActionButton>
      <h1 className={styles.title}>{props.title}</h1>
    </>
  );
};

/*
 * visibleName TopBanner (Topp)
 */
export const TopBanner: React.FC<TopBannerTypes> = (props) => {
  const { external, ...rest } = props;
  return external ? <ExternalHeader {...rest} /> : <InternalHeader {...rest} />;
};

export const ExternalHeader: React.FC<TopBannerTypes> = (props) => {
  const styles = getExternalClassNames(props, 'SKE');
  // @ts-ignore
  const { logo, headerMain, contentWrapper } = styles;
  const compactHeight = props.compact ? 55 : 68;
  const isLink = props.logoLink;

  if (props.language) {
    i18n.changeLanguage(props.language);
  }

  const logoImageElement = (brand: string, showAltText = true) => {
    switch (brand) {
      case 'SKE':
        return (
          <Image
            src={props.language === 'en' ? logoSKEen : logoSKE}
            height={compactHeight}
            alt={isLink ? t('topbanner.ske.logoLink') : t('topbanner.ske.logo')}
          />
        );

      case 'INK':
        return (
          <Image
            src={props.language === 'en' ? logoINKen : logoINK}
            height={compactHeight}
            alt={isLink ? t('topbanner.ink.logoLink') : t('topbanner.ink.logo')}
          />
        );

      case 'LSO':
        return (
          <Image
            src={logoLSO}
            height={compactHeight}
            alt={isLink ? t('topbanner.lso.logoLink') : t('topbanner.lso.logo')}
          />
        );

      default:
        return {};
    }
  };

  return (
    <BrandContext.Consumer>
      {({ tag }) => (
        <header
          className={classnames(
            getExternalClassNames(props, tag).header,
            props.className
          )}
          id={props.id}
        >
          {props.topStripe}
          <div className={headerMain}>
            <div>
              <div className={logo}>
                {props.logoLink ? (
                  <a href={props.logoLinkUrl}>{logoImageElement(tag, true)}</a>
                ) : (
                  logoImageElement(tag, true)
                )}
              </div>
            </div>
            <div className={contentWrapper}>
              <ExternalHeaderContent styles={styles} {...props} />
            </div>
          </div>
        </header>
      )}
    </BrandContext.Consumer>
  );
};

TopBanner.defaultProps = {
  title: undefined,
  homeUrl: undefined,
  homeText: undefined,
  slantedAreaWidth: undefined,
  icon: 'Home',
  external: false,
  compact: false,
  logoLink: true,
  logoLinkUrl: 'https://www.skatteetaten.no',
  language: undefined,
};
