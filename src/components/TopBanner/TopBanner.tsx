import * as React from 'react';
import classnames from 'classnames';
import { UseScreen } from '../utils';
import { Icon } from '../Icon';
import { Image } from '../Image';
import { ActionButton } from '../ActionButton';
import { TopBannerTypes } from './TopBanner.types';

// @ts-ignore TODO
import externalLogo from './assets/ske-logo.svg';
import externalLogoEn from './assets/ske-logo-en.svg';
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
        role="link"
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
  const styles = getExternalClassNames(props);
  // @ts-ignore
  const { header, headerMain, contentWrapper } = styles;
  const compactHeight = props.compact ? 55 : 68;

  const imageElement = (
    <Image
      src={props.language === 'en' ? externalLogoEn : externalLogo}
      height={compactHeight}
      alt="Skatteetaten logo"
    />
  );

  return (
    <header className={classnames(header, props.className)} id={props.id}>
      {props.topStripe}
      <div className={headerMain}>
        <div>
          <div>
            {props.logoLink ? (
              <a href="https://www.skatteetaten.no">{imageElement}</a>
            ) : (
              imageElement
            )}
          </div>
        </div>
        <div className={contentWrapper}>
          <ExternalHeaderContent styles={styles} {...props} />
        </div>
      </div>
    </header>
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
  logoLink: false,
  language: undefined,
};
